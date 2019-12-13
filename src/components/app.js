class App {

    constructor(){
        this.adapter = new BaseAdapter()
        this.initBindingsandEventListeners()
        this.router = new Router({
            'welcome': new Welcome(this.page, this.adapter),
            'login': new LoginPage(this.page, this.adapter),
            'signup': new Signup(this.page, this.adapter),

        })
        this.router.assignCallBack(this.pageManagerRedirect.bind(this))
        this.renderPage('welcome')

    }

    initBindingsandEventListeners(){
        this.container = document.querySelector('#app-container')
        this.navbar = document.querySelector('.nav-container')
        this.page = document.querySelector('#page-container')
    }


    pageManagerRedirect(page){
        this.renderPage(page)
    }

    renderPage(page){
        this.router.render(page) 
    }

    
}