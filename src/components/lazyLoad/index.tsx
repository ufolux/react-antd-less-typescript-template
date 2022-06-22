/**
 * Created by Richard Lu on 6/16/22
 */

import { Spin } from 'antd'
import React, { Suspense } from 'react'
import styles from './index.less'

const LazyLoad = (path: string) => {
  const Component = React.lazy(() => import(`@/${path}`))

  const loading = () => {
    return (
      <div className={styles.loading}>
        <Spin size='large' />
      </div>
    )
  }

  return (
    <Suspense fallback={loading()}>
      {/* <Component /> */}
      <Component />
    </Suspense>
  )
}

export default LazyLoad
