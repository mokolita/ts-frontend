class LocationAdapter{
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

    async newLocationForm(params){
        const res = await fetch(`${this.baseURL}/locations`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(params)
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
        
    }

    async getUser(id){
        const res = await fetch(`${this.baseURL}/users/${id}`, {
            headers:  this.headers
        })
        await this.baseAdapter.checkStatus(res)
        return await res.json()
    }


}