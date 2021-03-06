import React, {useState, useEffect} from 'react';
import { useHttpClient } from "../../shared/hooks/http-hook";
import axios from 'axios'
import RecipesList from '../components/RecipesList';
const ChickenRecipes = props => {
  const [loadedRecipes, setLoadedRecipes] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  var myarray = [];
  useEffect(()=>{
    const getthem = async() => {
     const options = {
       method: 'GET',
       url: 'https://edamam-recipe-search.p.rapidapi.com/search',
       params: {q: 'chicken'},
       headers: {
         'x-rapidapi-key': 'd01285340bmsh09113694a7b7c9bp185c4bjsnabc4fcc3dae6',
         'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com'
       }
     };
     
   await  axios.request(options).then(res =>{
       res.data.hits.map(x => {
        myarray.push(x.recipe)
       })
       setLoadedRecipes(myarray)
     }).catch(function (error) {
       console.error(error);
     });
    }
    getthem();
   }, [sendRequest])

  return (
    <div className="row">
    {!isLoading && loadedRecipes && <RecipesList items={loadedRecipes} title="Chicken Recipe"/>}
  </div>
  );
};

export default ChickenRecipes;
