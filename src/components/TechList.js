import React, { Component } from "react";

import TechItem from "../components/TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techList: []
  };

  componentDidMount() {
    const techList = localStorage.getItem('techList');

    if (techList) {
      this.setState({ techList: JSON.parse(techList) });
    }
  }

  componentDidUpdate(_, { techList }) {
    if (techList !== this.state.techList) {
      localStorage.setItem('techList', JSON.stringify(this.state.techList));
    }
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techList: [...this.state.techList, this.state.newTech],
      newTech: ""
    });
  };

  handleTechItemDelete = tech => {
    const newTechList = this.state.techList.filter(t => t !== tech);

    this.setState({ techList: [...newTechList] });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techList &&
              this.state.techList.map(tech => (
                <TechItem
                  key={tech}
                  tech={tech}
                  onDelete={() => this.handleTechItemDelete(tech)}
                />
              ))}
          </ul>

          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.newTech}
          />
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

export default TechList;
