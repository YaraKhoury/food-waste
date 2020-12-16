import React from 'react';
import Card from '../shared/components/UIElements/Card';
const OrdersList = props => {
    if (props.items.length === 0) {
      return (
        <div className="place-list center">
          <Card>
            <h2  style={{padding:'25px'}}>No Orders found</h2>
          </Card>
        </div>
      );
    }
    
    return (
      
      <ul >
      </ul>
    
    );
  };
  
  export default OrdersList;