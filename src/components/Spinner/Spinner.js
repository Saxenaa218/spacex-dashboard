import React from 'react'
import {LoadingOutlined} from '@ant-design/icons'
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <LoadingOutlined />
    </div>
  )
}

export default Spinner