import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "antd";
import columns from "../utils/columns";

export default function EmployeeListePage() {
  const dataSource = useSelector((state) => state.employees);

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <Table dataSource={dataSource} columns={columns} rowKey={"id"} />
      <Link to="/">Home</Link>
    </div>
  );
}
