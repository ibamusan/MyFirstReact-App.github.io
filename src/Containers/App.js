import React, {Component} from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
// import {robots} from './robots';
import '../Containers/App.css';

class App extends Component {

	constructor(){

		super();

		this.state={
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users=> this.setState({ robots: users}))

	}

	onSearchChange =(event) =>{
		this.setState({ searchfield: event.target.value})

	}

	render(){

		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if(this.state.robots.length === 0){

			return <h1>Loading</h1>
		}

		else{

				return (
					<div className='tc'>
						<h1>RobotsFriends</h1>
						<Searchbox searchChange={this.onSearchChange}/>
						<Scroll>
						<CardList robots={filteredRobots}/>
						</Scroll>
						<h1>This is Awesome, I am so happy I made it here!!!.</h1>
					</div>
					);

			}

	}
}

export default App;