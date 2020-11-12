import React from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey, idx) => {
        return (
          <li key={igKey + idx}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>Deilicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button clicked={this.props.purchaseCanceled} btnType='Danger'>
          Cancel
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType='Success'>
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
