var preload,cx,mx;

//Calling from index.html
function init()
{
	if(!swfobject.hasFlashPlayerVersion("1"))
	{
		var newImage=new Image();
		newImage.src='../../../common/images/preloader.gif';		
		newImage.onload=function()
		{	
			var img = document.createElement('img');
			img.src='../../../common/images/preloader.gif';
			img.id='preloader';			
			img.style.position='absolute';
			img.style.top='50%';
			img.style.left='50%';	
			document.body.appendChild(img);
			loadScript("../../../common/scripts/createJS_bundle_060.min.js", loadTemplate);			
		};							
	}	
}

//To load template files
function loadTemplate()
{
	var tF;	
	//For Deployment
	//tF = "../../../common/scripts/templates_base_min.js";
	//For Developement
	tF = "../../../common/scripts/templates_base_dev.js";
		
	var url= document.getElementsByName("movie").item(0).value;
	var xmlPath = url.split(".swf")[0];
	
	var manifest = [{id:"jquery", src:"../../../common/scripts/jquery-1.7.2.min.js"},
					{id:"mx", src:xmlPath+'.xml'},
					{id:"cx", src:xmlPath+'_canvas.xml'},
					{id:"templateFile", src:tF}];	
	
	preload = new createjs.LoadQueue(false);
	preload.addEventListener("fileload", hLoaded);
   	preload.addEventListener("error", hError);	
	preload.addEventListener("complete", hComplete);
	preload.loadManifest(manifest);	
}

function hLoaded(event) {
	switch (event.item.type){	
		case createjs.LoadQueue.IMAGE:
			break;	
		case createjs.LoadQueue.JAVASCRIPT:
			document.body.appendChild(event.result);
			break;		
		case createjs.LoadQueue.XML:
			if(event.item.id == "mx") mx = event.result;
			if(event.item.id == "cx") cx = event.result;
			break;	
	}
}

function hComplete(event)
{
	preload = null;
	initiateTemplate();
}

function hError(event) {
	alert("File loader failed"+event);
}