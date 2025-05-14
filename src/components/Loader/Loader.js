import { Component } from 'react';
import './Loader.css';

export class Loader extends Component {
  render() {
    const { show } = this.props;
    
    return (
      <div className={`loader ${show ? "visible" : "hidden"}`}>
        <div className="loader-content">
          <div className="spinner"></div>
          <span>Завантаження...</span>
        </div>
      </div>
    );
  }
}