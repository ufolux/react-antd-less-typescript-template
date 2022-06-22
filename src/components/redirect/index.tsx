/**
 * Created by Richard Lu on 6/16/22
 */

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect: React.FC<{ to: string }> = ({ to }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to, { replace: true })
  })
  return null
}

export default Redirect
