import React from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../../hooks/theme";
import { RootState } from "../../../reduxStore/@types";
import { dispatchCartUpdate } from "../../../reduxStore/reducers/cartSlice";
import { MinusIcon, PlusIcon, Currency, Button } from "../../../components";
import { StyledCart } from "./styles";

const Cart: React.FC = () => {
  const intl = useIntl();
  const theme = useTheme();
  const dispatch = useDispatch();
  const storeData = useSelector((state: RootState) => state);

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

  const handleCheckout = () => {
    const data = {
      items: null,
      total: 0,
      subtotal: 0,
    };
    dispatch(dispatchCartUpdate(data));
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
    <StyledCart>
      <div className="wrapper">
        <div className="header">Carrinho</div>
        <div className="content">
          {(!storeData.cart.items || storeData.cart.items.length === 0) && (
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
                            return <p className="modifier">{modifier.name}</p>;
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
            <div className="total">
              <h3>Total:</h3>
              <h4>
                <Currency value={storeData.cart.total} />
              </h4>
            </div>
            <div className="checkout">
              <Button
                primaryColour={theme.primaryColour}
                primaryColourHover={theme.primaryColourHover}
                children={intl.formatMessage({
                  id: "components.cart.button",
                })}
                width="fullwidth"
                onClick={handleCheckout}
              />
            </div>
          </div>
        )}
      </div>
    </StyledCart>
  );
};

export { Cart };
