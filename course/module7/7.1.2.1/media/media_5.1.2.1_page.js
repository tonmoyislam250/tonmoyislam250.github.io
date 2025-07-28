//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5_1_2_1.jpg",
						x:200,
						y:120,
						width:137.15,
						height:100,
						type:""},
						{name:"5_1_2_1B.jpg",
						x:350.3,
						y:146.85,
						width:53.8,
						height:89.85,
						type:"STD"},
						{name:"5_1_2_1A.jpg",
						x:175,
						y:55,
						width:78.75,
						height:59.05,
						type:"STD"},
						{name:"5_1_2_1A.jpg",
						x:265,
						y:55,
						width:78.75,
						height:59.05,
						type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt01",
							x:41,
							y:160.9, 
							width:154.75,
							height:21.6,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt02",
							x:67-24,
							y:143, 
							width:108.5,
							height:14.55,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt03",
							x:343,
							y:128, 
							width:80.35,
							height:14.55,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_txt04",
							x:180.9+12-37,
							y:33.45+5, 
							width:230.95,
							height:14.55,
							size:11,
							textAlign:"center",
							expand:"up"},
							/*{compId:"ID_txt05",
							x:370.25+46,
							y:135.9+8, 
							width:60.95,
							height:14.55,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt06",
							x:305+70,
							y:222.7, 
							width:89.45,
							height:19.25,
							size:11,
							textAlign:"left",
							expand:"up"},*/
							{compId:"ID_txt08",
							x:41,
							y:290.9, 
							width:170.1,
							height:19.25,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt10",
							x:41,
							y:330, 
							width:170.1,
							height:19.25,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt09",
							x:298,
							y:290, 
							width:170.1,
							height:24,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt11",
							x:298,
							y:364, 
							width:165.1,
							height:19,
							size:11,
							textAlign:"left",
							expand:"up"}];
							
	var slide_graphics = [];
								
	
    var slide_object = {images:slide_images,texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

