import Tabs, { TabProps } from "src/Components/Tabs";
import "src/Views/main.scss"

const tabsContext: Array<TabProps> = [
  {
    title: "Household cost tracker",
    children: <div>
      <p>asdasd</p>
      <p>444345345</p>
    </div>
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
      <Tabs tabs={tabsContext} />
    </div>
  );
}

export default Main;