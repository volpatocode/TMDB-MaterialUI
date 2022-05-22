import * as React from "react";
import {
  MovieSectionContainer,
  MovieContainerImage,
  BoxContent,
  BoxTitle,
  BoxInfo,
  BoxImage,
} from "./styles";
import Link from "next/link";
import VoteAv from "../../components/VoteAv";
import MovieYear from "../../components/MovieYear";

export type propsType = {
  src: string;
  title: string;
  year: string;
  voteAv: string;
  movieId: string;
};

export default function index({
  src,
  title,
  year,
  voteAv,
  movieId,
}: propsType) {
  return (
    <Link href={`/movies/movie?movie=${movieId}`}>
      <MovieSectionContainer>
        <BoxImage>
          <MovieContainerImage src={src} />
        </BoxImage>
        <BoxContent>
          <BoxTitle>
            <h3>{title}</h3>
          </BoxTitle>
          <BoxInfo>
            <VoteAv voteAv={voteAv} />
            <MovieYear year={year} />
          </BoxInfo>
        </BoxContent>
      </MovieSectionContainer>
    </Link>
  );
}
