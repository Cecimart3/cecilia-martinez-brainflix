import { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import UploadPage from './Pages/UploadPage/UploadPage'

class App extends Component {

  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/videos/:id' component={HomePage} />
          <Route path='/UploadPage' component={UploadPage} />
        </Switch>
      </main>
    );
  }   
}

export default App;
