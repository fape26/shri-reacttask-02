import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Settings from './components/Settings';



function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/settings" component={Settings}/>
          <Redirect to={"/"}></Redirect>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;