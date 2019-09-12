import React, { Component } from "react";
import "./TechList.css";
import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  };

  // call this function on start of component
  componentDidMount() {
    let techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  // call this function on change state or props
  componentDidUpdate(_, prevState) {
    if (prevState.techs != this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }
  // cal this function on component is killed
  componentWillUnmount() {}

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
    console.log(this.state.newTech);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ techs: [...this.state.techs, this.state.newTech] });
    this.setState({ newTech: "" });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t != tech) });
    console.log("Deleted " + tech);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} action="#" className="content">
          <input
            type="text"
            className="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit" className="addBtn">
            Add
          </button>
          <ul className="list">
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
              />
            ))}
          </ul>
        </form>
      </>
    );
  }
}
export default TechList;
