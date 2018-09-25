import HttpRequest from 'libs/axios'
import config from 'config'

const baseUrl = process.env.NODE_ENV === 'production' ? config.baseUrl.prod : config.baseUrl.dev

const axios = new HttpRequest(baseUrl)
export default axios
