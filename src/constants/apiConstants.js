export const BGG_API_BASE = 'https://www.boardgamegeek.com/xmlapi2/';
export const BGA_API_BASE = 'https://www.boardgameatlas.com/api';


export const BGG_NEW_GAMES = `${BGG_API_BASE}hot?thing=boardgame`;

export const NEW_GAME_EXAMPLE = [
    {
        id: '286096',
        name: 'Tapestry',
        year: '2019',
        image: 'https://cf.geekdo-images.com/thumb/img/g3Tus9M50labqEsSL8kbWK_yCpg=/fit-in/200x150/pic4884996.jpg',
        rank: '1'
    },
    {
        id: '284378',
        name: 'Kanban EV',
        year: '2020',
        image: 'https://cf.geekdo-images.com/thumb/img/EC8A_fER5OyUNaBLtoWLGDFJO2M=/fit-in/200x150/pic4924232.jpg',
        rank: '2'
    },
    {
        id: '251247',
        name: 'Barrage',
        year: '2019',
        image: 'https://cf.geekdo-images.com/thumb/img/yqCU8ObatIzkXbdcje1SAc0Kzho=/fit-in/200x150/pic4336469.png',
        rank: '3'
    }
];

export const SUMMARY_GAMES = [];

export const TRENDING_GAMES = "popularity";
export const TOP_GAMES = "reddit_week_count";

export const url = `https://www.boardgameatlas.com/api/search?order_by=popularity&limit=50&client_id=7pxbmyR661`