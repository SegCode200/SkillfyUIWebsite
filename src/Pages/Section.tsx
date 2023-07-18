import React, { useState } from 'react'
import Button from '../components/reUse/Button'
import styled from 'styled-components'
import pics from "../assest/crd-img3.webp"
import pics1 from "../assest/crd-img2.webp"
import pics2 from "../assest/crd-img5.webp"
import img1 from "../assest/profile-img2.webp"
import img2 from "../assest/profile-img4.webp"
import img3 from "../assest/profile-img5.webp"
import {MdOutlineVisibility,MdOutlinePlayCircle} from "react-icons/md"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import cir  from "../assest/dots-pattern-gray-vertical.svg"




import icon1 from "../assest/star.svg"
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"



const Section = () => {

    const [click, setCLick ] = useState<boolean>(false)
    const oncliked= () =>{
        setCLick(!click)
    }
    // const [click1, setCLick1 ] = useState<boolean>(false)
    // const oncliked1= ()=>{
    //     setCLick1(!click1)
    // }
    // const [click2, setCLick2 ] = useState<boolean>(false)
    // const oncliked2 = ()=>{
    //     setCLick2(!click2)
    // }
    const All = [
        {
            Pics: pics, Text: "Learn Python Programming beginner",star: 23, view: 200, play: 2, Pic2: img1, Name : "Ajayi Segun", Number: "$900.30", Number1 : "$150.00"  },
           { Pics: pics1, Text: "Learn HTML5 Programming beginner",star: 0, view: 5000, play: 300, Pic2: img2, Name : "Michael Brown", Number: "$290.30", Number1 : "$230.00"},
            {Pics: pics2, Text: "Statistics Data Science and Business Analysis",star: 9, view: 9000, play: 7, Pic2: img3, Name : "Travis Godwin", Number: "$280.30", Number1 : "$300.00"}
    ]

  return (
    <div>
        <Container>
            <Main>
                <Upside>
                    <Text>Get choice of your course</Text>
                    <Button title='View All' width='150px'/>
                </Upside>
                <Holder>
                    {
                        All.map((props)=>{
                            return (
                                <Card>
                                    <Loveicon
                                        onClick={()=>
                                            oncliked()

                                        } />
                                    {click ? <Loveicon2 /> : null}
                                    {/* {click1 ? <Loveicon2 /> : null}
                                    {click2 ? <Loveicon2 /> : null} */}
                                    <Image src={props.Pics} />
                                    <Div>
                                        <div style={{ display: "flex", alignItems: 'center' }}>
                                            <Icon src={icon1} />
                                            <Note>{props.star}</Note>
                                        </div>
                                        <div style={{ display: "flex", alignItems: 'center' }}>
                                            <Icon1 />
                                            <Note>{props.view}</Note>
                                        </div>
                                        <div style={{ display: "flex", alignItems: 'center' }}>
                                            <Icon2 />
                                            <Note>{props.play}</Note>
                                        </div>
                                    </Div>
                                    <BigText>{props.Text}</BigText>
                                    <ImageHolder>
                                        <div style={{ display: "flex", alignItems: 'center' }}>
                                            <Image2 src={props.Pic2} />
                                            <SmallText>{props.Name}</SmallText>
                                        </div>
                                        <div style={{ display: "flex", alignItems: 'center' }}>
                                            <del style={{ fontSize: "15px", color: "rgba(5, 5, 5, 0.3)", fontWeight: "700" }}>{props.Number}</del>
                                            <Amount>{props.Number1}</Amount>

                                        </div>

                                    </ImageHolder>
                                </Card>
                            )
                        })
                    }
                    

                </Holder>
                <DownSide>
                    <Circle src={cir}/>
                    <Div2>
                        <ArrowIcon t="ee"/>
                        </Div2>
                        <Line bg="ee"/>
                        <Line bg=""/>
                        <Div2>
                        <ArrowIcon t=""/>
                        </Div2>
                   

                </DownSide>
            </Main>
        </Container>
      
    </div>
  )
}

export default Section
const Circle = styled.img`
position: absolute;
width: 70px;
/* transform: translate(360px, 360px); */
right: -0px;
 bottom: 20px;
`
const Line = styled.div<{bg:string}>`
width: 520px;
height: 3px;
background-color: ${({bg}) => bg ? "white" : "gold" };
border-radius: 10px;

`
const ArrowIcon = styled(HiOutlineArrowNarrowRight)<{t: string}>`
font-size: 25px;
transform: ${({t})=> t ? "rotate(180deg)" : "rotate(-360deg)"};
:hover {
    color: #F56962;
}
`
const Div2 = styled.div`
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
border-radius: 3px;
cursor: pointer;
`
const DownSide = styled.div`
width: 100%;
height: 120px;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
`
const Icon2 = styled(MdOutlinePlayCircle)`
color: green;
font-size: 20px;

`
const Icon1 = styled(MdOutlineVisibility)`
font-size: 20px;
color: red;
`
const Loveicon2 = styled(AiFillHeart)`
position: absolute;
font-size: 30px;
right: 0;
color: red;
top: 30px;
right: 23px;
z-index: 0;
`
const Loveicon = styled(AiOutlineHeart)`
position: absolute;
font-size: 30px;
right: 0;
right: 23px;
top: 30px;
z-index: 1;
color: white;
`
const Amount = styled.div`
font-size: 18px;
font-weight: 900;
color: darkorange;
margin-left: 5px;
`
const SmallText = styled.div`
font-size: 15px;
font-weight: 300;
`
const Image2 = styled.img`
width: 30px;
height: 30px;
object-fit: cover;
border-radius: 5px;
margin-right: 5px;
`
const ImageHolder = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 10px;
`
const BigText = styled.div`
font-size: 22px;
font-weight: 500;
color: rgba(5, 5, 5, 0.7);
margin: 10px 0px;
`
const Icon = styled.img``
const Note = styled.div`
margin-left: 5px;
`
const Div = styled.div`
width: 100%;
height: 30px;
border-bottom: 1px solid rgba(5, 5, 5, 0.5);
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px 0;
`
const Image = styled.img`
width: 100%;
height: 200px;
margin-top:20px;
align-self: center;
border-radius: 5px;
object-fit: cover;

`
const Card = styled.div`
width: 330px;
height: 400px;
background-color: white;
padding: 0 20px;
display: flex;
flex-direction: column;
border-radius: 5px;
transition: all 500ms;
:hover{
    transform: translate(0 , -10px);
}
position: relative;
`
const Holder = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-bottom: 20px;
`
const Text = styled.div`
font-size: 45px;
font-weight: 500;
`
const Upside = styled.div`
display: flex;
margin: 30px 0;
align-items: center;
justify-content: space-between;
width: 100%;

`
const Main = styled.div`
display: flex;
justify-content: center;
width: 90%;
height: 100%;
flex-direction: column;

`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
background-color: #EFEFF6;
`
