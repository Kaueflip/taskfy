import React from 'react';
import image from '../assets/img/logo.svg';
import styled from 'styled-components';

const LogoImg = styled.div`

`;

const Logo = () => {
    return (
        <LogoImg>
            <img src={image} alt="Descrição da imagem" />
        </LogoImg>
    );
};

export default Logo;