import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

//import {robots} from './robots'
import './App.css';

class App extends Component {
    constructor(){
      super();
      this.state={
        //robots:robots,
        robots:[],
        searchfield:''

      }

    }
    onSearchChange= (event)=>{
      this.setState({searchfield:event.target.value})
    //console.log(event.target.value);


    }
    componentDidMount()
    {
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json() )
      .then(users => this.setState({robots:users}))
    }

    render(){
      const { robots,searchfield }=this.state;
      const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

      });
      if (this.state.robots.length===0){
        return <h1>Loading</h1>

      }

      else {

    return (
    <div className='tc'>
    <h1 className='tc'>RoboFriends</h1>
    <SearchBox  searchChange = {this.onSearchChange}/>
    <Scroll>
    <CardList robots={filteredRobots}/>
    </Scroll>
    </div>
    );
    }
  }
}
export default App
