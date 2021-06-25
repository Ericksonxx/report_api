import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import report1245 from './245-201708.json';
import report2245 from './245-201708.json';
import reports from './reports.json';
import './details.css';

var report = reports.content;

var report1 = report1245.data;
var col1 = report1245.columns;

var report2 = report2245.data;
var col2 = report2245.columns;


class Details extends Component{
  render() {
    return(
      <div className="con-details">
      <div className="back"><a href="/">Go back</a></div>
        <div className="table1">
        <p className="title-report">Report id:245</p>
        <table>
          <tr>
            <th>{col1.[0]}</th>
            <th>{col1.[1]}</th>
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
                </tr>
                <hr />
              </table>
            </div>
          );
        })
      }
        </div>
        <div className="table2">
        <p className="title-report">Report id:245</p>
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
