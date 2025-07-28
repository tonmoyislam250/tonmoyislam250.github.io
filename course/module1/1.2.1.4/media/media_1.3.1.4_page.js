//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"1.3.1.4A.jpg",
						 x:120,
						 y:20,
						 width:170,
						 height:106,
						 type:""},

						{name:"1.3.1.4B.jpg",
						 x:290,
						 y:20,
						width:170,
						 height:106,
						 type:""},

						{name:"1.3.1.4C.jpg",
						 x:120,
						 y:150,
						width:170,
						 height:106,
						 type:""},

						{name:"1.3.1.4D.jpg",
						 x:290,
						 y:150,
						 width:170,
						 height:106,
						 type:""},

						{name:"1.3.1.4E.jpg",
						 x:120,
						 y:280,
						 width:170,
						 height:106,
						 type:""},

						{name:"1.3.1.4F.jpg",
						 x:290,
						 y:280,
						 width:170,
						 height:106,
						 type:""}];

	var slide_graphics = [{	x:10,
							y:10, 
							width:450,
							height:120.05,
							color:"#E6EBA8",
							corner:5},
		
							{x:10,
							y:140, 
							width:450,	
							height:120.05,
							color:"#E6EBA8",
							corner:5},
		
							{x:10,
							y:270, 
							width:450,
							height:120.05,
							color:"#E6EBA8",
							corner:5}];	

   var slide_texts = [{compId:"ID_txt01",
							x:26,
							y:61.5, 
							width:100, 
							height:15,
							size:12,
							textAlign:"left"},

						{compId:"ID_txt02",
							x:26,
							y:191.5, 
							width:100, 
							height:15,
							size:12,
							textAlign:"left"},
							
						{compId:"ID_txt03",
							x:26,
							y:321.5, 
							width:100, 
							height:15,
							size:12,
							textAlign:"left"}]


    var slide_object = {images:slide_images,graphics:slide_graphics,texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
