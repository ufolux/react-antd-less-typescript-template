/**
 * Created by Richard Lu on 6/16/22
 */
import React from 'react'
import Authentication from '@/components/authentication'
import LazyLoad from '@/components/lazyLoad'
import BasicLayout from '@/layouts/basicLayout'
import { useRoutes } from 'react-router-dom'

export default function IndexRouter () {
  return useRoutes([
    {
      path: '/',
      element: (
        <Authentication>
          <BasicLayout />
        </Authentication>
      ),
      children: [
        {
          path: 'nav1',
          element: LazyLoad('pages/nav1')
        },
        {
          path: 'nav2',
          element: LazyLoad('pages/nav2'),
          children: [
            {
              path: '',
              element: LazyLoad('pages/nav2/pages/sublayout'),
              children: [
                {
                  path: 'nav21',
                  element: LazyLoad('pages/nav2/pages/nav21')
                }
              ]
            }
          ]
        },
        {
          path: 'nav3/:param1/:param2',
          element: LazyLoad('pages/nav3')
        }
      ]
    }
  ])
}
