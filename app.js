var pigVideo = new Object ();
pigVideo.title = "Cute Pig Eating Strawberries"
pigVideo.uploader = "PigLover88"
pigVideo.seconds = 80

var wolfVideo = new Object ();
wolfVideo.title = "Wolves Howling"
wolfVideo.uploader = "Balto"
wolfVideo.seconds = 45

function watch(video){
    console.log ("You watched all " + video.seconds + " seconds " + "of " + video.title + " uploaded by " + video.uploader + ".")
}

watch (pigVideo);
watch (wolfVideo);


//The constructor funcion
function Movie(title, year, genre, cast) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.cast = [cast];
    //need brackets since it is an array
}

//A method on the object
//prototype creates a function and the function is being called read
Movie.prototype.read = function (){
    document.write("Title: " + this.title + "<br>" + "Year: " + this.year + "<br>" +  "Genre: " + this.genre  + "<br>" +  "Cast: " + this.cast)
}

//Instantiating a new object
var movie1 = new Movie ("The Color Purple", 1982, "Drama", ["Whoopie Goldberg, " + "Oprah" +"<br>" + "<br>"]);
//call function 
movie1.read();


var movie2 = new Movie ("Big Fish", 2003, "Fantasy", ["Ewan McGregor, " + "Jessica Lange"])
movie2.read();