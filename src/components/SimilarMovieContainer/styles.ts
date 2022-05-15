import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const SimilarMovieContainer = styled(Box)`
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 250px;
`;

export const SimilarMovieImage = styled.img`
  width: 200px;
  object-fit: cover;
`;

export const BoxContent = styled(Box)`
  background: #2f2f2f;
  height: 130px;
  padding: 0.6rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BoxTitle = styled(Box)`
  color: #f6f6f6;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-align: left;
  font-size: 0.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BoxInfo = styled(Box)`
  color: #c9c9c9;
  font-weight: bold;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.2rem 0;
`;

export const BoxOverview = styled(Box)`
  color: #c9c9c9;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  font-size: 0.6rem;
`;
