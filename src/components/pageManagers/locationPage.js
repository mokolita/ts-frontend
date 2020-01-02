class LocationPage extends PageManager {

    constructor(container, adapter) {
        super(container)
        this.adapter = new LocationAdapter(adapter)
        this.location = new Location()
    }

    initBindingsAndEventListeners(){
        console.log("location page initBindings")
        this.form = this.container.querySelector(`form`)

        this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    async handleSubmit(e){
        console.log("locationPage handleSubmit")
        e.preventDefault()
        const [name, content, latitude, longitude] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
        const params = {
            location: {name, content, latitude, longitude, user}
            }
            newLocationForm(params)
        try{
          await this.adapter.login(params)
          this.redirect('profile')
        }catch(err){
          this.handleError(err)
        }
    }

    async fetchAndRenderUserResources(){
        try{
            const userObj = await this.adapter.getUser()
            this.user = new User(userObj)
            this.renderUser()
        }catch(err){
            this.handleError(err)
        }
    }

    static formHTML(location){
        return(`
        <div class="bg-contact3">
          
        <div class="container-contact3">
          <div class="wrap-contact3">
            <form class="contact3-form validate-form" id="${location ? 'edit' : 'new'}-location-form">
              <span class="contact3-form-title">
                Location Form
              </span>
      
              <div class="wrap-input3 validate-input" data-validate="Name is required">
                <label for="name">Location Name</label>
                <input class="input3" type="text" name="name" id="name" value="${location ? location.name : ''}" required >
                  <span class="focus-input3"></span>
              </div>
      
              <div class="wrap-input3 validate-input">
                <label for="content">Tell us about your spot:</label>
                <textarea form='add-location-form' class="input3" name="content" required >
                ${location ? location.content : ''}
                </textarea>
                  <span class="focus-input3"></span>
              </div>
      
              <div class="wrap-input3 validate-input" data-validate = "Address is required">
                  <label for="address">Address</label>
                  <input class="input3" type="text" name="address" id="address"  value="${location ? location.address : ''}" required >
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