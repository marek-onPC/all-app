import Tabs, { TabProps } from "src/Components/Tabs";

const tabsContext: Array<TabProps> = [
  {
    title: "One",
    children: <div>
      <p>asdasd</p>
      <p>444345345</p>
    </div>
  },
  {
    title: "Two",
    children: <div>
      <p>09876543456yujkjhgfdfg</p>
      <p>z3edcvft56tgbhu8ijk</p>
    </div>
  },
]


const Main = () => {
  return (
    <div>
      <Tabs tabs={tabsContext}/>
    </div>
  );
}

export default Main;