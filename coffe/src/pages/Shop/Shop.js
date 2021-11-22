import React, { useState } from "react";
import { Table, Button} from "react-bootstrap";
import { Menu } from "../../components";
import Swal from 'sweetalert2'
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
  const [carrito, setCarrito] = useState(true);

  const handleOnClick = (element) => {
    setListBuy([...listBuy, element]);
    setCarrito(false)
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

  const handleOnClickCarrito =()=>{
    setCarrito(true)
   

    Swal.fire({
      icon: 'success',
      title:`Su compra sera entregada en breve! Total: $ ${amountTotal}`,
      text:`${listBuy.map((item)=> item.name)}`
      
      
    })
    setListBuy(initialStateList)
    setListCombos(combos)
    setShowTotal(initialState)
  }

  const amountTotal = listBuy.reduce((element, number) => {
    return element + number.price;
  }, 0);

  return (
    <>
      <Menu />
      <h1>Cofee Shopp</h1>
      <div className="compra">
        <h2>amountTotal: {amountTotal}  </h2>
        
        
        <Button
          type="submit"
          disabled={carrito}
          onClick={() => handleOnClickCarrito()}
          variant="success"
        >
          carrito
        </Button>
      </div>
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
                      variant="warning"
                    >
                      {element.name}
                    </Button>
                    
                  </th>
                  <th>${element.price}</th>
                </tr>
              ))}
            </tbody>
          </Table>
          {ShowTotal && (
            <div className="shopping">
                 <h3>Your shopping cart</h3>
                <Table  responsive="sm">
                  <thead>
                    <tr>
                      <th>Shopping</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listBuy.map((element) => (
                      <tr>
                        <th>{element.name}</th>
                        <th>${element.price}</th>
                      </tr>
                    ))}
                  
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
