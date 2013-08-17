//Make sure the device is ready before doing anything

function onDeviceReady() {
    //Code to run when home page loads
    $(document).on('pageinit','#homePage',function(){



    });
    //Code to run when Native Feature page loads
    $(document).on('pageinit','#nativePage',function(){



    });
    //Code to run when Data API page loads
    $(document).on('pageinit','#dataPage',function(){

alert("datapage loaded!");

    });
    //Research page load code
    $(document).on('pageinit','#researchPage',function(){



    });
    //Info Page load code
    $(document).on('pageinit','#infoPage',function(){



    });

    //instaDemo load code
    $(document).on('pageinit','#instaPage',function(){
        alert("instaPage loaded!");
var url = 'https://api.instagram.com/v1/tags/TourSmart?callback=?&client_id=60e2a3926a9b4ba08b4920b7922e5479';
        //var url = 'https://api.instagram.com/v1/tags/TourSmart/media/recent?access_token=fb2e77d.47a0479900504cb3ab4a1f626d174d2d&callback=?'
        console.log('instaPage has initialized!');
/*
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function(dataset){
                alert(dataset);
                console.log(dataset);
                alert(dataset.data.media_count);
                var mediaCount = dataset.data.media_count;
                $('#mediaCount').text(mediaCount);
            },
            error: function(err){

                alert("There was an error! "+ JSON.stringify(err));
            }
        });
        */
        /**/
        $.getJSON(url, function(dataset){

            alert("Success!"+ JSON.stringify(dataset));
            console.log(dataset);
            //alert(dataset.data.media_count);
            alert(dataset.data.media_count);
            var mediaCount = dataset.data.media_count;
            $('#mediaCount').text(mediaCount);

        })
            .fail(function(args){

                alert("WARNING! "+ JSON.stringify(args));
            });

    });
//jokePage load code
    $(document).on('pageinit','#jokePage',function(){
        alert("jokepage loaded!");
        var url = 'http://api.icndb.com/jokes/random?callback=?'
        console.log('jokePage has initialized!');
        $.getJSON(url,null, function(dataset){
            alert(dataset);
            console.log(dataset);
            console.log(dataset.value.joke);
            var jokeTxt = dataset.value.joke;
            $('#jokeP').text(jokeTxt);

        })
            .fail(function(args){
               //var err = textStatus+", "+ error;
                alert("WARNING! "+ JSON.stringify(args));

            });
    });
//button to reload page and get another joke
    $('#jokeBtn').on('click', function(){
        var oldLoc = window.location;
        window.location = oldLoc;

    });
};

document.addEventListener("deviceready", onDeviceReady, false);