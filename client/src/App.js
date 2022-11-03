import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateActivity from './components/CreateActivity'
import Details from './components/Details';
import Error404 from './components/Error404';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/home' component={Home}/>
      <Route path="/countries/:id" component={Details} />
      <Route path='/activities' component={CreateActivity}></Route>
      <Route path='*' component={Error404}></Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
