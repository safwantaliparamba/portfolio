import React, { useRef } from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

import contact from "../assets/images/contactus.webp";
import Input from "../UI/Input";

function Contact() {
    const [state, handleSubmit] = useForm("xzbwkjqo");
    const formRef = useRef();

    const Success = () => {
        formRef.current.reset();
        return <SuccessMessage>Thanks for contacting!!</SuccessMessage>;
    };

    return (
        <Wrapper>
            <div className='wrapper'>
                <div className='left'>
                    <h1>
                        Lets talk about <br />
                        everything!
                    </h1>
                    <p>
                        Hate forms? send me an{" "}
                        <a
                            href='mailto: safwansafu242090@gmail.com'
                            target='_blank'
                            rel='noopener noreferrer'>
                            email
                        </a>
                        instead
                    </p>
                    <img
                        src={contact}
                        alt='contact_image'
                    />
                </div>
                <div className='right'>
                    <form
                        onSubmit={handleSubmit}
                        ref={formRef}>
                        <Input
                            id='name'
                            name='name'
                            label='Full name'
                            className='name'
                            type='text'
                        />
                        <Input
                            id='email'
                            name='email'
                            label='Email'
                            className='email'
                            type='email'
                        />
                        <div>
                            <label htmlFor='message'>Message</label>
                            <textarea
                                name='message'
                                id='message'
                                cols='20'
                                rows='10'></textarea>
                        </div>
                        {state.errors && (
                            <ValidationError
                                prefix='Message'
                                field='message'
                                errors={state.errors}
                            />
                        )}

                        {state.succeeded && <Success />}
                        <div>
                            <button
                                type='submit'
                                disabled={state.submitting}>
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export default Contact;

const Wrapper = styled.section`
    padding-top: 50px;
    & > .wrapper {
        width: 90%;
        max-width: 1300px;
        margin: 0 auto;
        background: #fff;
        display: flex;
        width: 100%;
        padding: 100px;
        border-radius: 10px;
        -webkit-box-shadow: 10px 10px 38px 3px rgba(128, 128, 128, 1);
        -moz-box-shadow: 10px 10px 38px 3px rgba(128, 128, 128, 1);
        box-shadow: 10px 10px 38px 3px rgba(128, 128, 128, 1);

        .left {
            width: 50%;
            h1 {
                font-size: 52px;
                font-weight: 600;
                margin-bottom: 32px;
            }
            p {
                color: #808080;
                /* font-weight: 600; */
                a {
                    display: inline-block;
                    margin: 0 5px 0;
                    text-decoration: underline;
                    color: blue;
                }
            }
            img {
                width: 500px;
            }
        }
        .right {
            width: 50%;

            form {
                div {
                    &.name {
                        label {
                            margin-top: 0;
                        }
                    }
                    label {
                        display: block;
                        font-weight: 600;
                        color: #808080;
                        margin: 18px 0;

                        /* &:first-child{
                            margin-top: 0;
                        } */
                    }
                    input,
                    textarea {
                        display: block;
                        width: 100%;
                        background: #e2e8f0;
                        font-size: 19px;
                        padding: 10px 20px;
                        border-radius: 10px;

                        &:focus {
                            box-shadow: 0 0 0 3px rgb(66 153 225 / 50%);
                        }
                    }
                    button {
                        width: 100%;
                        margin: 16px 0;
                        background: #667eea;
                        padding: 14px;
                        color: #f7fafc;
                        font-size: 14px;
                        font-weight: 600;
                        border-radius: 8px;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    @media all and (max-width: 1440px) {
        .wrapper {
            width: 90%;
            .left {
                img {
                    width: 90%;
                }
            }
        }
    }
    @media all and (max-width: 1280px) {
        .wrapper {
            padding-top: 46px;
            padding-bottom: 46px;
            .left {
                h1 {
                    font-size: 42px;
                }
            }
        }
    }
    @media all and (max-width: 1024px) {
        .wrapper {
            .left {
                h1 {
                    font-size: 32px;
                }
            }
        }
    }
    @media all and (max-width: 960px) {
        padding: 20px;
        .wrapper {
            padding: 16px;
            flex-wrap: wrap;
            padding: 32px;
            .left,
            .right {
                padding: 32px;
            }
            .left {
                width: 100%;
                h1 {
                    font-size: 42px;
                    br {
                        display: none;
                    }
                }
                p {
                    font-size: 19px;
                }
                img {
                    width: 90%;
                    display: none;
                }
            }
            .right {
                width: 100%;
            }
        }
    }
    @media all and (max-width: 720px) {
    }
    @media screen and (max-width: 640px) {
        padding: 20px;
        .wrapper {
            padding: 16px;
            flex-wrap: wrap;
            /* padding: 32px; */
            width: 90%;
            .left {
                width: 100%;
                padding: 10px;
                h1 {
                    font-size: 32px;
                }
                p {
                    font-size: 16px;
                }
                img {
                    display: none;
                }
            }
            .right {
                width: 100%;
                padding: 10px;
            }
        }
    }
    @media all and (max-width: 480px) {
        .wrapper {
            width: 97%;
        }
    }
    @media all and (max-width: 360px) {
        .wrapper {
            .left {
                h1 {
                    font-size: 26px;
                }
            }
        }
    }
    @media all and (max-width: 320px) {
    }
`;

const SuccessMessage = styled.p`
    color: green;
    font-weight: 600;
    margin-top: 12px;
    text-align: center;
`;
