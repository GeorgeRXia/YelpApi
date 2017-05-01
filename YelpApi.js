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

var pictureArray = [];
	for(var i = 0; i < location.length; i++){

		location[i].addEventListener("click",function(){


			locationResult = event.target.textContent;
			console.log(locationResult);


		})


	}


	// location.forEach(function(innerArray){
	// 	innerArray.addEventListener("click" function(){
	// 		locationResult = event.target.textContent;
	// 		console.log(locationResult);


	// 	})



	// })


// div.style.backgroundImage="url('"+variable+"')"

	submitButton.addEventListener("click", function(){
		results.innerHTML = "";
		pictureArray = [];
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
   

         	for(let i = 0; i < 10; i++){
         		
         	 msg +=    "<a href=" + response.businesses[i].url + " target= '_blank' class='search-result'>" + response.businesses[i].name + "</br>" + " Address:" + response.businesses[i].location.address[0] +  " Philadelphia, Pa"+   + "</a>" + "</br> " + "</br>" + "<div class= 'picture1'></div>"; 

         	 pictureArray.push(response.businesses[i].image_url);
         	
         	 

         	 
             }


             // response.businesses.forEach(function(innerArray){

             // 	 msg +=  "<div class= 'picture1'>" + "<a href=" + response.businesses.url + " target= '_blank' >" + response.businesses.name + "</br>" + " Address:" + response.businesses.location.address[0] +  " Philadelphia, Pa"+   + "</a>" + "</br> " + "</br>" + "</div>"; 


             // })


             results.innerHTML = msg;
             var picture1 = document.getElementsByClassName("picture1");

             for(let i = 0; i < picture1.length; i++){
				picture1[i].addEventListener("mouseover", function(){
             		var targetSearch = event.target;
             		targetSearch.style.backgroundImage = "url("  + pictureArray[i] +     ")";

				})


             }

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

