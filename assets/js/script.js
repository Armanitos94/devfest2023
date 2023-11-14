$(document).ready(function() {
 
 
   $('a[href^="#"]').click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top - 65 + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });

   $(".speaker").click(function() {
            $.getJSON("assets/speakers_text/content.json", function(data){
               $('#speakerModal').modal();
               var obj = data[0];
               $("#reportName").html(obj["Name"]);
               $("#speakerPhoto").attr("src","assets/img/speakers/"+ obj["Photo"]);
               //$("#reportName").html(obj["Title"]);
              // $("#reportName").html(obj["Company"]);
               $("#reportDesctiption").html(obj["Description"]);
            });
         });
 
 
});