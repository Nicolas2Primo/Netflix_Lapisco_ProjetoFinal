import axios from "axios";

const API_KEY = "c878cb9a3a975654a292054bf90e4adf";
export const IMAGE_HOST = "https://image.tmdb.org/t/p/original/";

export const routes = ["Home", "New", "Movies", "Series", "Cartoon"];

const categories = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
];

export default categories;
