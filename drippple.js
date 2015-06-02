$(document).ready(function($){
	var xmlhttp = new XMLHttpRequest();
	var url = "https://api.dribbble.com/v1/users/mowat/shots/?access_token=4b14b95f60442720be19906baf0bb1dad6eaa55aa38f88e4212c84ab91f37751";
	var imgurls = [];

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	        var newarr = getURLs(myArr);
	        fill(imgurls);
	    }
	}

	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function getURLs(arr) {
		for(i = 0; i < arr.length; i++) {
			imgurls.push(arr[i]['images']['hidpi']);
		}
		console.log(imgurls);
	}

	function fill(arr) {
	    var i;
	    var out = "";
	    for(i = 0; i < 4; i++) {
	        out += '<div class="img-wrapp"> <img data-action="zoom"  src="' + arr[i] + '">' + '</div>';
	    }
	    document.getElementById("drib").innerHTML = out;
	}
});
