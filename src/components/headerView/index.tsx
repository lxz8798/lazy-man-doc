import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import clsx from "clsx";

const HeaderView: React.FC<{}> = () => {
	const headScrollChangeColor = () => {
		{
			if(document.scrollingElement.scrollTop <= 1) {
				document.documentElement.style.setProperty('--navbar-color', '#75c1d8');
				document.documentElement.style.setProperty('--nav-text-color', 'white');
			} else {
				document.documentElement.style.setProperty('--navbar-color', 'white');
				document.documentElement.style.setProperty('--nav-text-color', '#75c1d8');
			}
		}
	};
	useEffect(() => {
		document.addEventListener('scroll', e => headScrollChangeColor());
		return () => document.removeEventListener('scroll', e => headScrollChangeColor());
	}, []);
	return(
		<section className={style.header_view}>

		</section>
	)
}

export default HeaderView