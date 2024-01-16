import { useSelector } from 'react-redux';
import { RootState } from "../reduxStore/@types";

const useTheme = () => {
  const {
    bannerImage,
    backgroundColour,
    primaryColour,
    primaryColourHover,
    navBackgroundColour
} = useSelector((state: RootState) => state.venue.webSettings);

return {
    bannerImage,
    backgroundColour,
    primaryColour,
    primaryColourHover,
    navBackgroundColour
  };
 
};

export { useTheme };