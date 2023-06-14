import React, {Component } from "react";
import Modal from 'react-bootstrap/Modal';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            phone:"",
            password:"",
            show: false,
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    
    // Методът отваря прозореца за регистрация
    handleShow = e => {
      e.preventDefault()
      this.setState({show : true})
    }

    // Методът затваря прозореца за регистрация
    handleClose = e => {
      e.preventDefault()
      this.setState({show : false})
    }

    handleOnSubmit(e){
      e.preventDefault();
      const {name, email, phone, password} = this.state;
      console.log(name, email, phone, password);
      // връзка към базата от данни
      fetch('http://localhost:5000/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Registration Successful");
        } else {
          alert("Something went wrong");
        }
      });
    }

    render(){
        return (
            <>
            <button onClick={this.handleShow} type="button" class="btn btn-warning" data-toggle="modal" data-target="#sem-reg">
                Signup
            </button>
            
            <Modal
              show={this.state.show}
              onClose={this.handleClose}
              backdrop="static"
              keyboard={false}
            >
              <form  onSubmit = {this.handleOnSubmit} id="signup" class="w-full max-w-sm">
              <Modal.Header>
                <Modal.Title>Signup</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                        Name
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                      id="name" 
                      type="text" 
                      placeholder="name"
                      onChange={(e) => this.setState({name: e.target.value})}
                      />
                    </div>
                  </div>
                  <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
                        Email
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                      id="email" 
                      type="text" 
                      placeholder="email"
                      onChange={(e) => this.setState({email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="phone">
                        Mobile Phone
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                      id="phone" 
                      type="tel" 
                      placeholder="mobile phone"
                      onChange={(e) => this.setState({phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="password">
                        Password
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                      id="password" 
                      type="password" 
                      placeholder="password"
                      onChange={(e) => this.setState({password: e.target.value})}
                      />
                    </div>
                  </div>
              </Modal.Body>
              <Modal.Footer>
                <button class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded" onClick={this.handleClose}>Close</button>
                <button type="submit" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Continue</button>
              </Modal.Footer>
              </form>
            </Modal>
          </>
        ); 
    }
}