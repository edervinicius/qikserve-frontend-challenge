import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../../hooks/theme";
import { RootState } from "../../../reduxStore/@types";
import { dispatchCartUpdate } from "../../../reduxStore/reducers/cartSlice";
import {
  MinusIcon,
  PlusIcon,
  Currency,
  Button,
  CrossIcon,
} from "../../../components";
import { StyledCart, StyledBasket } from "./styles";

const Cartmobile: React.FC = () => {
  const intl = useIntl();
  const theme = useTheme();
  const dispatch = useDispatch();
  const storeData = useSelector((state: RootState) => state);
  const [showCart, setShowCart] = useState(false);

  const handleAddItem = (itemIndex: number) => {
    if (!storeData.cart.items) return false;
    const items = storeData.cart.items
      .map((item, index) => {
        const qty = index === itemIndex ? item.qty! + 1 : item.qty;
        return {
          ...item,
          qty,
        };
      })
      .filter((item) => item.qty! > 0);
    const data = {
      ...storeData.cart,
      items,
    };
    dispatch(dispatchCartUpdate(data));
  };

  const handleToggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const handleCheckout = () => {
    const data = {
      items: null,
      total: 0,
      subtotal: 0,
    };
    dispatch(dispatchCartUpdate(data));
    handleToggleCart();
  };

  const handleRemoveItem = (itemIndex: number) => {
    if (!storeData.cart.items) return false;
    const items = storeData.cart.items
      .map((item, index) => {
        const qty = index === itemIndex ? item.qty! - 1 : item.qty;
        return {
          ...item,
          qty,
        };
      })
      .filter((item) => item.qty! > 0);
    const data = {
      ...storeData.cart,
      items,
    };
    dispatch(dispatchCartUpdate(data));
  };

  return (
    <>
      {showCart && (
        <StyledCart>
          <div className="wrapper">
            <div>
              <div className="header">
                Carrinho
                <span className="close" onClick={handleToggleCart}>
                  <CrossIcon
                    size={28}
                    buttonColor="white"
                    iconColor={theme.primaryColour}
                  />
                </span>
              </div>
              <div className="content">
                {(!storeData.cart.items ||
                  storeData.cart.items.length === 0) && (
                  <div className="message">Seu carrinho está vazio</div>
                )}
                <div className="items">
                  {storeData.cart.items &&
                    storeData.cart.items.map((item, index) => {
                      return (
                        <div key={`${item.id}${index}`} className="item">
                          <div className="info">
                            <h3>{item.name}</h3>
                            {item.selectedModifiers && (
                              <div className="modifiers">
                                {item.selectedModifiers.map((modifier) => {
                                  return (
                                    <p className="modifier">{modifier.name}</p>
                                  );
                                })}
                              </div>
                            )}
                            <div className="qtyWrapper">
                              <div
                                className="button"
                                onClick={() => handleRemoveItem(index)}
                              >
                                <MinusIcon
                                  size={20}
                                  buttonColor={theme.primaryColour}
                                  iconColor="#fff"
                                />
                              </div>
                              <div className="qty">{item.qty}</div>
                              <div
                                className="button"
                                onClick={() => handleAddItem(index)}
                              >
                                <PlusIcon
                                  size={20}
                                  buttonColor={theme.primaryColour}
                                  iconColor="#fff"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="price">
                            <Currency
                              value={
                                item.selectedModifiers &&
                                item.selectedModifiers.length
                                  ? item.selectedModifiers[0].price
                                  : item.price
                              }
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {storeData.cart.items && storeData.cart.items.length > 0 && (
                <div className="footer">
                  <div className="subtotal">
                    <h3>Sub total:</h3>
                    <Currency value={storeData.cart.subtotal} />
                  </div>
                  <div className="divisor"></div>
                  <div className="total">
                    <h3>Total:</h3>
                    <h4>
                      <Currency value={storeData.cart.total} />
                    </h4>
                  </div>
                </div>
              )}
            </div>
            <div className="checkout" data-cy="checkout">
              <Button
                children={intl.formatMessage({
                  id: "components.cart.button",
                })}
                width="fullwidth"
                onClick={handleCheckout}
                primaryColour={theme.primaryColour}
                primaryColourHover={theme.primaryColourHover}
              />
            </div>
          </div>
        </StyledCart>
      )}
      <StyledBasket data-cy="basket">
        <Button
          primaryColour={theme.primaryColour}
          primaryColourHover={theme.primaryColourHover}
          children={
            <>
              {intl.formatMessage(
                {
                  id: "components.cart.buttonBasket",
                },
                {
                  e: storeData.cart.items?.length ?? 0,
                }
              )}
            </>
          }
          width="fullwidth"
          onClick={handleToggleCart}
        />
      </StyledBasket>
    </>
  );
};

export { Cartmobile };
