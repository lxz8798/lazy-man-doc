import http from "../request";

interface IParams {
	loading: boolean;
	data: string[];
}

const	GET_HEAD_PORTRAIT: string = "https://api.multiavatar.com/";

function getHeadPortrait(params: IParams) {
	return http.get(GET_HEAD_PORTRAIT, { params: params }).then(res => {
		console.log(res, 'res');
		return res
	})
}

export default {
	getHeadPortrait
}