import React, { Component } from "react";

class Login extends Component {
  state = {
    username: ""
    // password: ""
  };

  handleSubmit = () => {
    // e.preventDefaul();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem("userName", username);
    this.props.history.push("/Timeline");
  };

  handleInputChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div
        className="login-wrapper"
        style={{
          margin: "20% auto 0px",
          width: "50%",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <img
          style={{
            width: "100px",
            display: "block"
          }}
          src="https://image.flaticon.com/icons/png/512/1384/1384065.png"
        />

        <form
          onSubmit={this.handleSubmit}
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <input
            style={{ width: "200px", height: "30px" }}
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Nome de Usuário"
          />
          {/* <input
            style={{ width: "200px", height: "30px" }}
            value={this.state.password}
            type="password"
            placeholder="Password"
          /> */}
          <button
            style={{ background: "#1da1f2", width: "200px", height: "30px" }}
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
