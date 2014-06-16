

function click_Directo(){
      chrome.proxy.settings.set(
          {
		value: config_directo, 
		scope: 'regular'
	  },
          function() {
		alert("directo");
	});
}


function click_Sistema(){
      chrome.proxy.settings.set(
          {
		value: config_sistema, 
		scope: 'regular'
	  },
          function() {
		alert("sistema");
	});


}


