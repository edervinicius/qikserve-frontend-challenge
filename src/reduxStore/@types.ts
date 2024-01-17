import { IVenueState} from "./reducers/venueSlice";
import { IMenuState } from "./reducers/menuSlice";
import { ICartState } from "./reducers/cartSlice";
export interface RootState {
  venue: IVenueState;
  menu: IMenuState;
  cart: ICartState
}
