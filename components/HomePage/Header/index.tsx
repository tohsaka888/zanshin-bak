import React from 'react'
import { CompanyName, HeaderContainer } from './index.style'

const items = [
  {
    label: '我的地盘',
    key: 'my'
  },
  {
    label: '项目',
    key: 'project'
  },
  {
    label: '迭代',
    key: 'iteration' 
  },
  {
    label: '测试',
    key: 'test'
  },
  {
    label: '故事',
    key: 'story'
  }
]

function Header({ companyName }: HomePageComponents.HeaderProps) {
  return (
    <HeaderContainer>
      <CompanyName>{companyName}</CompanyName>
      {/* <AnimatedMenu items={items} /> */}
    </HeaderContainer>
  )
}

export default Header