
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Home from './views/Home';


const App = () => {
 
  return (
    <>
    <BrowserRouter>
      
      <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
