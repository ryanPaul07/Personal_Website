import React, {useEffect, useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    overflowY: 'scroll',
    width: '80vw',
    height: '90vh',
    backgroundColor: '#f8f0dc',
    padding: theme.spacing(2, 4, 3),
  },
}));

const useStylesP = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      backgroundColor: '#85d582'
    },
  },
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#85d582',
      fontWeight: 'bold'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#85d582',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#85d582',
      },
      '&:hover fieldset': {
        borderColor: '#85d582',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#85d582',
      },
    },
  },
})(TextField);

function WTR() {
  const classes = useStyles();
  const classesP = useStylesP();
  const [isValid, setIsValid] = useState(false);
  const [password, setPassword] = useState("");
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleClick = (type) => {
    if(type == "legacy") {
      window.open("https://ryanpaul07.github.io/Work_Term_Report/");
    } else {
      setOpen(true);
    }
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleChange = (e) => {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if(password == "wtr") {
      setIsValid(true);
      setPassword("");
    }
  }, [password])

  const body = (
    <div  className={classes.paper}>
      <h2 id="work-term-report-3-4" style={{fontWeight: "bold", color: 'rgb(255 94 94)',fontSize: "1em", paddingBottom: "15px", textDecoration: "underline"}}>Term 3/4: Kenna</h2>
      <div id="work-done-at-kenna" style={{fontSize: "0.55em", fontFamily: "'Roboto Mono', monospace", color: "#7f7e7b"}}>
        <div style={{fontWeight:"bold", fontStyle:"italic", color: "#f5a4a4", paddingBottom:"5px"}}>Introduction</div>
        For my 3rd and 4th work term, I had the pleasure of working at Kenna as a Web application developer. 
        Kenna located in Mississauga, is a market solutions company dedicated to helping businesses create a more 
        seamless and unified experience for their customers. My role involved me working on various projects; 
        however, my focus was on helping to create a better user experience for customers by making simple and 
        elegant websites accessible by everyone. This included making contributions in both the front-end and 
        back-end. 
        <br/>
        <div className="wtr-heading-styling">Goals</div>
        My goals for this internship aligned a lot with the goals Kenna has as a company. As along with my 
        goals of personal growth and gaining more work experience with React, Node and SQL; 
        I wanted to understand the customer more and bring “customer first thinking” into my design and 
        development process. I wanted to reach those goals by working closely with my supervisor and having 
        weekly one on one meetings and daily team meetings to improve my technical skills, but also to be efficient 
        with my time and time management.

        My first goal was to bring design thinking into my development process as at the end of the day we 
        are developing products which are going to be consumed by customers. This was especially important 
        for me to learn now as having this skill will benefit me a lot in the future. By working on various 
        projects which users were going to interact with, I was able to get a better idea of how the customers 
        think and was able to implement those ideas into my design process. 

        My second goal was to improve my technical skills with React, Node and SQL, since this was the 
        technology stack Kenna used and I personally wanted to gain professional experience with these 
        languages as well. Most of the projects I worked on were in React or Node and I also got the chance 
        to work on some SQL as well. This experience will be great for the future as now I feel more confident 
        and comfortable working with these languages.
        <br/>
        <div className="wtr-heading-styling">Project</div>
        I worked on various projects throughout my 8-month term however, I want to highlight my contributions 
        towards the Crop Intentions Webpage.

        The Crop Intentions Webpage was an app which I worked on near the end of my internship, but I believe 
        that it was a project which allowed me to improve my skills massively. I was part of a 5-member team 
        which was tasked with creating a website for customers under a short time frame. Using the requirements 
        given by the account team, I was able to translate tasks into working code in under a short period of 
        time. This allowed me to be more efficient with my code and turn ambiguous requirements into functional 
        and easy to read code. Furthermore, working on a project under a deadline made me improve my communication 
        skills as well. I was more open with the team about the work I did and always communicated my concerns or 
        issues I had with the requirements. This translated into the work being completed faster and bugs being 
        detected sooner. 

        From a technical standpoint I was able to improve my React and state management skills with this project. 
        Since most of the app used dynamic data, I was able to structure the front-end code in a way which would 
        make the app more reusable. This allowed for the app to be easy to maintain with less interdependencies. 
        Furthermore, the app can also be used for many other similar websites as a template since the data is so 
        dynamic. Working through this project allowed me to work with a lot of data and learn how to manage and 
        present that data is a user friendly fassion. 

        Finally, I also wanted to improve my communication skills as this is an area, I still feel like I am 
        lacking in. Working at Kenna allowed me to reach this goal and open-up more as I always had the opportunity
        to work on different projects with new people. Having the experience of working with many different people
        naturally helped me improve my communication skills and my overall soft skills as I was always in 
        conversation with different people throughout my internship. I believe that this skill will be very 
        important for me in the future as being able to express myself and communicate my concerns effectively 
        will allow me to become a better programmer. 
        <br/>
        <div className="wtr-heading-styling">Conclusion</div>
        Overall, my time spent at Kenna allowed me to greatly improve my skills as a developer and as a person. 
        I got the opportunity to work with some amazing people who were dedicated and passionate about the work 
        they did. This translated within the work environment and made even an online workplace fun. I was able 
        to achieve the goals I set out for myself, but also learned some new skills which I didn’t know about 
        before. In the end this opportunity allowed me to become more confident in myself as a developer through 
        the valuable experience and gave me the platform to continue to grow. 
        <br/>
        <div className="wtr-heading-styling">Acknowledgements</div>
        Nicholas Paul, Tom Palos, Joel Levinson, Andrew McCallum, Werner Anders, Manish Lakhotia, Apurv 
        Samant, Kaustubh Jaju
      </div>
    </div>
  );

  return (
    <Container maxWidth="md">
      <div className="page-styling">
        <p className="main-heading" style={{color: '#85d582', paddingBottom: "15px"}}>Work Term Report</p>
        {isValid == false
        ? 
          <div style={{marginLeft: "20px"}}>
            <form className={classes.root} noValidate autoComplete="off">
            <CssTextField id="standard-basic" label="Password" type="password" onChange={handleChange}/>
            </form>
          </div>
        :
          <div className="text-box">
            <Card className="card-styling" style={{display:"inline-block"}} onClick={() => handleClick("legacy")}>
              <CardContent className="card-box-styling" style={{padding:"10px"}}>
                <div style={{fontWeight: "bold", color: 'rgb(251 128 65)', display:"flex", fontSize: "0.8em"}}><p style={{marginRight:"5px"}}>TERM 1/2</p><p style={{color:"rgb(214 203 199)"}}>(Old Website)</p></div>
              </CardContent>
            </Card>
            <Card className="card-styling" style={{display:"inline-block"}} onClick={() => handleClick("modal")}>
              <CardContent className="card-box-styling" style={{padding:"10px"}}>
                <div style={{fontWeight: "bold", color: 'rgb(255 94 94)',fontSize: "0.8em"}}>TERM 3/4</div>
              </CardContent>
            </Card>
          </div>
        }
        
        <Modal 
          open={open} 
          onClose={handleClose} 
          aria-labelledby="work-term-report-3-4"
          aria-describedby="work-done-at-kenna"
          style={modalStyle}
        >
          {body}
        </Modal>
      </div>
    </Container>
  );
} 

export default WTR;