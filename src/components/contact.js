import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2> Rudi Whyte </h2>
          </Cell>
          <Cell col={6}>Hello</Cell>
        </Grid>
      </div>
    );
  }
}
export default contact;
