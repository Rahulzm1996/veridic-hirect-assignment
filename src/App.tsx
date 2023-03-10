import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Posts from "./Posts";
import NoPageFound from "./NoPageFound";
import Post from "./Post";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        {/* <Route exact path="/">
          <Post />
        </Route> */}
        <Route path="*">
          <NoPageFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
