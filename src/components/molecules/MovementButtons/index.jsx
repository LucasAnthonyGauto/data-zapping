import { Button } from "../../atoms";

function MoveButtons ({ text, buttonAction }) {
  return (
      <Button btnStyle={"roundButton"} text={text} buttonAction={buttonAction}/>
  );
};

export default MoveButtons;