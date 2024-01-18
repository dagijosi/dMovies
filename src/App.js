import "./App.css";
import LeftFilter from "./components/LeftFilter";
import MainPage from "./components/MainPage";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="flex flex-row ">
      <Menu />
      <MainPage />
      <LeftFilter />
    </div>
  );
}

export default App;
