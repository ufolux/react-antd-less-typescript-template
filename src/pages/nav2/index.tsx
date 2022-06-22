/**
 * Created by Richard Lu on 6/15/22
 */

import React from 'react'
import { Outlet } from 'react-router-dom'

const Nav2: React.FC = () => {
  return (
    <div>
      <div>nav2</div>
      <Outlet />
    </div>
  )
}

export default Nav2
