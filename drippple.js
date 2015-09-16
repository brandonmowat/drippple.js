var drippple = function(user) {
	'use strict';
		// code by Brandon Mowat
		// http://brandonmowat.com
		// http://medium.com/@irl
		// please leave the credits,  thx bruh
		var xmlhttp = new XMLHttpRequest();
		//########## HEY YOU! ##########
		//######### YEAH YOU! ##########
		// In this url variable, see where it says "/dchen"?
		// replace that with your own dribbble username!
		var url = "https://api.dribbble.com/v1/users/" + user + "/shots/?access_token=4b14b95f60442720be19906baf0bb1dad6eaa55aa38f88e4212c84ab91f37751";
		var imgurls = [];

		xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		        var myArr = JSON.parse(xmlhttp.responseText);
		        var newarr = getURLs(myArr);
		        insert(imgurls);
		    }
		}

		xmlhttp.open("GET", url, true);
		xmlhttp.send();

		function getURLs(arr) {
			var i;
			for(i = 0; i < arr.length; i++) {
				imgurls.push(arr[i]['images']['hidpi']);
			}
			console.log(imgurls);
		}

		function insert(arr) {
			var elements = document.querySelectorAll(".drip");
			Array.prototype.forEach.call(elements, function(el, i){
				(el).setAttribute("src", arr[i]);
			});
		}


};
