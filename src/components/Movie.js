import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as a } from "react-router-dom";

// STYLED-COMPONENT

const Link = styled(a)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const MovieBox = styled.div`
  background-color: #fff;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  margin: 0 30px 60px 30px;
  width: 40%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Img = styled.img`
  max-width: 150px;
  position: relative;
  top: -50px;
  margin-right: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  opacity: 0.8;
`;
const Summary = styled.p`
  opacity: 0.7;
  font-size: 0.8rem;
  margin-top: 30px;
  width: 100%;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2rem;
  height: 4.8rem; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
`;
const Year = styled.h3`
  opacity: 0.5;
  margin-bottom: 8px;
`;
const GenresList = styled.ul`
  opacity: 0.5;
  display: flex;
  font-size: 0.8rem;
`;

const Genres = styled.li`
  margin-right: 10px;
`;

// COMPONENT
const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <MovieBox>
      <Link
        to={{
          pathname: "/movie-detail",
          state: {
            year,
            title,
            summary,
            poster,
            genres
          }
        }}
      >
        <Img src={poster} alt={title} />
        <div className="movie__data">
          <Title className="movie__title">{title}</Title>
          <Year className="movie__year">{year}</Year>
          <GenresList>
            {genres.map((genres, index) => {
              return (
                <Genres className="movie__genres" key={index}>
                  {genres}
                </Genres>
              );
            })}
          </GenresList>
          <Summary className="movie__summary">{summary}</Summary>
        </div>
      </Link>
    </MovieBox>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
