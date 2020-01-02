class User {

    constructor(user){
        const { email, first_name, last_name, locations, comments} = user
        this.email = email
        this.first_name = first_name
        this.last_name = last_name
        this.locations = locations.map(l => new Location(l))
    }


    get profileHTML(){
        return (`
            <div class='profile-content-wrapper'>
                <h2>Welcome, ${this.first_name}</h2>
                <h2>Your locations:</h2>
                <button class="contact3-form-btn" id='location-form'>Add location</button>
                <ul class='card-list'>
                    ${this.locations.map(l => l.profileLiHTML)}
                </ul>
           </div> 
        `)
    }

    


}