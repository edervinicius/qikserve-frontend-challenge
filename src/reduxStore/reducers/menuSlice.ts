import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMenuData } from "../../services/";

export interface IMenuImage {
  id: number;
  image: string;
}

export interface IMenuItemModifierUnity {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
}

export interface IMenuItemModifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: Array<IMenuItemModifierUnity>;
}

export interface IMenuSectionItem {
  id: number;
  name: string;
  description: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  modifiers?: Array<IMenuItemModifier>;
  images?: Array<IMenuImage>;
  available?: boolean;
  qty?: number;
  selectedModifiers?: Array<IMenuItemModifierUnity>;
  selectedModifiersTotal?: number;
}

export interface IMenuSection {
  id: number;
  name: string;
  description: string | null;
  position: number;
  visible: number;
  images?: Array<IMenuImage>;
  items: Array<IMenuSectionItem>;
}

export interface IMenuState {
  id?: number;
  name?: string;
  type?: string;
  collapse?: number;
  sections?: Array<IMenuSection>;
} 

const initialState: IMenuState = {
  
};

export const fetchMenuConfig = (): any => async (dispatch: any) => {
  try {
    const data:IMenuState = await getMenuData();
    const filteredData = data.sections!.filter(d=>d.visible)
    dispatch(setMenuConfig({
      ...data,
      sections:filteredData
    }));
  } catch (error) {
    console.log("Error fetch menu data", error);
  }
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuConfig: (state, action: PayloadAction<IMenuState>) => action.payload,
  },
});

export const { setMenuConfig } = menuSlice.actions;

export default menuSlice.reducer;
