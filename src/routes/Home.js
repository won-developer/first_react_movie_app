import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import styled from "styled-components";

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
const Loading = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;
const Movies = styled.div`
  padding: 70px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

// COMPONENT
class Home extends React.Component {
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
              <Loading>
                <span>API를 불러 오는 중 입니다..</span>
              </Loading>
            ) : (
              <Movies>
                {movies.map(movie => {
                  return (
                    <Movie
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
              </Movies>
            )}
          </Section>
        </Container>
      </>
    );
  }
}

export default Home;
