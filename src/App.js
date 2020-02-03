import React from "react";
import axios from "axios";
import Movies from "./Movies";
import styled, { css, createGlobalStyle } from "styled-components";
import GlobalStyle from "./GlobalStyle";

// STYLED-COMPONENT
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Loading__txt = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;
const Movie__List = styled.div`
padding: 70px 50px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

// COMPONENT
class App extends React.Component {
  state = {
    isLoading: true
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <>
        <Container>
          <Section>
            {isLoading ? (
              <Loading__txt>
                <span className="loader__text">
                  Please wait API is loaded..sexsex
                </span>
              </Loading__txt>
            ) : (
              <Movie__List>
                {movies.map(movie => {
                  return (
                    <Movies
                      key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                    />
                  );
                })}
              </Movie__List>
            )}
          </Section>
        </Container>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
