import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 12px;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const PhotosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 10px;
    column-gap: 10px;
    margin: 12px 0;
`;

export const PageNumber = styled.h4`
    margin-top: 12px;
    font-weight: 700;
`;

export const Image = styled.img`
    width: 150px;
    width: 150px;
    @media only screen and (min-width: 768px) {
        width: 200px;
        height: 200px;
      }
`;