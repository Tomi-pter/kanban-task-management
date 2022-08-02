import { useSelector } from "react-redux";
import logoMobile from "../assets/logo-mobile.svg";
import options from "../assets/icon-vertical-ellipsis.svg";
import add from "../assets/icon-add-task-mobile.svg";
import down from "../assets/icon-chevron-down.svg";
// import up from "../assets/icon-chevron-up.svg";
import { Button, HeaderStyle } from "./styled/HeaderStyled";

function Header() {
  const boardName = useSelector((store) => store.board[1]);

  return (
    <HeaderStyle>
      <div className="container">
        <div className="logoNav">
          <img src={logoMobile} alt="logo" className="logo" />
          <nav>
            <h1>{boardName}</h1>
            <img src={down} alt="" />
            {/* <img src={up} alt="" /> */}
          </nav>
        </div>
        <div className="add">
          <Button>
            <img src={add} alt="add task" />
          </Button>
          <img src={options} alt="options" />
        </div>
      </div>
    </HeaderStyle>
  );
}

export default Header;
