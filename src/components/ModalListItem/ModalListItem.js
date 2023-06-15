import React from 'react'
import './ModalListItem.scss';

const ModalListItem = (props) => {
    const {title, value, key} = props
	return (
		<div key={key} className="list-item-parent">
			<div className="list-item-left">{title}</div>
			<div>{value}</div>
		</div>
	)
}

export default ModalListItem;