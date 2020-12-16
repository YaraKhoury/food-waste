import React, {Component} from 'react';
import './Dropdown.css';
import { Link, NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
 class Mydropdown extends Component{ 
     constructor(props){ 
         super(props)
         }
 render(){ 
     let arrayOfData = this.props.arrayOfData;
     let option = arrayOfData.map((data)=>{
       return <Dropdown.Item className="dropdownItem"><Link className="customDropdown"  to={data.to}>{data.title}</Link></Dropdown.Item>
       
     })

       return (      
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Category
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
          {option}
        </Dropdown.Menu>
      </Dropdown>) 
         } 
}
export default Mydropdown;