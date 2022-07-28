import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchGames = createAsyncThunk (
    'games/fetchGames',
    async ()=> {
        const {data} = await axios.get('https://62dc85c04438813a2616dd38.mockapi.io/games');
        return data;
    }
)

const initialState = {
    status : 'loading',
    games:[],
}

const gamesSlice = createSlice({
    name:'games',
    initialState,
    reducers: {
        
    }, extraReducers: (builder) => {
        builder.addCase(fetchGames.pending, (state)=>{
            state.status = 'loading'
        })
        builder.addCase(fetchGames.fulfilled,(state,action)=>{
            state.games = action.payload
            state.status = 'done'
        })
        builder.addCase(fetchGames.rejected,(state)=>{
            state.status = 'fail'
        })
    }
})



export const {} = gamesSlice.actions;

export default gamesSlice.reducer;