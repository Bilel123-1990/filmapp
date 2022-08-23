
import React, {useState, useEffect} from "react";
import axios from "axios";
import MovieCard from "../../components/layout/movieCard"



export default function ListMovies() {
  const [listfilm, setListfilm] = useState([]);
  const [error, setError] = useState(null);  
  
  
 
  const getMovieRequest = async () => {
      const url = "http://omdbapi.com/?s=marvel&apikey=339b64b7";
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      setListfilm(responseJson.Search);
    };
  
    useEffect(() => {getMovieRequest()}, []);
  
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "31d22a1a74mshced98b321ccbfb9p170badjsnf821ac5cc879",
  //     "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  //   },
  // };



  //   useEffect(() => {
  //   fetch(
  //     "http://omdbapi.com/?s=marvel&apikey=339b64b7"
  //   )
  //     .then((response) => response.json())
  //     // .then((response) => setListfilm(response.d))
  //     .then((response) => console.log(response))
      
  //     .catch((err) => {
  //       setError(err.message);
        
  //     })
  // }, []);
  return (
  <div className="grid">
    
    {listfilm.map((movie,index)=>{
      return(
        <MovieCard 
        key={index}
         image={movie.Poster}
         
        />
      )
    })}
    
    </div>
    );
};


// const options = {
  //   method: 'GET',
  //   url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
  //   params: {q: 'game of thr'},
  //   headers: {
  //     'X-RapidAPI-Key': 'c56c406df7msh9c2302d82e1f665p18f703jsn3f9e6ac6899e',
  //     'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  // 	console.log(response.data);
  // }).catch(function (error) {
  // 	console.error(error);
  // });
    