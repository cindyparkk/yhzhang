import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    div {
        width: 100%;
        height: auto;
    }
    & > :nth-child(1){
        z-index: 0;
        position: absolute;
        bottom: 0;
    }
    & > :nth-child(2){
        /* display: ${props=>props.open ? "none" : null}; */
        position: absolute;
        bottom: 0;
        z-index: 2;
    }
`;

const Background = ({children, open}) => {

    const isLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isLaptopDevice = useMediaQuery({query: '(max-width: 1640px)'})
      const isDesktop = useMediaQuery({ query: '(min-device-width: 1800px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isTabletOrMobileDevice = useMediaQuery({query: '(max-device-width: 1223px)'})
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <Container>
            {/* {children} */}
            {/* {isLaptop && <>
                <img src="/laptop.svg" />
                {isDesktop && <img src="/desktop-back.svg" />}
                {isTabletOrMobile && <img src="/vertical.svg" />}
            {isTabletOrMobileDevice && <img src="/vertical.svg" />}
            </>} */}
      {/* {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
            {isRetina && <p>You are retina</p>} */}
            <div>
                {isLaptop &&  <img src="/laptop.svg" />}
                {isTabletOrMobile && <img src="/vertical.svg" />}
            </div>
            <div open={open}>
                {isLaptop &&  <img src="/laptop-front.svg" />}
            </div>
        </Container>
    )
};

Background.defaultProps = {
    
}

export default Background;