loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	
    var template_type = "IMAGE";

    var slide_images = [{name:"7_2_3_2.png",
        x:43.05,
        y:142,
        width:380,
        height:118,
        type:""}];

    var slide_texts = [{compId:"ID_title",
            x:1,
            y:1,
            width:468,
            height:17,
            size:14,
            textAlign:"center"},
		{compId:"ID_txt01",
            x:56,
            y:125,
            width:183.15,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt02",
            x:250.95-5,
            y:125,
            width:183.15,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt03",
            x:53,
            y:162+10,
            width:185.15,
            height:17,
            size:11,
            textAlign:"center"},	
		{compId:"ID_txt04",
            x:248,
            y:162+10,
            width:181.15,
            height:17,
            size:11,
            textAlign:"center"},	
		{compId:"ID_txt05",
            x:146,
            y:208.45-5,
            width:183.15,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt06",
            x:53,
            y:234,
            width:183.15,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt07",
            x:248,
            y:234,
            width:183.15,
            height:17,
            size:11,
            textAlign:"center"},/**/
				
	]
		
				

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}


