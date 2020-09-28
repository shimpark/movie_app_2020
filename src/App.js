import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, pic }){

  return (
  <div>
    <h1>i love {name}!!</h1>
    <img src={pic} alt={name} />
  </div>
  )
}

const foodLike = [
  {
    id : 1,
    name : 'kimchi',pic : "https://t1.daumcdn.net/news/202009/25/newsen/20200925143026721covj.jpg"    
  },
  {
    id : 2,
    name : 'bibimbo',pic : "https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202009/24/newsen/20200924152905807wefh.jpg"    
  },{
    id : 3,
    name : 'bulgogi',pic : "https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202009/24/newsen/20200924152906144kjsb.jpg"        
  }
];

Food.propTypes = {
  name : PropTypes.string.isRequired,
  pic : PropTypes.string.isRequired,  
  //rating : PropTypes.string.isRequired
};

/*
function renderFood(dish){
  return <Food name={dish.name} pic={dish.pic}></Food>;
}
*/

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLike.map(dish => (
        <Food key={dish.id} name={dish.name} pic={dish.pic}></Food>
      ))}
    </div>    
  );
}

export default App;
