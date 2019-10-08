import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: 'cladams0203',
      userData: [],
      followers: []
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        this.setState({
          userData: response.data
        })
      })
      .catch(error => console.log(error))
    }

  render() {
    return(
      <div>
        <h1>GitHub</h1>
        <UserCard userData={this.state.userData} />
      </div>
    )
  }
}

export default App;