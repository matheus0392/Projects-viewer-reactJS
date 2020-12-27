import axios from 'axios'

const API = {
    async GetAll() {
        return await axios({
            method: 'GET',
            url: '/WebApi/getall',
        })
    },

    async Save(params) {
        return await axios({
            method: 'POST',
            url: '/WebApi/save',
            data: params
        })
    },

    async GetByCPF(cpf) {
        return await axios({
            method: 'GET',
            url: '/WebApi/getbycpf',
            params: cpf
        })
    }
}

export default API;