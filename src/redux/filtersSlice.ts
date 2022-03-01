import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface FilterState {
    stars: number,
    adults: number,
    children: number,
}

const initialState: FilterState = {
    stars: 3,
    adults: 2,
    children: 0,
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeStars: (state: FilterState, action: PayloadAction<number>) => {
            return {
                ...state,
                stars: action.payload
            }
        },
        incrementAdults: (state) => {

            return {
                ...state,
                adults: state.adults + 1
            }
        },
        decrementAdults: (state) => {
            if (state.adults > 0) {
                return {
                    ...state,
                    adults: state.adults - 1
                }
            }

        },


        //! Since we only have adults and children for now we dont really have to make it dynamic 

        incrementChildren: (state) => {
            return {
                ...state,
                children: state.children + 1
            }
        },
        decrementChildren: (state) => {
            if (state.children > 0) {
                return {
                    ...state,
                    children: state.children - 1
                }
            }

        },

    },
})

// Action creators are generated for each case reducer function
export const { incrementAdults, decrementAdults, incrementChildren, decrementChildren, changeStars } = filterSlice.actions
// Action creators are generated for each case reducer function
// export const { findUserById } = usersSlice.actions

export default filterSlice.reducer