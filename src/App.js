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
      API.getEmployees()
          .then(res => this.setState({ results: res.data.results }))
          .catch(err => console.log(err));
  };
  
  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
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
                  <TableHeader />
                  <TableRow results={this.state.results}/>
                </Table>
              </Wrapper>
          </div>
      );
  }
}

export default App;
