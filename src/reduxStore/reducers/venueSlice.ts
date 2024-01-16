import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {apiService} from "../../services/";
import { RootState } from "../@types";

export interface IVenueState {
  id?: number;
  name?: string,
  internalName?: string,
  description?: string | null,
  liveFlag?: number,
  demoFlag?: number,
  address1?: string,
  address2?: string | null,
  address3?: string | null,
  city?: string,
  county?: string,
  postcode?: string,
  country?: string,
  timezoneOffset?: string,
  locale?: string,
  timeZone?: string,
  webSettings: {
    id?: number,
    venueId?: number,
    bannerImage?: string,
    backgroundColour?: string,
    primaryColour?: string,
    primaryColourHover?: string,
    navBackgroundColour?: string
  },
  ccy?: string,
  ccySymbol?: string,
  currency?: string
}

const initialState: IVenueState = {
  webSettings:{
    
  }
};

export const fetchVenueConfig = (): any => async (dispatch: any) => {
  try {
    const response = await apiService.get("/venue/9");
    const data = response.data;
    dispatch(setVenueConfig(data));
  } catch (error) {
    console.log("Error fetch venue data", error);
  }
};

const venueSlice = createSlice({
  name: "venue",
  initialState,
  reducers: {
    setVenueConfig: (state, action: PayloadAction<IVenueState>) => action.payload,
  },
});

export const { setVenueConfig } = venueSlice.actions;

export default venueSlice.reducer;

export const selectFunds = (state: RootState) => state.venue.name;
