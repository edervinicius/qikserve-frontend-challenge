import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";
import {
  IMenuSectionItem,
  IMenuItemModifierUnity,
} from "../../../reduxStore/reducers/menuSlice";
import { dispatchCartUpdate } from "../../../reduxStore/reducers/cartSlice";
import { RootState } from "../../../reduxStore/@types";
import {
  Button,
  MinusIcon,
  PlusIcon,
  CloseIcon,
  Currency,
} from "../../../components";
import { StyledModal } from "./styles";
import { useTheme } from "../../../hooks";

interface ModalProps {
  item: IMenuSectionItem;
  handleCloseModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, handleCloseModal }) => {
  const intl = useIntl();
  const theme = useTheme();
  const dispatch = useDispatch();
  const storedCartData = useSelector((state: RootState) => state.cart);
  const [totalItems, setTotalItems] = useState(1);
  const [finalPrice, setFinalPrice] = useState(0);
  const [modifiers, setModifiers] = useState<Array<IMenuItemModifierUnity>>([]);
  const [showAddToCartButton, setShowAddToCartButton] = useState(true);

  const handleAddItem = () => {
    setTotalItems((prevValue) => prevValue + 1);
  };

  const handleRemoveItem = () => {
    if (totalItems > 1) {
      setTotalItems((prevValue) => prevValue - 1);
    }
  };

  const handleCalculateFinalPrice = () => {
    const priceModifier = modifiers.reduce((acc, item) => {
      if (item && typeof item.price === "number") {
        return acc + item.price;
      } else {
        return acc;
      }
    }, 0);
    setFinalPrice((item.price + priceModifier) * totalItems);
  };

  const handleAddModifier = (modifier: IMenuItemModifierUnity) => {
    setModifiers((prevData) => [modifier]);
    setShowAddToCartButton(true);
  };

  const handleAddToCart = () => {
    let items: Array<IMenuSectionItem> = [];
    if (storedCartData.items) items = [...storedCartData.items];
    const totalModifiersSum = modifiers.reduce((acc, item) => {
      if (item && typeof item.price === "number") {
        return acc + item.price;
      } else {
        return acc;
      }
    }, 0);
    items?.push({
      ...item,
      qty: totalItems,
      selectedModifiers: modifiers,
      selectedModifiersTotal: totalModifiersSum,
    });

    const totalItemsSum = items.reduce((acc, item) => {
      if (item && typeof item.price === "number") {
        return acc + item.price;
      } else {
        return acc;
      }
    }, 0);

    const total = totalModifiersSum + totalItemsSum;

    const data = {
      total,
      subtotal: total,
      items,
    };
    dispatch(dispatchCartUpdate(data));
    handleCloseModal();
  };

  useEffect(() => {
    if (item.modifiers) {
      setShowAddToCartButton(false);
    }
  }, []);

  useEffect(() => {
    handleCalculateFinalPrice();
  }, [totalItems, modifiers]);

  return (
    <StyledModal>
      <div className="overlay"></div>
      <div className="modal">
        <div className="details">
          <div className="close" onClick={handleCloseModal}>
            <CloseIcon
              size={32}
              iconColor={theme.primaryColour}
              buttonColor="white"
            />
          </div>
          {item.images && (
            <div className="photo">
              <img src={item.images[0].image} alt="" />
            </div>
          )}
          <div className="header">
            <div className="title">
              <h2>{item.name}</h2>
            </div>
            <div className="description">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
        {item.modifiers && (
          <div className="modifiers">
            {item.modifiers.map((modifier) => {
              return (
                <div className="modifier">
                  <div className="header">
                    <h3>{modifier.name}</h3>
                    <p>
                      {intl.formatMessage(
                        {
                          id: "components.modal.modifierTitle",
                        },
                        { e: modifier.minChoices }
                      )}
                    </p>
                  </div>
                  <div className="items">
                    {modifier.items.map((item) => {
                      return (
                        <div
                          className="item"
                          onClick={() => handleAddModifier(item)}
                        >
                          <div className="info">
                            <label htmlFor={`r${item.id}`}>
                              <h4>{item.name}</h4>
                              <p>
                                <Currency value={item.price} />
                              </p>
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="radio"
                              className="radio"
                              id={`r${item.id}`}
                              name="example"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {showAddToCartButton && (
          <div className="addToCart">
            <div className="qtyWrapper">
              <div
                className={`button ${totalItems === 1 ? "disabled" : ""}`}
                onClick={handleRemoveItem}
              >
                <MinusIcon
                  size={32}
                  buttonColor={totalItems > 1 ? theme.primaryColour : "#DADADA"}
                  iconColor={totalItems > 1 ? "#fff" : "#5F5F5F"}
                />
              </div>
              <div className="qty">{totalItems}</div>
              <div className="button" onClick={handleAddItem}>
                <PlusIcon
                  size={32}
                  buttonColor={theme.primaryColour}
                  iconColor="#fff"
                />
              </div>
            </div>
            <Button
              onClick={handleAddToCart}
              children={
                <>
                  {intl.formatMessage({
                    id: "components.modal.button",
                  })}{" "}
                  • <Currency value={finalPrice} />
                </>
              }
            />
          </div>
        )}
      </div>
    </StyledModal>
  );
};

export { Modal };
