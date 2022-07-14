import React from 'react'
import { CompanyName, HeaderContainer } from './index.style'

function Header({ companyName }: HomePageComponents.HeaderProps) {
  return (
    <HeaderContainer>
      <CompanyName>{companyName}</CompanyName>
      {/* <AnimatedMenu items={items} /> */}
    </HeaderContainer>
  )
}

export default Header