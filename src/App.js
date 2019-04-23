import ReactDOM from 'react-dom';
// import App from './App';

import Counter from './components/Counter';
import ButtonComp from './components/ButtonComp';

import React, { Component } from 'react';


class App extends React.Component {
  state = {
    count: 0
  };

  // increment = (e, num) => {
  //   e.preventDefault();
  //   this.setState({
  //     count: num
  //   });
  // };

  updateCount = (e, num) => {
    e.preventDefault();
    this.setState({
      count: num
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Counters FTW 🔥</h1>
        <Counter count={this.state.count} title="Count" />
        <ButtonComp updateCount={this.updateCount} count={this.state.count} />
        <Counter count={this.state.count * 3} title="Count * 3" />
      </div>
    );
  }
}


// ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);




// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//   return 
//     <div>Sanity</div>
//   };
// }

export default App;
