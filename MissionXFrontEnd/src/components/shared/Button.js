import defaultStyles from "../styles/Button-group.module.css";


const Button = (props) => {
    
    const { value,lbl, i, btnEvent, state, styles } = props;
    
    console.log('Break here')

    const { active, inactive } = (styles ?? defaultStyles);
    
    return (
        <button
            key={i}
            name={lbl}
            value={value}
            onClick={(e) => btnEvent(i,lbl)}
            className={i === state ? active : inactive}
        >{lbl}</button>
    );
};
export default Button
