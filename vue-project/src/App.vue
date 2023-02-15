<script>
	//声明式渲染，可以提高开发效率
	export default {
		//属性绑定
		data() {
			return {
				activeClass: "active",
				pinkBg: "pinkBg",
				classObj: {
					active: true,
					pinkBg: true
				},
				isActive: true,
				user: {
					name: "小白",
					age: 18,
					address: "beijing"
				},
				message: "hello world",
				message2: "hello world222",
				num: 10,
				uname: "小明",
				rawHtml: '<span style="color: red">This should be red.</span>',
				id: "d1",
				url: "",
				attributeName: "id",
				mouseEvent: "click"
			}
		},
		//计算属性，只要依赖值不变，就不会重新计算
		computed: {
			// revserMsg: function() {
			// 	console.log("revserMsg");
			// 	return this.message.split("").reverse().join("")
			// }
			revserMsg: {
				get: function() {
					return this.message.split("").reverse().join("")
				}
			}
		},
		//方法
		methods: {
			changeData: function() {
				this.num = 100
				this.uname = "Jake"
			},
			changeBind: function() {
				this.id = "d2"
				this.url = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
			}
		},
		// 监听数据变化
		watch: {
			// message2: function(newValue, oldValue) {
			// 	console.log(newValue, oldValue);
			// 	if (newValue.length < 5 || newValue.length > 10) {
			// 		console.log("输入不正确");
			// 	}
			// }
			message2: {
				immediate: true, //初始化时调用函数
				handler: function(newValue) {
					if (newValue.length < 5 || newValue.length > 10) {
						console.log("输入不正确");
					}
				}
			},
			//深度监听，监听全部属性
			// user: {
			// 	handler: function(newValue) {
			// 		console.log(newValue);
			// 	},
			// 	deep: true //是否深度监听
			// }
			//监听制定属性
			"user.name": {
				handler: function(newValue) {
					console.log(newValue);
				},
				deep: true //是否深度监听
			}
		}
	};
</script>

<template>

	<!-- 模板语法 -->
	<!-- 数据双向绑定 -->
	<p>{{num}}</p>
	<p>{{uname}}</p>
	<p v-once>{{num}}</p>
	<p v-once>{{uname}}</p>
	<button @click="changeData">修改数据</button>

	<!-- 渲染html -->
	<p>{{rawHtml}}</p>
	<p v-html="rawHtml"></p>

	<!-- v-bind -->
	<p v-bind:id="id">v-bind</p>
	<img v-bind:src="url" />
	<button @click="changeBind">修改v-bind的属性</button>

	<!-- javascript表达式 -->
	<p>{{num+1}}</p>
	<p>{{uname.split("").reverse().join("")}}</p>

	<!-- v-on -->
	<button v-on:click="changeBind">修改v-bind的属性</button>

	<!-- 动态属性 -->
	<p v-bind:[attributeName]="id">v-bind绑定</p>
	<button @click="attributeName='class'">改变属性</button>

	<!-- 动态事件 -->
	<button @[mouseEvent]="attributeName='class'">改变属性</button>
	<button @click="mouseEvent='mouseover'">改变事件</button>
	<!-- 模板语法 -->


	<!-- 计算属性 -->
	<p>{{message}}</p>
	<p>{{revserMsg}}</p>
	<!-- 计算属性 -->

	<!-- 监听器 -->
	<p>{{message2}}</p>
	<button @click="message2='你好'">改变message2</button>
	<!-- 数据双向绑定 -->
	<input type="text" v-model="message2">
	<!-- 深度监听 -->
	<p>{{user.name}}</p>
	<button @click="user.name='小黑'">修改user.name</button>
	<!-- 监听器 -->


	<!-- 类与样式绑定 -->
	<p class="active">hello1</p>
	<p :class="{active:isActive,pinkBg:isActive}">hello2</p>
	<button @click="isActive=!isActive">修改isActive</button>
	<p :class="classObj">hello3</p>
	<!-- 数组语法 -->
	<p :class="[pinkBg,activeClass]">hello4</p>
	<!-- 类与样式绑定 -->
</template>

<style>
	#d1 {
		color: red;
	}

	#d2 {
		color: blue
	}

	.d1 {
		font-size: 30px;
		color: orange;
	}

	.active {
		font-size: 30px;
		color: red;
	}

	.pinkBg {
		background-color: pink;
	}
</style>
