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

  sortAscOrder = () => {
    let employeesArr = this.state.results;
    let empsByAsc = employeesArr.sort((a, b) => a.name.last > b.name.last ? 1 : -1);
    this.setState({ results: empsByAsc});
  };

  render() {
    return (
        <div>
          <Header />
            <Wrapper>
              <SearchBar
              search={this.state.search}
              handleInputChange={this.handleInputChange}
              />
              <Table>
                <TableHeader 
                  sortAscOrder={this.sortAscOrder}
                />
                <TableRow results={this.state.results} />
              </Table>
            </Wrapper>
        </div>
    );
  }
}

export default App;
