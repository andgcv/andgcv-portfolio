import React from 'react'
import styled from 'styled-components'

const ItemHeading = styled.h3`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.vibrantBlue};
    text-align: center;
    padding-bottom: 3vh;
    margin-top: 0;
`

export default ({ children }) => (
    <ItemHeading>{children}</ItemHeading>
)