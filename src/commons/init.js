/**
 * 用于做一些初始化内容
 * 过滤器等等
 */

import './components'
import Vue from 'vue'
import filters from '@/filters'

Object.keys(filters).forEach(name => {
  Vue.filter(name, filters[name])
})