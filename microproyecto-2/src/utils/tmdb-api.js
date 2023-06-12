import axios from 'axios';



const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjMxZTkxNTQyZjJmNGI3Yjc3ZTQzNzA0NGQ1NzYwNiIsInN1YiI6IjY0ODQ4NjcxYzlkYmY5MDBhZDQ1YzZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y1P4hSbxW6MXTg0UagKMMM2d-EtO_oy0p-wzuUidZOk'
  }
};

const axiosInstance = axios.create({
  baseURL: options.url,
  params : options.params,
  headers : options.headers,
});

export async function fetchMovies() {
  return axiosInstance.get("now_playing",options.params,options.headers);
}


export async function fetchMovieById(movieId) {
  return axiosInstance.get(`/${movieId}`,options.params,options.headers);
}

export async function fetchProxMovies() {
  return axiosInstance.get("/upcoming",options.params,options.headers);
}

export async function fetchInfoMovies(movieId) {
  return axiosInstance.get(`/${movieId}/credits`,options.params,options.headers);
  
}

export async function fetchDateMovies(movieId) {
  return axiosInstance.get(`/${movieId}/release_dates`,options.params,options.headers);
  
}






