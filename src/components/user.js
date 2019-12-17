class User {

    constructor(user){
        const { email, first_name, last_name, locations, comments} = user
        this.email = email
        this.first_name = first_name
        this.last_name = last_name
        this.locations = locations.map(l => new Location(l))
        this.comments = comments.map(c => new Comment(c))
    }


}