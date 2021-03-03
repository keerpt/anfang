<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 用例执行
                </el-breadcrumb-item>
                <el-breadcrumb-item>this.$route.params.pageType</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
		
		<!--
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="70px">
					<el-row>
						<el-col :span="8">
							<el-form-item label="手机"> <el-input  size="small" v-model="form.name" placeholder="绑定设备的手机号" maxlength="11"></el-input> </el-form-item>
						</el-col>
						<el-col :span="8">
							<el-form-item label="设备SN"><el-input  size="small" v-model="form.name2" placeholder="设备SN(16位数字)" maxlength="16"></el-input></el-form-item>
						</el-col>
						<el-col :span="8">
							<el-form-item label="固件版本"> <el-input  size="small" v-model="form.name3" placeholder="设备固件版本" maxlength="40"></el-input></el-form-item>
						</el-col>
					</el-row>
                    <el-form-item label="平台">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option key="ziyan" label="自研" value="ziyan"></el-option>
                            <el-option key="shidong" label="视洞" value="shidong"></el-option>                           
                        </el-select>
                    </el-form-item>
					
					
					
                    <el-form-item>
                        <el-checkbox-group v-model="form.type">                       
                            <el-checkbox label="须知：信息填写错误将影响测试结果" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
					
					
					
					
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                        <el-button>退出</el-button>
                    </el-form-item>
                </el-form>
            </div>
			-->
			 <div class="1-2">
					<el-form-item>
                        <el-button type="primary" @click="onSubmit2">表单提交2</el-button>
                        <el-button>退出</el-button>
                    </el-form-item>
			 </div>
			
        </div>
    </div>
</template>

<script>
import {getCaseInfo2} from "../../api";

export default {

    name: 'baseform',
    data() {
        return {
		
            form: {
                name1: '',
				name2: '',
				name3: '',
                
                type: [''],
              
            }
        };
    },
	mounted(){
		this.requestData();
	},
	
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        },
		onSubmit2() {
            this.$message.success('提交成功！');
        },
		
		async requestData() {
            try {
                let res  = await getCaseInfo2();
                console.log(res);
				//var  menuList = "";
				//menuList= res.data;
				//console.log(menuList);
				
				
            } catch (e) {
                console.log(e);
            }
			//return menuList;
        },	
    }
	
};
</script>

<style>
	.form-box{
		width:800px;
		
	}
	.container{
	    height:300px;
	}
	.container .1-2{
		height:100px;
	}
</style>