import React from 'react'
import {Modal} from 'antd'
import Details from '../Details/Details'

const DetailsModal = (props) => {
	const {open, details, handleCancel } = props
	return (
		<Modal
			open={open}
			onCancel={handleCancel}	
			maskClosable={false}
			footer={null}
			centered
			destroyOnClose
		>
			<Details det={details}/>
		</Modal>
	)
}

export default DetailsModal