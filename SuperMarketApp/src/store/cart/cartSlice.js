import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name : 'cart',
    initialState :{
        value : 0,
    },
    reducers : {
        incrementByAmount : (state, action) =>{
            state.value += action.payload
        }
    }
})

export const { incrementByAmount } = cartSlice.actions
export default cartSlice.reducer