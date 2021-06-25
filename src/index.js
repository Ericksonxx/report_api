import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import List from './List';
import Filter  from './Filter';
import Details41 from './Details41';
import Details245 from './Details245';



const HelloWorld = () => {
  return(
    <HashRouter>
    <div>
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route exact path="/41">
          <Details41 />
        </Route>
        <Route exact path="/245">
          <Details245 />
        </Route>
      </Switch>
    </div>
    </HashRouter>
  )
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
