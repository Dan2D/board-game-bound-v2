export const initialState = {
    categories: {
        list: [],
        error: null,
        isLoading: true
    },
    games: {
        content: "",
        detail: {
            game: {},
            cover: null,
            isLoading: true
        },
        new: {
            list: [],
            isLoading: true
        },
        search: {
            list: [],
            modList: [],
            pg: 0,
            isLoading: true
        },
        top: {
            list: [],
            isLoading: true
        },
        trending: {
            list: [],
            isLoading: true
        },
        
    }
}