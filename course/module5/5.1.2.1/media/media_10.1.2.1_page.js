
loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/UniMultiBroadcastSlide.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;


function getData()
{
	var template_type = "MULTI_BAR";
	
	var commonTexts = [];							
	var commonImages = [];							
	var graphics_slide = [];	
	
	var slide_1_type = "INTERACTIVE";
    var slide_1_object = {type:"CUSTOM",
					images:[],
       			    texts:[]};
				
			
	var slide_2_type = "TABLE";
	
	var slide_2_tables = [{compId:"ID_s2_table01",
							x:0,
							y:122, 
							width:420,
							height:300},
							{compId:"ID_s2_table02",
							x:0,
							y:260, 
							width:420,
							height:300}];	
	
	
	
	var slide_2_images = [{name:"arrow.png",
							x:411,
							y:89,
							width:26.75,
							height:255.9,
							type:"none"}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:13,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:258+10,
							y:76, 
							width:150,
							height:23,
							size:11,
							textAlign:"center"},
							]	
			
			var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							tables:slide_2_tables};
			
			
			var slides = [{templateType:slide_1_type,x:0, y:0,slideObject:slide_1_object},slide_2_object];
				

    return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			graphics:graphics_slide,
			slideObject:slides};
}

/*


loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/UniMultiBroadcastSlide.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;


function getData()
{
	
	
	var template_type = "INTERACTIVE";
    var slide_object = {type:"CUSTOM",
					images:[],
       			texts:[]};

    return {templateType:template_type,
			slideObject:slide_object};

}

*/