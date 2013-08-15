//Make sure the device is ready before doing anything

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    //Code to run when home page loads
    $(document).on('pageinit','#homePage',function(){



    });
    //Code to run when Native Feature page loads
    $(document).on('pageinit','#nativePage',function(){



    });

    //Code to run when Data API page loads
    $(document).on('pageinit','#dataPage',function(){



    });

    //Research page load code
    $(document).on('pageinit','#researchPage',function(){



    });
    //Info Page load code
    $(document).on('pageinit','#infoPage',function(){



    });


};