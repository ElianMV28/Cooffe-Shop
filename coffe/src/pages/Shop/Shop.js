import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Menu } from "../../components";
import "./Shop.css";

const store = [
  { name: "French fries", price: 125 },
  { name: "Cafe", price: 50 },
  { name: "Cortado", price: 55 },
  { name: "Capuccino", price: 60 },
  { name: "Te", price: 50 },
  { name: "Agua", price: 80 },
  { name: "Gaseosa", price: 85 },
  { name: "Sanwhich", price: 250 },
  { name: "Chocolate", price: 150 },
];
const offerHigherThan = { price: 100 };
const combos = [
  {
    combo: "combo1",
    name: "Gaseosa + Sandwich",
    price: 300,
    disabled: false,
  },
  {
    combo: "combo2",
    name: "Cafe + Medialuna",
    price: 60,
    disabled: false,
  },
  {
    combo: "combo3",
    name: "Chocolate + Medialuna",
    price: 160,
    disabled: false,
  },
];

const initialState = false;

const initialStateList = [];

export function Shop() {
  const [ShowTotal, setShowTotal] = useState(initialState);
  const [listBuy, setListBuy] = useState(initialStateList);
  const [listCombos, setListCombos] = useState(combos);

  const handleOnClick = (element) => {
    setListBuy([...listBuy, element]);
    setShowTotal(true);
    let listChanges = [];
    if (!element.disabled) {
      listChanges = listCombos.map((product) => {
        if (product.name !== element.name) return product;

        return {
          ...product,
          disabled: true,
        };
      });
    }
    setListCombos(listChanges);
  };

  // const listTotal = listBuy.map((produc) => {
  //   if (produc.price < offerHigherThan.price) return produc;

  //   return {
  //     ...produc,
  //     price: produc.price - produc.price * 0.1,
  //   };
  // });

  const amountTotal = listBuy.reduce((element, number) => {
    return element + number.price;
  }, 0);

  return (
    <>
      <Menu />
      <h1>Cofee Shopp</h1>
      <div className="contentTable">
        <div>
          {" "}
          <h2> Combos</h2>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Combo</th>
                <th>Price</th>
               
              </tr>
            </thead>
            <tbody>
              {listCombos.map((element) => (
                <tr>
                  <th>
                    <Button
                      type="submit"
                      disabled={element.disabled}
                      onClick={() => handleOnClick(element)}
                      variant="outline-warning"
                    >
                      {element.name}
                    </Button>
                    
                  </th>
                  <th>{element.price}</th>
                </tr>
              ))}
            </tbody>
          </Table>
          {ShowTotal && (
            <div className="shopping">
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>Shopping</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {listBuy.map((element) => (
                    <tr>
                      <th>{element.name}</th>
                      <th>${element.price}</th>
                    </tr>
                  ))}
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <th>Amount Total</th>
                    <th>{amountTotal}</th>
                  </tr>
                </tbody>
              </Table>
            </div>
          )}
        </div>

        <div className="listStore">
          <h2>List Store</h2>
          <div className="tableShop">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {store.map((element) => (
                  <tr>
                    <th>{element.name}</th>
                    <th>${element.price}</th>

                    <th>
                      <Button variant="outline-primary">
                        <img
                          src="./assets/agregar-carrito.png"
                          alt="button"
                          className="buttonImage"
                          onClick={() => handleOnClick(element)}
                        />
                      </Button>{" "}
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

         
        </div>
      </div>
    </>
  );
}
