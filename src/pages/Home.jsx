import { useState, useEffect, useContext } from 'react'
import styled from "styled-components"
import { ModalContext } from 'react-modal-classic'
import ModalContentFirst from '../components/ModalContentFirst'
import ModalContentSecond from '../components/ModalContentSecond'
import { GetDataNpmRepository } from '../api/api'

const Header = styled.header`
    height:65px;
    border-bottom:1px solid rgba(0,0,0,0.2);
    display:flex;
    & .content_large{
        position:relative;
    }
    & p{
        margin:0;
        color:#fff;
        font-weight:900;
        font-size:16px;
        line-height:1;
        & span{
            color: #898383;
            font-size: 60%;
            font-weight: 500;
            border: 1px solid rgba(255,255,255,0.05);
            padding: 2px 5px;
            border-radius: 4px;
            margin-left: 5px;
            vertical-align:1px;
        }
    }
    .repositories{
        position:absolute;
        right:0;
        top:50%;
        transform:translateY(-50%);
        font-size:34px;
        display:flex;
        justify-content:center;
        & a{
            display: flex;
            align-items: center;
            &.gitLink{
                margin-left:15px;
                & svg{
                    height:20px;
                }
            }
            &.npmLink{
                & svg{
                    height:30px;
                }
            }
            & svg{
                width:auto;
                opacity:0.6;
                transition:0.1s opacity ease-in-out;
                & path{
                    fill:#898383;
                }
            }
            &:hover{
                & svg{
                    opacity:1;
                    transition:0.1s opacity ease-in-out;
                }
            }
        }
        
    }
`
const Main = styled.main`
    padding:70px 0;
    text-align:center;
    & .app_title{
        font-size:30px;
        letter-spacing:-0.5px;
        line-height:1.3;
        font-weight:900;
        color:#fff;
        margin:0 0 25px 0;
        & .app_title_wrapper{
            position:relative;
        }
    }
    & p{
        margin:0;
        color:#898383;
        & a{
            color:#fff;
            text-decoration:none;
            font-weight:700;
            border-bottom:1px solid transparent;
            transition:0.1s border-color ease-in-out;
            &:hover{
                border-bottom:1px solid #b97b3e;
                transition:0.1s border-color ease-in-out;
            }
        }
    }
`
const Separator = styled.hr`
    margin: 20px auto;
    border: 0;
    height: 1px;
    background-color: rgba(0,0,0,0.2);
    max-width:100px;
`
const Icon = styled.span`
    width:30px;
    display:inline-block;
    position:absolute;
    right:-45px;
    top:-10px;
`
const ButtonsWrapper = styled.div`
    display:flex;
    justify-content:center;
    padding: 30px 0;
`
const Button = styled.button`
    text-transform:uppercase;
    font-size:14px;
    line-height:1;
    padding:15px 20px;
    border-radius:5px;
    border:none;
    margin:0 10px;
    cursor:pointer;
    color:#fff;
    &.leaf{
        border:1px solid #95a938;
        background-color:rgba(76,89,13,0.6);
        transition:0.1s background-color ease-in-out;
        &:hover{
            background-color:rgba(76,89,13,1);
            transition:0.1s background-color ease-in-out;
        }
    }
    &.robin{
        border:1px solid #b97b3e;
        background-color:rgba(89,49,13,0.6);
        transition:0.1s background-color ease-in-out;
        &:hover{
            background-color:rgba(89,49,13,1);
            transition:0.1s background-color ease-in-out;
        }
    }
`

function Home(){
    
    const { openModal } = useContext(ModalContext)
    const theme = { closeButton: "in", closeButtonColor: "#af5f0c", size: "sm", backgroundColor: "#c7cd77", radius:"12px" }
    const npmRepositoryData = GetDataNpmRepository()

    const [version, setVersion] = useState("")
    const [gitUrl, setGitUrl] = useState("")
    const npmUrl = "https://www.npmjs.com/package/react-modal-classic"

    useEffect(()=> {
        if(npmRepositoryData.isLoaded && npmRepositoryData.isError === null){
            const data = npmRepositoryData.data
            setVersion(data["dist-tags"].latest)
            setGitUrl(data.homepage)
        }
    }, [npmRepositoryData.data, npmRepositoryData.isError, npmRepositoryData.isLoaded])


    return (
        <>
        <Header>
            <div className="content_large">
                <p>React Modal Classic {version.length > 0 && <span>{version}</span>}</p>
                <p className="repositories">
                    <a href={npmUrl} target="_blank" rel="noreferrer" className="npmLink">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"/></svg>
                    </a>
                    <a href={gitUrl} target="_blank" rel="noreferrer" className="gitLink">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>                    
                    </a>
                </p>
            </div>
        </Header>
        <Main>
            <h1 className="app_title"><span className="app_title_wrapper">An easy-to-use and classic<br/>React JS modal library.<Icon><img src="/favicon.svg"></img></Icon></span></h1>
            <Separator></Separator>
            <p>React Modal Classic allows you to pop out “one modal at a time” in your React App.</p>
            <p>You can test the modal component, with 2 different contents and styling options:</p>
            <ButtonsWrapper>
                <Button onClick={() => openModal(<ModalContentFirst/>)} className="leaf">Open first modal</Button>
                <Button onClick={() => openModal(<ModalContentSecond/>, theme )} className="robin">Open second modal</Button>
            </ButtonsWrapper>
            <p>For more infos, see the <a href={npmUrl} target="_blank" rel="noreferrer">NPM module</a> repository.</p>
        </Main>
        </>
    )
}

export default Home