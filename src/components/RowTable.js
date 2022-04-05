import React from 'react'
import '../css/RowTable.css';
export default function RowTable(props) {
  
    const {img,nombre,simbolo,precio,precioAlto,precioBajo}=props;
    return (
    <tr>
        <th scope="row"><img className='imagenCripto img-fluid me-4' src={img} alt="" /></th>
        <td>{nombre}  <b>{simbolo}</b></td>
        <td>{precio}</td>
        <td>{precioAlto}</td>
        <td>{precioBajo}</td>
    </tr>
  )
}
