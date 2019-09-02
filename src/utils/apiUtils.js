import axios from 'axios';


export const genArrayFromObj = data => {
    let tempArray = [];
    Object.keys(data).forEach(item => tempArray.push(data[item]));
    return tempArray;
}

export const fetchXML = url => {
    return(
        axios.get(url)
        .then(response => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(response.data, "text/xml");
            return xml;
        })
    )
}

export const getGameIds = (url, num) => {
    return (
        fetchXML(url)
        .then(xml => {
            let nodes = xml.querySelectorAll('items item');
            let ids = [];
            for (let i = 0; i < num; i++){
                ids.push(nodes[i].getAttribute("id"));
            }
            return ids = ids.join(",");
        })
    )    
}

export const genNewGamesArr = (data) => {
    let nodes = data.querySelectorAll('items item');
    let games = [];
    nodes.forEach(game => {
        games.push( {
            id: game.getAttribute("id"),
            name: game.querySelector("name").getAttribute("value"),
            year_pub: game.querySelector("yearpublished").getAttribute("value"),
            image: game.querySelector("image").innerHTML
        });
    })
    return games
}

export const modifyName = name => {
    return name.replace(/s[\d](st|nd|rd|th)?\sedition|\s\(.*\)/gi, "");
}


