//npm install axios
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// const TMDB_API_KEY = '948c9eb08635b5d08cc7dd3d37be71c0';

const TMDB_ACCES_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDhjOWViMDg2MzViNWQwOGNjN2RkM2QzN2JlNzFjMCIsInN1YiI6IjY1ZTk1Y2ZmNmJlYWVhMDE4Njc5YTAxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cRsbqf7JZOZVhw6E-vWQOr41-K2sGAVvZLsZ54SducA';

const pathname = '/trending/movie/day';

const options = {
  headers: {
    Authorization: `Bearer ${TMDB_ACCES_TOKEN}`,
  },
};

export const getMovies = async () => {
  try {
    const response = await axios.get(pathname, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

export const getMovieById = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by Id', error);
    throw error;
  }
};

export const getCredits = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching credits', error);
    throw error;
  }
};

export const getReviews = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews', error);
    throw error;
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(`/search/movie?query=${query}`, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies by query', error);
    throw error;
  }
};
