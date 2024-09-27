import { useState } from 'react'
import { Layout, theme } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'

// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import AppRouting from './components/AppRouting'
import Logo from './components/Logo'
import MenuList from './components/MenuList'
import ToggleThemeButton from './components/ToggleThemeButton'

const { Header, Sider } = Layout

function App() {

  const [darkTheme, setDarkTheme] = useState(true)
  // const [collapsed, setCollapsed] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Router>
      <Layout>
        <Sider
          // collapsed={collapsed}
          collapsible
          // trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
          className='sidebar'>
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
        <AppRouting />
          {/* <Header style={{padding: 0, background: colorBgContainer}}>
            <Button
              type='text' 
              onClick={()=> setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> } />
          </Header> */}
        </Layout>
      </Layout>
    </Router>
    
  )
}

export default App
