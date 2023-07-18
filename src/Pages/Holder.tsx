import React from 'react'
import styled from 'styled-components'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import pics from "../assest/partner.webp"
import pics1 from "../assest/partner1.webp"
import pics2 from "../assest/partner2.webp"
import pics3 from "../assest/partner3.webp"
import pics4 from "../assest/partner4.webp"

const Photo =[
    pics,
    pics1,
    pics2,pics3,pics4,pics

]

const Holder = () => {
  return (
    <div>
        <Container>
            <Main>
                <UpSide>
                    <Text>Trusted by our awesome partners</Text>
                    <div style={{display: "flex"}}>
                    <Div>
                        <Icon t='ee'/>
                    </Div>
                    <Div>
                        <Icon t=''/>
                    </Div>
                    </div>
                </UpSide>
                <DownSide>
                    <Hold>
                       {
                        Photo.map((props)=>(
                            <Image src={props} />
                        ))
                       }
                    </Hold>
                </DownSide>
            </Main>
        </Container>
      
    </div>
  )
}

export default Holder
const Image = styled.img`
margin: 0 35px;

`
const Hold = styled.div`
display: flex;
align-items: center;
margin-top: 50px;

`
const DownSide = styled.div``
const Icon = styled(HiOutlineArrowNarrowRight)<{t:string}>`
font-size: 25px;
transform: ${({t})=> t ? "rotate(180deg)" : "rotate(-360deg)"};

`
const Div = styled.div`
background-color: rgba(0, 0, 0,0.2);
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
/* background-color: white; */
border-radius: 3px;
cursor: pointer;
margin-right: 20px ;
:hover ${Icon}{
    color: #F56962;

}

`
const Text = styled.div`
font-size: 45px;
font-weight: 500;
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
height: 300px;
display: flex;
justify-content: center;
align-items: center;
`
