class LoginPage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new LoginAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.form = this.container.querySelector('form#login-form')

        this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    async handleSubmit(e){
        e.preventDefault()
        const [email, password] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
        const params = {
            user: {email, password}
        }
        try{
          await this.adapter.login(params)
          this.redirect('profile')
        }catch(err){
          this.handleError(err)
        }
    }


    get staticHTML(){
        return(`<div class="bg-contact3">
       
        <div class="container-contact3">
          <div class="wrap-contact3">
            <form class="contact3-form validate-form" id="login-form">
              <span class="contact3-form-title">
                Login
              </span>
      
              <div class="wrap-input3 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                <input class="input3" type="text" name="email" placeholder="Your Email" required>
                <span class="focus-input3"></span>
              </div>
      
              <div class="wrap-input3 validate-input" data-validate = "Password is required">
                  <input class="input3" type="password" name="password" id="password" placeholder="Password" required>
                  <span class="focus-input3"></span>
                </div>
      
              <div class="container-contact3-form-btn">
                <button class="contact3-form-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        `)
    }
}