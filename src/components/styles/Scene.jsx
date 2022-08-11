import styled from 'styled-components';
import React from 'react';

export const SceneStyle = (props) => {
    const { width = 0, height = 0, perspective = 600, perspectiveOrigin = '50% 50%', zIndex = 10, children = {} } = props;

    const SceneStyleDiv = styled.div`
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
