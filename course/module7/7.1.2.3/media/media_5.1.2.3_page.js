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

    var slide_images = [{name:"../../../common/images/html/phone_IP.png",
						x:60,
						y:94,
						width:76.35,
						height:34.3,
						type:""},
						
					{name:"../../../common/images/html/computer_IP_based_Video_Man.png",
						x:304,
						y:70,
						width:66.95,
						height:59.6,
						type:""},
						
					{name:"greenArrow.png",
						x:115,
						y:131,
						width:89.55,
						height:71.2,
						type:""},
						
					{name:"orangeArrow.png",
						x:235,
						y:132,
						width:90.25,
						height:76.95,
						type:""},
						
					{name:"../../../common/images/html/computer.png",
						x:186,
						y:196,
						width:66.95,
						height:55.5,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_txt01",
							x:151,
							y:95.8, 
							width:118.5,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt02",
							x:384,
							y:105.8,
							width:100.5,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt03",
							x:7,
							y:185.3-15, 
							width:110.5,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt04",
							x:320,
							y:185.3-15, 
							width:110.5,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt05",
							x:38,
							y:290.3-3, 
							width:110.5,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt06",
							x:270,
							y:290.3-3, 
							width:110.5,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt07",
							x:83.3,
							y:289.3, 
							width:118.5,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt08",
							x:83.3,
							y:310.3, 
							width:118.5,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt09",
							x:245,
							y:289.3, 
							width:118.5,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt10",
							x:245,
							y:310.3, 
							width:118.5,
							height:17,
							size:11,
							textAlign:"left"}];
							
	var slide_graphics = [];
					
    var slide_object = {images:slide_images,
						texts:slide_texts,
						graphics:slide_graphics};

    return {templateType:template_type,
        slideObject:slide_object};

}

