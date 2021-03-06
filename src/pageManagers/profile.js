class Profile extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new ProfileAdapter(adapter)
        this.user = null 
    }

    initBindingsAndEventListeners(){
        return null 
    }

    profileBindingsAndEventListeners(){
        const locList = this.container.querySelector('ul')
        locList.addEventListener('click', this.handleLocationClick.bind(this))

        const newLoc = this.container.querySelector('button')
        newLoc.addEventListener('click', this.updateLocation.bind(this) )
    }

    locationsBindingsAndEventListeners(){
        const addButton = this.container.querySelector('button')
        addButton.addEventListener('click', this.updateLocation.bind(this))
    }

    updateBindingsAndEventListeners(){
        const submit = this.container.querySelector('form')
        submit.addEventListener('submit', this.handleFormSubmit.bind(this) )
    }

    async handleFormSubmit(e){
        e.preventDefault()
        
        const [name, address, id] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
        const content = e.target.querySelector('textarea').value 
        const params = {name, content, address, id}
        //debugger
        try{
             await this.adapter.updateLocation(params)
             this.redirect('profile')
        }catch(err){
            this.handleError(err)
        }
    }

    updateLocation(e){
        if(e.target.tagName === 'BUTTON'){
            if(e.target.dataset.id){
            const locId = e.target.dataset.id 
            const location = this.getLocationById(locId)
            this.renderForm(location)
            }else{
                alert('this location has no id') 
            }
            
        }
        
    }

    handleLocationClick(e){
        if(e.target.tagName === 'LI'){
            const locId = e.target.dataset.id 
            const location = this.getLocationById(locId)
            this.renderLocation(location)
        }
    }

    async fetchAndRenderPageResources(){
        try{
            const userObj = await this.adapter.getUser()
            this.user = new User(userObj)
            this.renderUser()
        }catch(err){
            this.handleError(err)
        }
    }

    renderUser(){
        this.container.innerHTML = this.user.profileHTML

        this.profileBindingsAndEventListeners()
    }

    renderLocation(location){
        if(location){
            this.container.innerHTML = location.updateLiHTML
            this.locationsBindingsAndEventListeners()
        }else{
            this.handleError({
                type: "404 Not Found",
                msg: "Location was not found"
            })
        }
    }

    renderForm(location){
        if(location){
            this.container.innerHTML = location.formHTML
            this.updateBindingsAndEventListeners() //WHAT DO I DO?! Also, why does submit log me out?
        }else{
            this.handleError({
                type: "404 Not Found",
                msg: "Something went wrong"
            })
        }
    }

    getLocationById(id){
        return this.user.locations.find(l => l.id == id)
    }


    get staticHTML(){
      // return(`<div class='loader'></div>`)
    }
}