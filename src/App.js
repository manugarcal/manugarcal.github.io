
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import NotFound from './views/NotFound';

const App = () => {
  const [state, setState] = useState({
    user: null,
  });

const getUser = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      ...state,
      user: data,
    });
  }catch(error){
    console.error(error.message);
  }
};
useEffect(() =>{
  getUser("https://api.github.com/users/manugarcal")
}, [])

  return (
    <>
    <BrowserRouter>
    <Header user={state.user} />
      <div class="main-wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
