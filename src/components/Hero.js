import { constants } from 'buffer'
import React from 'react'
// import styled from 'styled-components'
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import Image from '../images/Image-2.jpg';
// import { IoMdArrowRoundForward } from 'react-icons/io';
// import { IoArrowForward, IoArrowBack } from 'react-icons/io5';


const HeroContainer = styled.section`
    background: url(${Image}) center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;


const Container = styled.div`
    h1 {
        display: flex;
        color: #fff;
        font-size: 50px;
        justify-content: center;
        align-items: center;

    }

    p {
        
        color: #fff;
        font-family: sans-serif; 
        font-size: 25px;
        width: 800px;
        line-height: 1.5em;
        padding: 50px;
        margin: 0;


    }
`;



function Hero () {
    return (
        <HeroContainer>
            <Container>
                <h1>Larry's Lawncare</h1>
                <p>With over 30 years’ experience in the Australian turf industry, we know our stuff when it comes to lawn care. Now, we’re opening the door to you.<br></br>
                Lawn Care Supplies is proudly backed by Larry's Lawncare, which has  serviced the turf industry since 1969. K&B Adams supplies premium turf maintenance products to industry professionals across Australia, from golf courses and bowls clubs to tennis courts and professional stadiums.
                </p>
                <div className="hero-btns">
                    <Button 
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large' 
                    >
                        Our Service 
                    </Button>
                    <Button 
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large' 
                    >
                        Make a Booking 
                    </Button>
                </div>
            </Container>
        </HeroContainer>
    )
}



export default Hero
