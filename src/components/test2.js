import React from 'react';
import Eat from './eat';
import { Route, NavLink } from "react-router-dom";

const Test = () => {
  return (
    <div>
      <nav>
        <NavLink to="/eat">たべる</NavLink>
      </nav>
    </div>
  );
};

const Test2 = () => {
  // const location = useLocation();

  return (
    <div>
        <Route path="/" component={Test} exact />
        <Route path="/eat" component={Eat} />
    </div>
  );
};

export default Test2