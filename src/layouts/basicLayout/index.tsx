/**
 * Created by Richard Lu on 6/15/22
 */

import logo from '@/assets/images/logo.png'
import { Image, Layout, Menu } from 'antd'
import classNames from 'classnames'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import {
  AiOutlineDashboard,
  AiOutlineFire,
  AiOutlineProject
} from 'react-icons/ai'
import { useLocation } from 'react-router'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './index.less'

const { Header, Sider, Content } = Layout

const BasicLayout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const menuItemKey = location.pathname.split('/')[1]

  return (
    <Layout className={styles.container}>
      <Sider className={styles.sider} width={208} theme='light' trigger={null}>
        <div className={styles.logo}>
          <Image className={styles.img} src={logo} alt='logo' />
        </div>
        <Menu
          onClick={e => navigate(e.key)}
          theme='light'
          mode='inline'
          items={[
            {
              key: '/nav1',
              icon: <AiOutlineDashboard />,
              label: 'nav1'
            },
            {
              key: '/nav2/nav21',
              icon: <AiOutlineProject />,
              label: 'nav2'
            },
            {
              key: '/nav3/1/2',
              icon: <AiOutlineFire />,
              label: 'nav3'
            }
          ]}
          selectedKeys={[menuItemKey]}
        />
      </Sider>
      <Layout className={styles.siteLayout}>
        <Header
          className={classNames(styles.siteLayoutBackground, styles.header)}
          style={{ padding: 0 }}
        >
          {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { */}
          {/*  className: 'trigger', */}
          {/*  onClick: () => setCollapsed(!collapsed) */}
          {/* })} */}
        </Header>
        <Content
          className={classNames(styles.siteLayoutBackground, styles.content)}
        >
          <div className={styles.scrollableContent}>
            <Scrollbars autoHide>
              <Outlet />
            </Scrollbars>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
