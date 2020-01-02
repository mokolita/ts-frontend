class Location {

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


    constructor(location){
        const {id, name, content, latitude, longitude, user_id} = location
        this.id = id
        this.name = name 
        this.content = content
        this.latitude = latitude 
        this.longitude = longitude 
        this.user = user_id 
        this.address = null
        // this.comments = comments.map(c => new Comment(c))
    }

    getUserById(id){
      const user = this.location.user.find(u => u.id == id)
      

    }

    get formHTML(){
      return Location.formHTML(this)
    }

   
    get liHTML(){
        return(`
        <li class='card' data-id="${this.id}">
          <img src="styles/images/bg-01.jpg">
            <div class='content-wrapper'>
              <h2 class="card-title">${this.name}</h2>
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
        `)
    }

    get updateLiHTML(){
      return(`
      <li class='card' data-id="${this.id}">
      <img src="styles/images/bg-01.jpg">
      <div class='content-wrapper'>
        <h2 class="card-title">${this.name}</h2>
        <a href='#' class='verification-button'>
          <img scr='styles/images/shutterstock_355898753.png'>
        </a>
        <p class='map-coords'>Latitude:${this.latitude} - Longitude: ${this.longitude}</p>
      </div>
      <div class='more-info-container'>
        <div class='location-gallery'></div> 
        <p class='location-description'>${this.content}</p>
        <button class="contact3-form-btn" data-id="${this.id}">Update</button>
      </div>
      </li>
      `)
  }

    get profileLiHTML(){
      return(`
      <li class='card' data-id="${this.id}">
        <img src="styles/images/bg-01.jpg">
        <div class='content-wrapper'>
          <h2 class="card-title">${this.name}</h2>
        </div>
        <div class='more-info-container'>
          <div class='location-gallery'></div> 
          <p class='location-description'>${this.content}</p>
        </div>
        </li>
      `)
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