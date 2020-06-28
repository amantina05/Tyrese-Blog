import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllPictures} from '../store'
import {Link} from 'react-router-dom'

class Photos extends Component {
  componentDidMount() {
    this.props.getAllPictures()
  }

  render() {
    const {pictures} = this.props
    return (
      <div>
        <h2>Here are my most recent collection of photos:</h2>

        {pictures.map(picture => {
          return (
            <ul key={picture.id}>
              <img src={picture.pictureUrl} width="190" height="190" />
              <Link to={`/pictures/${picture.id}`}>
                <p>{picture.name}</p>
                <p>{picture.description}</p>
              </Link>
            </ul>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pictures: state.picture.allPictures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPictures: () => dispatch(getAllPictures())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
