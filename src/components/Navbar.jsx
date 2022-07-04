import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../utils/StateProvider";

export default function Navbar({navBackground}) {
    const [{ userInfo }] = useStateProvider();
    return (
        <Container navBackground={navBackground}>
            <div className="search__bar">
                <FaSearch />
                <input type="text" placeholder="Artist, song or podcast"  />
            </div>
            <div className="avatar">
                <a href="#">
                    <CgProfile />
                    <span>{userInfo?.userName}</span>
                </a>
            </div>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 10vh;
    position: sticky;
    top: 0;
    transition: 0.3s ease-in-out;
    background-color: ${ ({ navBackground }) => 
        navBackground ? "rgba(0, 0, 0, 0.9)" : "none" };
    .search__bar {
        background-color: #fff;
        width: 30%;
        padding: 0.2rem 1.5rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        input {
            border: none;
            height: 1.8rem;
            width: 100%;
            &:focus {
                outline: none;
            }
        }
    }
    .avatar {
        background-color: #050505;
        padding: 0.3rem 0.6rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.3rem;
            text-decoration: none;
            color: #fff;
            font-weight: bold;
            svg {
                font-size: 1.3rem;
                background-color: #282828;
                padding: 0.2rem;
                border-radius: 1rem;
                color: #c7c5c5;
            }
        }
    }
`;
