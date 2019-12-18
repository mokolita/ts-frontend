class locationPage extends PageManager {

    constructor(container, adapter) {
        super(container)
        this.adapter = new LocationAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        this.form = this.container.querySelector('form#add-location-form')

        this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }

    async handleSubmit(e){
        e.preventDefault()
        const [name, content, latitude, longitude] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
        const params = {
            location: {name, content, latitude, longitude, user}
            }
        try{
          await this.adapter.login(params)
          this.redirect('profile')
        }catch(err){
          this.handleError(err)
        }
    }
}