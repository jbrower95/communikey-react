import {Alert} from 'react-native'

const prefix = "http://app-staging.thecommunikey.com/api/v1/";
const prefix_prod = "http://app.thecommunikey.com/api/v1/";


const API_PREFIX = (__DEV__) ? prefix : prefix_prod;

const routes = {
	login : "sessions",
};

let makeRoute = (route) => {
	return API_PREFIX + route
}

export const api = {

	checkStatus(response) {
	    if (response.status >= 200 && response.status < 300) {
	      return response;
	    } else {
	      let error = new Error(response.json().message);
	      error.response = response;
	      throw error;
	    }
	},

	doLogin(email, password) {
		let route = makeRoute(routes.login)
		return fetch(route, {  
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    email: email,
		    password: password,
		  })
		})
		.then(this.checkStatus)
		.then(resp => resp.json());
	}
};