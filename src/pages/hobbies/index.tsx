import React, { useState } from 'react';
import Layout from '@theme/Layout';

import HeaderView from '../../components/fristScreen/';

import style from './style.module.css';

interface Props {
}

const Hobby: React.FC<{}> = () => {
	return(
		<Layout>
			<HeaderView></HeaderView>
		</Layout>
	)
}

export default Hobby;
