import React from 'react'
import styled from 'styled-components'
import {GoSearch} from "react-icons/go"
import girl from "../assest/girl-img-study.webp"
import bord from "../assest/rect.png"
import dot from "../assest/dots-pattern-pink.svg"

const Home = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <LeftHolder>
                    <BigText>Learn more and make success the result of perfection.</BigText>
                    <SmallText>Pick from over 100,000 online video courses with new additions published every month.
                    </SmallText>
                    <InputHolder>
                    <Input placeholder='Search Your Favourite courses'/>
                    
                    <Div>
                        <Icon/>
                    </Div>

                    </InputHolder>

                </LeftHolder>

                <RightHolder>
                    <Img1 src={girl}/>
                    <Img2 src={bord}/>
                    <Img3 src={dot}/>
                    

                </RightHolder>
            </Wrapper>
        </Container>
      
    </div>
  )
}

export default Home
const Img3 = styled.img``
const Img2 = styled.img`
width: 330px;
position: absolute;
left: 35%;
bottom: 10%;
`
const Img1 = styled.img`
width: 400px;
position: absolute;
top: 120px;
left: 15%;
z-index: 2;


`
const Icon = styled(GoSearch)`
font-size: 40px;
color: white;
cursor: pointer;
`
const Div = styled.div`
width: 80px;
height: 55px;
background-color: #F56962;
border-radius: 0px 5px 5px 0px;
display: flex;
align-items: center;
justify-content: center;

`
const Input = styled.input`
width: 500px;
height: 50px;
border: none;
padding-left: 20px;
box-shadow: 2px 41px 38px -2px rgba(249,205,202,0.81);
-webkit-box-shadow: 2px 41px 38px -2px rgba(249,205,202,0.81);
-moz-box-shadow: 2px 41px 38px -2px rgba(249,205,202,0.81);
caret-color: red;

::placeholder{
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
}
:focus{
    font-size: 20px;
    outline: none;

    
}
:active{
    border: none;
}
`
const InputHolder = styled.div`
display: flex;
align-items: center;
margin: 30px 0px;
`
const SmallText = styled.div`
font-size: 25px;
font-weight: 400;
color: #646161;
`
const BigText = styled.div`
font-size: 50px;
font-weight: 700;
margin-bottom: 30px;
`
const RightHolder = styled.div`
width: 50%;
align-items: center;
justify-content: center;
height: 100%;
display: flex;
flex-direction: column;
position: relative;
`
const LeftHolder = styled.div`
width: 50%;
align-items: center;
justify-content: center;
height: 100%;
display: flex;
flex-direction: column;


`
const Wrapper = styled.div`
width: 90%;
height: 100%;
margin-top: 100px;
display: flex;
align-items: center;
justify-content: center;
`
const Container = styled.div`
background-color: #FEF0EF;
width: 100%;
height: 800px;
display: flex;
align-items: center;
justify-content: center;
`
