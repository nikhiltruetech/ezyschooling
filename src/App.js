import { Router, Route, Switch } from 'react-router-dom';
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Home";
import { history } from './Components/config/history'
import SinglePost from './Components/Home/SinglePost';
const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={SinglePost} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
