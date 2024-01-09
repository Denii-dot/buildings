import React from 'react'
import { styled } from 'styled-components'
import image from "../images/background.jpg"
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display: flex;
    padding:20px;
    height: calc(100vh - 80px);
    @media only screen and (max-width:480px){
        flex-direction: column;
    }
`

const BackgroundImage = styled.div`
    position: absolute;
    top: 80px;
    left:0;
    height: 100vh;
    width: 100%;
    background-image: url(${image});
    background-size: center;
    background-position:center;
    z-index: -1;
    filter:blur(4px);
    @media only screen and (max-width:480px){
        height: 200vh;
    }
`

const BackgroundOverlay = styled.div`
    position: absolute;
    top: 80px;
    left:0;
    height: 100vh;
    width: 100%;
    background-color: rgba(255,255,255, 0.2);
    z-index: -1;
    @media only screen and (max-width:480px){
        height: 200vh;
    }

`


const Left = styled.div`
    width: 60%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    @media only screen and (max-width:480px){
        width: 100%;
    }
`

const Title = styled.h1`
    font-size:60px;
    width:60%;
    @media only screen and (max-width:480px){
        font-size:40px;
    }
`

const Desc = styled.p`
    width:60%;
    margin-top:20px;
    font-size:20px;
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    width:60%;
    @media only screen and (max-width:480px){
        width:100%;
    }
`

const Right = styled.div`
    height: calc(100vh - 50px);
    width: 40%;
    @media only screen and (max-width:480px){
        margin-top: 60px;
        height: 100%;
        width: 100%;
    }
`

const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight:bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`

const Phone = styled.span`
    color: #d10628;
    font-weight: bold;
`

const ContactText = styled.span`
    margin-top: 5px;
    color: #e6e2e2;
`

const Houses: React.FC = () => {
    return (<>
        <BackgroundImage />
        <BackgroundOverlay />
        <Container>
            <Left>
                <Title>Houses</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ratione natus illum nulla maxime eum ipsum ex ut unde enim?</Desc>
                <Info>
                    <Button>More info</Button>
                    <Contact>
                        <Phone>Call us (012) 345 - 6789</Phone>
                        <ContactText>
                            Lorem ipsum dolor sit amet.
                        </ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Canvas>
                    <Scene linkToUrl='./Models/modern_home/scene.gltf' scale={0.01} />
                </Canvas>
            </Right>
            <AnimatedShapes />
        </Container>
    </>
    )
}

export default Houses