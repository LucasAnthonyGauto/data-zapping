import { Button } from "../../atoms";

function MoveButtons ({ text, buttonAction, btnType }) {
  switch (btnType) {
    case 'pageActual':
      return (
        <Button btnStyle={"btnActive"} text={text}/>
      );
    case 'hide':
      return (
        <Button btnStyle={"butonHide"} text={text}  buttonAction={buttonAction}/>
      );
    default:
      return (
        <Button text={text} buttonAction={buttonAction}/>
      )
  }
};

export default MoveButtons;