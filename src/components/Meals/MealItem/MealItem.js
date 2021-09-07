import classes from './MealItem.module.css';

const MealItem = props => {

    //  More backticks. The first $ is for the price string, second goes w backticks and {}.
    //  toFixed(2) makes sure there are always 2 decimal places for the cents.
    const price = `$${props.price.toFixed(2)}`;

    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>

        </div>
    </li>
};

export default MealItem;