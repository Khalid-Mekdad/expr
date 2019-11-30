import React from 'react';
import './App.css';
// import InterActiveMap from './components/interactiveMap'
// import PersonCards from './components/persons'
import Character from './components/char'
class App extends React.Component {

  state = {
    // persons: [
    //   { name: 'khalid', age: 24 },
    //   { name: 'tat7', age: 23 }
    // ],
    // hobbies: 'travelling'
    text: ''
  }

  changeNameHandler = (e, personIndex) => {
    let personss = [...this.state.persons];
    personss[personIndex].name = e.target.value
    this.setState({
      persons: personss
    })
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  RemoveChar = (index)=>{
    const txt =this.state.text.split('');
    txt.splice(index,1);
    const updatedText = txt.join('');
    this.setState({text : updatedText})
  }

  //console.log(this.state)


  render() {

    const textAsChars = this.state.text.split('').map((c, index) => {
      return (
        <Character key={index} char={c} click={()=>this.RemoveChar(index)}></Character>
      )
    })

    return (
      <div className="App">
        {
          <div>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
            {this.state.text.length !== 0 ? this.state.text.length < 5 ? <p>Short text</p> : <p>Long text</p> : null}

            {textAsChars}
          </div>

        }
        {/* <PersonCards name={this.state.persons[0].name} age={this.state.persons[0].age}
  // this.state.persons.map((person,index) => {
  //   return <PersonCards key={index} name={person.name} age={person.age} 
  //   changeName={(e) =>this.changeNameHandler(e,index)}/>
  // })
          changeName={this.changeNameHandler}>
        </PersonCards> */}
        {/* <button onClick={this.changeNameHandler.bind(this,'tommy',27)}>Click Me</button> */}
        {/* <InterActiveMap/> */}



        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}
      </div>
    );
  }
}

export default App;
