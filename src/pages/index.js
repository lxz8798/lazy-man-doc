import React from "react";
import { Redirect } from "@docusaurus/router";
import { UserContext } from "../context/userContext";
import $api from "../api/";

const Home = () => {
	return(
		<UserContext.Provider value={{ user:UserContext, api:$api }}>
			<Redirect to='/frontend' />
		</UserContext.Provider>
	)
}

export default Home;