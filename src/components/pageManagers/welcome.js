class Welcome extends PageManager {


    initBindingsAndEventListeners(){
        this.signupLink = this.container.querySelector('a#signup')
        this.loginLink = this.container.querySelector('a#login')

        this.signupLink.addEventListener('click', this.handleSignup.bind(this))
        this.loginLink.addEventListener('click', this.handleLogin.bind(this))
    }

    handleSignup(e){
        e.preventDefault()
        this.redirect('signup')

    }

    handleLogin(e){
        e.preventDefault()
        this.redirect('login')

    }


    get staticHTML(){
        return (`
            <div class="welcome-wrapper"><br><br><br><br>
                <h1>Welcome to Troubleshoot</h1>
                <span>Here at Troubleshoot, we believe that paying to sleep in nature is silly.
                    But it was hard to find reliable resources about where to find those free, LEGAL camping spot.
                    Thus, Troubleshoot was born. It is a place where anyone can post about the spots they have stayed. 
                    Be good to one another....don't post something up that is going to get someone kicked out in the middle 
                    of the night by an angry park ranger!
                </span>
                <div class='links-wrapper'>
                    <p><a href='#' id="signup">Signup</a> or <a href='#' id='login'>login</a> to post.
                </div>  
            </div>
        `)
    }
}