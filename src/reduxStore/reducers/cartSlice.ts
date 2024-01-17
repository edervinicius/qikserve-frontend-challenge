import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IMenuSectionItem} from "./menuSlice";
export interface ICartState {
  total: number;
  subtotal: number;
  items: Array<IMenuSectionItem> | null;
}

const initialState: ICartState = {
  total: 0,
  subtotal: 0,
  items: null
};

export const dispatchCartUpdate = (cart: ICartState): any => async (dispatch: any) => {
  let subtotal = 0;
  let total = 0; 
  if(cart.items){
    const { subtotalSum, totalSum } = cart.items.reduce(
      (acc, item) => {
        if (item && typeof item.price === 'number') {
          acc.subtotalSum += item.price + item.selectedModifiersTotal!;
          acc.totalSum += (item.price+ item.selectedModifiersTotal!) * item.qty!;
        }

        return acc;
      },
      { subtotalSum: 0, totalSum: 0 }
    );
    subtotal = subtotalSum;
    total = totalSum;
  }
  const data = {
    ...cart,
    subtotal,
    total
  }
  dispatch(setCart(data));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<ICartState>) => action.payload,
  },
});


export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;