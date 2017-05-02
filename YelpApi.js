//Yelp API Assignment
// Create a site with a search bar and a list of Philadelphia neighborhoods and/or towns and cities in the metro region. These can be listed in a dropdown menu or just as a collection of buttons/divs. There should also be a button or div that when clicked runs a function that: 
// -  Searches the Yelp API for businesses in the selected neighborhood that match the search criteria from the search bar. 
// - Lists the results on the page with some of the data associated with each result (name, address, image, etc.)
// Additionally: 
// - When a result is clicked, it opens the Yelp page for that business in a new window.
// - When a user makes a new search, the old results go away and the new results  populate the page and are also clickable.
// Use SASS and the forEach loop instead of the for loop.


$(document).ready(function(){
	var searchBar = document.getElementById("search-bar");
	var submitButton = document.getElementById("submit-button");
	var searchValue = "";

	var results = document.getElementById("result");
	var location = document.getElementsByClassName("locations");
	var locationResult = "";
var msg = "";
console.log(location);

var pictureArray = [];




	Array.prototype.forEach.call(location,function(innerArray) {
		innerArray.addEventListener("click", function(){
		
			locationResult = event.target.textContent;
			console.log(locationResult);


		})



	})


	submitButton.addEventListener("click", function(){
		results.innerHTML = "";
		msg = "";
		// pictureArray = [];
		searchValue = searchBar.value;

     $.ajax({
         url: "https://yelp-search.herokuapp.com/search",
         method: "GET",
         data: {

         	term: searchValue,
         	location: locationResult
        },
         success: function(response){
         	console.log(response);
   

         	// for(let i = 0; i < response.businesses.length; i++){
         		
         	//  msg +=    "<a href=" + response.businesses[i].url + " target= '_blank' class='search-result'>";
         	//  msg += response.businesses[i].name + "</br>";
         	//  msg += " Address:" + response.businesses[i].location.address[0] +  " Philadelphia, Pa" +  "</a>"; 
         	//  msg += "</br>" + "<img class= 'picture1' src=" + response.businesses[i].image_url + ">" + "</br>"; 

         	 
        
         	 
          //    }

          //    results.innerHTML = msg;


			Array.prototype.forEach.call(response.businesses,function(iArray) {
				
             msg += "<a href=" + iArray.url + " target= '_blank' class='search-result'>";
             msg += "<div>" + iArray.name + "</div>";
             msg += " Address: " + iArray.location.address[0] +  " Philadelphia, Pa" 
             msg +=  "</a>"; 
             msg += "<div>" + "<img class= 'picture1' src=" + iArray.image_url + ">" + "</div>"; 


			})
            results.innerHTML = msg;

             // response.businesses.forEach(function(innerArray){

             // 	 msg +=  "<div class= 'picture1'>" + "<a href=" + response.businesses.url + " target= '_blank' >" + response.businesses.name + "</br>" + " Address:" + response.businesses.location.address[0] +  " Philadelphia, Pa"+   + "</a>" + "</br> " + "</br>" + "</div>"; 


             // })


             // results.innerHTML = msg;
    //          var picture1 = document.getElementsByClassName("picture1");

    //          for(let i = 0; i < picture1.length; i++){
				// picture1[i].addEventListener("mouseover", function(){
    //          		var targetSearch = event.target;
    //          		targetSearch.style.backgroundImage = "url("  + pictureArray[i] +     ")";

				// })


    //          }

             // picture1.forEach(function(innerArray){
             // 	picture1.addEventListener("mouseover", function(){

             // 		var targetSearch = event.target;
             // 		targetSearch.style.backgroundImage = "url("  + pictureArray[i] +     ")";


             // 	})




             // })
		}

     })

	})




})

