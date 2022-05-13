import * as React from "react";
import { CastCrew } from "./styles";
import { useEffect, useState } from "react";
import {
  ImageListItemStyle,
  ImageListStyled,
  ImageListItemsStyled,
} from "./styles";
import { castCrewType } from "../../types/services";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export type propsType = {
  movie: any;
};

export default function index({ movie }: propsType) {
  const [castCrew, setCastCrew] = useState({} as castCrewType);
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  const API_IMG = "http://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setCastCrew(data);
        console.log(data);
      });
  }, []);

  return (
    <CastCrew movie={movie}>
      <ImageListStyled gap={0} cols={1}>
        {castCrew?.cast?.map((cast) => (
          <ImageListItemsStyled key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? API_IMG + cast.profile_path
                  : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
              }
              srcSet={
                cast.profile_path
                  ? API_IMG + cast.profile_path
                  : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
              }
              alt={cast.name ? cast.name : "No name provided"}
              loading="lazy"
            />
            <ImageListItemStyle
              title={cast.name ? cast.name : "No name provided"}
              subtitle={
                <span>
                  as:{" "}
                  {cast.character ? cast.character : "No character provided"}
                </span>
              }
              position="below"
            />
          </ImageListItemsStyled>
        ))}
      </ImageListStyled>

      <ImageListStyled gap={0} cols={1}>
        {castCrew?.crew?.map((crew) => (
          <ImageListItemsStyled key={crew.id}>
            <img
              src={
                crew.profile_path
                  ? API_IMG + crew.profile_path
                  : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
              }
              srcSet={
                crew.profile_path
                  ? API_IMG + crew.profile_path
                  : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
              }
              alt={crew.name ? crew.name : "No name provided"}
              loading="lazy"
            />
            <ImageListItemStyle
              title={crew.name ? crew.name : "No name provided"}
              subtitle={
                <span>as: {crew.job ? crew.job : "No job provided"}</span>
              }
              position="below"
            />
          </ImageListItemsStyled>
        ))}
      </ImageListStyled>
    </CastCrew>
  );
}
