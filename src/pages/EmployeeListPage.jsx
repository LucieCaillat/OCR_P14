import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table, Input } from "antd";
import columns from "../utils/columns";
import { useState } from "react";
const { Search } = Input;

export default function EmployeeListePage() {
  const dataSource = useSelector((state) => state.employees);
  const [data, setData] = useState(dataSource);

  const search = (e) => {
    const value = e.target.value.toUpperCase();
    const newData = dataSource.filter((employee) => {
      const allEntries = Object.entries(employee)
        .map((entrie) => entrie[1])
        .join(" ")
        .toUpperCase();
      return allEntries.includes(value);
    });
    setData(newData);
  };

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <div>
        <div className="search-div">
          <Search
            placeholder="Search"
            onChange={search}
            style={{
              width: 200,
            }}
          />
        </div>
        <Table dataSource={data} columns={columns} rowKey={"id"} />
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}
