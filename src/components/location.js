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

   get staticHTML(){
     return(`
     <div class="bg-contact3">
       
     <div class="container-contact3">
       <div class="wrap-contact3">
         <form class="contact3-form validate-form" id="add-location-form">
           <span class="contact3-form-title">
             Post New Camping Location
           </span>
   
           <div class="wrap-input3 validate-input" data-validate="Name is required">
             <input class="input3" type="text" name="name" id="name" placeholder="Name" required>
             <span class="focus-input3"></span>
           </div>
   
           <div class="wrap-input3 validate-input" data-validate="Last name is required">
               <input class="input3" type="area" name="last_name" id="last_name" placeholder="Last Name" required>
               <span class="focus-input3"></span>
             </div>
   
           <div class="wrap-input3 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
             <textarea form='add-location-form' class="input3" name="content" placeholder="Tell us about your sp" required>
             <span class="focus-input3"></span>
           </div>
   
           <div class="wrap-input3 validate-input" data-validate = "Address is required">
               <input class="input3" type="text" name="address" id="address" placeholder="Address" required>
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