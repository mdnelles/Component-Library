import styled from 'styled-components';
import { allAnims } from './Anims';

export const AnimWrap = (props) => {
    const { children, animSpecs } = props;
    const AS = animSpecs;

    const {
        X360,
        Y360,
        fadeInkf,
        wobY,
        wobX,
        fwdx018,
        fwdx1836,
        fwdx09,
        fwdx918,
        fwdx1827,
        fwdx2736,
        fwdy018,
        fwdy1836,
        fwdy09,
        fwdy918,
        fwdy1827,
        fwdy2736,
        floatX,
        floatShadow,
        pulseSM,
        pulseMD,
        pulseLG,
        noAnim
    } = allAnims({ degreesHi: AS.degreesHi, degreesLow: AS.degreesLow });

    let theAnim = 'noAnim';
    // need to iterate through all animation posibilities and not use eval() to satisfy TS
    if (AS.name === 'X360') theAnim = X360;
    else if (AS.name === 'Y360') theAnim = Y360;
    else if (AS.name === 'fadeInkf') theAnim = fadeInkf;
    else if (AS.name === 'wobX') theAnim = wobX;
    else if (AS.name === 'wobY') theAnim = wobY;
    else if (AS.name === 'fwdx018') theAnim = fwdx018;
    else if (AS.name === 'fwdx1836') theAnim = fwdx1836;
    else if (AS.name === 'fwdx09') theAnim = fwdx09;
    else if (AS.name === 'fwdx918') theAnim = fwdx918;
    else if (AS.name === 'fwdx1827') theAnim = fwdx1827;
    else if (AS.name === 'fwdx2736') theAnim = fwdx2736;
    else if (AS.name === 'fwdy018') theAnim = fwdy018;
    else if (AS.name === 'fwdy1836') theAnim = fwdy1836;
    else if (AS.name === 'fwdy09') theAnim = fwdy09;
    else if (AS.name === 'fwdy918') theAnim = fwdy918;
    else if (AS.name === 'fwdy1827') theAnim = fwdy1827;
    else if (AS.name === 'fwdy2736') theAnim = fwdy2736;
    else if (AS.name === 'floatX') theAnim = floatX;
    else if (AS.name === 'floatShadow') theAnim = floatShadow;
    else if (AS.name === 'pulseSM') theAnim = pulseSM;
    else if (AS.name === 'pulseMD') theAnim = pulseMD;
    else if (AS.name === 'pulseLG') theAnim = pulseLG;
    else theAnim = noAnim;

    const AnimWrapDiv = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        border: ${AS.border};
        -webkit-animation-duration: ${AS.duration}s;
        animation-duration: ${AS.duration}s;
        -webkit-animation-iteration-count: ${AS.iterationCount};
        animation-iteration-count: ${AS.iterationCount};
        -webkit-animation-name: ${theAnim};
        animation-name: ${theAnim};
        -webkit-animation-fill-mode: ${AS.fillMode};
        animation-fill-mode: ${AS.fillMode};
        animation-direction: ${AS.direction};
        -webkit-animation-direction: ${AS.direction};
        -webkit-animation-timing-function: ${AS.timing};
        animation-timing-function: ${AS.timing};
        -webkit-animation-delay: ${AS.delay}s;
        animation-delay: ${AS.delay}s;
    `;

    return <AnimWrapDiv>{children}</AnimWrapDiv>;
};
