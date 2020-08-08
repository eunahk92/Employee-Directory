import React from 'react';

const TableHeader = props => {
	return (
        <thead className="thead-light">
            <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name 
                    <i type="button" className="fas fa-caret-down" onClick={() => props.sortNames()}></i></th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
            </tr>
        </thead>
	);
};

export default TableHeader;