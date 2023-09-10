import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: '',
    isLike: localStorage.getItem("isLike") ? JSON.parse(localStorage.getItem("isLike")):[],
    favorites: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")):[],
    favList: [],

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
     


        // list: (state, action) => {
        //     const inList= state.favList.find((item) => item === action.payload.indexFav);

        //         if(!inList ){
        //             if(action.payload.index != -1){
        //             state.favorites.push(action.payload.song);
        //             state.favList.push(action.payload.indexFav);
                    
                    
        //             localStorage.setItem("favList", JSON.stringify(state.favList));
        //         }
                
        //     }else if(inList){
        //             state.favorites = state.favorites.filter((song) => song.key !== action.payload.song.key);
        //             state.favList = state.favList.filter((item) => item !== action.payload.i);

                   
        
        //             localStorage.setItem("favList", JSON.stringify(state.favList));
            
        //     }

        
        list: (state, action) => {
            const inList= state.favorites.find((song) => song.key === action.payload.song.key);

                if(!inList ){
                    if(action.payload != -1){
                    state.favorites.push(action.payload.song);
                    state.isLike.push(action.payload.i);
                    localStorage.setItem("isLike", JSON.stringify(state.isLike));
                    
                }
                
            }else if(inList){
                    state.favorites = state.favorites.filter((song) => song.key !== action.payload.song.key);
                    state.isLike = state.favorites.filter((i) => i !== action.payload.song.i);
                    localStorage.setItem("isLike", JSON.stringify(state.isLike));
            
            }

            localStorage.setItem("favorites", JSON.stringify(state.favorites));

    },
    add: (state, action) => {
        const inList= state.favorites.find((song) => song.key === action.payload.song.key);
        if(!inList ){
        state.favorites.push(action.payload.song);
        state.favList.push(action.payload.indexFav);
        }
        
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    remove: (state, action) => {
        state.favorites = state.favorites.filter((song) => song.key !== action.payload.song.key);
        state.favList = state.favList.filter((item) => item !== action.payload.i);

        localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
        

    },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId, remove , add,list } = playerSlice.actions;
export default playerSlice.reducer;