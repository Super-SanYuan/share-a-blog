import request from '@/utils/request'

export const getHome = () => request({
  methods: "type",
  url: '/blog'
})