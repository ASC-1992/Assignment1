$(document).ready(function(){
    var bio = document.getElementById("bio");
    var botBan = document.getElementById("bot");
    var topBan = document.getElementById("top");
    var bio = document.getElementById("bio");

    $.ajax({
        url:"topBanner.html",
        dataType:"html",
        success:function(resp){
            console.log(resp);
            topBan.innerHTML = resp;
            
        }
            });

    $.ajax({
        url:"bio.html",
        dataType:"html",
        success:function(resp){
            console.log(resp);
            bio.innerHTML = resp;
            
        }
            });

    $.ajax({
        url:"bottomBanner.html",
        dataType:"html",
        success:function(resp){
            console.log(resp);
            botBan.innerHTML = resp;
            
        }
            });
                  
                  });