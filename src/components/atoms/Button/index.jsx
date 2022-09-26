import styles from "./styles.module.css"
function Buttons ({ buttonAction, text, btnStyle="roundButton" }) {
  return (
    <button onClick={buttonAction} className={styles[btnStyle]}>{text}</button>
  );
};

export default Buttons;