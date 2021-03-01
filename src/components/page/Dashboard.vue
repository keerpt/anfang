<template>
    <div>
        <el-row :gutter="30">
            <el-col :span="24">
                <el-card shadow="hover" class="mgb20" style="height:312px;">
                       <!--<div class="user-info"> -->
                      <!--  <img src="../../assets/img/img.jpg" class="user-avator" alt /> -->
                        <!--<div class="user-info-cont">-->
                            <!--<div class="user-info-name">{{name}}</div>-->
                            <!--<div>{{role}}</div>-->
							 
                        <!--</div>-->
                       <!--</div>-->
					<!--
                    <div class="user-info-list">
                        上次登录时间：
                        <span>2019-11-01</span>
                    </div>
                    <div class="user-info-list">
                        上次登录地点：
                        <span>东莞</span>
                    </div>
					-->
					<div slot="header" class="clearfix">
                        <span>用户信息填写</span>
                    </div>
					
					<div class="form-box">
						<el-form ref="form" :model="form" label-width="80px">
							<el-row>
								<el-col :span="5">
									<el-form-item label="手机"> <el-input  size="small" v-model="form.name" placeholder="绑定设备的手机号" maxlength="11"></el-input> </el-form-item>
								</el-col>
								<el-col :span="5">
									<el-form-item label="设备SN"><el-input  size="small" v-model="form.name2" placeholder="设备SN(16位数字)" maxlength="16"></el-input></el-form-item>
								</el-col>
								<el-col :span="5">
									<el-form-item label="固件版本"> <el-input  size="small" v-model="form.name3" placeholder="设备固件版本" maxlength="40"></el-input></el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="平台">
										<el-select v-model="form.region" placeholder="请选择">
										<el-option key="ziyan" label="自研" value="ziyan"></el-option>
										<el-option key="shidong" label="视洞" value="shidong"></el-option>                           
										</el-select>
									</el-form-item>
								</el-col>
								<el-col>
										<el-form-item>
										<el-checkbox-group v-model="form.type">                       
										<el-checkbox label="须知：信息填写错误将影响测试结果" name="type"></el-checkbox>
										</el-checkbox-group>
									</el-form-item>	
								</el-col>
								
								<el-col>
									<el-form-item>
										<el-button type="primary" @click="onSubmit">表单提交</el-button>
									</el-form-item>
								</el-col>
							</el-row>														
							</el-form>
					</div>
					
					
					
                </el-card>
                <el-card shadow="hover" style="height:262px;">
                    <div slot="header" class="clearfix">
                        <span>用例执行进度</span>
                    </div>
					
                    <el-progress type="circle" :percentage="71.3" color="#42b983" class="percentage"></el-progress>
					                   
                    <!--<el-progress type="circle" :percentage="5.9" color="#f56c6c">失败</el-progress> -->
                </el-card>
				<!--
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">1234</div>
                                    <div>用户访问量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card shadow="hover" style="height:403px;">
				<!--
                    <div slot="header" class="clearfix">
                        <span>待办事项</span>
                        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
                    </div>
				
                    <el-table :show-header="false" :data="todoList" style="width:100%;">
                        <el-table-column width="40">
                            <template slot-scope="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <div
                                    class="todo-item"
                                    :class="{'todo-item-del': scope.row.status}"
                                >{{scope.row.title}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column width="60">
                            <template>
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </template>
                        </el-table-column>
                    </el-table> 
                </el-card>-->
            </el-col> 			
        </el-row>
		
		<!--
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
                </el-card>
            </el-col>
        </el-row>
		-->
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';

export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),
			
        };
    },
    components: {
        Schart
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        }
       
    }
};
</script>

<script>
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
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        }
    }
};
</script>



<style scoped>
.el-row {
    margin-bottom: 20px;
}

.percentage{
	margin-left:60px;
}


.clearfix{
	margin-left:10px;
}

.mgb20 {
    margin-bottom: 20px;
}
.form-box{
		width:1400px;
		
	}

</style>
