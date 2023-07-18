import React from 'react'
import Button from '../components/reUse/Button'
import styled from 'styled-components'
import pics from '../assest/circle1.png'
import pics1 from '../assest/circle2.png'
import pics2 from '../assest/circle3.png'
import pics3 from '../assest/circle5.png'
import pics4 from '../assest/circle6.png'
import pics5 from '../assest/circle7.png'
import cir from "../assest/circle.svg"
import doot from "../assest/dots-pattern-pink.svg"
import doot1 from "../assest/dots-pattern-gray-vertical.svg"

const Wrapper = () => {
  return (
    <div>
        <Container>
            <Main>
                <Text>Select the best from various online courses.</Text>
                <SmallText>Our online video courses give you the freedom to learn remotely, and our experts will guide you properly.</SmallText>
                <Button title='Join Today' width='130px' />
                <Holder>
                    
                    <Image src={pics}/>
                    <Image1 src={pics1}/>
                    <Image2 src={pics2}/>
                    <Icon src={cir} />
                </Holder>
                <Holder2>
                    <Image3 src={pics3}/>
                    <Image4 src={pics4}/>
                    <Image5 src={pics5}/>
                    <Icon2 src={cir}/>
                </Holder2>
            </Main>
            <Dot src={doot}/>
            <Dot1 src={doot1}/>
            
        </Container>
      
    </div>
  )
}

export default Wrapper
const Dot1 = styled.img`
position: absolute;
right: 0;
`
const Icon2 = styled.img`
position: absolute;
bottom: 100px;
right: -50px;
`
const Image5 = styled.img`
position: absolute;
top: 200px;
left: -100px;
`
const Image4 = styled.img`


`
const Image3 = styled.img`
position: absolute;
bottom: 180px;
`
const Holder2 = styled.div`
position: absolute;
right: -0px;
z-index: 2;
`
const Dot = styled.img`
position: absolute;
bottom: 0;
left: 0;
z-index: 0;

`
const Icon = styled.img`
position: absolute;
bottom: 0px;
left: 50px;
`
const Image2 = styled.img`
position: absolute;
top: 120px;
`
const Image1 = styled.img`
position: absolute;
top: 0px;
left: -50px;
`
const Image = styled.img`
position: absolute;
bottom: 150px;
`
const Holder = styled.div`
position: absolute;
left: 0;
z-index: 2;
`
const SmallText = styled.div`
font-size: 20px;
color: rgba(0,0,0,0.4);
width: 70%;
text-align: center;
margin-bottom: 60px;
margin-top: 10px;
font-weight: 500;
`
const Text = styled.div`
font-size: 45px;
font-weight: 500;
/* margin-bottom: 20px; */
color: rgba(0,0,0,0.7);

`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #FEF0EF;
position: relative;
`
