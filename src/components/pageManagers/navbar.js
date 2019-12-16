class Navbar extends PageManager {

    constructor(container, adapter){
        super(container)
        this.adapter = adapter
    }

    get is_authenticated(){
        return !!this.adapter.token
    }

    initBindingsAndEventListeners(){
        this.container.addEventListener('click', this.handleClick.bind(this))
    }

    handleClick(e){
        if(e.target.tagName === 'A'){
            e.preventDefault()
            if(e.target.id != 'logout-link'){
            const route = e.target.id.split('-')[0]
            if(route != this.currentPage()){this.redirect(route)}
            }else{
                this.adapter.token = null 
            }
        }
    }

    get staticHTML(){
        if(this.is_authenticated){
        return(`
        <nav>
            <ul>
                <li><img src="styles/images/logo.png" class='logo'></li>
                <li><a href="#" id="home-link">Home</a></li>
                <li><a href="#" id="about-link">About</a></li>
                <li><a href="#" id="profile-link'>Profile</a></li>
                <li><a href="#" id='logout-link'>Logout</a></li>
                <form class="search" id='navbarsearch-link'>
                    <input type="text" name="search" placeholder="Search.." >
                    <button  type='submit'>Search</button>
                </form>
            </ul>
          </nav>`)
        }else{
            return (`<nav>
            <ul>
                <li><img src="styles/images/logo.png" class='logo'></li>
                <li><a href="#" id='home-link'>Home</a></li>
                <li><a href="#" id='about-link'>About</a></li>
                <li><a href="#" id='login-link'>Login</a></li>
                <li><a href='#' id='signup-link'>Sign Up</a></li>
                <form class="search">
                    <input type="text" name="search" placeholder="Search.." >
                    <button  type='submit'>Search</button>
                </form>
            </ul>
          </nav>`)}

        }
}
