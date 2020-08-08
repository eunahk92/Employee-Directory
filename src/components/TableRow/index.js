import React from 'react';

const TableRow = ({ filteredResults }) => {
    return (
        <tbody>
            {filteredResults.map(emp => (
                <tr key={emp.id.value}>
                    <th scope="row"><img src={emp.picture.thumbnail} alt={emp.name.first} className="img-thumbnail" /></th>
                    <td>{emp.name.last}, {emp.name.first}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.email}</td>
                    <td>{emp.dob.date}</td>
                </tr>
            ))}
        </tbody>
    );
};

export default TableRow;