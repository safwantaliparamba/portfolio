import React, { useState } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
import todoThumb from "../assets/images/todo-app-thumbnail.jpg";
import whatsappThumb from "../assets/images/whatsapp-ui-thumbnail.png";
import todoAppThumb from "../assets/images/todo-app-thumbnail.png";
import trendzThumb from "../assets/images/TrendZ-thumbnail.png";
import Modal from "../UI/Modal";

function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState(1);
    const [categories] = useState([
        {
            id: 1,
            name: "All",
            videos: [],
        },
        {
            id: 2,
            name: "React & Django",
            videos: [
                {
                    id: "M2-nSfhThR8",
                    thumb: trendzThumb,
                    title: "TrendZ - Instagram Clone",
                    description:
                        "TrendZ is a fully functional Instagram clone built with React, Redux-toolkit, Firebase, Python Django, Django-rest-framework, and PostgreSql database",
                    githubLink: "https://github.com/safwantaliparamba/TrendZ/",
                },
            ],
        },
        {
            id: 3,
            name: "React-Native",
            videos: [
                {
                    id: "nL47iZHogWk",
                    thumb: whatsappThumb,
                    title: "WhatsApp UI Clone",
                    description: "WhatsApp UI clone built using React-Native",
                    githubLink:
                        "https://github.com/safwantaliparamba/WhatsApp-UI",
                },
                {
                    id: "XF8wPhKxSvE",
                    thumb: todoAppThumb,
                    title: "Todo App React-Native",
                    description: "WhatsApp UI built using React & Django",
                    githubLink:
                        "https://github.com/safwantaliparamba/ToDo-app-React-Native",
                },
            ],
        },
        {
            id: 4,
            name: "Django",
            videos: [
                {
                    id: "qT88sxiRquY",
                    thumb: todoThumb,
                    title: "ToDo Website",
                    description:
                        "Todo Website built using Python Django and PostgreSQL database",
                    githubLink:
                        "https://github.com/safwantaliparamba/django-todo-app",
                },
            ],
        },
    ]);
    const closeModal = () => {
        setShowModal(false);
        navigator.vibrate(true);
    };
    return (
        <>
            <Container>
                <h1>Projects</h1>
                <TopTab>
                    {categories.map((category, index) => (
                        <span
                            key={index}
                            className={
                                category.id === activeTab ? "active" : ""
                            }
                            onClick={(e) => {
                                setActiveTab(category.id);
                            }}>
                            {category.name}
                        </span>
                    ))}
                </TopTab>
                <ItemContainer>
                    {categories.map((item) => {
                        if (item.id === activeTab) {
                            return item.videos.map((video, index) => (
                                <ImageContainer
                                    key={index}
                                    onClick={(e) => setShowModal(video)}>
                                    <img
                                        loading='lazy'
                                        src={video.thumb}
                                        key={index}
                                        alt=''
                                    />
                                </ImageContainer>
                            ));
                        } else if (activeTab === 1) {
                            return item.videos.map((video, index) => (
                                <ImageContainer
                                    key={index}
                                    onClick={(e) => setShowModal(video)}>
                                    <img
                                        loading='lazy'
                                        src={video.thumb}
                                        key={index}
                                        alt=''
                                    />
                                </ImageContainer>
                            ));
                        }
                        return null;
                    })}
                </ItemContainer>
                {showModal && (
                    <Modal onClick={closeModal}>
                        <VideoContainer>
                            <h1>{showModal.title}</h1>
                            <p>{showModal.description}</p>
                            <a
                                href={showModal.githubLink}
                                target='_blank'
                                rel='noopener noreferrer'>
                                project link
                            </a>
                            <YouTube videoId={showModal.id} />
                        </VideoContainer>
                    </Modal>
                )}
            </Container>
        </>
    );
}

export default Projects;

const Container = styled.div`
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 12px;

    h1 {
        text-align: center;
        font-weight: 600;
        margin-bottom: 52px;
    }
`;

const ItemContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 50px;
`;

const ImageContainer = styled.div`
    width: 31%;
    display: block;

    iframe {
        width: 100%;
        /* height: auto; */
    }
    img {
        width: 100%;
        cursor: pointer;
    }
    @media all and (max-width: 960px) {
        width: 48%;
    }
    @media screen and (max-width: 640px) {
        width: 100%;

        iframe {
            height: auto;
        }
    }
`;

const TopTab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: auto;
    margin: 0 auto;
    margin-top: 32px;

    @media screen and (max-width: 640px) {
        flex-wrap: wrap;
    }
    span {
        display: inline-block;
        padding: 8px 18px;
        font-weight: 600;
        border-radius: 15px;
        cursor: pointer;

        &.active {
            background: #9e5ef3;
            color: #fff;
        }
    }
`;

const VideoContainer = styled.div`
    text-align: center;
    max-height: 70vh;
    h1 {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 24px;
    }
    p {
        margin-bottom: 22px;
        font-weight: 600;
        color: #808080;
    }
    a {
        display: inline-block;
        color: blue;
        text-decoration: underline;
        font-weight: 600;
        margin-bottom: 32px;
    }
    iframe {
        width: 100%;
    }
    @media screen and (max-width: 640px) {
        overflow-y: scroll;
    }
`;
