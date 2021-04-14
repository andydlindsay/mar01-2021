import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl = 'https://my-json-server.typicode.com/andydlindsay/chef-andy';

const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    console.log('updating the document title');
    document.title = `the count is ${counter}`;
  }, [counter, search]);

  // useEffect(() => {
  //   setCounter(counter + 1);
  // }, [counter]);

  useEffect(() => {
    console.log('fetching the recipes');

    // axios.get(`${baseUrl}/recipes`)
    //   .then((response) => {
    //     setRecipes(response.data);

    //     return axios.get(`${baseUrl}/ingredients`);
    //   })
    //   .then((response) => {
    //     setIngredients(response.data);
    //   });
      // 2.5 + 3 + 5 + 4 + 2 = 5.5

    const recipePromise = axios.get(`${baseUrl}/recipes`);
    const ingredientPromise = axios.get(`${baseUrl}/ingredients`);
    const promises = [recipePromise, ingredientPromise];
    
    Promise.all(promises)
      .then((arrOfResolvedValues) => {
        const recipeInfo = arrOfResolvedValues[0].data;
        const ingredientInfo = arrOfResolvedValues[1].data;

        setRecipes(recipeInfo);
        setIngredients(ingredientInfo);
      })
      .catch()
      // 2.5, 3, 2, 4, 2.5 = 4

  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`the value in setInterval is ${counter}`);
    }, 3000);

    // adding a mousemove event listener

    const cleanup = () => {
      console.log('cleaning up');
      clearInterval(interval);
    };

    return cleanup;
  }, [counter]);

  return (
    <div>
      <h2>Our Side Effect Component</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <div>
        <h2>Search term: {search}</h2>
        <input 
          value={search}
          onChange={(event) => {setSearch(event.target.value)}}
        />
      </div>

      <div>
        <h2>Chef Andy's Recipes</h2>
        { recipes.map((recipe, index) => {
          return <p key={index}>{recipe.id}: {recipe.title}</p>
        }) }
      </div>

      <div>
        <h2>Contents of Chef Andy's kitchen</h2>
        { ingredients.map((ingredient, index) => {
          return <p key={index}>{ingredient.id}: {ingredient.name}</p>
        }) }
      </div>
    </div>
  );
};

export default Effect;
// module.exports.Effect = Effect;