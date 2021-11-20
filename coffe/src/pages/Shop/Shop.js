import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Menu } from '../../components'
import './Shop.css'

const store = [
    {Name:'French fries', price:125},
   {Name:'Cafe', price:50},
    {Name:'Cortado', price:55},
    {Name:'Capuccino', price:60},
   {Name:'Te', price:50},
    {Name:'Agua', price:80},
    {Name:'Gaseosa', price:85},
    {Name:'Sanwhiches', price:250},
    {Name:'Chocolate', price:150}]
const sale = {price:100}


const initialState = false;
const initialStateTotal = 0;
const initialStateList = []

export function Shop() {
    const [ShowTotal, setShowTotal] = useState(initialState)
    const [check, setCheck] = useState(initialStateTotal)
    const [listBuy, setListBuy] = useState(initialStateList)


    const handleOnClick = (element) => {
        setListBuy([...listBuy,element])   
    }
    const listTotal = listBuy.map(produc => {
        if(produc.price < sale.price) return produc;

        return {
            ...produc,
            price:produc.price -(produc.price * 0.1)
        };
    })

    console.log(listTotal)
    return (
        
        <>
        <Menu/>
        <div className='contentTable'>
        <div className='tableShop'>
           <h1>Cofee Shopp</h1>
    <Table responsive="sm">
        <thead>
        <tr>
            <th>Stock</th>
            <th>Price</th>
            <th>
            </th>
            
        </tr>
        </thead>
        <tbody>
        {store.map(element => (
            <tr>
                <th>{element.Name}</th>
                <th>${element.price}</th>
                <th>
            <Button variant="outline-primary">
                <img src="./assets/agregar-carrito.png" alt="my image" className='buttonImage' onClick={()=>handleOnClick(element)} />
                </Button>{' '}
            </th>
            </tr>
        ))}
        
        </tbody>
    </Table> 
        </div>
        </div>
        </>
    )
}
