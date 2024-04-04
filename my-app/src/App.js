import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 8],
  ["Еда", 2],
  ["Учеба", 2],
  ["Дорога", 2],
  ["Сон", 7],
  ["Домашние дела", 2],
  ["Спорт", 1],
];

export const options = {
  title: "Мое расписание",
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"50vw"}
    />
  );
}

export default App;
