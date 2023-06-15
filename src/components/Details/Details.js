import React from 'react'
import {Tag} from 'antd'
import Icon from '@mdi/react';
import { mdiEarth, mdiWikipedia, mdiYoutube } from '@mdi/js'
import ListItem from '../ModalListItem/ModalListItem'
import { formatDate } from '../../utils';

import './Details.scss';

const Details = ({det}) => {
	return (
		<>
			<section className="d-header">
				<div className="d-header-image">
					<img src={det.links.mission_patch} alt="" height='60px' width='60px'/>
				</div>
				<div className="d-header-content">
					<div className="header">{det.mission_name}</div>
					<div className="rocket">{det.rocket.rocket_name}</div>
					<div className="links">
						<a href={det.links.article_link} alt="#" target="_blank" rel="noreferrer">
							<Icon path={mdiEarth} size="1rem" color={'#909090'} />
						</a>
						<a href={det.links.wikipedia} alt="#" target="_blank" rel="noreferrer">
							<Icon path={mdiWikipedia} size="1rem" color={'#909090'} />
						</a>
						<a href={det.links.video_link} alt="#" target="_blank" rel="noreferrer">
							<Icon path={mdiYoutube} size="1rem" color={'#909090'} />
						</a>
					</div>
				</div>
				<div className="d-header-">
					<Tag color="green">Success</Tag>
				</div>
			</section>
			<section className="d-summary">
				{det.details} <a alt='' target="_blank" rel="noreferrer" href={det.links.wikipedia}>Wikipedia</a>
			</section>
			<section>
				<ListItem title="Flight Number" value={det.flight_number} />
				<ListItem title="Mission Name" value={det.mission_name} />
				<ListItem title="Rocket Type" value={det.rocket.rocket_type} />
				<ListItem title="Rocket Name" value={det.rocket.rocket_name} />
				<ListItem title="Manufacturer" value={det.rocket.second_stage.payloads[0].manufacturer} />
				<ListItem title="Nationality" value={det.rocket.second_stage.payloads[0].nationality} />
				<ListItem title="Launch Date" value={formatDate(det.launch_date_utc)} />
				<ListItem title="Payload Type" value={det.rocket.second_stage.payloads[0].payload_type} />
				<ListItem title="Orbit" value={det.rocket.second_stage.payloads[0].orbit} />
				<ListItem title="Launch Site" value={det.launch_site.site_name} />
			</section>
		</>
	)
}

export default Details