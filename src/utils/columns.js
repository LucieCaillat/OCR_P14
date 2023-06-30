function alphabeticSorter(columnName) {
  return (a, b) => a[columnName].localeCompare(b[columnName]);
}
function dateSorter(columnName) {
  return (a, b) => {
    const dateA = new Date(a[columnName]);
    const dateB = new Date(b[columnName]);
    return Number(dateA) - Number(dateB);
  };
}

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    sorter: alphabeticSorter("firstName"),
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    sorter: alphabeticSorter("lastName"),
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    sorter: dateSorter("startDate"),
  },
  {
    title: "Departement",
    dataIndex: "department",
    key: "department",
    sorter: alphabeticSorter("department"),
  },
  {
    title: "Date of Birth",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
    sorter: dateSorter("dateOfBirth"),
  },
  {
    title: "Street",
    dataIndex: "street",
    key: "street",
    sorter: alphabeticSorter("street"),
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    sorter: alphabeticSorter("city"),
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    sorter: alphabeticSorter("state"),
  },
  {
    title: "Zip Code",
    dataIndex: "zipCode",
    key: "zipCode",
    sorter: (a, b) => a.zipCode - b.zipCode,
  },
];

export default columns;
