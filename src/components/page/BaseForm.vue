<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 用例执行
                </el-breadcrumb-item>
                <el-breadcrumb-item>设备绑定</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
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
					
					<!--
                    <el-form-item label="日期时间">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.date1"
                                value-format="yyyy-MM-dd"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker
                                placeholder="选择时间"
                                v-model="form.date2"
                                style="width: 100%;"
                            ></el-time-picker>
                        </el-col>
                    </el-form-item>
					-->
					
					<!--
                    <el-form-item label="城市级联">
                        <el-cascader :options="options" v-model="form.options"></el-cascader>
                    </el-form-item>
                    <el-form-item label="选择开关">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
					-->
                    <el-form-item>
                        <el-checkbox-group v-model="form.type">                       
                            <el-checkbox label="须知：信息填写错误将影响测试结果" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
					
					
					<!--
                    <el-form-item>
                        <el-radio-group v-model="form.resource">
                            
                            <el-radio label="须知：信息填写错误将影响测试结果"></el-radio>
                        </el-radio-group>
                    </el-form-item>
					
                    <el-form-item label="文本框">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
					-->
					
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                        <el-button>退出</el-button>
                    </el-form-item>
                </el-form>
            </div>
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
export default {
    name: 'baseform',
    data() {
        return {
		/*
            options: [
                {
                    value: 'guangdong',
                    label: '广东省',
                    children: [
                        {
                            value: 'guangzhou',
                            label: '广州市',
                            children: [
                                {
                                    value: 'tianhe',
                                    label: '天河区'
                                },
                                {
                                    value: 'haizhu',
                                    label: '海珠区'
                                }
                            ]
                        },
                        {
                            value: 'dongguan',
                            label: '东莞市',
                            children: [
                                {
                                    value: 'changan',
                                    label: '长安镇'
                                },
                                {
                                    value: 'humen',
                                    label: '虎门镇'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'hunan',
                    label: '湖南省',
                    children: [
                        {
                            value: 'changsha',
                            label: '长沙市',
                            children: [
                                {
                                    value: 'yuelu',
                                    label: '岳麓区'
                                }
                            ]
                        }
                    ]
                }
            ],*/
            form: {
                name1: '',
				name2: '',
				name3: '',
                //region: '',
               // date1: '',
               // date2: '',
               // delivery: true,
                type: [''],
               // resource: '小天才',
               // desc: '',
              //  options: []
            }
        };
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        },
		onSubmit2() {
            this.$message.success('提交成功！');
        }
    }
	
};
</script>

<style>
	.form-box{
		width:800px;
		
	}
</style>