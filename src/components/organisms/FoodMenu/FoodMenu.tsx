import React, { useState, useEffect } from "react";
import { useTheme } from "../../../hooks/theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reduxStore/@types";
import {
  IMenuSection,
  IMenuSectionItem,
} from "../../../reduxStore/reducers/menuSlice";
import { ArrowUpIcon, Currency, Modal } from "../../../components";
import { StyledFoodMenu } from "./styles";

interface FoodMenuProps {
  sections: Array<IMenuSection>;
}

const FoodMenu: React.FC<FoodMenuProps> = ({ sections }) => {
  const storeData = useSelector((state: RootState) => state);
  const { primaryColour } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [openedCategory, setOpenedCategory] = useState<Array<number>>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IMenuSectionItem | null>();

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleSelectCategory = (id: number) => {
    setSelectedCategory(id);
  };

  const handleSelectItem = (item: IMenuSectionItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleToogleOpen = (id: number) => {
    let newOpenedCategory = [];
    if (openedCategory.includes(id)) {
      newOpenedCategory = openedCategory.filter((c) => c !== id);
    } else {
      newOpenedCategory.push(id);
    }
    setOpenedCategory(newOpenedCategory);
  };

  useEffect(() => {
    if (sections) {
      if (sections[0]) setSelectedCategory(sections[0].id);
      setOpenedCategory(sections.map((section) => section.id));
    }
  }, [sections]);

  return (
    <>
      {selectedItem && showModal && (
        <Modal handleCloseModal={handleCloseModal} item={selectedItem} />
      )}
      <StyledFoodMenu $primaryColour={primaryColour}>
        <div className="categories">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`category ${
                selectedCategory === section.id ? "selected" : ""
              }`}
              onClick={() => handleSelectCategory(section.id)}
            >
              {section?.images && (
                <div className="photo">
                  <img src={section?.images[0]?.image} alt={section.name} />
                </div>
              )}
              <div className="name">
                <span>{section.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="itemsArea">
          {storeData.menu.sections &&
            storeData.menu.sections.map((section) => {
              return (
                <div
                  key={section.id}
                  className={`itemsGroup ${
                    openedCategory.includes(section.id) ? "opened" : "closed"
                  }`}
                >
                  <div
                    className="itemHeader"
                    onClick={() => handleToogleOpen(section.id)}
                  >
                    <span className="title">{section.name}</span>
                    <div className="option">
                      <ArrowUpIcon size={24} color={primaryColour} />
                    </div>
                  </div>
                  <div className="itemList">
                    {section.items.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="item"
                          onClick={() => handleSelectItem(item)}
                        >
                          <div className="info">
                            <div className="name">
                              {item.modifiers && (
                                <span className="modifier">
                                  {item.modifiers.length}
                                </span>
                              )}
                              {item.name}
                            </div>
                            <div className="description">
                              {item.description}
                            </div>
                            <div className="price">
                              <Currency value={item.price} />
                            </div>
                          </div>
                          {item?.images && (
                            <div className="photo">
                              <img
                                src={item?.images[0]?.image}
                                alt={item.name}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </StyledFoodMenu>
    </>
  );
};

export { FoodMenu };
