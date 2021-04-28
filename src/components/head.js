import React from 'react';
// import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
// import SlideRoutes from "react-slide-routes";
import { Route, NavLink, useLocation } from "react-router-dom";
import TopPage from './toppage';
import RouteFarmers from './route_farmers'
import SignUp from './signup';
// import UploadMeat from './upload_meat';

import logo from './../img/logo_kuro.png';
import './head.css'

const Head = () => {
  // 牧場の方のログインボタン
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  // export default function TextButtons() {
    const classes = useStyles();
    // const location = useLocation();

  return (
    <div>
      <div className="head">
        <img src={logo} className="logo" width="120px" alt="logo" />
        <nav className="farmers_btn">
          <NavLink to="/signup">牧場の方はこちら</NavLink>
        </nav>
      </div>
      <div>
        {/* <SlideRoutes location={location} duration={500}> */}
          <Route path="/" component={TopPage} exact />
          <Route path="/signup" component={RouteFarmers} />
        {/* </SlideRoutes> */}
      </div>
    </div>
  )};

  export default Head