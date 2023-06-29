const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "Departement",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Date of Birth",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
  },
  {
    title: "Street",
    dataIndex: "street",
    key: "street",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Zip Code",
    dataIndex: "zipCode",
    key: "zipCode",
    sorter: (a, b) => a.zipCode - b.zipCode,
  },
];

export default columns;
