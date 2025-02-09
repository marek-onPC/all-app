import { Dispatch, SetStateAction, useState } from 'react';
import "src/Components/month-picker.scss"

interface MonthPickerProps {
  selectedMonth: Date | null;
  setSelectedMonth: Dispatch<SetStateAction<Date | null>>;
}

const MonthPicker = ({ selectedMonth, setSelectedMonth }: MonthPickerProps) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<Date>(selectedMonth || new Date());
  const year = currentDate.getFullYear();

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const handleMonthSelect = (month: number) => {
    const newDate = new Date(currentDate.getFullYear(), month, 1);
    setSelectedMonth(newDate);
    setShowCalendar(false);
  };

  return (
    <div className="monthpicker">
      <button onClick={toggleCalendar} className="btn-primary">
        {selectedMonth ? selectedMonth.toLocaleString('default', { month: 'long', year: 'numeric' }) : 'Select month'}
      </button>
      <div className={`monthpicker-cal --glass ${!showCalendar ? '--hidden' : ''}`}>
        <div className="monthpicker-cal-header">
          <button className='btn-primary' onClick={() => setCurrentDate(new Date(year - 1, currentDate.getMonth()))}>Prev year</button>
          <span>{year}</span>
          <button className='btn-primary' onClick={() => setCurrentDate(new Date(year + 1, currentDate.getMonth()))}>Next year</button>
        </div>
        <div className="monthpicker-cal-body">
          {Array.from({ length: 12 }).map((_, index) => (
            <button
              key={index}
              className="btn-secondary --small-font"
              onClick={() => handleMonthSelect(index)}
            >
              {new Date(year, index).toLocaleString('default', { month: 'short' })}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthPicker;
