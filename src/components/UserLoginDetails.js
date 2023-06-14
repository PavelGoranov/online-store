import React, { Component } from "react";

export default class UserLoginName extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount(){
    fetch('http://localhost:5000/userData', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token")
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({userData: data.data});
      });
  }

  logOut=()=> {
    window.localStorage.clear();
    window.location.href="./components/Login"
  }

  render() {
      return(
          <div class="w-72">
            <input
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              disabled="true"
              placeholder="Name"
              value={this.state.userData.name}
            />
            <input
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              disabled="true"
              placeholder="Email"
              value={this.state.userData.email}
            />
            {/* Добавяме бутон за отписване*/}
            <button onClick={this.logOut} type="button" class="btn btn-danger" data-toggle="modal" data-target="#sem-logout">
              Logout
            </button>
          </div>
      );
  }
}