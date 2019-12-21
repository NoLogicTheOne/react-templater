import React from 'react';

import Rows from "./Rows/Rows.js";

import "./Table.css";

const Table = (props) => {
    return (
      <table className="templater__table">
        <thead>
          <tr>
            <th>Keyword</th>
            <th></th>
            <th>Title</th>
            <th>length</th>
            <th>light</th>
          </tr>
        </thead>
        <Rows {...props}/>
      </table>
    );

}

export default Table;
