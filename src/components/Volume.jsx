import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";

export default function Volume() {
    return (
        <Container>
            <input type="range" min={0} max={100} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    input {
        width: 5rem;
        border-radius: 2rem;
        height: 0.3rem;
    }
`;