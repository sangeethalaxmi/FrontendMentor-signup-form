import Introduction from "./components/Introduction";
import Signup from "./components/Signup";
import "./styles/main.scss";
function App() {
  return (
    <div className="container">
      <Introduction />
      <Signup></Signup>
    </div>
  );
}

export default App;
