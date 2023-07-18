import React, { useState } from 'react'
import styled from 'styled-components'
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io"
import {BsCart2} from "react-icons/bs"
import {GoSearch} from "react-icons/go"
import Button from '../reUse/Button'
import pics from "../../assest/home1.webp"
import pics1 from "../../assest/home2.webp"
import pics2 from "../../assest/home3.webp"

const Header = () => {
    const[Scroll, setScroll] = useState<boolean>(false)
    const[Hover, setHover] = useState<boolean>(false)
    const onHover=()=>{
        setHover(!Hover)
    }
    const[Hover1, setHover1] = useState<boolean>(false)
    const onHover1=()=>{
        setHover1(!Hover1)
    }
    const[Hover2, setHover2] = useState<boolean>(false)
    const onHover2=()=>{
        setHover2(!Hover2)
    }
    const[Hover3, setHover3] = useState<boolean>(false)
    const onHover3=()=>{
        setHover3(!Hover3)
    }
    const[Hover4, setHover4] = useState<boolean>(false)
    const onHover4=()=>{
        setHover4(!Hover4)
    }

    const onScroll =()=>{
        if(window.scrollY>= 100){
            setScroll(true)

        }else{
            setScroll(false)
        }
    }
    window.addEventListener("scroll",onScroll)

  return (
    
    <div>
        {
            Scroll ?         <Container bg='white' style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}}>
            <Wrapper>
                    <Logo>
                        Segun
    
                    </Logo>
                    <NavHolder>
                        <Nav
                           onMouseEnter={()=>
                            onHover()
                        }
                        onMouseLeave={()=>
                            onHover()
                        }
                        >Home 

                        {
                            Hover ? <Icon3/> : <Icon2/>
                        }
                {
                        Hover ?
                        <Div>
                            <Image src={pics}/>
                            <Image1 src={pics1}/>
                            <Image2 src={pics2}/>
                        </Div> : null
                    }

    
                        </Nav>
                        
                        <Nav
                           onMouseEnter={()=>
                            onHover1()
                        }
                        onMouseLeave={()=>
                            onHover1()
                        }
                        >Pages
                            {
                                Hover1 ? <Icon3/> : <Icon2/>
                            }
                            {
                                Hover1 ? 
                                <Div2 h='230px'>
                                    <Nav2>Blog</Nav2>
                                    <Nav2>Blog Details</Nav2>
                                    <Nav2>Courses</Nav2>
                                    <Nav2>Contact us</Nav2>
                                    <Nav2>Teacher Profile</Nav2>
                                    <Nav2>Photography</Nav2>

                                </Div2>
                                : null
                            }
                            </Nav>


                        <Nav
                            onMouseEnter={()=>
                                onHover2()
                            }
                            onMouseLeave={()=>
                                onHover2()
                            }
                        >Courses
                         {
                                Hover2 ? <Icon3/> : <Icon2/>
                            }
                              {
                                Hover2 ? 
                                <Div2 h='180px'>
                                    <Nav2>All Courses</Nav2>
                                    <Nav2>Design</Nav2>
                                    <Nav2>Development</Nav2>
                                    <Nav2>Marketing</Nav2>
                                    <Nav2>Photography</Nav2>

                                </Div2>
                                : null
                            }
                        
                        </Nav>
                        <Nav
                        onMouseEnter={()=>
                            onHover3()
                        }
                        onMouseLeave={()=>
                            onHover3()
                        }
                        >Features
                          {
                                Hover3 ? <Icon3/> : <Icon2/>
                            }
                             {
                                Hover3 ? 
                                <Div2 h='80px'>
                                    <Nav2>Course Detail V1</Nav2>
                                    <Nav2>Course Detail V2</Nav2>
                            

                                </Div2>
                                : null
                            }

                        </Nav>
                        <Nav
                            onMouseEnter={()=>
                                onHover4()
                            }
                            onMouseLeave={()=>
                                onHover4()
                            }
                        >Blog
                         {
                                Hover4 ? <Icon3/> : <Icon2/>
                            } 
                             {
                                Hover4 ? 
                                <Div2 h='80px'>
                                    <Nav2>Blog</Nav2>
                                    <Nav2>Blog Detail</Nav2>
                            

                                </Div2>
                                : null
                            }


                        </Nav>
                    </NavHolder>
                    <ButtonHolder>
                            <CartIcon/>
                            <SearchIcon/>
                            <Button title='Register' width='100px'/>
    
                    </ButtonHolder>
                </Wrapper>
        </Container> : 
                <Container bg='#FEF0EF'>
                <Wrapper>
                    <Logo>
                        Segun
    
                    </Logo>
                    <NavHolder>
                        <Nav
                           onMouseEnter={()=>
                            onHover()
                        }
                        onMouseLeave={()=>
                            onHover()
                        }
                        >Home 

                        {
                            Hover ? <Icon3/> : <Icon2/>
                        }
                {
                        Hover ?
                        <Div>
                            <Image src={pics}/>
                            <Image1 src={pics1}/>
                            <Image2 src={pics2}/>
                        </Div> : null
                    }

    
                        </Nav>
                        
                        <Nav
                           onMouseEnter={()=>
                            onHover1()
                        }
                        onMouseLeave={()=>
                            onHover1()
                        }
                        >Pages
                            {
                                Hover1 ? <Icon3/> : <Icon2/>
                            }
                            {
                                Hover1 ? 
                                <Div2 h='230px'>
                                    <Nav2>Blog</Nav2>
                                    <Nav2>Blog Details</Nav2>
                                    <Nav2>Courses</Nav2>
                                    <Nav2>Contact us</Nav2>
                                    <Nav2>Teacher Profile</Nav2>
                                    <Nav2>Photography</Nav2>

                                </Div2>
                                : null
                            }
                            </Nav>


                        <Nav
                            onMouseEnter={()=>
                                onHover2()
                            }
                            onMouseLeave={()=>
                                onHover2()
                            }
                        >Courses
                         {
                                Hover2 ? <Icon3/> : <Icon2/>
                            }
                              {
                                Hover2 ? 
                                <Div2 h='180px'>
                                    <Nav2>All Courses</Nav2>
                                    <Nav2>Design</Nav2>
                                    <Nav2>Development</Nav2>
                                    <Nav2>Marketing</Nav2>
                                    <Nav2>Photography</Nav2>

                                </Div2>
                                : null
                            }
                        
                        </Nav>
                        <Nav
                        onMouseEnter={()=>
                            onHover3()
                        }
                        onMouseLeave={()=>
                            onHover3()
                        }
                        >Features
                          {
                                Hover3 ? <Icon3/> : <Icon2/>
                            }
                             {
                                Hover3 ? 
                                <Div2 h='80px'>
                                    <Nav2>Course Detail V1</Nav2>
                                    <Nav2>Course Detail V2</Nav2>
                            

                                </Div2>
                                : null
                            }

                        </Nav>
                        <Nav
                            onMouseEnter={()=>
                                onHover4()
                            }
                            onMouseLeave={()=>
                                onHover4()
                            }
                        >Blog
                         {
                                Hover4 ? <Icon3/> : <Icon2/>
                            } 
                             {
                                Hover4 ? 
                                <Div2 h='80px'>
                                    <Nav2>Blog</Nav2>
                                    <Nav2>Blog Detail</Nav2>
                            

                                </Div2>
                                : null
                            }


                        </Nav>
                    </NavHolder>
                    <ButtonHolder>
                            <CartIcon/>
                            <SearchIcon/>
                            <Button title='Register' width='100px'/>
    
                    </ButtonHolder>
                </Wrapper>
            </Container>
        }

      
    </div>
  )
}

export default Header
const Nav2 = styled.div`
padding: 8px 0px 8px 8px;
border-radius: 3px;
font-size: 15px;
font-weight: 500;
color: rgba(0, 0, 0, 0.7);

width: 100%;
:hover{
    background-color: grey;
    color: white;
}

`
const Div2 = styled.div<{h:string}>`
position: absolute;
height: ${({h})=> h} ;
width: 250px;
padding: 5px 8px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
top: 23px;
left: -30px;
border-radius: 5px;
z-index: 10;
:hover ${Nav2}{
    /* width: 100%; */

}

`
const Image2 = styled.img`
margin-right: 15px;
cursor: pointer;
:hover{
    border:1px solid black; 
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px;

}
`
const Image1 = styled.img`
margin-right: 15px;
cursor: pointer;
:hover{
    border:1px solid black; 
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px;

}
`
const Image = styled.img`
margin-right: 15px;
cursor: pointer;
:hover{
    border:1px solid black; 
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px;

}
`
const Div = styled.div`
width: 1210px;
height: 300px;
position: absolute;
top: 23px;
z-index: 3;
right:-810px ;
border-radius: 5px;
background-color: white;
display:flex ;
justify-content: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`
const CartIcon = styled(BsCart2)`
margin: 0 15px;
font-size: 20px;
`
const SearchIcon = styled(GoSearch)`
margin: 0 15px;
font-size: 20px;

`
const Icon3 = styled(IoIosArrowUp)`
margin-top:5px ;
transition: all 350ms;
margin-left: 5px;
`
const Icon2 = styled(IoIosArrowDown)`
margin-top:5px ;
transition: all 350ms;
margin-left: 5px;
`
const ButtonHolder = styled.div`
display: flex;
align-items: center
`
const Nav = styled.div`
margin: 15px;
cursor: pointer;
display: flex;
align-items: center;
position: relative;
`
const NavHolder = styled.div`
display: flex;
`
const Logo = styled.div`
font-size: 30px;
font-weight: 500;
`
const Wrapper = styled.div`
width:90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

`
const Container = styled.div<{bg:string}>`
background-color: ${({bg})=>bg};
height: 70px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
z-index: 10;

`
