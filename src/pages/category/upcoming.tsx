import React, { useEffect, useState } from "react";
import { movieSectionType } from "../../types/services";

import Grid from "@mui/material/Grid";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";

import { ShowMoreButton } from "./styles";
import { PaddingProvider } from "../../components/ContentWrapper/styles";
import MovieSectionContainer from "../../components/MovieSectionContainer";
import Appbar from "../../components/Appbar";
import Footer from "../../components/Footer";
import {
  MovieSection,
  SectionBoxInfo,
  SectionInfo,
  StyledGrid,
} from "../../components/MovieSection/styles";

export default function Upcoming() {
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [upcomingMovies, setUpcomingMovies] = useState<movieSectionType[]>([]);

  useEffect(() => {
    const getUpcomingMovies = () => {
      setLoading(true);
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=${page}`
      )
        .then((res) => res.json())
        .then((upcoming) => {
          setUpcomingMovies([...upcomingMovies, ...upcoming.results]);
          setLoading(false);
        });
    };
    getUpcomingMovies();
  }, [page]);

  useEffect(() => {
    document.title = `VMovies - Upcoming`;
  }, []);

  return (
    <>
      <Appbar page="seeMore" />
      <PaddingProvider page="index">
        {upcomingMovies.length != 0 && (
          <MovieSection>
            <SectionBoxInfo>
              <SectionInfo></SectionInfo>
            </SectionBoxInfo>
            <StyledGrid wrap="wrap" container columnSpacing={1} rowSpacing={1}>
              {upcomingMovies?.map((movie) => (
                <Grid item xs={4} md={3} lg={2} key={movie.id}>
                  <MovieSectionContainer
                    movieId={movie.id}
                    src={
                      movie.poster_path
                        ? API_IMG + movie.poster_path
                        : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                    }
                    title={movie.title ? movie.title : "No title provided"}
                  ></MovieSectionContainer>
                </Grid>
              ))}
            </StyledGrid>

            <ShowMoreButton onClick={() => setPage(page + 1)} variant="text">
              {loading ? (
                <PendingOutlinedIcon fontSize="medium" />
              ) : (
                <KeyboardArrowDownRoundedIcon fontSize="medium" />
              )}
            </ShowMoreButton>
          </MovieSection>
        )}
        ;
      </PaddingProvider>
      <Footer />
      );
    </>
  );
}
