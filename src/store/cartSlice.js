import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        totalPrice: 0,
        totalProducts: 0,
    },
    reducers: {
        saveProductHandler: (state, action) => {
            let coppyArray = [...state.cart];
            let findIndex = null;
            coppyArray.find((el, index) => {
                if (el.id === action.payload.id) {
                    findIndex = index; 
                    return;
                }
            })

            if (findIndex === null) {
                coppyArray.push({
                    ...action.payload,
                    count: 1,
                    cartTotal: action.payload.price
                })
                state.totalProducts++;
                state.totalPrice += action.payload.price;
            } else {
                coppyArray[findIndex].count++;
            }

            state.cart = coppyArray;
        }
    }
})

export const { saveProductHandler } = cartSlice.actions;
export default cartSlice.reducer;