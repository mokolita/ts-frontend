class App {

    constructor(){
        this.adapter = new BaseAdapter()
        this.initBindingsandEventListeners()
        this.renderPage(new Signup(this.page, this.adapter))

    }

    initBindingsandEventListeners(){
        this.container = document.querySelector('#app-container')
        this.navbar = document.querySelector('.nav-container')
        this.page = document.querySelector('#page-container')
    }

    renderPage(page){
        page.render() 
    }
}