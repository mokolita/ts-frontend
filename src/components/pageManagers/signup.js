class Signup extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new SignupAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.form = this.container.querySelector('#signup-form')


        this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    async handleSubmit(e){
        e.preventDefault()
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const [first_name, last_name, email, password ] = inputs.map(input => input.value)
        const params = {
            user: {
                first_name, last_name, email, password
            }
        }
        try{
          await this.adapter.signup(params)
          this.redirect('profile')
        }catch(err){
          this.handleError(err)
        }
        
    }


    get staticHTML(){
        return(`<div class="bg-contact3">
       
        <div class="container-contact3">
          <div class="wrap-contact3">
            <form class="contact3-form validate-form" id="signup-form">
              <span class="contact3-form-title">
                Sign Up
              </span>
      
              <div class="wrap-input3 validate-input" data-validate="First name is required">
                <input class="input3" type="text" name="first_name" id="first_name" placeholder="First Name" required>
                <span class="focus-input3"></span>
              </div>
      
              <div class="wrap-input3 validate-input" data-validate="Last name is required">
                  <input class="input3" type="text" name="last_name" id="last_name" placeholder="Last Name" required>
                  <span class="focus-input3"></span>
                </div>
      
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




