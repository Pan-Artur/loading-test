import React, { Component } from 'react';
import './App.css';
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.loadingTimeout = setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="App">
        <Loader show={isLoading} />
        
        {!isLoading && (
          <div className="content fade-in">
            <h1>Ласкаво просимо на сайт!</h1>
            <p>Тут основний вміст вашої сторінки.</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;