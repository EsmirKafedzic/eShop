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
        },
        setPriceHandler: (state, action) => {
            const { increment, index } = action.payload;
            console.log(increment, index);
            let copyArray = [...state.cart];
            copyArray[index].cartTotal += copyArray[index].price * increment;
            state.cart = copyArray;
        }
    }
})

export const { saveProductHandler,setPriceHandler } = cartSlice.actions;
export default cartSlice.reducer;