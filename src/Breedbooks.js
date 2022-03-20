import React from 'react';

import axios from 'axios';

export default class Breedbooks extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://dev3.bbdev.me:4443/`)
      .then(function (response) {
        console.log(response);
      })
  }

  render() {
    return (
      <ul>
        <li>sdasd</li>
        <li>222</li>
      </ul>
    )
  }
}