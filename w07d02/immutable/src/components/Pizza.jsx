import {useState} from 'react';

const Pizza = () => {
  // const [toppings, setToppings] = useState([]); // first
  // const [crust, setCrust] = useState('thin');

  const [pizza, setPizza] = useState({
    toppings: [],
    crust: 'stuffed'
  });
  
  const [newTopping, setNewTopping] = useState(''); // second


  const clickHandler = () => {
    // toppings.push(newTopping); // DON'T DO THIS
    // setToppings([
    //   ...toppings,
    //   newTopping
    // ]);
    
    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        toppings: [
          ...prevPizza.toppings,
          newTopping
        ]
      };
    });

    // setToppings((prevToppings) => {
    //   return [...prevToppings, newTopping];
    // });

    setNewTopping('');
  };

  const changeCrust = (event) => {
    // event.target.value 
    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        crust: event.target.value
      }
    });
  };

  return (
    <div>
      <h2>Make your own Pizza!!</h2>
      <div>
        <input 
          value={pizza.crust}
          onChange={changeCrust}
        />
        <h2>Crust Type: {pizza.crust}</h2>
      </div>

      <div>
        <input 
          value={newTopping}
          onChange={(event) => {setNewTopping(event.target.value)}}
        />
        <button onClick={clickHandler}>Add Topping</button>
      </div>

      { pizza.toppings.map((topping, index) => {
        return <p key={index}>{topping}</p>
      }) }
    </div>
  );
};

export default Pizza;
