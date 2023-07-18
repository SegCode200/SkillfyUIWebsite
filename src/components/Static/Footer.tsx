import React from 'react'
import styled from 'styled-components'
import {AiOutlineTwitter, AiOutlineGoogle, AiOutlineLinkedin, AiOutlineFacebook} from "react-icons/ai"
const Footer = () => {
  return (
    <div>
        <Container>
          <Main>
            <Div>
            <Hold>
              <BigText>Home Pages</BigText>
              <Text>Home v1</Text>
              <Text>Home v2</Text>
              <Text>Home v3</Text>
            </Hold>
            <Hold>
              <BigText>Courses</BigText>

              <Text>All Courses</Text>
              <Text>Design</Text>
              <Text>Development</Text>
              <Text>Marketing</Text>
              <Text>Photography </Text>
            </Hold>
            <Hold>                        
              <BigText>Pages</BigText>
              <Text>Blog</Text>
              <Text>Blog Detail</Text>
              <Text>Courses</Text>
              <Text>Contact us</Text>
              <Text>Teacher Profile</Text>
              <Text>404 page</Text>
            </Hold>
            <Hold>
              <BigText>Features</BigText>
              <Text>Course Detail V1</Text>
              <Text>Course Detail V2</Text>
            </Hold>
            </Div>
            <Side>
              <Text>© 2023 Skilify Education Private Limited. All rights reserved</Text>
              <div style={{display: "flex"}}>
                <Icon/>
                <Icon1/>
                <Icon2/>
                <Icon3/>

              </div>
            </Side>


          </Main>
        </Container>
      
    </div>
  )
}

export default Footer

const Icon3 = styled(AiOutlineLinkedin)`
color: rgba(255,255,255,0.6);
font-size: 30px;
:hover{
  color: white;
  cursor: pointer;
}
`
const Icon2 = styled(AiOutlineGoogle)`
color: rgba(255,255,255,0.6);
font-size: 30px;
margin-right: 10px;
:hover{
  color: white;
  cursor: pointer;
}
`
const Icon1 = styled(AiOutlineTwitter)`
color: rgba(255,255,255,0.6);
font-size: 30px;
margin-right: 10px;
:hover{
  color: white;
  cursor: pointer;
}
`
const Icon = styled(AiOutlineFacebook)`
color: rgba(255,255,255,0.6);
font-size: 30px;
margin-right: 10px;
:hover{
  color: white;
  cursor: pointer;
}
`
const Side = styled.div`
border-top: 1px solid white;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding-top: 20px ;
margin-top: 20px;
`
const Div = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;

`
const Text = styled.div`
font-size: 15px;
font-weight: 500;
color: rgba(255,255,255,0.6);
margin: 10px 0;
:hover{
  color: white;
  cursor: pointer;
}
`
const BigText = styled.div`
font-size: 28px;
font-weight: 500;
color: white;
margin-bottom: 20px;

`
const Hold = styled.div`
width: 200px;
height: 60%;
margin: 0 10px;
display: flex;
flex-direction: column;
justify-content: center;
margin-right: 130px;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Container = styled.div`
width: 100%;
height: 400px;
background-color: #33333D;
display: flex;
justify-content: center;
align-items: center;
`
