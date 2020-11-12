import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) =>
      [...Array(props.ingredients[igKey])].map((_, idx) => (
        <BurgerIngredient key={igKey + idx} type={igKey} />
      ))
    )
    .reduce((prevArr, currArr) => {
      return prevArr.concat(currArr);
    }, []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding some ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
