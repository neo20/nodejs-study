import React from 'react';
import './App.css';
const ThemeContext = React.createContext('light');
const myVar = {
  name:"neo",
  age:20
}
const Container = (props) => {
  return <div className='container'>{props.children}</div>
}
const Child = (props) => {
  return <div className='child'>{props.children}</div>
}
const Inner = (props) => {
  const [state,setState] = React.useState({})
  const upper_it = (v) => {
    setState(v)
  }
  const do_inc = () => {

  }
  return (<div className='inner'>
    <ThemeContext.Consumer >
    {value => upper_it(value) }
    </ThemeContext.Consumer>
    <button onClick={do_inc}>INC</button>
    <p>name:{state.name}</p>
    <p>age:{state.age}</p>
  </div>)
}

function App() {
  return (
    <ThemeContext.Provider value={myVar}>
    <Container>
      <Child >
        <Inner />
      </Child>
    </Container>
    </ThemeContext.Provider>
  );
}

export default App;
