<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
import {getCaseInfo} from "../../api";
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'dashboard',
                    title: '系统首页'
                },
                {
                    icon: 'el-icon-tickets',
                    index: 'resultAll',
                    title: '执行情况'
                },
               
                {
                    icon: 'el-icon-edit-outline',
                    index: 'casePerform',
                    title: '用例执行',
                    subs: [
					
					
						
                        /*
                        {
                            index: 'bind',
                            title: '设备绑定'
                        }
						*/
                    ]
					
                },
				
                {
                    icon: 'el-icon-pie-chart',
                    index: 'charts',
                    title: '生态长稳'
                },
				
                {
                    icon: 'el-icon-phone-outline',
                    index: 'about',
                    title: '联系我们'
                }
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
		
		 this.requestData();
    },
	
	//new-2021/3/2 发送请求获取左侧菜单数据
	methods: {	      
		async requestData() {
            try {
                let res  = await getCaseInfo();
                
				var  menuList = "";
				menuList= res.data;
				//console.log(menuList);
				let itemsnew = this.items;
				let itemsnew1 = itemsnew[2];
				//console.log(itemsnew1);
				//let itemsnew2 = itemsnew1.subs;
				let arr1 = [];								
				for(var i=0;i<menuList.length;i++){
					arr1.push({index:'/perform/'+i,  title:menuList[i]});
					
				}
				//console.log(arr1);
				itemsnew1.subs=arr1;
				//console.log(itemsnew1.subs)
				itemsnew[2] = itemsnew1;
				//console.log(itemsnew[2]);
				
				this.items = itemsnew;
				//console.log(this.items);
            } catch (e) {
                console.log(e);
            }
			//return menuList;
        },		
		
    },
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 170px;
    bottom: 0;
	
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
