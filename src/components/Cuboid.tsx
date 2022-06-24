import React from 'react';
import { AnimWrap } from './styles/AnimWrap';
import { SceneStyle } from './styles/Scene';
import { ObjProps } from './Faces/FaceInter';
import Face from './Faces/Face';
import { ObjWrapper } from './styles/Global';

export const Cuboid = (props: ObjProps): any => {
    let { animSpecs = {}, width = 5, height = 5, depth = 5, faces, global = {}, custom = {}, tranz = (+height / 2) | 0, perspective, perspectiveOrigin, zIndex } = props;

    const buildFace = (faceType: any): any => {
        return <Face width={width} height={height} depth={depth} faceType={faceType} id={faceType} tranz={tranz} global={global} custom={custom} />;
    };

    return (
        <SceneStyle width={width} height={height} perspective={perspective} perspectiveOrigin={perspectiveOrigin} zIndex={zIndex}>
            <AnimWrap
                duration={animSpecs.anim1duration}
                iterationCount={animSpecs.anim1count}
                animName={animSpecs.anim1}
                animLow={animSpecs.anim1low}
                animHi={animSpecs.anim1hi}
                animDirection={animSpecs.anim1direction}
            >
                <AnimWrap
                    duration={animSpecs.anim2duration}
                    iterationCount={animSpecs.anim2count}
                    animName={animSpecs.anim2}
                    animLow={animSpecs.anim2low}
                    animHi={animSpecs.anim2hi}
                    animDirection={animSpecs.anim2direction}
                >
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
