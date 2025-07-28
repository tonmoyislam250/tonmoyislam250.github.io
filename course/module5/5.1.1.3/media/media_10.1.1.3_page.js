
loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");


function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"10_1_1_3.png",
						x:20.9,
						y:98,
						width:400.1,
						height:157,
						type:""}];	

    var slide_texts = [{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_txt02",
							x:82.8,
							y:181.85, 
							width:104,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt03",
							x:97.75,
							y:147.1, 
							width:75.5,
							height:21.6,
							size:11,
							textAlign:"center"},
							{compId:"ID_s1_txt04",
							x:284,
							y:147.1, 
							width:75.5,
							height:21.6,
							size:11,
							textAlign:"center"},
							{compId:"ID_s3_bubble01",
							x:42.65,
							y:28.95, 
							width:187,
							height:80,
							size:11,
							textAlign:"left"},
							{compId:"ID_s3_bubble02",
							x:284.95,
							y:29.75,
							width:141,
							height:80,
							size:11,
							textAlign:"left"},
							{compId:"ID_s3_bubble03",
							x:246.8,
							y:177.3,
							width:134.15,
							height:80,
							size:11,
							textAlign:"center"}];

		var slide_table = [{compId:"ID_s3_table",
							x:16,
							y:260, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"}];

		var slide_graphics = [];	

    var slide_object = {images:slide_images,
    					tables:slide_table,
        				texts:slide_texts};

    return {templateType:template_type,
       			 slideObject:slide_object};

}









