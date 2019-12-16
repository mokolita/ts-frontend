class HomePage extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new HomeAdapter(adapter)
    }

    initBindingsAndEventListeners(){
        return null 
    }

    get staticHTML(){
        return(` <main>
        <ul class='card-list'>
        <li class='card'>
          <img src="https://source.unsplash.com/random/800x600">
          <div class='content-wrapper'>
            <h2 class="card-title">Winter Park</h2>
            <span class='author'>Meg Galvez</span>
            <p class='map-coords'>map address</p>
            <!-- <span class=''>click me</span> -->
          </div>
          <div class='more-info-container'>
            <div class='location-gallery'></div> 
            <p class='location-description'>Best camping ever!!!</p>
            <button class='verification-button'><img scr=''></button>
            <div class='comment-container'>
              <ul>
                <li class='comment'></li>
              </ul>
            </div>
          </div>
          </li>
          <li class='card'>
              <img src="https://source.unsplash.com/random/800x600">
              <div class='content-wrapper'>
                <h2 class="card-title">Winter Park</h2>
                <span class='author'>Meg Galvez</span>
                <p class='map-coords'>map address</p>
                <!-- <span class=''>click me</span> -->
              </div>
              <div class='more-info-container'>
                <div class='location-gallery'></div> 
                <p class='location-description'>Best camping ever!!!</p>
                <button class='verification-button'><img scr=''></button>
                <div class='comment-container'>
                  <ul>
                    <li class='comment'></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class='card'>
                <img src="https://source.unsplash.com/random/800x600">
                <div class='content-wrapper'>
                  <h2 class="card-title">Winter Park</h2>
                  <span class='author'>Meg Galvez</span>
                  <p class='map-coords'>map address</p>
                  <!-- <span class=''>click me</span> -->
                </div>
                <div class='more-info-container'>
                  <div class='location-gallery'></div> 
                  <p class='location-description'>Best camping ever!!!</p>
                  <button class='verification-button'><img scr=''></button>
                  <div class='comment-container'>
                    <ul>
                      <li class='comment'></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class='card'>
                  <img src="https://source.unsplash.com/random/800x600">
                  <div class='content-wrapper'>
                    <h2 class="card-title">Winter Park</h2>
                    <span class='author'>Meg Galvez</span>
                    <p class='map-coords'>map address</p>
                    <!-- <span class=''>click me</span> -->
                  </div>
                  <div class='more-info-container'>
                    <div class='location-gallery'></div> 
                    <p class='location-description'>Best camping ever!!! So many different places to camp</p>
                    <button class='verification-button'><img scr=''></button>
                    <div class='comment-container'>
                      <ul>
                        <li class='comment'></li>
                      </ul>
                    </div>
                  </div>
                  </li>
      </ul>
      <div class='all-locations-map'>
        <div id='map'>
            <img src="styles/images/logo.png">
        </div>
      </div>
    </main> `)
    }
}