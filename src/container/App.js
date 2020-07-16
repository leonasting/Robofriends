 import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {connect} from 'react-redux';
import {setSearchField} from '../action';
//import {robots} from './robots'
import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField:state.searchField
  }


}
const mapDispatchToProps = (dispatch) => {
  return {
  onSearchChange:(event) => dispatch(setSearchField(event.target.value))
  }
}
class App extends Component {

   constructor(){
      super();
      this.state={
        //robots:robots,
        robots:[]
//        searchField:''

      }

    }
//    onSearchChange= (event)=>{
//      this.setState({searchField:event.target.value})
    //console.log(event.target.value);


//    }
    componentDidMount()
    {
      //console.log(this.props.store.getState());
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json() )
      .then(users => this.setState({robots:users}))
    }

    render(){
      const { robots }=this.state;
      const {searchField,onSearchChange} =this.props;
      const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());

      });
      if (this.state.robots.length===0){
        return <h1>Loading</h1>

      }

      else {

    return (
    <div className='tc'>
    <h1 className='tc'>RoboFriends</h1>
    <SearchBox  searchChange = {onSearchChange}/>
    <Scroll>
    <CardList robots={filteredRobots}/>
    </Scroll>
    </div>
    );
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
