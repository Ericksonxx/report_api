import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import report141 from './41-201708.json';
import report241 from './41-201708.json';
import reports from './reports.json';
import './details.css';

var report = reports.content;

var report1 = report141.data;
var col1 = report141.columns;

var report2 = report241.data;
var col2 = report241.columns;


class Details extends Component{
  render() {
    return(
      <div className="con-details">
      <div className="back"><a href="/">Go back</a></div>
        <div className="table1">
        <p className="title-report">Report id:41</p>
        <table>
          <tr>
            <th>{col1.[0]}</th>
            <th>{col1.[1]}</th>
            <th>{col1.[2]}</th>
          </tr>
          <hr />
        </table>
      {
        report1.map((s) =>{
          return(
            <div>
              <table>
                <tr>
                  <td>{s.[0]}</td>
                  <td>{s.[1]}</td>
                  <td>{s.[2]}</td>
                </tr>
                <hr />
              </table>
            </div>
          );
        })
      }
        </div>
        <div className="table2">
        <p className="title-report">Report id:41</p>
        <table>
          <tr className="tr2">
            <th>{col2.[0]}</th>
            <th>{col2.[1]}</th>
            <th>{col2.[2]}</th>
          </tr>
          <hr />
        </table>
      {
        report2.map((s) =>{
          return(
            <div>
              <table>
                <tr>
                  <td>{s.[0]}</td>
                  <td>{s.[1]}</td>
                  <td>{s.[2]}</td>
                </tr>
                <hr />
              </table>
            </div>
          );
        })
      }
        </div>


      </div>
    )
  }
  }






//  <table>
    //<tr>
      //<th>{col.[0]}</th>
      //<th>{col.[1]}</th>
    //  <th>{col.[2]}</th>
  //  </tr>
//    <tr>
  //    <td key={key}>{report1..[0]}</td>
    //</tr>
//<tr>
//</tr>
//</table>





//    <p>{report1.[1].[1]}</p>

export default Details;
