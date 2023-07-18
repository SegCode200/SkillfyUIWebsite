import React from 'react'
import styled from 'styled-components'
import pics from "../assest/know-about.webp"
import Button from '../components/reUse/Button'
import {AiOutlineCheckSquare} from "react-icons/ai"

const Section1 = () => {
  return (
    <div>
        <Container>
            <Main>
                <LeftSide>
                    <Text>Get more close with your courses.</Text>
                    <SmallText>We provide a wide range of courses for the different sectors you can choose from, which suits you perfectly</SmallText>

                    <Div>
                        <Icon/>
                        <Note>Detail description of each course</Note>
                    </Div>

                    <Div>
                        <Icon/>
                        <Note>Easy to understand language</Note>
                    </Div>

                    <Div>
                        <Icon/>
                        <Note>Simple and easy to learn courses.</Note>
                    </Div>
                    <div style={{margin: "40px 0"}}>
                    <Button title='Start Learning Now' width='200px'/>
                    </div>

                </LeftSide>
                <RightSide>
                    <Border/>
                    <Image src={pics}/>
                </RightSide>

            </Main>
        </Container>
      
    </div>
  )
}

export default Section1
const Image = styled.img`
position: absolute;
z-index: 2;
`
const Border = styled.div`
width: 500px;
height: 600px;
border: 5px solid #F56962;
position: absolute;
border-radius: 0 50% 0 0 ;
position: absolute;
right: -50px;
top: 8%;
`
const RightSide = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Note = styled.div`
font-size: 18px;
font-weight: 500;
`
const Icon = styled(AiOutlineCheckSquare)`
font-size:30px;
color: #43C8B1;
margin-right: 10px;
`
const Div = styled.div`
display: flex;
align-items: center;
color: rgba(0,0,0,0.6);
margin: 15px 0;
`
const SmallText = styled.div`
font-size: 20px;
color: rgba(0,0,0,0.6);
margin: 20px 0;
`
const Text = styled.div`
font-size: 45px;
font-weight: 500;
color: rgba(0,0,0,0.9);

`
const LeftSide = styled.div`
width: 45%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;

`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const Container = styled.div`
width: 100%;
height: 130vh;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`
