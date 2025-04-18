import Calculator from "./biginerProjects/calculator/Calculator";
import Counter from "./biginerProjects/Counter/Counter";
import Meals from "./biginerProjects/mealsApi/Meals";
import Todo from "./biginerProjects/todo/Todo";
import Togglebg from "./biginerProjects/toggle/Togglebg";
import "./App.css";
import HidenSerchBar from "./biginerProjects/HidenSerchbar/HidenSerchBar";
import Testimonials from "./biginerProjects/testimaonials/Testimonials";
import Accordian from "./biginerProjects/accordian/Accordian";
import { accordionData } from "./utils/content";
import Form from "./biginerProjects/fromvalidation/Form";
function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <Togglebg /> */}
      {/* <HidenSerchBar /> */}
      {/* <Testimonials /> */}
      {/* <div className="accordian">
        {accordionData.map(({ title, content }) => (
          <Accordian title={title} content={content} />
        ))}
      </div> */}
      <Form />
    </div>
  );
}

export default App;
