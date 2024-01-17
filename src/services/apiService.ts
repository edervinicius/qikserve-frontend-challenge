import axios from "axios";
import {APP_CONFIG_URL, APP_MENU_URL, REACT_APP_MODE} from "../config"
import menuData from "./menu.json"
import venueData from "./settings.json"

const apiService = axios.create();

export const getVenueData = async () =>{
    if(REACT_APP_MODE==="dev") return venueData;
    return (await apiService.get(APP_CONFIG_URL!)).data
}
export const getMenuData = async()=>{
    if(REACT_APP_MODE==="dev") return menuData;
    return (await apiService.get(APP_MENU_URL!)).data
}