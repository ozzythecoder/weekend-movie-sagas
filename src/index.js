// React & Redux imports
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Saga middleware imports
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// module imports
import App from './components/App/App.js';
import './index.css';

// rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_GENRES', fetchAllGenres);
  yield takeEvery('FETCH_GENRE_BY_MOVIE', fetchGenreByMovie)
  yield takeEvery('ADD_MOVIE', addMovie)
}

// get all movies from the DB
function* fetchAllMovies() {

  try {
    const movies = yield axios.get('/api/movie');
    yield put({ type: 'SET_MOVIES', payload: movies.data });
  } catch (err) {
    console.log('Error getting movie data.', err);
    alert('Error getting movie data.')
  }
}

// get a list of all genres from DB
function* fetchAllGenres() {
  try {
    const genres = yield axios.get('/api/genre');
    yield put({ type: 'SET_GENRES', payload: genres.data })
  } catch (err) {
    console.log('fetchAllGenres error', err);
    alert('Error getting movie genre data.')
  }
}

// get all genres for a particular movie by ID
function* fetchGenreByMovie(action) {
  try {
    const genres = yield axios.get('/api/genre/' + action.payload);
    yield put({ type: 'SET_THIS_GENRES', payload: genres.data })
  } catch (err) {
    console.log('fetchGenreByMovie error', err);
    alert('Error getting movie genre data.')
  }
}

// add a movie to the DB
function* addMovie(action) {
  try {
    yield axios.post('/api/movie', action.payload)
  } catch (err) {
    console.log('addmovie', err);
    alert('Error adding movie to database.')
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// global state, list of all movies
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// global state, genres for selected movie
const thisMovieGenre = (state = [], action) => {
  switch (action.type) {
    case 'SET_THIS_GENRES': return action.payload;
    default: return state;
  }
}

// global state, list of all genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// store and reducer combination
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    thisMovieGenre
  }),
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
