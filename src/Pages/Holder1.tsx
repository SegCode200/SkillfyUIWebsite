import React from 'react'
import styled from 'styled-components'
import pics from "../assest/apply-crd-img.webp"
import Button from '../components/reUse/Button'
import icon from "../assest/dots-pattern-gray-vertical.svg"
import icon1 from "../assest/dots-pattern-pink.svg"

const Array = [
    {Text: 'Become a teacher', Tex2: "Teach what you love. Coursector gives you the tools to create a course.", Text3: "Apply As Teacher " },
    {Text: 'Coursector for business', Tex2: "Get unlimited access to 3,000+ of Coursector’s top courses for your team", Text3: "Get Skillfy For Business " }
]

const Holder1 = () => {
  return (
    <div>
        <Container>
                <Main>
                    <Hold>
                    {
                        Array.map((props)=>(
                            <Card>
                            <div style={{display: "flex"}}>
                            <Image src={pics}/>
    
                            <div style={{display: "flex", flexDirection: "column", marginLeft: "20px"}}>
                            <BigText>{props.Text}</BigText>
                            <SmallText>{props.Tex2}</SmallText>
                            <Button title={props.Text3} width='200px'/>
                            </div>
                            </div>
                            
    
                        </Card>
                        ))
                    }
                </Hold>
              


            </Main>
            <Dot src={icon}/>
                <Dot1 src={icon1}/>
        </Container>
    </div>
  )
}

export default Holder1
const Dot1 = styled.img`
position: absolute;
left: 0;
bottom: 0;
`
const Dot = styled.img`
position: absolute;
right: 0;
top: 0;

`
const Image = styled.img`
width: 70px;
height: 70px;
`
const SmallText = styled.div`
font-size: 17px;
font-weight: 500;
margin-top: 10px ;
margin-bottom: 20px ;
color: rgba(0,0,0,0.4);
`
const BigText = styled.div`
font-size: 22px;
font-weight: 500;
color: rgba(0,0,0,0.7);
`
const Card = styled.div`
width: 550px;
height: 150px;
padding : 20px;
background-color: white;
border-radius: 5px;
margin-right: 40px;
z-index: 2;
cursor: pointer;
transition: all 1000ms;
:hover{
    box-shadow: #F56962 0px 8px 24px;
}
`
const Hold = styled.div`
display: flex;
justify-content: space-between;
`
const Main = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;

`
const Container = styled.div`
width: 100%;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
background-color: #FEF0EF;
position: relative;

`
