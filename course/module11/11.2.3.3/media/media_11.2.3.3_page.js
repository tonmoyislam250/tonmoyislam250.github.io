//loadScript("../../../common/scripts/templates/slide/PopOverSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "POP_OVER_SLIDE";

    var slide_images = [{name:"11_2_3_3.jpg",
						x:40,
						y:5,
						width:371.1,
						height:105.85,
						type:""},
						{name:"11_2_3_3A.jpg",
						x:40,
						y:130.8,
						width:371.1,
						height:105.85,
						type:""},
						{name:"textbox.jpg",x:0,y:270,width:450.05,height:131}];
	var graphic_slide = [];
    var slide_texts = [{compId:"ID_txt01",
							x:51.35,
							y:113.85, 
							width:156,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt02",
							x:254.35,
							y:113.85, 
							width:156,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							{compId:"ID_txt03",
							x:49.35,
							y:241.85, 
							width:156,
							height:17,
							size:11,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt04",
							x:254.35,
							y:241.85, 
							width:156,
							height:17,
							size:11,
							textAlign:"center",
							expand:"left+right"},
							];
							
	var hotSpots = [{hotImage:"",
							div:[],
							x:40,
							y:5,
							width:155.3,
							height:105,
							popupImage:{name:"glowforclip.png",x:32,y:-3,width:180,height:125},
							popupText:{compId:"ID_titleTxt01",x:20,y:275, width:397.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_bodyTxt01",x:25,y:305, width:422.1,height:65.05,size:11,textAlign:"left"}},
						{hotImage:"",
							div:[],
							x:240,
							y:5,
							width:159,
							height:105,
							popupImage:{name:"glowforclip.png",x:234,y:-3,width:180,height:125},
							popupText:{compId:"ID_titleTxt03",x:20,y:275, width:397.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_bodyTxt03",x:25,y:305, width:422.1,height:65.05,size:11,textAlign:"left"}},
						{hotImage:"",
							div:[],
							x:40,
							y:130.8,
							width:159,
							height:105,
							popupImage:{name:"glowforclip.png",x:32,y:124,width:180,height:125},
							popupText:{compId:"ID_titleTxt02",x:20,y:275, width:397.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_bodyTxt02",x:25,y:305, width:422.1,height:65.05,size:11,textAlign:"left"}},
						{hotImage:"",
							div:[],
							x:240,
							y:130.8,
							width:159,
							height:105,
							popupImage:{name:"glowforclip.png",x:234,y:124,width:180,height:125},
							popupText:{compId:"ID_titleTxt04",x:20,y:275, width:397.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_bodyTxt04",x:25,y:305, width:422.1,height:65.05,size:11,textAlign:"left"}}]
							
	

    var slide_object = {images:slide_images,
		selected:0,
		hotSpots:hotSpots,
        texts:slide_texts,
		graphics:graphic_slide};

    return {templateType:template_type,
        slideObject:slide_object};

}