import React,{useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://data.covid19india.org/data.json').then(
      res=>res.json()
    ).then(jsondata=>setData(jsondata.statewise))
  },[])
  return (
    <div>
    <center>
      <h2><u>INDIA COVID-19 DASHBOARD</u></h2>
      <table className="table">
      <thead className="thead-dark">
      <tr>
      <th>State</th>
       <th>Confirmed</th>
        <th>Recovered</th>
         <th>Deaths</th>
          <th>Active</th>
           <th>LastUpdate</th>
      </tr>
      </thead>
      <tbody>
      {data.map(item=>{
        return(
          <tr>
          <td>{item.state}</td>
           <td>{item.confirmed}</td>
            <td>{item.recovered}</td>
             <td>{item.deaths}</td>
              <td>{item.active}</td>
               <td>{item.lastupdatedtime}</td>
          </tr>
        )
      })}
      </tbody>
      </table>
    </center>
    </div>
  );
}

export default App;
