import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import RecipesItem from './RecipesItem';

const RecipesList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Recipes found</h2>       
        </Card>
      </div>
    );
  }
  return (
      <div>
            <h2 style={{textAlign:"center",fontSize:"45px",padding:"25px",letterSpacing:"6px",boxShadow:"0 4px 17px rgba(0, 0, 0, 0.10)"}}>{props.title}</h2>
 <div className="row" >
      {props.items.map(recipe => (
        <RecipesItem
            key={Math.random()}
            id={Math.random()}
          title={recipe.label}
          imgUrl={recipe.image}
          totalTime={recipe.totalTime}
          ingredients={recipe.ingredients}
          source={recipe.source}
          calories={recipe.calories}
        />
      ))}
      {/* <div>{props.items.url}</div> */}
    </div>
      </div>
   
  );
};

export default RecipesList;
