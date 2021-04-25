import React, { useState } from 'react';
import Layout from '@theme/Layout';

import HeaderView from '../../components/headerView/';

import style from './style.module.css';

interface Props {
}

const FrontEnd: React.FC<{}> = () => {
	return(
		<Layout>
			<HeaderView></HeaderView>
		</Layout>
	)
}

export default FrontEnd;
