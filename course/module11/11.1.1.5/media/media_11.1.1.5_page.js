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

    var slide_images = [{name:"11_1_1_5.png",
							x:0,
							y:30,
							width:470,
							height:370,
							type:""}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2,
							width:460,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							
							{compId:"ID_txt01",
							x:336.3+14,
							y:187.85+16,
							width:123,
							height:17,
							size:11,
							textAlign:"center"},
							
					{compId:"ID_txt02",
							x:338.4+10,
							y:137.35-10,
							width:123,
							height:17,
							size:11,
							textAlign:"center"},
							
					{compId:"ID_txt03",
							x:9.35,
							y:193.85,
							width:121,
							height:17,
							size:11,
							color:"#FFFFFF",
							textAlign:"center"},
							
												
					{compId:"ID_txt06",
							x:148.55+10,
							y:109.95+5,
							width:65,
							height:17,
							size:10,
							color:"#FFFFFF",
							textAlign:"center"},
							
					{compId:"ID_txt07",
							x:241.15+8,
							y:109.95+7,
							width:65,
							height:17,
							size:10,
							color:"#FFFFFF",
							textAlign:"center"},
							
					{compId:"ID_txt08",
							x:148.55+10,
							y:172.75+7,
							width:65,
							height:17,
							size:10,
							color:"#FFFFFF",
							textAlign:"center"},
							
					{compId:"ID_txt09",
							x:241.15+8,
							y:172.75+1,
							width:65,
							height:17,
							size:10,
							color:"#FFFFFF",
							textAlign:"center"},
							
					{compId:"ID_txt10",
							x:148.55+10,
							y:223.85+9+6,
							width:65,
							height:17,
							size:10,
							color:"#FFFFFF",
							textAlign:"center"},
							
					{compId:"ID_txt11",
							x:241.15+8,
							y:235.65+3,
							width:65,
							height:17,
							size:10,
							color:"#FFFFFF",
							textAlign:"center"},
							
					{compId:"ID_txt12",
							x:148.55+10,
							y:298.55+8,
							width:65,
							height:17,
							size:10,
							color:"#FFFFFF",
							textAlign:"center"},
							
					{compId:"ID_txt13",
							x:241.15+8,
							y:298.55+8,
							width:65,
							height:17,
							size:10,
							color:"#FFFFFF",
							textAlign:"center"},
							
					{compId:"ID_txt14",
							x:10,
							y:378+12,
							width:430,
							height:17,
							size:11,
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        				texts:slide_texts};

    return {templateType:template_type,
       			 slideObject:slide_object};

}
