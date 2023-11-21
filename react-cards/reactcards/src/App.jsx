import logo from "./logo.svg";
import "./App.css";
import Star from "../src/assets/Star.svg";
import Card from "./components/Card/index";
import Data from "./components/Card/data";

function App() {
  return (
    <>
      <Card
        image={
          "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQKqbL1x8SX4wIAprvtHAkQZ0qgCpy4-omB6YRnKhPbB7uml8kemiYMrZ-i-fWcViMPBBiiJm34TQEo2gU"
        }
        title={"Mauro Icardi"}
        price={"$999999"}
        rating={Star}
      />
      {Data.map((item) => <Card title={item.title} />)}
    </>
  );
}

export default App;
