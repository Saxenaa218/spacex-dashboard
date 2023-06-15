import React, {useEffect, useState} from 'react'
import {Table, Tag} from 'antd'
import DetailModal from './DetailsModal/DetailsModal'
import { formatDate } from '../utils'

const columns = [
	{
		title: 'No.',
		dataIndex: 'flight_number',
		key: 'flight_number',
	},
	{
		title: 'Launched (UTC)',
		dataIndex: 'launch_date_utc',
		key: 'launch_date_utc',
		render: (launch_date) => {
			return formatDate(launch_date)
		}
	},
	{
		title: 'Location',
		dataIndex: 'launch_site',
		key: 'launch_site',
		render: (launch_site) => {
			return (
				  <>{launch_site.site_name}</>
			)
		}
	},
	{
		title: 'Mission',
		dataIndex: 'mission_name',
		key: 'mission_name',
	},
	{
		title: 'Orbit',
		dataIndex: 'rocket',
		key: 'rocket',
		render: (rocket) => {
			return (<>{rocket.second_stage.payloads[0].orbit}</>)
		}
	},
	{
		title: 'Launch Status',
		// dataIndex: 'rocket', // if upcoming => false then consider launch_success key
		key: 'launch_success',
		render: (_, object) => {
			if (object.upcoming) {
				return (<Tag color="orange">Upcoming</Tag>)
			}
			else {
				return (<>{object.launch_success ? <Tag color="green">Success</Tag> : <Tag color="red">Failed</Tag>}</>)
			}
		}
	},
	{
		title: 'Rocket',
		// dataIndex: 'address',
		key: 'rocket',
		render: (_, object) => {
			return (<>{object.rocket.rocket_name}</>)
		}
	}
]

const TableView = (props) => {
	const {data} = props

	const [detailModalVisible, setDetailModalVisible] = useState(false)
	const [activeDetail, setActiveDetail] = useState(null)
	// const [tableData, setTableData] = useState(null)

	// useEffect(() => {
	// 	if (activeLaunchesType) {
	// 		setAlternateData(filterAlternateData(activeLaunchesType))
	// 	}
	// 	// else {
	// 	// 	setTableData(data)
	// 	// }
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [activeLaunchesType])

	const handleCancel = () => {
		setDetailModalVisible(false)
		setActiveDetail(null)
	}

	return (
		<>
			<Table 
				size='small' 
				dataSource={data} 
				columns={columns} 
				bordered
				onRow={(record) => {
	    			return {
						onClick: () => {
							setDetailModalVisible(true)
							setActiveDetail(record)
						}, // click row
						onDoubleClick: () => {}, // double click row
						onContextMenu: () => {}, // right button click row
						onMouseEnter: () => {}, // mouse enter row
						onMouseLeave: () => {}, // mouse leave row
		    		};
		  		}}
			/>
			<DetailModal 
				open={detailModalVisible} 
				details={activeDetail}
				handleCancel={handleCancel}
			/>
		</>
	)
}

export default TableView