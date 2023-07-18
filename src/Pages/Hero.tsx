import React from 'react'
import Button from '../components/reUse/Button'
import styled from 'styled-components'
import pics1 from "../assest/briefcase.svg"
import pics2 from "../assest/camera (1).svg"
import pics7 from "../assest/heart (1).svg"
import pics8 from "../assest/pantone.svg"
import pics3 from "../assest/cast (1).svg"
import pics4 from "../assest/monitor.svg"
import pics5 from "../assest/volume-up (1).svg"
import pics6 from "../assest/shake.svg"

const CardAll = [
    {Icon: pics8 , Text:"Design", bg : "darkblue", color1: "rgb(239,239,246) ", color2: "rgb(226,221,255)"  },
    {Icon: pics4 , Text:"Development", bg : "orange ", color1: "rgb(254,243,232)" , color2: "rgb(250,224,208)"  },
    {Icon: pics6 , Text: "IT & Software", bg : "skyblue ", color1: "rgb(221,247,255)", color2: "rgb(187,240,255)"  },
    {Icon: pics1 , Text:"Business", bg : "lightgreen ", color1: "rgb(230,250,234)" , color2: "rgb(206,246,214)"  },
    {Icon: pics5 , Text: "Marketing", bg : "lightgreen", color1: "rgb(230,250,234)" , color2: "rgb(206,246,214)" },
    {Icon: pics2 , Text: "Photography", bg : "skyblue ", color1: "rgb(221,247,255)" , color2: "rgb(187,240,255)"   },
    {Icon: pics7 , Text: "Health & care", bg : "orange ", color1: "rgb(254,243,232)" , color2: "rgb(250,224,208)"  },
    {Icon: pics3 , Text: "Technology", bg : "darkblue", color1: "rgb(239,239,246)" , color2: "rgb(226,221,255)"   },
]

const Hero = () => {
  return (
    <div>
        <Container>
            <Main>
                <UpSide>
                    <Text>Choice favourite course from top category</Text>
                    <Button title='See All Categories' width='170px'/>
                </UpSide>
                <Holder>

                
                {
                    CardAll?.map((props)=>(
                        <Card bg={props.color1} b={props.bg}>
                    <Div bg={props.color2}>
                    <Icon src={props.Icon}/>
                    </Div>
                    <BigText>{props.Text}</BigText>
                    <SmallText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nisi, consectetur hic repellat recusandae minima sint impedit iure?</SmallText>

                </Card>
                    ))
                }
                </Holder>
            </Main>
        </Container>
      
    </div>
  )
}

export default Hero
const Holder = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Div = styled.div<{bg:string}>`
display: flex;
align-items: center;
justify-content: center;
background-color: ${({bg})=>bg} ;
width: 50px;
height: 50px;
border-radius: 5px;
margin-top: 30px;
margin-bottom: 10px;

`
const SmallText = styled.div`
font-size: 17px;
font-weight: 500;
color: rgba(41, 39, 39, 0.4);
margin-top: 10px;

`
const BigText = styled.div`
font-size: 25px;
font-weight: 600;

`
const Icon = styled.img`
width: 30px;
height: 30px;
`
const Card = styled.div<{bg:string,b:string}>`
width: 220px;
padding: 0 30px;
border-radius: 5px;
height: 300px;
background-color: ${({bg})=>bg};
/* margin-top: 40px; */
display: flex;
flex-direction: column;
margin: 10px 0px;
/* justify-content: center; */

:hover ${Div}{
    background-color: white;

}
:hover ${BigText}{
    color: white;

}
:hover ${SmallText}{
    color: white;

}
:hover{
    background-color: ${({b})=>b };
}

`
const Text = styled.div`
font-size: 45px;
font-weight: 500;
color: rgba(0, 0, 0, 0.7);
`
const UpSide = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 50px;
`
const Main = styled.div`
display: flex;
flex-direction: column;
width: 90%;
justify-content: center;
align-items: center;
justify-content: center;
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center ;
justify-content: center;
margin: 150px 0;
`
