import React from "react";
import styled from "styled-components";
import logo2 from "../assets/images/logoSpotifywhite.png";
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch} from 'react-icons/md';
import Playlists from "./Playlists";

export default function Sidebar() {
    return (
        <Container>
            <div className="top__links">
                <div className="logo">
                    <img src={logo2} alt="spotify" />
                </div>
                <ul>
                    <li>
                        <MdHomeFilled />
                        <span>Home Page</span>
                    </li>
                    <li>
                        <MdSearch />
                        <span>Search</span>
                    </li>
                    <li>
                        <IoLibrary />
                        <span>My Library</span>
                    </li>
                </ul>
            </div>
            <div className="border"></div>
            <Playlists />
        </Container>
    )
}

const Container = styled.div`
    background-color: #000;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .top__links {
        display: flex;
        flex-direction: column;
        .logo {
            text-align: left;
            margin: 1.6rem 0 0 1.6rem;
            img {
                max-inline-size: 70%;
                block-size: auto;
            }
        }
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            li {
                display: flex;
                align-items: center;
                margin-left: 0.4rem;
                gap: 1rem;
                cursor: pointer;
                transition: 0.3s ease-in-out;
                &:hover {
                    color: #fff;
                }
            }
        }
    }
    .border {
        border-top: 2px solid #181818;
        margin: 0 22px;
    }
`;