import classes from './Input.module.css';

//  Something abt {...props.input} fills the input w text from outside the component. and is also
//  the id somehow?
//  And it gets the id, type, min, max, step, and defaultValue from MealItemForm.

const Input = props => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
    </div>
};

export default Input;