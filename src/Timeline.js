import React, { Component } from "react";
import api from "./services/api";
import md5 from "js-md5";
import Card from "./Card";

class Timeline extends Component {
  state = { tweets: [], newTwete: "" };

  async componentDidMount() {
    const PUBLIC_KEY = "f99108ba3a1645f6e1cb3768b4beb983";
    const PRIVATE_KEY = "2813652d1acc25e4898ef6a8019fb00c29a5ff9a";
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
    );
    const responseJson = await response.json();
    this.setState({ tweets: responseJson.data.results });
  }

  handleNewTwete = async (e) => {
    if (e.keycode !== 13) return;
    const nome = this.state.newTwete;
    const senha = localStorage.getItem("userName");

    await api.post("sala", { nome, senha });

    this.setState({ newTwete: "" });
  };

  handleInputChange = (e) => {
    this.setState({ newTwete: e.target.value });
  };
  render() {
    return (
      <div
        style={{
          margin: "20% auto 0px",
          width: "50%",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "100px",
            display: "block",
          }}
          src="https://image.flaticon.com/icons/png/512/1384/1384065.png"
        />
        <form
          style={{
            margin: "20% auto 0px",
            width: "50%",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <textarea
            value={this.state.newTwete}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTwete}
            style={{ height: "127px", width: "600px" }}
            placeholder="O que está acontecendo?"
          />
        </form>
        {this.state.tweets.map((twette) => (
          <Card
            title={twette.name}
            descriptopn={twette.description}
            date={twette.modified}
            style={{ marginTop: "50px", marginBottom: "50px" }}
          />
        ))}
      </div>
    );
  }
}

export default Timeline;
