import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Menu } from "../../components";
import "./Shop.css";

const store = [
  { Name: "French fries", price: 125 },
  { Name: "Cafe", price: 50 },
  { Name: "Cortado", price: 55 },
  { Name: "Capuccino", price: 60 },
  { Name: "Te", price: 50 },
  { Name: "Agua", price: 80 },
  { Name: "Gaseosa", price: 85 },
  { Name: "Sanwhich", price: 250 },
  { Name: "Chocolate", price: 150 },
];
const offerHigherThan = { price: 100 };
const combo = {
  combo1: ["Gaseosa", "French fries"],
  combo2: ["Sanwhich", "Gaseosa"],
};

const initialState = false;

const initialStateList = [];

export function Shop() {
  const [ShowTotal, setShowTotal] = useState(initialState);
  const [listBuy, setListBuy] = useState(initialStateList);

  const handleOnClick = (element) => {
    setListBuy([...listBuy, element]);
    setShowTotal(true);
  };


  const listTotal = listBuy.map((produc) => {
    if (produc.price < offerHigherThan.price) return produc;

    return {
      ...produc,
      price: produc.price - produc.price * 0.1,
    };
  });



   const amountTotal = listTotal.reduce((element,number) => {
    return element + number.price
   },0)



  console.log(amountTotal);
  return (
    <>
      <Menu />
      <div className="contentTable">
      <h1>Cofee Shopp</h1>
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
                  <th>{element.Name}</th>
                  <th>${element.price}</th>
                  
                  <th>
                    <Button variant="outline-primary">
                      <img
                        src="./assets/agregar-carrito.png"
                       alt='button'
                        className="buttonImage"
                        onClick={() => handleOnClick(element)}
                      />
                    </Button>{" "}
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
          {ShowTotal && (
            <div className='shopping'>
                
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>Shopping</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {listTotal.map((element) => (
                    <tr>
                      <th>{element.Name}</th>
                      <th>${element.price}</th>
                     
                    </tr>
                  ))}
                  <tr>
                  <th></th>
                    <th></th>
                    <th></th></tr> 
                  <tr>
                      
                  <th>Amount Total</th>
                    <th>{amountTotal}</th>
                    
                  </tr>
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
