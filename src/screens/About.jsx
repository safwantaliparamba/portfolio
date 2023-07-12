import React from "react";
import styled from "styled-components";
import aboutImage from "../assets/images/about-image-trans.png";

function About() {
    return (
        <MainWrapper>
            <div className='left'>
                <img
                    src={aboutImage}
                    alt=''
                />
            </div>
            <div className='right'>
                <h1>Safwan P</h1>
                <p>
                    Hii there, <br />
                    iam a Software Developer from India, I specialized in
                    building responsive web applications for my clients. I have
                    done work in software development, Mobile app creation,
                    front-end and backend web/api, and Graphic designing.
                </p>
            </div>
        </MainWrapper>
    );
}

export default About;

const MainWrapper = styled.section`
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 16px;
    display: flex;
	align-items: center;

    .left {
        width: 50%;
		img{
			display: block;
			width: 90%;
			margin: 0 auto;
		}
    }
    .right {
        width: 50%;

		h1{
			font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
			font-size: 40px;
			font-weight: 600;
			margin-bottom: 32px;
		}
		p{
			font-size: 18px;
			color: #808080 ;
		}
    }

	@media (max-width: 720px){
		flex-direction: column;

		.right{
			width: 100%;
		}
		.left {
			width: 100%;
			margin-bottom: 40px;

		}
	}
`;
