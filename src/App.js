import React, { Component } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import API from "./utils/API";

class App extends Component {
  state = {
    search: "",
    isAsc: false,
    results: []
  };

  componentDidMount() {
    this.getEmployeeList();
  };
  
  getEmployeeList = () => {
    API.getEmployees()
      .then(res => {
        for (let i = 0; i < res.data.results.length; i++) {
          let dob = new Date(res.data.results[i].dob.date);
          res.data.results[i].dob.date = `${dob.getMonth() + 1}-${dob.getDate()}-${dob.getFullYear()}`;
        }
        this.setState({ results: res.data.results })
      }).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  sortNames = () => {
    const newState = { ...this.state };
    if (!newState.isAsc) {
      newState.results = newState.results.sort((a, b) => {
        if (a.name.last === b.name.last) {
          return a.name.first > b.name.first ? 1 : -1
        }
        return a.name.last > b.name.last ? 1 : -1
      });
      newState.isAsc = true;
    } else {
      newState.results = newState.results.sort((a, b) => {
        if (a.name.last === b.name.last) {
          return a.name.first < b.name.first ? 1 : -1
        }
        return a.name.last < b.name.last ? 1 : -1
      });
      newState.isAsc = false;
    }

    this.setState(newState);
  };

  handleKeyPress = event => event.key === "Enter" && event.preventDefault();

  render() {
    return (
        <div>
          <Header />
            <Wrapper>
              <SearchBar
              search={this.state.search}
              handleInputChange={this.handleInputChange}
              handleKeyPress={this.handleKeyPress}
              />
              <Table>
                <TableHeader 
                  sortNames={this.sortNames}
                />
                <TableRow results={this.state.results} />
              </Table>
            </Wrapper>
        </div>
    );
  }
}

export default App;
