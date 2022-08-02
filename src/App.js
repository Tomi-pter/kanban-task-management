import Header from "./components/Header";
import Main from "./components/Main";
import { Dim } from "./components/styled/BoardStyled";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Dim className="dim" />
    </>
  );
}

export default App;
