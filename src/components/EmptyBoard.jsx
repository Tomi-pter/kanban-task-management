import { Button } from "./styled/HeaderStyled";
import { Empty } from "./styled/BoardStyled";

function EmptyBoard() {
  return (
    <Empty>
      <h2>This board is empty. Create a new column to get started.</h2>
      <Button>+ Add New Column</Button>
    </Empty>
  );
}

export default EmptyBoard;
