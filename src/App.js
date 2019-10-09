import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';
import Followers from './components/Followers';

import './App.css';
import { Container } from './styles';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: 'cladams0203',
      userData: [],
      getFollowers: false,
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
    componentDidUpdate(prevProps,prevState) {
      if(this.state.getFollowers !== prevState.getFollowers) {
        axios.get(`https://api.github.com/users/${this.state.user}/followers`)
          .then(response => {
            console.log(response.data)
            this.setState({followers: response.data})
            
          })
          .catch(error => console.log(error))
      }
    }
    
    handleFollowerChange = () => {
     this.setState({ getFollowers: true})
  }

  render() {
    return(
      <Container>
        <h1>GitHub User Info</h1>
        <UserCard userData={this.state.userData} handleFollowerChange={this.handleFollowerChange} />
        <Followers followers={this.state.followers} />
      </Container>
    )
  }
}

export default App;
