/**
 * Created by Richard Lu on 6/16/22
 */

import Redirect from '@/components/redirect'
import React from 'react'

const Authentication: React.FC<{ children: JSX.Element }> = ({ children }) => {
  // TODO: implement
  const isLogin = true
  return isLogin ? children : <Redirect to='/login' />
}

export default Authentication
