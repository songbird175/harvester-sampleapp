var API_BASE = "https://baby-harvester-gateway.herokuapp.com";

function submitted() {
	console.log('Submitted!')

	var USERNAME = $('#name').val()
	var PASSWORD = $('#password').val()
	var duration = $('#duration').val()

	$.ajax
		({
		  type: "POST",
		  url: API_BASE + "/display/url",
		  dataType: 'json',
		  async: true,
		  headers: {
		    "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
		  },
		  data: JSON.stringify({
		  	'message':'https://songbird175.github.io/harvester-sampleapp/timer.html'+
		  		'?duration='+duration+'&name='+USERNAME+'&token='+PASSWORD
		  }),
	      'processData': false,
	      'contentType': 'application/json',
		  
		  success: function (){
		    alert('Thanks for your comment!'); 
		  },
		  error: function(xhr){
		  	if (xhr.status != 200){
			  	alert('Something went wrong, do you have the correct token?');
			  }
		  }
		});

	return false;
}