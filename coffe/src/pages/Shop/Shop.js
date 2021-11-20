import React from 'react'
import { Table } from 'react-bootstrap'
import './Shop.css'

const store = [
    {Name:'French fries', price:125},
   {Name:'cafe', price:50},
    {Name:'cortado', price:55},
    {Name:'capuccino', price:60},
   {Name:'te', price:50},
    {Name:'agua', price:80},
    {Name:'gaseosa', price:85},
    {Name:'sanwhiches', price:250},
    {Name:'chocolate', price:150}]




export function Shop() {
    return (
        <>
        <div className='tableShop'>
           <h1>Cofee Shopp</h1>
    <Table responsive="sm">
        <thead>
        <tr>
            <th>Stock</th>
            <th>Price</th>
            
            
        </tr>
        </thead>
        <tbody>
        {store.map((elemento) => (
            <tr>
                <th>{elemento.Name}</th>
                <th>{elemento.price}</th>
            </tr>
        ))}
        
        </tbody>
    </Table> 
        </div>
        </>
    )
}
