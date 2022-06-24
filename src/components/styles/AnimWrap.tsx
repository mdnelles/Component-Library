import styled from 'styled-components';
import React from 'react';
import { AnimStylesProps } from './Anim';
import { allAnims } from './Anims';

export const AnimWrap = (props: AnimStylesProps) => {
    const { duration = 0, iterationCount = 0, animName = 'noAnim', fillMode = 'forward', children = '', borderColor = '', animLow = 0, animHi = 0, animDirection = 'normal' } = props;

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
    } = allAnims({ animLow, animHi });
    let theAnim: any = 'noAnim';
    // need to iterate through all animation posibilities and not use eval() to satisfy TS
    if (animName === 'X360') theAnim = X360;
    else if (animName === 'Y360') theAnim = Y360;
    else if (animName === 'fadeInkf') theAnim = fadeInkf;
    else if (animName === 'wobX') theAnim = wobX;
    else if (animName === 'wobY') theAnim = wobY;
    else if (animName === 'fwdx018') theAnim = fwdx018;
    else if (animName === 'fwdx1836') theAnim = fwdx1836;
    else if (animName === 'fwdx09') theAnim = fwdx09;
    else if (animName === 'fwdx918') theAnim = fwdx918;
    else if (animName === 'fwdx1827') theAnim = fwdx1827;
    else if (animName === 'fwdx2736') theAnim = fwdx2736;
    else if (animName === 'fwdy018') theAnim = fwdy018;
    else if (animName === 'fwdy1836') theAnim = fwdy1836;
    else if (animName === 'fwdy09') theAnim = fwdy09;
    else if (animName === 'fwdy918') theAnim = fwdy918;
    else if (animName === 'fwdy1827') theAnim = fwdy1827;
    else if (animName === 'fwdy2736') theAnim = fwdy2736;
    else if (animName === 'floatX') theAnim = floatX;
    else if (animName === 'floatShadow') theAnim = floatShadow;
    else if (animName === 'pulseSM') theAnim = pulseSM;
    else if (animName === 'pulseMD') theAnim = pulseMD;
    else if (animName === 'pulseLG') theAnim = pulseLG;
    else theAnim = noAnim;

    const AnimWrapDiv: any = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        border: 0px dotted ${borderColor};
        transform-style: preserve-3d;
        -webkit-animation-duration: ${duration}s;
        animation-duration: ${duration}s;
        -webkit-animation-iteration-count: ${iterationCount};
        animation-iteration-count: ${iterationCount};
        -webkit-animation-name: ${theAnim};
        animation-name: ${theAnim};
        -webkit-animation-fill-mode: ${fillMode};
        animation-fill-mode: ${fillMode};
        animation-direction: ${animDirection};
        -webkit-animation-direction: ${animDirection};
    `;

    return <AnimWrapDiv>{children}</AnimWrapDiv>;
};
