import React, { Component } from "react";
import Content from "./components/content";
import Nav from "./components/nav";
import social from "./social.json";
import Grid from '@material-ui/core/Grid';
import "./App.css";

class App extends Component {

  state = {
    social,
    pick: [],
    score: 0,
    highlight: ""
  }

  handleSelect = id => {
    if (this.state.pick.indexOf(id) === -1) {
      this.state.pick.push(id)
      this.setState({score: this.state.score + 1, highlight: 'blue'})
      setTimeout(() => {
        this.setState({highlight: ""})
      }, 200)
    } else {
      this.setState({score: 0, pick: [], highlight: 'red'})
      setTimeout(() => {
        this.setState({highlight: ""})
      }, 400)
    } 
    const social = this.state.social.sort(() => 0.5 - Math.random())
    this.setState({ social })
  }


  render() {
    return (
    <>
      <Nav 
      score={this.state.score}
      highlight={this.state.highlight}
       />
      <Grid
        container 
        justify="space-around"
        alignContent="center" >   
      {this.state.social.map(i => 
      <Content
        handleSelect = {this.handleSelect}
        key = {i.id}
        id={i.id}
        image={i.image}
      />
        )}
      </Grid>
    </>
    )
  }
};

export default App;