class HomePage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new HomeAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        return null 
    }

    async fetchAndRenderPageResources(){
      try{
          const locObj = await this.adapter.getAllLocations()
          this.locations = new Location(locObj)
          this.renderLocations()
      }catch(err){
          this.handleError(err)
      }
  }

  renderLocations(){
    const allLocations = this.locations.map(l => l.getAllLocations)
    
    this.container.innerHTML = allLocations.allLocationsLiHTML
}

    get staticHTML(){
        return(` `)
    }
}