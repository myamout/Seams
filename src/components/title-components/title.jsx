import React from 'react';

export default class Title extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "SEAMS"
    };
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-12">
            <h1 className="center"> {this.state.title} </h1>
          </div>
        </div>
      </div>
    );
  }
}