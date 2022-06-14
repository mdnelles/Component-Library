import styled from 'styled-components';
import React from 'react';

interface SceneStyleProps {
    width?: number | string;
    height?: number | string;
    perspectiveOrigin?: string | undefined;
    zIndex?: number | undefined;
    children: any;
}

export const SceneStyle = (props: SceneStyleProps) => {
    const { width = 0, height = 0, perspectiveOrigin = '50% 50%', zIndex = 10, children = {} } = props;
    console.log('z-index:' + zIndex);
    const SceneStyleDiv: any = styled.div`
        width: ${width}px;
        height: ${height}px;
        perspective: 600px;
        perspective-origin: ${perspectiveOrigin};
    `;

    return (
        <div style={{ zIndex }}>
            <SceneStyleDiv>{children}</SceneStyleDiv>
        </div>
    );
};
