/* When your mouse cursor enter the background, the fading won't pause and keep playing */ 
// $(document).ready(function(){
//   $('#myCarousel').owlCarousel({
//     autoplay:true,
//     autoplayTimeout:1000,
// loop:true})
// })


var $cardVideo = $('.card-header');
$cardVideo.on('mouseenter', function()
{
  $cardVideo.get(0).play();
})

$(document).ready(
    function()
    {
        /*---stiacky*/
        $('nav').waypoint(
            function(direction)
            {
            if(direction == "down"){
              $('nav').addClass('sticky');
            }
            else{
              $('nav').removeClass('sticky');
                }
   
            $(direction).offset('400px')
                 
            }       
        )}
     )
     var key = "4673aec06bfad26e7e323cdda38dbe33";
     var city = "turan"; // My test case was "London"
     var url = "https://api.openweathermap.org/data/2.5/forecast";
     
     $.ajax({
       url: url, //API Call
       dataType: "json",
       type: "GET",
       data: {
         q: city,
         appid: key,
         units: "Metric",
         cnt: "32"
       },

       success: function(data) {
        // For testing
       var wf = "";
       var abc;
       var x;
      
       a =  JSON.stringify(data.list);
       let i = 0;
        var jsonStr = a;
         var obj =[];
   
         for(let i = 0; i <data.list.length; i = i+8)
         {
           abc = JSON.stringify(data.list[i]);
            x = JSON.parse(abc);
            obj.push(x); 
   
            console.log(obj)
             
          /*  x = data.list[i];
            console.log(x.list)  */
          }
          console.log(data.list) 
        /*  jsonStr = JSON.stringify(obj); */
       
   
       
        $.each(obj, function(index, val) {
        
      //   wf += "<br>"// Day {{val.dt_txt}} 
      //   wf += "<p>" // Opening paragraph tag
      //   wf += "<b>Day " + val.dt_txt + "</b>: " // Day
      //   wf += val.main.temp + "&degC" // Temperature
    
      //   wf += "<span> | " + val.weather[0].description + "</span>"; // Description
      //   wf += "<img src='https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" // Icon
      //  wf += "</p>" // Closing paragraph tag
     
       wf += "<li> "
       wf += " <a href="+ "#"+ " > "
       wf += " <i><img src='https://openweathermap.org/img/w/"+val.weather[0].icon+".png'> </i>"
       wf += "   <strong>"+val.main.temp + "&degC" +"</strong> "
       wf += "  <small>"+val.dt_txt+"</small> "
       wf += " </a> "
       wf += " </li> "
      });
    $("#showWeatherForcast").html(wf);  
   
       }
        
     });
     $('.post-module').hover(function() {
      $(this).find('.description').stop().animate({
        height: "toggle",
        opacity: "toggle"
      }, 300);
    });
  
   