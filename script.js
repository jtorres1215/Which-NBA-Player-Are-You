$("#picAnswer").hide();

$("button").click(function(){
    $("#picAnswer").show();
    var skill= $("#Skill").val();
    var age= $("#Age").val();
    if(age >= 23 && skill === "Mid-Range Shooter"){
    $("#title").html("Kyrie Irving");
    $("#answer").html("Kyrie Irving has an amazing Mid-Range Game just like you do.");
    $("#picAnswer").attr("src","https://media.wired.com/photos/5c05b8d6d146d62d209935e1/master/pass/kyrieirving-1061271464.jpg");
}    
    else if (age >= 18 && skill === "3pt Shooter"){
    $("#title").html("Stephen Curry");
    $("#answer").html("Stephen Curry is a 3pt god,will you be like him in the future?");
    $("#picAnswer").attr("src","https://www.mercurynews.com/wp-content/uploads/2017/12/ap_17338105668996.jpg?w=495");
}
    else if(age >= 20 && skill === "Dunker"){
    $("#title").html("Donovan Mitchell");
    $("#answer").html("Donovan Mitchell recently drafted in 2017 is a very good dunker,you have his skills as of now!");
    $("#picAnswer").attr("src","https://cdn.vox-cdn.com/thumbor/qGkyq0goXVA91eOw7jBIXJS_rwk=/0x0:4200x2775/1200x800/filters:focal(2071x518:2743x1190)/cdn.vox-cdn.com/uploads/chorus_image/image/60804087/955496948.jpg.0.jpg");
}
    else if (age >= 25 && skill === "Defender"){
    $("#title").html("Kawhi Leonard");
    $("#answer").html("Kawhi Leonard is a very great defender,your quick on your feet!");
    $("#picAnswer").attr("src","https://uproxx.files.wordpress.com/2018/12/kawhi-2.jpg?quality=100&w=650");
}
    else if (age < 18 && skill === "Playmaker"){
    $("#title").html("Your Too Young");
    $("#answer").html("Not older than 18? Your not ready for the NBA quite yet.");
    $("#picAnswer").attr("src","https://s.abcnews.com/images/GMA/160621_gma_hot_shot4_0748_16x9_992.jpg");
}   else {
    $("#title").html("Fill in your Answers!?!");
    $("#answer").html("You have to fill in your answers!!!");
    $("#picAnswer").attr("src","https://media1.tenor.com/images/afea630ef5236ab7212841bd8cc08329/tenor.gif?itemid=11939159");
}
    
    
    
   

});


