/**
 * 用于集中管理一些UI库的组件
 */
import Vue from 'vue'
import { Button, Avatar, Form, FormItem, Input, Pagination, Message, Dropdown, DropdownItem, DropdownMenu, Switch } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Vue.prototype.$message = Message

Vue.use(Button)
Vue.use(Avatar)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Switch)