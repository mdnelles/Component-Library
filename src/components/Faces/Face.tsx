import styled from 'styled-components';
import React from 'react';
import { FaceProps } from './FaceInter';

const Face = (props: FaceProps): JSX.Element => {
    let { depth = 10, faceType, global = {}, height = 10, custom = false, tranz = 80, width = 100 } = props;

    let transform;
    let styles = !!custom[faceType] && !!custom[faceType].css ? custom[faceType].css : global.css;
    const body = !!custom[faceType] && !!custom[faceType].body ? custom[faceType].body : global.body;
    if (faceType === 'bottom') {
        tranz = +height - +depth / 2;
        height = +depth;
        transform = `transform: rotateX(-90deg) translateZ(${tranz}px);`;
        //styles = !!custom["top"] ? custom : global;
    } else if (faceType === 'top') {
        height = +depth;
        if (!!depth) tranz = +depth / 2;
        transform = `transform: rotateX(90deg) translateZ(${tranz}px);`;
    } else if (faceType === 'front') {
        if (!!depth) tranz = +depth / 2;
        transform = `transform: rotateY(0deg) translateZ(${tranz}px);`;
    } else if (faceType === 'back') {
        if (!!depth) tranz = +depth / 2;
        transform = `transform: rotateY(180deg) translateZ(${tranz}px);`;
    } else if (faceType === 'right') {
        if (height > width && !depth) {
            tranz = -(+height / 2 - +width);
            width = +height;
        } else if (width > height && !depth) {
            tranz = +height / 2;
            height = +width;
        } else {
            tranz = +width - +depth / 2;
            width = +depth;
        }
        transform = `transform: rotateY(90deg) translateZ(${tranz}px);`;
        // topr is to of Ribbon which points back
    } else if (faceType === 'topr') {
        height = +depth;
        if (!!depth) tranz = +depth / 2;
        transform = `transform: rotateX(90deg) translateZ(${tranz}px );  `;
    } else {
        if (height > width && !depth) {
            tranz = -(+height / 2 - +width);
            width = +height;
        } else if (width > height && !depth) {
            tranz = +height / 2;
            height = +width;
        } else {
            tranz = +depth / 2;
            width = +depth;
        }
        transform = `transform: rotateY(-90deg) translateZ(${tranz}px);`;
    }

    const Specs: any = styled.section`
        ${styles}
        width: ${width}px;
        position: absolute;
        height: ${height}px;
        ${transform};
    `;

    return <Specs>{body}</Specs>;
};

export default Face;
