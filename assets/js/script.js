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
       $('#speakerModal').modal();
            $.getJSON("assets/speakers_text/content.json", function(data){
               $('#speakerModal').modal();
               var obj = data[0];
               $("#reportName").html(obj["Title"]);
               $("#speakerPhoto").attr("src","assets/img/speakers/"+ obj["Photo"]);
               $("#speakerName").html(obj["Name"]);
               $("#speakerCompany").html(obj["Company"]);
               $("#reportDesctiption").html(obj["Description"]);
            });
         });
 
 
});