import Modal from 'react-bootstrap/Modal';
import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      show: false,
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow = e => {
    e.preventDefault()
    this.setState({ show: true })
  }

  handleClose = e => {
    e.preventDefault()
    this.setState({ show: false })
  }

  handleOnSubmit(e){
    e.preventDefault();
    const {email, password} = this.state;
    console.log(email, password);
    fetch('http://localhost:5000/login-user', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLogin");
        if (data.status === "ok") {
          alert("Login Successful");
        window.localStorage.setItem("token", data.data);
        //window.localStorage.setItem("loggedIn", true);
        window.location.href="./UserLoginDerails";
        } else {
          alert("Something went wrong");
        } 
      });
  }


  render() {
    return (
      <>
        <button onClick={this.handleShow} type="button" class="btn btn-info" data-toggle="modal" data-target="#sem-login">
          Login
        </button>


        <Modal
          show={this.state.show}
          onClose={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <form onSubmit = {this.handleOnSubmit} id="login" className="w-full max-w-sm">
            <Modal.Header>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
                    Email
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="name" 
                  type="text" 
                  placeholder="email" 
                  onChange={(e) => this.setState({email: e.target.value})}
                  />
                  <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="password">
                    Password
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="password" 
                  type="password" 
                  placeholder="password"
                  onChange={(e) => this.setState({password: e.target.value})} 
                  />
                  <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded" onClick={this.handleClose}>Close</button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" form="login">Continue</button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
}
