function make_album(artistName:string, albumTitle:string, tracks?:number){
    let album:{artist:string, title:string, tracks?:number} = {
        artist: artistName,
        title: albumTitle,
    };

    if(tracks !== undefined){
        album.tracks = tracks;
    };

    return album;
}

// creating three variables with different values
let firstAlbum = make_album("Omaima", "Prosperity");

let secondAlbum = make_album("Haroon", "Strong Man", 6);

let thirdAlbum = make_album("Shahmeer", "Little Life");

// printing alubums
console.log(firstAlbum);
console.log(secondAlbum);
console.log(thirdAlbum);