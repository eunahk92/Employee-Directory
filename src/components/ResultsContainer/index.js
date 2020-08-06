import React, { Component } from "react";
import SearchBar from "../SearchBar";
import ResultList from "../ResultList";
import API from "../../utils/API";

class Search extends Component {
    state = {
      search: "",
      results: []
    };

    componentDidMount() {
        API.getEmployees()
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList results={this.state.results} />
            </div>
        );
    }
};  

export default Search;