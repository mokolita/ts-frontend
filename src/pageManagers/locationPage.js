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
        const [name, address, id] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
        const content = e.target.querySelector('textarea').value
        const params = {
            location: {name, content, address, id}
            }
            this.adapter.newLocationForm(params)
            this.redirect('home')
        try{
          await this.adapter.login(params)
          
        }catch(err){
          this.handleError(err)
        }
    }


    get staticHTML(){
        return this.location.formHTML
    }
}