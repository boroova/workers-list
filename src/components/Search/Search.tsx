import { useState } from "react";
import { WorkersTable } from "../WorkersTable/WorkersTable";
import { Employee } from "../../models/Employee"; // Ensure this path is correct

export const Search = ({ source }: { source: Employee[] }) => {
  const [string, setString] = useState('');

  const filteredData = source.filter((el) => {
    // Check if any field in the employee object matches the search string
    return Object.values(el).some(value =>
      value.toString().toLowerCase().includes(string.toLowerCase())
    );
  });

  return (
    <>
      <input
        type="search"
        placeholder="Search..."
        className="form-control"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <WorkersTable data={filteredData} />
    </>
  );
};
