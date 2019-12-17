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
        locList.addEventListeners('click', this.handleLocationClick.bind(this))
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

        finalBindingsAndEventListeners()
    }

    get staticHTML(){
        <div class='loader'></div>
    }
}