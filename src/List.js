import React,{ Component , useState} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import reports from './reports.json';
import './list.css';
import moment from 'moment';
import Details41 from './details41';
import DEtails245 from './details245';

var reportList = reports.content;
var i = 0;
var h = 0;



class List extends Component{
  constructor(props) {
  super(props);
  this.state = {
    count: 'Mobile Data Devices',
    countFake:'Landline Accounts'
  }
};
handleChange(e) {
  i = this.state.count;
  this.setState({ count:event.target.value });
  this.setState({countFake:'k'})
};




  render() {
    return(
      <div className = "body">
      <div>
        <select className="filter" onChange={this.handleChange.bind(this)}>
        <option>Select type...</option>
          <option>{reportList.[0].name}</option>
          <option>{reportList.[1].name}</option>
        </select>
        {reportList.name}
      </div>
      <ul>
      {
        reportList
        .filter(reportList =>  ((reportList.name === this.state.count) || (reportList.name === this.state.countFake)))
        .map((s) =>{
          return(
              <div className="con-card" value={s.description}>
                  <div className="card">
                      <div className="title"><p>{s.name}</p><p>ID: {s.id}</p></div>
                      <p>{s.description}</p>
                      <p>{moment(s.modifiedDate).format('DD MMMM YYYY')}</p>
                      <div  className="details"><a href={`/#/${s.id}`}>Details</a></div>
                  </div>
              </div>

          );
        })
      }
      </ul>
      </div>
    )
  }
}


export default List;
