import React, { useState, useEffect } from 'react';

const HeaderView: React.FC<{}> = () => {
	const headScrollChangeColor = () => {
		{
			if(document.scrollingElement.scrollTop <= 100) {
				document.documentElement.style.setProperty('--navbar-color', '#1abc9c');
				document.documentElement.style.setProperty('--nav-text-color', 'white');
			} else {
				document.documentElement.style.setProperty('--navbar-color', 'white');
				document.documentElement.style.setProperty('--nav-text-color', '#1abc9c');
			}
		}
	};
	useEffect(() => {
		document.addEventListener('scroll', e => headScrollChangeColor());
		return () => document.removeEventListener('scroll', e => headScrollChangeColor());
	}, []);
	return (
		<></>
	)
}

export default HeaderView