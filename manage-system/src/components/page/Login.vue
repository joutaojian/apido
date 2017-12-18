<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="usernumber">
                    <el-input v-model="ruleForm.usernumber" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
            </el-form>
        </div>
    </div>
</template>

<script>
	import axios from 'axios'; /** 只能在登录的时候使用axios做http请求 */
    export default {
        data: function(){
            return {
                ruleForm: {
                    usernumber: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },

        methods: {
            submitForm(formName) {
                const self = this;
                console.log('帐号：'+self.ruleForm.usernumber+',密码：'+self.ruleForm.password);

				var that=this;
				var formData = JSON.stringify(self.ruleForm);
				/*
				console.log(formData);
				axios.post("/v1/account/login", formData, {headers: {"Content-Type": "application/json"}}).then(function(res){
				essionStorage.setItem("token", res.data.token);
                     self.$router.push('/readme');
				 }).catch(function(err) {
				//console.log(res.response);
				if(err.response.data !== undefined) {
				that.warnFunc(err.response.data.error_msg);
				 	}
				 });
				*/
				if(self.ruleForm.usernumber == 'admin' && self.ruleForm.password == 'sfaadmin'){
                    sessionStorage.setItem("token", self.ruleForm.usernumber);
                    sessionStorage.setItem("IP_PORT", 'http://172.16.31.196:8763');
                    self.$router.push('/readme');
				}else{
                    that.warnFunc('登录失败！');
                }

           },
           warnFunc(msg){
           		var that = this;
           		that.$message({
			        message: msg,
			        type: 'warning'
        		});
           	}
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
