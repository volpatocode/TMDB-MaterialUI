import * as React from "react";
import {
  MovieSectionContainer,
  MovieContainerImage,
  BoxContent,
  BoxTitle,
  BoxImage,
} from "./styles";
import Link from "next/link";

export type propsType = {
  src: string;
  title: string;
  movieId: string;
};

export default function index({ src, title, movieId }: propsType) {
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
        </BoxContent>
      </MovieSectionContainer>
    </Link>
  );
}
