<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title" @click="submitForm()">用例执行</div>
			
			<!--
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
			
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
				-->
				
				<!--
                <el-form-item prop="password">
                    <el-input>
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()" 
                    
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
				-->
				
				
                
               
            
        </div>
		
		<div class="login-wrap2">
        <div class="ms-login2">
            <div class="ms-title2">长稳</div>
			<div class="login-btn2">
                    <el-button>进入</el-button>
            </div>
               
            
        </div>	
		</div>		
    </div>
</template>

<script>

import { fetchData } from '../../api/index';
export default {
    //data: function() {
    //    return {
    //        param: {
               // username: 'admin',
                //password: '123123',
    //        },
            //rules: {
                //username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                //password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            //},
    //    };
    //},
    
    methods: {
        
        submitForm() {
			this.$router.push('/dashboard');
			//localStorage.setItem('ms_username', 'caseList');
			/*
            this.$refs.login.validate(valid => {
                if (valid) {
                    //this.$message.success('成功');
                    localStorage.setItem('ms_username', 'caseDo');
                    this.$router.push('/');
                } 
				else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
			*/
			
        },
    },
};

/*
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
	margin-bottom: 0px;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 0px;
}*/
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
	
    line-height: 230px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
	
	position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
	height:250px;
    margin: -175px 0 0 -175px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.3);
}



</style>
