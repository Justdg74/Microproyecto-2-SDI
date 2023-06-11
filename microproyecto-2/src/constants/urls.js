export const HOME_URL = "/";
export const FAVORITES_URL = "/favorites";
export const LOGIN_URL = "/login";
export const REGISTER_URL = "/register";
export const PROFILE_URL = "/profile";
export const LIST_URL = "/movies";
export const MOVIE_DETAIL_URL = (movieId = ":movieId") =>
  `/movies/${movieId}`;
