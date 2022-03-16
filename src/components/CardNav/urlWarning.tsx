import React, { useState } from 'react'
import styled from 'styled-components'

import { AlertTriangle, X } from 'react-feather'
import { isMobile } from 'react-device-detect'

const PhishAlert = styled.div<{ isActive: any }>`
  width: 100%;
  padding: 6px 6px;
  background-color: pink;
  color: black;
  font-size: 11px;
  justify-content: space-between;
  align-items: center;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  z-index: 99;
`

export const StyledClose = styled(X)`
  :hover {
    cursor: pointer;
  }
`

export default function URLWarning() {
  // const toggleURLWarning = useURLWarningToggle()

  const [warning, setWarning] = useState(true);

  const myF = async() => {
    setWarning(false);
  }

  return isMobile ? (
    <PhishAlert isActive={warning}>
      <div>
        <AlertTriangle style={{ marginRight: 6 }} size={12} /> Liquidity provided through  
        <code style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }}>PancakeswapV2</code>
      </div>
      <StyledClose size={12} style={{float:'right'}} onClick={() => myF()} />
    </PhishAlert>
  ) : window.location.hostname !== 'app.uniswap.org' ? (
    <>
    <PhishAlert isActive={warning} style={{width:'100%'}}>
      <div>
        <AlertTriangle style={{ marginRight: 6 }} size={12} /> Liquidity provided through  
        <code style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }}>PancakeswapV2</code>
      </div>
      <StyledClose size={12} style={{float:'right'}} onClick={() => myF()} />
    </PhishAlert>
    <br />
    </>
  ) : null
}
