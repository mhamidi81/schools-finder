import React from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ schools: users}))
      .catch(error => console.log('Error occured when fetching data from server', error))
  }

  handleChange = (e) => {
    this.setState({ searchText: e.target.value });
  }

  render() {

    const { schools, searchText } = this.state;
    const filteredSchools = schools.filter( (school) => school.name.toLowerCase().includes(searchText.toLowerCase()))

    return(
      <div className="App">
        
        <h1> List of schools </h1>

        <SearchBox placeholder='Search Schools..' handleChange={ e => this.handleChange(e) } />
        
        <CardList schools={ filteredSchools } />

      </div>
    )
  }
}
