import { FC } from "react";

interface IOption {
  name: string,
  value: string
}

const options: IOption[] = [
  { name: "All", value: "1"},
  { name: "Listed recently", value: "2"},
  { name: "Projects", value: "3"},
  { name: "Other", value: "4"},
  { name: "In trand", value: "5"},
  { name: "With rewards", value: "6"},
];

const SelectDashboard: FC = () => {
  return (
    <div className="container flex justify-end">
      <select>
        {options.map((option: IOption) => <option value={option.value}>{option.name}</option>)}
      </select>
    </div>
  );
};

export default SelectDashboard;
