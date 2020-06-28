import React, {Component} from 'react'

export default class GuestHome extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Eyes In The Storm </h2>

        <h3>Add Tyrese's picture here</h3>
        <h3>Add Tyrese's bio here</h3>

        <h2>This is how you can reach me...</h2>
        <h4>Email</h4>
        <p>blahblah@aol.com</p>

        <h4>Instagram</h4>
        <span>Personal Account: </span>
        <a
          style={{display: 'table-cell'}}
          href="https://www.instagram.com/fuggstar/"
          target="blank"
        >
          fuggstar
        </a>
        <br />
        <span>Professional Account: </span>

        <h4>Twitter</h4>
      </div>
    )
  }
}

// maybe add insta feed using : https://instafeedjs.com/#/
//https://www.youtube.com/results?search_query=javascript+blog+tutorial
