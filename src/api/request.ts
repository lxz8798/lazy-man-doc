import axios from "axios";
import qs from "qs";

const Service = axios.create({
	timeout: 8000,
	method: "POST",
	headers: {
		"content-Type": "application/x-www-form-urlencoded",
		"pc-token": "asdcnaskjdncaskljdncalsjdc"
	}
})

const serialize = data => {
	const list = [];
	Object.keys(data).forEach(ele => {
		list.push(`${ele}=${data[ele]}`);
	});
	return list.join("&");
};

Service.interceptors.request.use(config => {
	// headers中配置serialize为true开启序列化
	if (config.method === 'post' && config.headers.serialize) {
		config.data = serialize(config.data)
		delete config.data.serialize
	}

	if (config.method === 'get') {
		config.paramsSerializer = function (params) {
			return qs.stringify(params, {arrayFormat: 'repeat'})
		}
	}

	return config
}, error => {
	return Promise.reject(error);
})

Service.interceptors.response.use(response => {
	let message:string = "";
	switch (response.status) {
		case 400:
			message = "请求错误(400)";
			break;
		case 401:
			message = "未授权，请重新登录(401)";
			break;
		case 403:
			message = "拒绝访问(403)";
			break;
		case 404:
			message = "请求出错(404)";
			break;
		case 408:
			message = "请求超时(408)";
			break;
		case 500:
			message = "服务器错误(500)";
			break;
		case 501:
			message = "服务未实现(501)";
			break;
		case 502:
			message = "网络错误(502)";
			break;
		case 503:
			message = "服务不可用(503)";
			break;
		case 504:
			message = "网络超时(504)";
			break;
		case 505:
			message = "HTTP版本不受支持(505)";
			break;
		default:
			message = `连接出错(${status})!`;
	}
	return response.data
}, error => {
	return Promise.reject(error);
})

export default Service;