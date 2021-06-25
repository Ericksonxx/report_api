import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import reports from './reports.json';
import './list.css';
import moment from 'moment';

const Uno = "1";
var reportList = reports.content;

class List extends Component{
  render() {
    return(
      <div>
        <select>
          <option>{reportList.[0].name}</option>
          <option>{reportList.[1].name}</option>
        </select>
        <p className="Uno">{Uno}</p>
      </div>
    )
  }
}


export default List;
