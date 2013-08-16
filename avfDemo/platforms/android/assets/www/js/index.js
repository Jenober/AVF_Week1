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

    //instaDemo.html load code
    $(document).on('pageinit','#instaPage',function(){
        alert("instaPage loaded!");
        var url = 'https://api.instagram.com/v1/tags/TourSmart?callback=?&amp;client_id=60e2a3926a9b4ba08b4920b7922e5479'
        console.log('instaPage has initialized!');
        $.getJSON(url, function(dataset){

            console.log(dataset);
            alert(dataset.data.media_count);
            var mediaCount = dataset.data.media_count;
            $('#mediaCount').text(mediaCount);

        })
            .error(function(args){

                alert(args);
            });
    });
//jokePage load code
    $(document).on('pageinit','#jokePage',function(){
        alert("jokepage loaded!");
        var url = 'http://api.icndb.com/jokes/random'
        console.log('jokePage has initialized!');
        $.getJSON(url, function(dataset){
            alert(dataset);
            console.log(dataset);
            console.log(dataset.value.joke);
            var jokeTxt = dataset.value.joke;
            $('#jokeP').text(jokeTxt);

        });
    });
//button to reload page and get another joke
    $('#jokeBtn').on('click', function(){
        var oldLoc = window.location;
        window.location = oldLoc;

    });
};

document.addEventListener("deviceready", onDeviceReady, false);