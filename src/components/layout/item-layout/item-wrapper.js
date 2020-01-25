import React from 'react'
import styled from 'styled-components'

const ItemWrapper = styled.div`
    width: 80vw;
    padding: 7vh 0 14vh 0;
    display: flex;
    flex-direction: column;
`

export default ({ children }) => (
    <ItemWrapper>{children}</ItemWrapper>
)