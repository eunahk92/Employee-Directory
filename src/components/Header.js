import React from 'react';
import Form from './Form';

function Header() {
	return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee-Directory</h1>
                <Form />
            </div>
        </div>
	);
};

export default Header;
