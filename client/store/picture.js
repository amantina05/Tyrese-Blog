import axios from 'axios'
import {combineReducers} from 'redux'

/**
 * ACTION TYPES
 */
const GET_PICTURES = 'GET_PICTURES'
const GET_SINGLE_PICTURE = 'GET_SINGLE_PICTURE'

/**
 * ACTION CREATORS
 */
const gotPictures = pictures => ({
  type: GET_PICTURES,
  pictures
})

/**
 * THUNK CREATORS
 */

export const getAllPictures = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/pictures')
      dispatch(gotPictures(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const getSinglePicture = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/picture/${id}`)
      dispatch(gotSinglePicture(data))
    } catch (error) {
      console.error(error)
    }
  }
}

/**
 * REDUCERS
 */

function allPicturesReducer(pictures = [], action) {
  switch (action.type) {
    case GET_PICTURES:
      return action.pictures
    default:
      return pictures
  }
}
function singlePictureReducer(picture = {}, action) {
  switch (action.type) {
    case GET_SINGLE_PICTURE:
      return action.picture
    default:
      return picture
  }
}

const rootReducer = combineReducers({
  allPictures: allPicturesReducer,
  singlePicture: singlePictureReducer
})

export default rootReducer
