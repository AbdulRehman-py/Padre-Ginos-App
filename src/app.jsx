import {createRoot} from "react-dom/client";
import Pizza from "./pizza";



const App = () => {
  return (
    <div>
      <h1>padre ginos - Order Now</h1>
      <Pizza name="pepporoni" description="pep , cheese, n stuff"/>
      <Pizza name="margarita" description="cheese, tomato, basil"/>
      <Pizza name="hawaiian" description="ham, cheese, pineapple"/>

    </div>
  );

};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
