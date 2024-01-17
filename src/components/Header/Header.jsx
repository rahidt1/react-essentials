import reactCoreConceptImg from "../../assets/react-core-concepts.png";
import { getRandomNumber } from "../../utils/getRandomNumber";
import "./Header.css";

export function Header() {
  const reactDescription = ["Fundamental", "Crucial", "Core"];
  const description = reactDescription[getRandomNumber(2)];

  return (
    <header>
      <img src={reactCoreConceptImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
