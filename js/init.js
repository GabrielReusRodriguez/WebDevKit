

document.addEventListener('DOMContentLoaded', function () {

/*
	chrome.proxy.settings.get(
          {'incognito': false},
         	function(config) {
			console.log(JSON.stringify(config));
			alert("valor. "+JSON.stringify(config));

	});


	chrome.proxy.settings.set({value: config_directo, scope: 'regular'},
          function() {
		alert("Fin");
	});

*/
	var radioProxyDirecto = document.getElementById("proxyDirecto");
	var radioProxySistema = document.getElementById("proxySistema");


	//Check del estado del proxy.
	chrome.proxy.settings.get(
          {'incognito': false},
         	function(config) {
			if(config.value.mode == "direct"){
				radioProxyDirecto.checked=true;
				radioProxySistema.checked=false;
				return;
			}
			if(config.value.mode == "system"){
				radioProxySistema.checked=true;
				radioProxyDirecto.checked=false;
				return;
			}

	});
	

	radioProxyDirecto.addEventListener("click",click_Directo,false);
	radioProxySistema.addEventListener("click",click_Sistema,false);
});
