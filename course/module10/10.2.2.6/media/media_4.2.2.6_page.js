//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"4_2_2_6.png",
						 x:2.3,
						 y:26.25,
						 width:465.45,
						 height:362,
						 type:""}];

	var slide_graphics = [];	

   var slide_texts = [{compId:"ID_txt01",
							x:253.85,
							y:84.85, 
							width:50, 
							height:17,
							size:11,
							textAlign:"left"},

						{compId:"ID_txt02",
							x:205.85,
							y:94.2, 
							width:32.7, 
							height:10.9,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt03",
							x:264.2,
							y:113.75, 
							width:47, 
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:328.6,
							y:109.95, 
							width:62.45, 
							height:7.15,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_txt05",
							x:369,
							y:52.6-17, 
							width:87.2, 
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt06",
							x:116.9-3,
							y:103.75+20, 
							width:78.7, 
							height:17,
							size:11,
							textAlign:"right",
							expand:"up"},
							{compId:"ID_txt07",
							x:110.55,
							y:179.5, 
							width:125.7, 
							height:11.5,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt08",
							x:133,
							y:366.75, 
							width:75.25, 
							height:11.5,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt09",
							x:329,
							y:348.45, 
							width:112.25, 
							height:11.5,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt10",
							x:394.75+18,
							y:241-43, 
							width:56.75, 
							height:11.5,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt11",
							x:194.75+6,
							y:266+5, 
							width:75.25, 
							height:11.5,
							size:11,
							textAlign:"right",
							expand:"up+down"},
							{compId:"ID_txt12",
							x:65.5,
							y:248.45, 
							width:112.25, 
							height:11.5,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt13",
							x:381.75,
							y:133.65+16, 
							width:96.15, 
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_txt14",
							x:15.3,
							y:120.25, 
							width:90.7, 
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"}
							]


    var slide_object = {images:slide_images,graphics:slide_graphics,texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
