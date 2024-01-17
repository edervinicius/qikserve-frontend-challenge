import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getVenueData} from "../../services/";
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
  locale: string,
  timeZone?: string,
  webSettings: {
    id: number,
    venueId: number,
    bannerImage: string,
    backgroundColour: string,
    primaryColour: string,
    primaryColourHover: string,
    navBackgroundColour: string
  },
  ccy: string,
  ccySymbol: string,
  currency: string
}

const initialState: IVenueState = {
  locale:"pt-BR",
  ccy: '',
  ccySymbol: '',
  currency: '',
  webSettings:{
    id:0,
    venueId:0,
    backgroundColour:"",
    bannerImage:"",
    navBackgroundColour:"",
    primaryColour:"",
    primaryColourHover:"",
  }
};

export const fetchVenueConfig = (): any => async (dispatch: any) => {
  try {
    const data = await getVenueData();
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