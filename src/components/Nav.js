import React, {useEffect} from 'react';

import '../App.css';

import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
// import Paper from '@material-ui/core/Paper';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
// import { Button } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
// import { style } from '@material-ui/system';
// import Typography from '@material-ui/core/Typography';

let NavColor = ["#1A5A8E","#4295db","#491d8b","#c11717","#FFE24D","#a35fe6"]; //green #85d582, yellow #e6cd5f // ,"#85d582" about styling, // green "#85d582"

// dark blue #1c36ad
// dark red #c11717

function Nav(props) {
  // const navStyle = {
  //   //textDecoration: "none",
  //   //color: "white"
  // };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const getStyle = theme => ({
  //   mainIndicator: {
  //     width: 40,
  //     display: "flex",
  //     justtifyContent: "center"
  //   },
  // });


  const StyledTabs = withStyles({
    indicator: {
      fontWeigth: 'bold',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      width: '100%',
      '& > span': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: NavColor[0],
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
  const StyledTab = withStyles((theme) => ({
    root: {
      fontWeigth: 'bold',
      color: NavColor[0],
      '&:focus': {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);


  useEffect(() => {
    var page = window.location.href.split('/');

    switch(page[page.length-1]) {
      case 'home':
        setValue(0);
        break;
      case 'projects':
        setValue(1);
        break;
      case 'about':
        setValue(2);
        break;
      case 'contact':
        setValue(4);
        break;
      default:

    }

  }, [])

  return (
    <div role="Navigation" aria-label="Main">
        {/* <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: '#635ee7' }}}>
          <Tab value={0} label="Ryan Paul" to="/" disableRipple component={Link} />
          <Tab value={1} label="About" to="/about" disableRipple component={Link}/>
          <Tab value={2} label="Projects" to="/projects" disableRipple component={Link}/>
          <Tab value={3} label="Contact" to="/contact" disableRipple component={Link}/>
        </Tabs> */}

        <StyledTabs  value={value} onChange={handleChange} >
          <StyledTab style={{fontWeight: "bold", textTransform: 'none'}} label="Home" name="ryanpaul" to="/" component={Link} />
          <StyledTab style={{fontWeight: "bold", textTransform: 'none'}} label="Projects" to="/projects" component={Link}/>
          <StyledTab style={{fontWeight: "bold", textTransform: 'none'}} label="About" to="/about" component={Link}/>
          {/* <StyledTab label="Design" to="/design" component={Link}/>
          <StyledTab label="WTR" to="/wtr" component={Link}/>
          <StyledTab label="Contact" to="/contact" component={Link}/> */}
            {/* <Button style={{justifySelf: 'flex-end', backgroundColor: '#e6695f', color: '#fffcf7', height: '35px', margin: '10px 0px 0px 0px'}}>Resume</Button> */}
        </StyledTabs>
        
        
    </div>
  );
} 

export default Nav;


