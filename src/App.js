import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class DogHouse extends React.Component {
  constructor(){
    super();
    this.state = {
      dogs : [],
      mode: 'add',
      add : {
        id : 1,
        name : '',
        age : '',
        breed : ''
      },
      edit: null,
      query: ''
    };
    this.commitDog  = this.commitDog.bind(this);
    // this.deleteDog = this.deleteDog.bind(this);
    // this.handleFieldChange =  this.handleFieldChange.bind(this);
    // this.handleDogSelect = this.handleDogSelect.bind(this);
  }
  commitDog(namee,agee,breeed){
    //e.preventDefault();
    this.setState(({dogs,mode,...state}) => {
      let modifiedDogs;
      let newDog = state[mode];

      switch(mode){
        case 'add':
          modifiedDogs = [...dogs,newDog];
          break;
        case 'edit':
          modifiedDogs = dogs.map(dog => (dog.id === newDog.id?newDog : dog));
          break;
        default:
          throw new Error(`Unknown mode ${ mode }`);
      }
      return {
        dogs: modifiedDogs,
        [mode]: (
          mode === 'add' ? {
            id: state[mode].id + 1,
            name : namee,
            age : agee,
            breed : breeed
          } : null
        ),
        mode: 'add'
      };
    });
  }
}

var dh = new DogHouse();
dh.commitDog("bob",7,"dogger");
console.log(dh);
dh.commitDog("alice",3,"doug");


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
