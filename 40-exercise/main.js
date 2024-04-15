function make_album(artistName, albumTitle, tracks) {
    var album = {
        artist: artistName,
        title: albumTitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    ;
    return album;
}
// creating three variables with different values
var firstAlbum = make_album("Omaima", "Prosperity");
var secondAlbum = make_album("Haroon", "Strong Man", 6);
var thirdAlbum = make_album("Shahmeer", "Little Life");
// printing alubums
console.log(firstAlbum);
console.log(secondAlbum);
console.log(thirdAlbum);
