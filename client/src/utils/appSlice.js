import {createSlice} from "@reduxjs/toolkit";


const appSlice= createSlice({
    name :"app",
    initialState:{
        isMenuOpen:true,
        videoData: {},
        currentVideoId: null,
        searchVideoData: {},
        videoHistory: {},
        progress: 0
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        
        addVideos: (state, action) => {
            for (const video of action.payload) {
                state.videoData[video.id] = video;
            }

        },
        addSearchVideos: (state, action) => {
            for (const video of action.payload) {
                state.searchVideoData[video.id.videoId] = video;
            }
        },
        setSearchVideos: (state, action) => {
            state.searchVideoData = {};
            for (const video of action.payload) {
                state.searchVideoData[video.id.videoId] = video;
            }
        },
        addCurrentVideoId: (state, action) => {
            state.currentVideoId = action.payload;
        },
        addVideoInHistory: (state, action) => {
            state.videoHistory[action?.payload?.id] = action.payload;
        },
        updateProgress: (state, action) => {
            state.progress = action.payload
        }

    },
});

export const {toggleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;

