import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { movieSectionType } from "../../types/services";
import { ShowMoreButton } from "./styles";
import { PaddingProvider } from "../../components/ContentWrapper/styles";
import {
  MovieSection,
  SectionBoxInfo,
  SectionInfo,
  StyledGrid,
} from "../../components/MovieSection/styles";
import MovieSectionContainer from "../../components/MovieSectionContainer";
import Grid from "@mui/material/Grid";
import Appbar from "../../components/Appbar";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";

export default function movie() {
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [popularMovies, setPopularMovies] = useState<movieSectionType[]>([]);

  useEffect(() => {
    const getPopularMovies = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US&page=${page}`
      )
        .then((res) => res.json())
        .then((popular) => {
          setPopularMovies([...popularMovies, ...popular.results]);
          setLoading(false);
        });
    };
    getPopularMovies();
  }, [page]);

  return (
    <>
      <Appbar page="seeMore" />
      <PaddingProvider>
        {popularMovies.length != 0 && (
          <MovieSection>
            <SectionBoxInfo>
              <SectionInfo>Popular</SectionInfo>
            </SectionBoxInfo>
            <StyledGrid wrap="wrap" container columnSpacing={1} rowSpacing={1}>
              {popularMovies?.map((movie) => (
                <Grid item xs={4} md={3} lg={2} key={movie.id}>
                  <MovieSectionContainer
                    movieId={movie.id}
                    src={
                      movie.poster_path
                        ? API_IMG + movie.poster_path
                        : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                    }
                    title={movie.title ? movie.title : "No title provided"}
                    // year={
                    //   movie.release_date
                    //     ? movie.release_date.slice(0, 4)
                    //     : "No year provided"
                    // }
                    // voteAv={
                    //   movie.vote_average
                    //     ? movie.vote_average.toString().slice(0, 3)
                    //     : "No rating provided"
                    // }
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
      );
    </>
  );
}
