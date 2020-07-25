import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "./Movie";
import "./App.css"
class App extends Component {

 
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); // ?sort_by=rating  어떻게 사용할 수 있는 건지 알아보기
    console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  }

  componentDidMount() {
    // setTimeout(() => {// 자바스크립트의 함수 
    //   this.setState({ isLoading: false });
    // }, 3000);// 
    // fetch()  이렇게 호출할 수 있지만 더 좋은 방법을 사용하도록 하겠다. 
    this.getMovies();
  }

  render() {

    const { isLoading, movies } = this.state; //이렇게 표현할 수 있는 것도 알아두자. 이렇게 정보를 뺴올 수도 있다. 

    return (

      <section className="container">

        {isLoading ? 
        
        <div class="loader">
          <span className="loader__text">Loading...</span>
        </div> 

        :

        <div className="movies">
         {movies.map(movie => {

          return (<Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}></Movie>);

        })}
        
        </div>
  }
  

      </section> //자바스크립트 코드

    );
  }
}

// App.propTypes = {

// };

export default App;