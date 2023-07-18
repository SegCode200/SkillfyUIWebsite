import React from 'react'
import styled from 'styled-components'


interface iData {
    title?:string;
    width?: string
}
const Button:React.FC<iData> = ({title,width}) => {
  return (
    <div>
        <Container w={(`${width}`)}>
            {title}
        </Container>

      
    </div>
  )
}

export default Button
const Container = styled.button<{w:string}>`
width: ${({w})=> w};
height: 45px;
background-color: #F56962;
border-radius: 5px;
color:white ;
border: none;
font-size: 17px;
font-weight: 300;
cursor: pointer;
margin-left: 10px;
transition: all 350ms;
:hover{
  box-shadow: #F56962 0px 8px 10px;

}
`
