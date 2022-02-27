import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}



export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        const response = await axios.get("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG")
        return response.data
    }
)


const usersSlice = createSlice({
    name: 'hotels',
    initialState: { entities: [], loading: 'idle' },
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state :any, action : any) => {
            // Add user to the state array
            state.entities.push(action.payload)
        })
    },
})


// Action creators are generated for each case reducer function
// export const { findUserById } = usersSlice.actions

export default usersSlice.reducer