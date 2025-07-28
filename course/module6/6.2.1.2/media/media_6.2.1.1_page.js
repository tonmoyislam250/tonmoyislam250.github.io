//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6.2.1.1.png",
        x:73.85,
        y:148.65,
        width:369.95,
        height:146.75,
        type:""},
	{name:"arrow.png",
        x:297.15,
        y:99,
        width:9.95,
        height:79.85,
        type:""}];

    var slide_texts = [{compId:"ID_txt01",
            x:83.85,
            y:120.45,
            width:205.95,
            height:13,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt02",
            x:334.75,
            y:135.3,
            width:120,
            height:13,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt03",
            x:10.8,
            y:186.9,
            width:66.6,
            height:17,
            size:11,
            textAlign:"right"},		
		{compId:"ID_txt04",
            x:215.95,
            y:45,
            width:162.35,
            height:17,
            size:11,
            textAlign:"center"},		
		{compId:"staticTxt",
			bodyText:"<b>PC1</b>",
				x:109.95,
				y:186, 
				width:32.05,
				height:13,
				size:11,
				color:"#fff",
				textAlign:"left"},
		{compId:"staticTxt",
			bodyText:"<b>PC2</b>",
				x:185,
				y:248, 
				width:32.05,
				height:13,
				size:11,
				color:"#fff",
				textAlign:"left"},
		{compId:"staticTxt",
			bodyText:".10",
				x:144.95,
				y:185.95, 
				width:32.05,
				height:13,
				size:11,				
				textAlign:"left"},
		{compId:"staticTxt",
			bodyText:".15",
				x:182,
				y:226, 
				width:32.05,
				height:13,
				size:11,				
				textAlign:"left"},
		{compId:"staticTxt",
			bodyText:".1",
				x:272,
				y:185.95, 
				width:32.05,
				height:13,
				size:11,				
				textAlign:"left"},
		{compId:"staticTxt",
			bodyText:"<b>R1</b>",
				x:306,
				y:203, 
				width:32.05,
				height:17,
				size:11,
			    font:"bold",
				color:"#fff",
				textAlign:"left"},
		{compId:"staticTxt",
			bodyText:"192.168.10.0/24",
				x:144,
				y:136, 
				width:95.70,
				height:17,
				size:11,			
				textAlign:"left"}]
		
				

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
