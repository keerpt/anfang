<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title" @click="submitForm()">用例执行</div>
														                                     
        </div>
		
		
        <div class="ms-login2">
            <div class="ms-title2" @click="submitForm2()">生态长稳</div>			             
		</div>		
    </div>
</template>

<script>

import { fetchData } from '../../api/index';
export default {      
    methods: {        
        submitForm() {
			this.$router.push('/dashboard');						
        },
		submitForm2() {
			this.$router.redirect('www.baidu.com');						
        }
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
    background-image: url(../../assets/img/left-bg.jpg);
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
    left: 30%;
    top: 50%;
    width: 350px;
	height:250px;
    margin: -175px 0 0 -175px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.3);
}

.ms-title2 {
    width: 100%;
	
    line-height: 230px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
	
	position: absolute;
    left: 70%;
    top: 50%;
    width: 350px;
	height:250px;
    margin: -175px 0 0 -175px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.3);
}


</style>
