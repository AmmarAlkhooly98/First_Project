
var participants = ["Abdulrohman Al-Akrad",'Ahmad Aldarkashli','Ammar Alkhooly','Ayman Alhariri','Besslan','Esraa Ramahi','Hasan Al-Abrash','Mohammad Elokour','Mohammad Jozaa','Yazan Eliwah','Yazan Alnajjar','Yousef (Joe)','Ahmad(coach)','Amer Alkharashgah','Areej Obaid','Basma Al-Tayeh','Canaan','Fatema','Hamza Olimat','Hamzeh Obiedat','Huda Al-Raee','Iman Elokour','Jomana Obaida','Laith Obeidat','Mahmoud','Medina Sheikh','Mohammad Hassan','Moatasem Fayez Alraggad','Oday Abueid','Qusai Alzunaymat','Raed Shhabeddin','Rafat Ahmed','Rawan Akram','Rubah Addad','Sahar','Samia Albess','Sara Bashaireh','Shareef','Wael','Yasser Qasem','Yazan Eliwah','Yousef Alshabah','Kelsey','Mr. Hugh Bosely','bayan Alraqqad','zainab Hammami','Seif Miehair'];                                 

function randomName(myArray){
   var r = [Math.floor(Math.random() * myArray.length)
     myArray[r]

}

$(document).ready(function(){
    
    var result = randomName(participants);

    $('#generaten').on('click',function(myArray){
       
       $('#whois').html ('')
      return $('#whois').append('<h1>' + randomName(participants) + '</h1>')
     }) 

   $('#reload').on('click',function(){
      location.reload()
   })

});


  
























