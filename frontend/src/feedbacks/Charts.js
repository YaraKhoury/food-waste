import React, {  Component, useEffect } from "react";
import { Chart } from 'react-charts'
 const Charts = props => {
    
      const data = React.useMemo(
        () => [
          {
            label: 'Reservation',
            data: [[1,localStorage.getItem('Sahseh') ], [2, localStorage.getItem('aboUWadih')], [3, localStorage.getItem('Falalelna')],
             [4, localStorage.getItem('burgerQueen')],
             [5,  localStorage.getItem('Mashawi')], [6, localStorage.getItem('HomeMade')],[7, localStorage.getItem('zaatarWbhar')]]
          }
        ],
        []
      )
        return (
          <div style={{height:"300px",width:"500px"}}>
 <div>
  Reservations of every Restaurants
 </div>{props && <Chart data={data} axes={props.axes} 
              primaryCursor
           secondaryCursor />}
              
          </div>
            
            )
    }
 


export default Charts;