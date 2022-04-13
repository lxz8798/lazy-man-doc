import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Style from "./style.module.scss";

const FrontEnd: React.FC<{}> = () => {
	return (
		<Layout>
			<div className='library_view_box'>
				<ul>
					<li>D3</li>
					<li>OPENLAYERS</li>
					<li>THREE</li>
				</ul>
				<ul>
					<li>DELIGHTERS</li>
					<li>SCROLLREVEAL</li>
					<li>AOS</li>
				</ul>
			</div>
		</Layout>
	)
}

export default FrontEnd;
