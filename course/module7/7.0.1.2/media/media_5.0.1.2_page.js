
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5_2_1_2_bg.png",
							x:5.95,
							y:0,
							width:463,
							height:396,
							type:""},
							{name:"5_0_1_2B.jpg",
							x:84.3,
							y:22.7,
							width:42.5,
							height:70.95,
							type:"STD"},
							{name:"5_0_1_2A.jpg",
							x:139.45,
							y:34.55,
							width:62.2,
							height:46.65,
							type:"STD"},
							{name:"5_0_1_2A.jpg",
							x:208.15,
							y:49.2,
							width:62.2,
							height:46.65,
							type:"STD"},];

    var slide_texts = [		{compId:"ID_s1_txt03",
							x:15.45,
							y:25, 
							width:63.45,
							height:11.1,
							size:9,
							color:'##393536',
							textAlign:"right",
							expand:"down"},
							{compId:"ID_s1_txt04",
							x:147.5,
							y:21.25, 
							width:115.3,
							height:11.1,
							size:9,
							color:'##393536',
							textAlign:"right",
							expand:"down"},
							{compId:"ID_s1_txt05",
							x:308,
							y:101.6, 
							width:63.4,
							height:11.1,
							size:9,
							color:'##393536',
							textAlign:"left",
							expand:"up"},
							{compId:"ID_s1_txt06",
							x:258,
							y:170, 
							width:106.2,
							height:11.5,
							size:9,
							color:'##393536',
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt07",
							x:112,
							y:212, 
							width:65.1,
							height:11.1,
							size:9,
							color:'##393536',
							textAlign:"center",
							expand:"down"},
							{compId:"ID_s1_txt02",
							x:26,
							y:111.85, 
							width:85.7,
							height:11.5,
							size:9,
							color:'##393536',
							textAlign:"left",
							expand:"up"},
							{compId:"ID_s1_txt01",
							x:25,
							y:127.65, 
							width:110,
							height:17.05,
							size:8,
							color:'##393536',
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt01",
							x:137,
							y:265, 
							width:327.1,
							height:139,
							size:11,
							color:'##393536',
							textAlign:"left",
							expand:"down"}
							];
							 
	var slide_graphics =[];

    var slide_object = {images:slide_images,
                        texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);