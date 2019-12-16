class Router {

    constructor(kvp){
        this.routes = kvp
    }

    set rootPage(rootPageKey){
        this.rootPage = this.routes[rootPageKey]
    }

    render(page){
    this.routes[page].render()
    if(this.navbar){this.navbar.render()}
    this.currentPage = page 
    }

    assignCallBack(callback){
        for(let route in this.routes) {
            this.routes[route].redirect = callback
        }
        if(this.navbar){this.navbar.redirect = callback}
    }

    assignNavbar(navbar){
        this.navbar = navbar
        // this.navbar.currentPage = () =>{
        //     return this.currentPage
        // }
    }

}