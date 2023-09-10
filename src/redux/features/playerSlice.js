import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: '',
    isLike: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    favorites: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")):[],
    favList: localStorage.getItem("favList") ? JSON.parse(localStorage.getItem("favList")):[],

  };
  

const playerSlice = createSlice({
    name: 'player', 
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
            state.activeSong =  action.payload.song;
        
            if(action.payload?.data?.tracks?.hits){
            state.currentSongs = action.payload.data.tracks.hits;
           } 
           else if(action.payload?.data?.properties){
             state.currentSongs = action.payload?.data?.tracks;
           } 
           else {
            state.currentSongs = action.payload.data;
           }

           state.currentIndex = action.payload.i;
           state.isActive = true;
        },

        nextSong: (state, action) => {
            if(state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        prevSong: (state, action ) => {
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        playPause: (state, action) => {
            state.isPlaying = action.payload;
        },

        selectGenreListId: (state, action) => {
            state.genreListId = action.payload;
        },

        // favoriteList: (state, action) => {
           
        //     if(state.isLike === false ){
        //         state.favorites.push(action.payload.song);
            
        //     state.isLike = true;
        //     localStorage.setItem("favorites", JSON.stringify(state.favorites));
        
        // }else{
        //     state.favorites = state.favorites.filter((song) => song.key !== action.payload.song.key);

        //     state.isLike = false;
        //     localStorage.setItem("favorites", JSON.stringify(state.favorites));
        

        // }
        

        // },
        add: (state, action) => {
            state.favorites.push(action.payload.song);
            state.favList.push(action.payload.indexFav);
            // state.isLike = action.payload.updatedCheckedState;
            
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
            localStorage.setItem("favList", JSON.stringify(state.favList));
        },

        remove: (state, action) => {
            state.favorites = state.favorites.filter((song) => song.key !== action.payload.song.key);
            state.favList = state.favList.filter((index) => index !== action.payload.i);

            localStorage.setItem("favorites", JSON.stringify(state.favorites));
            localStorage.setItem("favList", JSON.stringify(state.favList));
        },

        

    },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId, remove , add } = playerSlice.actions;
export default playerSlice.reducer;