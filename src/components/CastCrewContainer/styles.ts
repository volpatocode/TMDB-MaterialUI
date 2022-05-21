import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { propsType } from "./index";

export const CastCrewContainer = styled(Box)`
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  max-width: 200px;
  height: 350px;
  transition: 0.2ms ease-in-out;
  @media (max-height: 900px) {
    height: 320px;
    transition: 0.2ms ease-in-out;
  }
  @media (max-height: 800px) {
    height: 280px;
    transition: 0.2ms ease-in-out;
  }
  @media (max-height: 720px) {
    height: 250px;
    transition: 0.2ms ease-in-out;
  }
  @media (max-height: 650px) {
    height: 220px;
    transition: 0.2ms ease-in-out;
  }
`;

export const MovieContainerImage = styled.div<Pick<propsType, "src">>`
  height: 75%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.src}) no-repeat center center / cover; ;
  width: 100%;
  min-width: 180px;
`;

export const BoxContent = styled(Box)`
  background: #2f2f2f;
  height: 25%;
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
  min-height: 35px;
`;

export const BoxInfo = styled(Box)`
  color: #c9c9c9;
  font-weight: bold;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
`;

