import React from 'react'
import styled from 'styled-components'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import pics from "../assest/user.webp"
import pics1 from "../assest/user1.webp"
import {FiStar} from "react-icons/fi"
const Array =[
    {
        name: "William Taylor",Pics: pics1
    },
    {
        name: "Segun Ajayi",Pics: pics
    }

]

const Wrapper1 = () => {
  return (
    <div>
        <Container>
            <Main>
                <UpSide>
                    <Text>What our students have to say</Text>
                    <div style={{display: "flex"}}>

                  
                    <Div>
                    <Line t="ee"/>
                    </Div>
                    <Div>
                    <Line t=""/>
                    </Div>
                    </div>
                    
                </UpSide>

                <DownSide>
                {
                    Array.map((props)=>(
                        <Card>
                        
                        <Div2>
                        <div  style={{display:"flex"}}>

                        <Image src={props.Pics}/>
                            <div style={{display:"flex", flexDirection: "column", marginLeft: "20px", justifyContent: "space-between"}}>
                            <BigText>{props.name}</BigText>
                            <SmallText>Student</SmallText>

                            </div>
                            
                            </div>
                            <div  style={{display:"flex"}}>
                            <Icon/>
                            <Icon/>
                            <Icon/>
                            <Icon/>
                            <Icon/>

                            </div>
                          

                        </Div2>
                        <MainText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae at dolorem nisi sequi.</MainText>
                    </Card>

                    ))
                }
                </DownSide>

            </Main>
        </Container>
      
    </div>
  )
}

export default Wrapper1
const MainText = styled.div`
font-size: 20px;
margin-top: 20px;
color: rgba(0,0,0,0.4);
`
const Icon = styled(FiStar)`
color: gold;
font-weight: 800;
font-size: 20px;
`
const SmallText = styled.div`
font-size: 18px;
font-weight: 500;
color: rgba(0,0,0,0.6);
`
const BigText = styled.div`
font-size: 20px;
font-weight: 500;
color: rgba(0,0,0,0.6);
`
const Image = styled.img`

`
const Div2 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Card = styled.div`
width: 550px;
height: 150px;
background-color: rgba(255,255,255,0.8);
padding: 20px;
border-radius: 0 50px 0 0 ;
display: flex;
justify-content: center;
flex-direction: column;
margin-right: 15px;
:hover{
    background-color: white;
    border-left: 5px solid gold;
}

`
const DownSide = styled.div`
margin-top: 40px;
display: flex;
justify-content: space-between;
align-items: center;


`
const Line = styled(HiOutlineArrowNarrowRight)<{t:string}>`
font-size: 25px;
transform: ${({t})=> t ? "rotate(180deg)" : "rotate(-360deg)"};
:hover {
    color: #F56962;
}

`
const Div = styled.div`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
border-radius: 3px;
cursor: pointer;
margin-right: 20px ;
`
const Text = styled.div`
font-size: 45px;
font-weight: 400;
`
const UpSide = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Container = styled.div`
width: 100%;
height: 350px;
background-color:#EFEFF6 ;
display: flex;
align-items: center;
justify-content: center;
`
