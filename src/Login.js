import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Auth } from "aws-amplify";



//using usestate hooks to store what users enter in form
//then we connect state to our two fields in the form(setemail,setpass) functions to store what users type in
//then we are setting form controls to show the value of our two variables(email,pass)
//validateform checks if our forms are empty

class Apii extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

      fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(json => {
        this.setState({
            isLoaded: true,
            items: json,
        })
      });
  }

  render(){

    var { isLoaded, items } = this.state;

    if(!isLoaded){
      return <div>Loading...</div>;
    }

    else{

    return (

      <div className ="Apii">
            Data has been loaded
      </div>

    );
  }
  
}
}


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  //changing previous handlesubmit method with this one
  async function handleSubmit(event) {
  event.preventDefault();

  try {
    await Auth.signIn(email, password);
    alert("Logged in");
  } catch (e) {
    alert(e.message);
  }
}

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );

  
}

