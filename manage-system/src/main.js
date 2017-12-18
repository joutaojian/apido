import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import resource from 'vue-resource'
import axios from 'axios';
import Datasource from 'vue-datasource';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题

Vue.use(ElementUI);
Vue.use(resource);
Vue.use(axios);
Vue.use(Datasource);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

Vue.http.interceptors.push((request, next) => {
	
	var token = sessionStorage.getItem("token");
	if(token === undefined || token == ""){
		this.$router.push('/login');
		return;
	}
	console.log(request.headers);
	request.headers.set("token",token);
	
	next(function(res){ //在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法
		if(res.status == 401) {
			this.$router.push('/login');
		}
		return res;
	});
});
