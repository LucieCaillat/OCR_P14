import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DatePicker, Input, Select, InputNumber } from "antd";
import { useState } from "react";
import * as employeesAction from "../features/employees/employeesSlice";

export default function HomePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("unknown");
  const [startDate, setStartDate] = useState("unknown");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("unknown");
  const [department, setDepartement] = useState("");
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="employee-list.html">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            style={{ width: 240 }}
            onChange={(e) => setDateOfBirth(e === null ? "" : e.$d)}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            style={{ width: 240 }}
            onChange={(e) => setStartDate(e === null ? "" : e.$d)}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <Input value={street} onChange={(e) => setStreet(e.target.value)} />

            <label htmlFor="city">City</label>
            <Input value={city} onChange={(e) => setCity(e.target.value)} />

            <label htmlFor="state">State</label>
            <Select
              style={{ width: 210 }}
              defaultValue={state}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
              onChange={(e) => setState(e)}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <InputNumber
              style={{ width: 210 }}
              min={0}
              max={99999}
              onChange={(e) => setZipCode(e)}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Select
            style={{ width: 240 }}
            defaultValue={department}
            options={[
              { value: "Sales" },
              { value: "Marketing" },
              { value: "Engineering" },
              { value: "Human Resources" },
              { value: "Legal" },
            ]}
            onChange={(e) => setDepartement(e)}
          />
        </form>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              employeesAction.add({
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth,
                startDate: startDate,
                street: street,
                city: city,
                state: state,
                zipCode: zipCode,
                department: department,
              })
            );
          }}
        >
          Save
        </button>
      </div>
    </React.Fragment>
  );
}
