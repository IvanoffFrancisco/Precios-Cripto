import React from 'react'
import RowTable from './RowTable'

export default function TableCoin({Coin,buscar}) {

    const filterMone=Coin.filter(coin=> coin.name.toLowerCase().includes(buscar.toLowerCase()));    
    
  return (
    <div className='table-responsive'>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Precio Alto</th>
                <th scope="col">Precio Bajo</th>
                </tr>
            </thead>
            <tbody>
            {
                filterMone.map((datos,index)=>{
                    return(
                        <>
                        <RowTable key={index} img={datos.image}
                        nombre={datos.name}
                        simbolo={datos.symbol}
                        precio={datos.current_price}
                        precioAlto={datos.high_24h}
                        precioBajo={datos.low_24h}/>
                        </>
                    )
                })
            }
                
            </tbody>
        </table>
    </div>
  )
}
