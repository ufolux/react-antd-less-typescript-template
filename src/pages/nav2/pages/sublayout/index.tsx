/**
 * Created by Richard Lu on 6/15/22
 */

import React from 'react'
import { Outlet } from 'react-router-dom'

const Nav2Layout: React.FC = () => {
  return (
    <div>
      <div>Nav2Sublayout</div>
      <Outlet />
    </div>
  )
}

export default Nav2Layout
