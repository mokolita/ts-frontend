class App {

    constructor(){
        this.adapter = new BaseAdapter()
        this.initBindingsandEventListeners()
        this.router = new Router({
            'welcome': new WelcomePage(this.page, this.adapter),
            'login': new LoginPage(this.page, this.adapter),
            'signup': new Signup(this.page, this.adapter),

        })
        this.renderPage('welcome')

    }

    initBindingsandEventListeners(){
        this.container = document.querySelector('#app-container')
        this.navbar = document.querySelector('.nav-container')
        this.page = document.querySelector('#page-container')
    }

    renderPage(page){
        this.router.render(page) 
    }
}