class Router {

    constructor(kvp){
        this.routes = kvp
    }

    set rootPage(rootPageKey){
        this.rootPage = this.routes[rootPageKey]
    }

    render(page){
    this.routes[page].render
    }

    assignCallBack(callback){
        for(let route in this.routes) {
            this.routes[route].redirect = callback
        }
    }

}