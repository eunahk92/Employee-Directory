import React from 'react';

const TableHeader = () => {
	return (
        <thead className="thead-light">
            <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
            </tr>
        </thead>
	);
};

export default TableHeader;