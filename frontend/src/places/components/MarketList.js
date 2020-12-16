import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import MarketItem from './MarketItem';
import './PlaceList.css';

const MarketList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found</h2>       
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(place => (
        <MarketItem
          key={place.id}
          id={place.id}
          title={place.title}
          imgUrl={place.images}
        />
      ))}
    </ul>
  );
};

export default MarketList;
