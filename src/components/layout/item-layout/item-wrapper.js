import React from "react"
import styled from "styled-components"

const ItemWrapper = styled.div`
  width: 80vw;
  padding: 7vh 0 7vh 0;
  display: flex;
  flex-direction: column;

  @media (max-height: 485px) {
    padding: 15vh 0 15vh 0;
  }

  @media (max-width: 562px) {
    width: 90vw;
  }
`

export default ({ children }) => <ItemWrapper>{children}</ItemWrapper>
