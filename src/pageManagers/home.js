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
          this.renderMap()
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

    // renderMap(){
    //     this.mapContainer = this.container.appendTo('div#map-container')
    //     this.map = new MapManager(this.mapContainer)

    //     this.mapContainer.innerHTML = this.map

    // }

    get staticHTML(){
        return(` `)
    }
}