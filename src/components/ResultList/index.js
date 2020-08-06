import React from 'react';

function ResultList(props) {
    const { results } = props;
	return (
        <ul className="list-group">
            {results.map(employee => (
                <li className="list-group-item" key={employee.id}>
                    <img alt={employee.title} className="img-fluid" src={employee.images.original.url} />
                </li>
            ))}
        </ul>
	);
};

export default ResultList;
