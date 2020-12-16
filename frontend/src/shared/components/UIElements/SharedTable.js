import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
class SharedTable extends Component{ 
  constructor(props){ 
      super(props)
      }
render(){ 
  let titleData = this.props.titleData;
  let itemData = this.props.itemData;
    return (      
  
  
  <Table striped bordered hover style={{backgroundColor:"white"}}>
  <thead>
      <tr>        
              <th style={{width:"35px",textAlign:"center"}}>{titleData}</th>      
      </tr>
  </thead>
  <tbody>
     <tr>
          <td >{itemData}</td>
      </tr>
  </tbody>
</Table>) 
      } 
}

export default SharedTable;
