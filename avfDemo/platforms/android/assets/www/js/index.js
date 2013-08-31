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

        //alert("datapage loaded!");

    });
//Research page load code
    $(document).on('pageinit','#researchPage',function(){



    });
//Info Page load code
    $(document).on('pageinit','#infoPage',function(){



    });
//instaDemo load code
    $(document).on('pageinit','#instaPage',function(){
        //alert("instaPage loaded!");
var url = 'https://api.instagram.com/v1/tags/TourSmart?callback=?&client_id=60e2a3926a9b4ba08b4920b7922e5479';
        //var url = 'https://api.instagram.com/v1/tags/TourSmart?access_token=fb2e77d.47a0479900504cb3ab4a1f626d174d2d&callback=?'
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
        //load contacts
        var fields       = ["displayName", "name"];
        var options      = new ContactFindOptions();
        options.multiple = true;

        var contactList = $('#contactUl');


        function success(contacts){
            alert("success!");
            if (contacts.length > 0) {

                for (var x = 0, l = contacts.length;x<l; x++ ){
                    contactList.append("<li class='contactLi'>"+contacts[x].name.formatted +"</li>")


                }
                contactList.listview('refresh');

            }else{

                alert('There were no contacts found!');
            }

        };

        function error(err){

            alert("An Error Occured!  "+ err);

        };

        alert("looking for contacts!");
        navigator.contacts.find(fields,success,error,options);

        $(document).on('click',".contactLi",function(){
            var name = this.innerHTML;

            alert("Joke has been sent to: " + name);


        });

        var url = 'http://api.icndb.com/jokes/random?callback=?'
        console.log('jokePage has initialized!');
        var jokeTxt;
        $.getJSON(url,null, function(dataset){
            alert(dataset);
            console.log(dataset);
            console.log(dataset.value.joke);
            jokeTxt = dataset.value.joke;
            $('#jokeP').text(jokeTxt);

        })
            .fail(function(args){
               //var err = textStatus+", "+ error;
                alert("WARNING! "+ JSON.stringify(args));

            });


//button to reload page and get another joke
        $('#jokeBtn').on('click', function(){
            var oldLoc = window.location;
            window.location.reload('#jokePage');

        });
//Save joke button
        $('#saveBtn').on('click', function(){
            alert("Save button was pressed!")
            var jokeText = $('#jokeP').text();
            alert("jokeText = " + jokeText);
            var jokeKey = localStorage.length + 1;
            alert("jokeKey = " + jokeKey);
            window.localStorage.setItem(jokeKey,jokeText);
            navigator.notification.vibrate(2000);
            navigator.notification.beep(1);
            navigator.notification.alert("Joke Saved!");

        });
    });
//jokeView load code
    $(document).on('pageinit', '#jokeView',function(){

        alert("Welcome the jokeView!");


            var jokeList = $('#jokeList');

            for( var x = 0, len = window.localStorage.length; x< len;x++){

                var key = window.localStorage.key(x),
                localData = window.localStorage.getItem(key);


                jokeList.append("<li>"+ localData +"</li>");

            }
        jokeList.listview('refresh');

});
// jokeSend load code
    $(document).on('pageinit', '#jokeSend',function(){

        alert("jokeSend init!");

        var fields       = ["displayName", "name"];
        var options      = new ContactFindOptions();
        options.multiple = true;

        var contactList = $('#contactList');


        function success(contacts){
            alert("success!");
            if (contacts.length > 0) {

                for (var x = 0, l = contacts.length;x<l; x++ ){
                    contactList.append("<li class='contactLi'>"+contacts[x].name.formatted +"</li>")


                }
                contactList.listview('refresh');

            }else{

                alert('There were no contacts found!');
            }

        };

        function error(err){

            alert("An Error Occured!  "+ err);

        };

        alert("looking for contacts!");
       navigator.contacts.find(fields,success,error,options);

        $(document).on('click',"li",function(){
            var name = this.innerHTML;

            alert("Joke has been sent to: " + name);


        });






    });


//beaconPage load code
    $(document).on('pageinit','#beaconPage',function(){

        var geoSuccess = function(loc){

            $("#output").text( "At "+ loc.timestamp +" your exact location is as follows: "+
                                    loc.coords.latitude+" Latitude / "+
                                    loc.coords.longitude +" Longitude")


        };
        var geoFail = function(loc){

            alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');



        };
        var connection = navigator.connection.type;

        if (connection != 'none'){
            alert("Connection is good!");

            var step = 10,
                updates = 1000/60,
                loadBar = $("#loadBar"),
                progress = function(){
                    loadBar.val(loadBar.val()+step);
                    $("#percent").text(loadBar.val());
                    if(loadBar.val()+updates < loadBar.attr('max')){
                        setTimeout(progress,updates);

                    }else{
                        $("#percent").text("DONE!");
                        loadBar.val(loadBar.attr("max"));

                    }


                }
            navigator.geolocation.getCurrentPosition(geoSuccess, geoFail)


        }else{

            alert("You have NO connection!")

        }

        //When beacon button pressed, check Network Connection & gather GeoLoc
        $('.beacon').on('click',function(){


            alert("Beacon Launched!");

        });



    });


}

document.addEventListener("deviceready", onDeviceReady, false);