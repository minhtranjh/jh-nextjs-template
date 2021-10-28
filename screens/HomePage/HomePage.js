import { useHomePageState } from "../../contexts/HomePageContext";
import css from "./HomePage.module.css"

const HomePage = () => {
  const { value, decreaseValue, inscreaseValue } = useHomePageState();
  return (
    <div className="">
      <h1>{value}</h1>
      <button onClick={inscreaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </div>
  );
};

export default HomePage;
