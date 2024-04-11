import {createSlice} from "@reduxjs/toolkit"

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorite: [],
        favoriteTotal: 0,
    },
    reducers: {
        saveFavoriteHandler: (state, action) => {
            console.log(action.payload);

            let coppyArray = [...state.favorite];
            let findIndex = null;

            coppyArray.find((el, index) => {
                if (el.id === action.payload.id) {
                    findIndex = index
                    return;
                }
            })

            if (findIndex === null) {
                coppyArray.push({ ...action.payload, activeFav: true });
                state.favoriteTotal++;
            } else {
                coppyArray.splice(findIndex, 1);
                state.favoriteTotal--;
            }

            state.favorite = coppyArray;
        }
    }
})

export const { saveFavoriteHandler } = favoriteSlice.actions;
export default favoriteSlice.reducer;