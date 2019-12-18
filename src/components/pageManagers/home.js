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
          this.locations = locObj.map(l => new Location(l))
          this.renderLocations()
      }catch(err){
          this.handleError(err)
      }
  }

  renderLocations(){
    const locationsLiHTML = this.locations.map(l => l.liHTML).join('')
    const ul =  
    `<main>
        <ul class='card-list'>
            ${locationsLiHTML}
        </ul>
    </main> `
    this.container.innerHTML = ul
}

    get staticHTML(){
        return(` `)
    }
}