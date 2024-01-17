import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxStore/@types";
import {
  fetchMenuConfig,
  IMenuSection,
} from "../../reduxStore/reducers/menuSlice";
import { fetchVenueConfig } from "../../reduxStore/reducers/venueSlice";
import {
  Page,
  SearchField,
  Cart,
  Cartmobile,
  FoodMenu,
} from "../../components";
import { Main } from "./styles";

function Home() {
  const dispatch = useDispatch();
  const storeData = useSelector((state: RootState) => state);

  const [sections, setSections] = useState(storeData.menu.sections);

  const handleFilterSections = (filtered: Array<IMenuSection>) => {
    setSections(filtered);
  };

  useEffect(() => {
    dispatch(fetchVenueConfig());
    dispatch(fetchMenuConfig());
  }, []);

  useEffect(() => {
    setSections(storeData.menu.sections);
  }, [storeData.menu.sections]);

  return (
    <Page>
      <div className="searchArea">
        <SearchField handleFilterSections={handleFilterSections} />
      </div>
      <Main>
        {sections && <FoodMenu sections={sections} />}
        {isMobile ? <Cartmobile /> : <Cart />}
      </Main>
    </Page>
  );
}

export { Home };
