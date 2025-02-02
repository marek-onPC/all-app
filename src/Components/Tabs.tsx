import { useState } from "react"
import "src/Components/tabs.scss"

interface TabProps {
  title: string
  children: React.ReactNode
}

interface TabsProps {
  tabs: Array<TabProps>
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <div className="tabs">
      <div className="tabs-selectors">
        {tabs.map((tab, index) => {
          return <div key={index} className={`tabs-selector --glass ${index === activeTab ? "--active" : ""}`} onClick={() => setActiveTab(index)}>{tab.title}</div>
        })}
      </div>
      <div className="tabs-outer --glass">
        {tabs.map((tab, index) => {
          return <div key={index} className={`tabs-inner ${index === activeTab ? "--active" : ""}`} >{tab.children}</div>
        })}
      </div>
    </div>
  )
}

export default Tabs;

export { TabProps }