import Tabs, { TabProps } from "src/Components/Tabs";
import "src/Views/main.scss"
import CostTracker from "./CostTracker";

const tabsContext: Array<TabProps> = [
  {
    title: "Cost tracker",
    children: <CostTracker />
  },
  {
    title: "Training tracker",
    children: <div>
      <p>09876543456yujkjhgfdfg</p>
      <p>z3edcvft56tgbhu8ijk</p>
    </div>
  },
]


const Main = () => {
  return (
    <div className="main">
      <h1 className="main-title">Trackers</h1>
      <Tabs tabs={tabsContext} />
    </div>
  );
}

export default Main;