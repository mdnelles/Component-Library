import React from 'react';
import { AnimWrap } from './styles/AnimWrap';
import { SceneStyle } from './styles/Scene';
import { ObjProps } from './Faces/FaceInter';
import Face from './Faces/Face';
import { ObjWrapper } from './styles/Global';

export const Cuboid = (props: ObjProps): any => {
    let { anim1Specs, anim2Specs, width = 5, height = 5, depth = 5, faces, global = {}, custom = {}, tranz = (+height / 2) | 0, perspective, perspectiveOrigin, zIndex } = props;

    const buildFace = (faceType: any): any => {
        return <Face width={width} height={height} depth={depth} faceType={faceType} id={faceType} tranz={tranz} global={global} custom={custom} />;
    };

    return (
        <SceneStyle width={width} height={height} perspective={perspective} perspectiveOrigin={perspectiveOrigin} zIndex={zIndex}>
            <AnimWrap animSpecs={anim1Specs}>
                <AnimWrap animSpecs={anim2Specs}>
                    <ObjWrapper>
                        {!!faces && !!faces.front ? buildFace('front') : null}
                        {!!faces && !!faces.right ? buildFace('right') : null}
                        {!!faces && !!faces.back ? buildFace('back') : null}
                        {!!faces && !!faces.left ? buildFace('left') : null}
                        {!!faces && !!faces.top ? buildFace('top') : null}
                        {!!faces && !!faces.bottom ? buildFace('bottom') : null}
                    </ObjWrapper>
                </AnimWrap>
            </AnimWrap>
        </SceneStyle>
    );
};
