import React, {useState, useContext, useEffect} from "react";
import { UserContext } from "../../context/userContext";
import Style from "./style.module.css";

import Layout from "@theme/Layout";

import FirstScreen from "../../components/fristScreen/";
import MySkills from "../../components/mySkills/";
import MyProjects from "../../components/myProjects/";
import MyHobbies from "../../components/myHobbies/";
import AboutMe from "../../components/aboutMe/";
import ContactMe from "../../components/contactMe/";

interface IProps {
	loading: boolean;
	error: boolean;
	name: string;
	age: number;
}

const FrontEnd: React.FC<IProps> = (props) => {
	useEffect(() => {
		console.log(props, 'props');
		console.log(UserContext, 'UserContext');
	}, [])

	return (
		<Layout>
			<div className={Style.front_end_page_box}>
				<FirstScreen></FirstScreen>
				<MySkills></MySkills>
				<MyProjects></MyProjects>
				<MyHobbies></MyHobbies>
				<AboutMe></AboutMe>
				<ContactMe></ContactMe>
			</div>
		</Layout>
	)
}

export default FrontEnd;
