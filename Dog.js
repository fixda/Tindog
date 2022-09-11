// Create the Dog class here

class Dog{
    constructor(data){
        Object.assign(this, data)
        
    }
    setMatchState(bool){
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    getDogHtml(){
        return `
            <div>
                <div class="dog-info">
                    <h4> ${this.name}, ${this.age} </h4>
                    <div class="dog-bio">
                        ${this.bio}
                    </div>
                </div>
                <img id="nope" src="images/badge-nope.png">
                <img id="liked" src="images/badge-like.png">
                <img class="dog-img" src="${this.avatar}">
            </div>`
    }
}
export default Dog