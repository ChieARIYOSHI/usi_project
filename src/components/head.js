import React from 'react';
import ReactDOM from 'react-dom';
import logo from './../img/logo_kuro.png';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SlideRoutes from "react-slide-routes";
import { Route, NavLink, useLocation } from "react-router-dom";
import TopPage from './toppage';
import SignUp from './signup';
// import UploadMeat from './upload_meat';

import './head.css'

// ナビゲーションボタン
const options = [
  'Usi Project について',
  '食べる',
  '育てる',
  '問い合わせ',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    const location = useLocation();

  return (
    <div>
      <div className="head">
        <img src={logo} className="logo" width="120px" alt="logo" />
        <nav className="farmers_btn">
          <NavLink to="/signup">牧場の方はこちら</NavLink>
        </nav>
        <IconButton
          className="navi_btn"
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
        <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div>
        <SlideRoutes location={location} duration={500}>
          <Route path="/" component={TopPage} exact />
          <Route path="/signup" component={SignUp} />
        </SlideRoutes>
      </div>
    </div>
  ); 
};