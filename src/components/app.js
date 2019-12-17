class App {

    constructor(){
        this.adapter = new BaseAdapter()
        this.initBindingsandEventListeners()
        this.alertManger = new Alert(this.alert)
        this.router = new Router({
            'welcome': new Welcome(this.page, this.adapter),
            'login': new LoginPage(this.page, this.adapter),
            'signup': new Signup(this.page, this.adapter),
            'home': new HomePage(this.page, this.adapter),
            'profile': new Profile(this.page, this.adapter)

        })
        const navbar = new Navbar(this.navbar, this.adapter) 

        this.router.assignAlertHandler(this.handleAlert.bind(this))
        this.router.assignNavbar(navbar)
        this.router.assignRedirect(this.pageManagerRedirect.bind(this))
        this.renderPage('welcome')
 
    }

    initBindingsandEventListeners(){
        this.container = document.querySelector('#app-container')
        this.alert = document.querySelector('#alert-container')
        this.navbar = document.querySelector('.nav-container')
        this.page = document.querySelector('#page-container')
        
    }

    handleAlert(msg, type, timeout=5000){
        this.alertManger.render(msg, type, timeout)
    }

    pageManagerRedirect(page){
        this.renderPage(page)
    }

    renderPage(page){
        this.router.render(page) 
    }

    
}