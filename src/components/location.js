class Location {

    constructor(location){
        const {id, name, content, latitude, longitude} = location
        this.id = id
        this.name = name 
        this.content = content
        this.latitude = latitude 
        this.longitude = longitude 
        // this.comments = comments.map(c => new Comment(c))
        
    }

    get liHTML(){
        return(`
        <li class='card' data-id="${this.id}>
        <img src="https://source.unsplash.com/random/800x600">
        <div class='content-wrapper'>
          <h2 class="card-title">${$this.name}</h2>
          <span class='author'>${this.user}</span>
          <p class='map-coords'>Latitude:${this.latitude} - Longitude: ${this.longitude}</p>
          <!-- <span class=''>click me</span> -->
        </div>
        <div class='more-info-container'>
          <div class='location-gallery'></div> 
          <p class='location-description'>${this.content}</p>
          <button class='verification-button'><img scr=''></button>
          <div class='comment-container'>
            <ul>
              <li class='comment'></li>
            </ul>
          </div>
        </div>
        </li>
        </li>
        `)
    }


    get allLocationsLiHTML(){
        return(`
        <main>
            <ul class='card-list'>
                ${this.location.map(l = l.liHTML)}
            </ul>
      
        </main> `)
    }

    get allLocationsMapHTML(){
        return(`
        
        <div class='all-locations-map'>
        <div id='map'>
            <img src="styles/images/logo.png">
        </div>
      </div>
        `)
    }

}