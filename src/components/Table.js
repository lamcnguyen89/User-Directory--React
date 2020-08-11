import React from "react";
import Columns from "./Columns";

function Table({headings, filteredUsers}) {
    return (
      <div className="table">
        <table
          id="table"
          className="table"
        >
          <thead>
            <tr>
              {headings.map(({columnName, columnWidth}) => {
                return (
                  <th
                    className="col"
                    key={columnName}
                    style={{columnWidth}}
                  >
                    {columnName}
                  </th>
                );
              })}
            </tr>
          </thead>
          <Columns filteredUsers={filteredUsers} />
        </table>
      </div>
    );
  }
  
  export default Table;

