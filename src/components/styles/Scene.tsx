import styled from 'styled-components';
import React from 'react';

interface SceneStyleProps {
    width?: number | string;
    height?: number | string;
    perspective?: number | string | undefined;
    perspectiveOrigin?: string | undefined;
    zIndex?: number | undefined;
    children: any;
}

export const SceneStyle = (props: SceneStyleProps) => {
    const { width = 0, height = 0, perspective = 600, perspectiveOrigin = '50% 50%', zIndex = 10, children = {} } = props;

    const SceneStyleDiv: any = styled.div`
        width: ${width}px;
        height: ${height}px;
        -webkit-perspective: ${perspective}px;
        perspective: ${perspective}px;
        -webkit-perspective-origin: ${perspectiveOrigin};
        perspective-origin: ${perspectiveOrigin};
    `;

    return (
        <div style={{ zIndex }}>
            <SceneStyleDiv>{children}</SceneStyleDiv>
        </div>
    );
};
