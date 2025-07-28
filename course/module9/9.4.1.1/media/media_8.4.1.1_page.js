function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"8_4_1_1_bg.png",
							x:6.95,
							y:7,
							width:455,
							height:386.2,
							type:""}];

    var slide_texts = [{compId:"ID_s2_txt08",
							x:9,
							y:24, 
							width:117.2,
							height:13.55,
							size:8,
							color:'#393536',
							textAlign:"center",
							Expand:"down"},
							{compId:"ID_s2_txt01",
							x:186.1,
							y:55.05, 
							width:48.6,
							height:13.55,
							size:8,
							color:'#393536',
							textAlign:"center",
							Expand:"up+down"},
							{compId:"ID_s2_txt02",
							x:220.7,
							y:97.2, 
							width:48.6,
							height:13.55,
							size:8,
							color:'#393536',
							textAlign:"center",
							Expand:"up+down"},
							{compId:"ID_s2_txt03",
							x:220.7,
							y:139.55, 
							width:48.6,
							height:13.55,
							size:8,
							color:'#393536',
							textAlign:"center",
							Expand:"up+down"},
							{compId:"ID_s2_txt04",
							x:188.1,
							y:183.2, 
							width:48.6,
							height:13.55,
							size:8,
							color:'#393536',
							textAlign:"center",
							Expand:"up+down"},
							{compId:"ID_s2_txt05",
							x:136.85,
							y:183.2, 
							width:48.6,
							height:13.55,
							size:8,
							color:'#393536',
							textAlign:"center",
							Expand:"up+down"},
							{compId:"ID_s2_txt06",
							x:100.6,
							y:139.55, 
							width:48.6,
							height:13.55,
							size:8,
							color:'#393536',
							textAlign:"center",
							Expand:"up+down"},
							{compId:"ID_s2_txt07",
							x:100.6,
							y:97.2, 
							width:48.6,
							height:13.55,
							size:8,
							color:'#393536',
							textAlign:"center",
							Expand:"up+down"},
							{compId:"ID_footer",
							x:122.35,
							y:254, 
							width:327.1,
							height:135.95,
							size:11,
							color:'#393536',
							textAlign:"left",
							Expand:"up+down"}							
							];
							 
	var slide_graphics =[];

    var slide_object = {images:slide_images,
                        texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);