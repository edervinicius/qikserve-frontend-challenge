import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxStore/@types";
import { fetchVenueConfig } from "../../reduxStore/reducers/venueSlice";

import { Page, SearchField } from "../../components";
import itemsMenu from "../../services/menu.json";
import { FoodMenu, Main } from "./styles";

function Home() {
  const dispatch = useDispatch();
  const venueInfo = useSelector((state: RootState) => state.venue);

  const baseCategories = [
    {
      id: 1,
      name: "Hamburger",
      photo:
        "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/origem-do-hambuguer-cnn4.jpg?w=1200&h=900&crop=1",
      selected: false,
    },
    {
      id: 2,
      name: "Hamburger",
      photo:
        "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/origem-do-hambuguer-cnn4.jpg?w=1200&h=900&crop=1",
      selected: false,
    },
  ];
  const [categories, setCategories] = useState(baseCategories);

  const handleSelectCategory = (id: number) => {
    const newCategories = baseCategories.map((category) => {
      return {
        ...category,
        selected: category.id === id,
      };
    });
    setCategories(newCategories);
  };

  useEffect(() => {
    dispatch(fetchVenueConfig());
  }, []);

  return (
    <Page>
      {JSON.stringify(venueInfo)}
      <div className="searchArea">
        <SearchField />
      </div>
      <Main>
        <FoodMenu>
          <div className="categories">
            {categories.map((category) => (
              <div
                className={`category ${category.selected ? "selected" : ""}`}
                onClick={() => handleSelectCategory(category.id)}
              >
                <div className="photo">
                  <img src={category.photo} alt="" />
                </div>
                <div className="name">Burgers</div>
              </div>
            ))}
          </div>
          <div className="itemsArea">
            {itemsMenu.sections.map((section) => {
              return (
                <div className="itemsGroup">
                  <div className="itemHeader"></div>
                  <div className="itemList">
                    {section.items.map((item) => {
                      return (
                        <div key={item.id} className="item">
                          <div className="info">
                            <div className="name">{item.name}</div>
                            <div className="description">{item.name}</div>
                            <div className="price">{item.price}</div>
                          </div>
                          <div className="photo">
                            {/* <img src={item.available} alt={item.name} /> */}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </FoodMenu>
      </Main>
    </Page>
  );
}

export { Home };
