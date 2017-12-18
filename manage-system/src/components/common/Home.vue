<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components:{
            vHead, vSidebar
        },
        mounted: function() {
        	// 验证session
//         	this.$http.get("/v1/account/getAccount").then(function(res){
//         		sessionStorage.setItem("token", res.body.response_param.token);
// //      		this.$http.put("/v1/enterprise/chooseEnterprise?enterpriseNumber=1007652").then(function(res){
// //      			
// //      		});
//         	}, function(err){
//         		// if(err.response.status == 401){
//         			this.$router.push('/'); 
//         		// }
//         	});
        }
    }
</script>
