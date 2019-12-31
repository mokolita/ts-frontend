class Profile extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new ProfileAdapter(adapter)
        this.user = null 
    }

    initBindingsAndEventListeners(){
        return null 
    }

    finalBindingsAndEventListeners(){
        const locList = this.container.querySelector('ul')
        locList.addEventListener('click', this.handleLocationClick.bind(this))
    }

    locationsBindingsAndEventListeners(){
        const addButton = this.container.querySelector('button')
        addButton.addEventListener('click', this.addNewLocation.bind(this))
        console.log('locationsBindings')
    }

    addNewLocation(e){
        console.log('I made it to addNewLocation')
        this.container.innerHTML = this.formHTML(e)
    }

    handleLocationClick(e){
        if(e.target.tagName === 'A'){
            const locId = e.target.dataset.id 
            this.redirect(`/locations/${locId}`) //this should link to update functionality
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

        this.finalBindingsAndEventListeners()
    }

    get staticHTML(){
      // return(`<div class='loader'></div>`)
    }
}