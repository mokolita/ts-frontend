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

}