import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    justify-content: center;
    /* align-items: center; */
`;

export const Header = styled.header`
    background-color: gray;
    display: flex;
    justify-content: end;
    padding: 1vw;
`;

export const Deslogar = styled.button`
    background-color: red;
    color: white;
    padding: 0.5vw;
`;

export const Main = styled.main`
    display: flex;
`;