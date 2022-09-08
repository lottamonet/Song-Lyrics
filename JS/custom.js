/*var regFunction = function(e){
    e.preventDefault();
    let artist = $('#artist-name').val();
    let title = $('#song-name').val();
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        $('#lyrics-space').text(data.lyrics);
    });
};*/

//Refactored function with Async Await

var asyncFunction =  async function(e){
    e.preventDefault();
    let artist = $('#artist-name').val();
    let title = $('#song-name').val();
    let response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    let lyrics = await response.json();
    console.log(lyrics);
    $('#song-title-space').text(`${title}`).css("text-align", "center")
    $('#lyrics-space').text(lyrics.lyrics).css({"border": "3px solid black", "margin": "1em", "padding": "1em"});
   /* try {
        asyncFunction();
    }
    catch(error) {
        $('lyrics-space').html('<p>Lyrics Not Found. Please Enter a different Song.</p>')
    }*/
};

/*$('#song-lyrics').submit(function(e){
    regFunction(e);
}*/
$('#song-lyrics').submit(function(e){
    asyncFunction(e);
});
