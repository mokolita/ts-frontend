class ProfileAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    get token(){
        return this.baseAdapter.token
    }

    get headers(){
        return this.baseAdapter.headers
    }

    async updateLocation(params){
        const {name, content, address, id} = params
        const url = `${this.baseURL}/locations/${id}` 
        const body = {
            location: {
                name,
                content,
                address,
                id
        
            }
        }
        const res = await fetch(url, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(body)
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }

    async getUser(){
        const res = await fetch(`${this.baseURL}/profile`, {
            headers:  this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }
}