//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"1_1_1_2.jpg",
							x:5.45,
							y:135.1,
							width:423.35,
							height:217.95,
							type:""}];

    var slide_texts = [{compId:"ID_txt01",
							x:1.15,
							y:29.5, 
							width:111,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
						{compId:"ID_txt02",
							x:119.7,
							y:29.5, 
							width:111,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
						{compId:"ID_txt03",
							x:238.25,
							y:29.5, 
							width:111,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
						{compId:"ID_txt04",
							x:356.85,
							y:29.5, 
							width:111,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
						{compId:"ID_txt05",
							x:6.55,
							y:251.5, 
							width:106,
							height:17,
							size:11,
							color:"#66C0E5",
							textAlign:"center",
							expand:"up"},
						{compId:"ID_txt06",
							x:126.25,
							y:229.95, 
							width:66.05,
							height:17,
							size:11,
							color:"#66C0E5",
							textAlign:"center",
							expand:"up"},
						{compId:"ID_txt07",
							x:133.65,
							y:194.85, 
							width:106,
							height:17,
							size:11,
							color:"#067EB2",
							textAlign:"center",
							expand:"up"},
						{compId:"ID_txt08",
							x:255.45,
							y:174, 
							width:66.05,
							height:17,
							size:11,
							color:"#067EB2",
							textAlign:"center",
							expand:"up"},
						{compId:"ID_txt09",
							x:258.65,
							y:139.45, 
							width:106,
							height:17,
							size:11,
							color:"#164F6A",
							textAlign:"center",
							expand:"up"},
						
						{compId:"ID_txt10",
							x:381.75,
							y:119, 
							width:106,
							height:17,
							size:11,
							color:"#164F6A",
							textAlign:"center",
							expand:"up"},
						
						{compId:"ID_txt11",
							x:10.95,
							y:350.4, 
							width:47,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
						
						{compId:"ID_txt12",
							x:133.95,
							y:350.4, 
							width:47,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
						
						{compId:"ID_txt13",
							x:259.95,
							y:350.4, 
							width:47,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
						
						{compId:"ID_txt14",
							x:376.95,
							y:350.4, 
							width:47,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
