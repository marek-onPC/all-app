import { useState } from "react";
import MonthPicker from "src/Components/MonthPicker";
import "src/Views/cost-tracker.scss"

const DUMMY_DATA = [
  {
    cost: 100,
    date: "2021-09-01",
    name: "Food"
  },
  {
    cost: 200,
    date: "2021-09-01",
    name: "Food"
  },
  {
    cost: 300,
    date: "2021-09-01",
    name: "Food"
  }
]

const CostTracker = () => {
  const [selectedMonth, setSelectedMonth] = useState<Date | null>(null);

  return <div className="cost-tracker">
    <div className="cost-tracker-header">
      <button className="btn-primary">Add cost</button>
      <MonthPicker selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />

    </div>
    <table>
      <thead>
        <tr>
          <th>Cost</th>
          <th>Date</th>
          <th>Name</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {DUMMY_DATA.map((data, index) => {
          return <tr key={index}>
            <td>{data.cost}</td>
            <td>{data.date}</td>
            <td>{data.name}</td>
            <td></td>
          </tr>
        })}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>{DUMMY_DATA.reduce((accumulator, currentVal) => {
            return accumulator + currentVal.cost
          }, 0)}</td></tr>
      </tbody>
    </table>
  </div>
}

export default CostTracker;