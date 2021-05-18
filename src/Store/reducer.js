import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'term',
    initialState: {term: ''},
    reducers: {
        setSearchTerm: (state, action) => {
            state.term = action.payload
        }
    }
})

export default slice.reducer
export const {setSearchTerm} = slice.actions