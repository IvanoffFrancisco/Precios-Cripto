import React,{useEffect,useState} from 'react'
import TableCoin from '../components/TableCoin';
import '../css/Inicio.css';
export default function Inicio() {

  const [Coin,setCoint]=useState([]);
  const [buscar,setBuscar]=useState('');
    const Datos=async()=>{
        try {
            const res=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false');
            const respuesta=await res.json();
            setCoint(respuesta)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        Datos();
    })
    
  return (
    <div className='container'>
      <div className="jumbotron">
        <h1 className="display-4 titulo">Criptomonedas</h1>
        <p className="lead titulo">Cotización de las Principales Criptomonedas</p>
        <hr className="my-4 titulo"/>
      </div>
      <div>
        <input type="text" className='form-control bg-dark text-light border-0 mt-4 mb-4 text-center' placeholder="Buscar una criptomoneda" name="" id="" onChange={e=> setBuscar(e.target.value)}/>

       <TableCoin Coin={Coin} buscar={buscar}/>
      </div>
        
        
    </div>
  )
}
