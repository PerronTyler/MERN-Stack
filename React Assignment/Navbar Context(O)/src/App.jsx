import UserContext from "./components/contexts.jsx/UserContext";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import FormWrapper from "./components/FormWrapper";

import "./App.css";

function App() {
  return (
    <Wrapper>
      <NavBar />
      <FormWrapper />
    </Wrapper>
  );
}
export default App

