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

    var slide_images = [
						{name:"11_1_1_4.png",
						x:4.4,
						y:53.4,
						width:263,
						height:280,
						type:""}];
	var graphic_slide = [];
    var slide_texts = [{compId:"ID_title",
							x:23,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_inst",
							x:3.35,
							y:375.8, 
							width:458.85,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up",
							},
							];
							
	var hotSpots = [{hotImage:"",
							div:[],
							x:55,
							y:120,
							width:149,
							height:92,
							closeBtn:{x:437,y:94},
							popupImage:{name:"lineShadow.png",x:27.8,y:118,width:195,height:115},
							popupImage2:{name:"textbox.jpg",x:249.8,y:92,width:217,height:215},
							popupText:{compId:"ID_btn02_header",x:305.8-34,y:98, width:182.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_btn02_body",x:305-28,y:128, width:169.1,height:65.05,size:11,textAlign:"left"}},
							{hotImage:"",
							div:[],
							x:40,
							y:85,
							width:40,
							height:58,
							closeBtn:{x:437,y:94},
							popupImage:{name:"server.png",x:38.8,y:84,width:185,height:121},
							popupImage2:{name:"textbox.jpg",x:249.8,y:92,width:217,height:215},
							popupText:{compId:"ID_btn01_header",x:305.8-34,y:98, width:182.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_btn01_body",x:305-28,y:128, width:165.1,height:65.05,size:11,textAlign:"left"}},
							{hotImage:"",
							div:[],
							x:105,
							y:85,
							width:40,
							height:58,
							closeBtn:{x:437,y:94},
							popupImage:{name:"server.png",x:38.8,y:84,width:185,height:121},
							popupImage2:{name:"textbox.jpg",x:249.8,y:92,width:217,height:215},
							popupText:{compId:"ID_btn01_header",x:305.8-34,y:98, width:182.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_btn01_body",x:305-28,y:128, width:165.1,height:65.05,size:11,textAlign:"left"}},
							{hotImage:"",
							div:[],
							x:175,
							y:85,
							width:40,
							height:58,
							closeBtn:{x:437,y:94},
							popupImage:{name:"server.png",x:38.8,y:84,width:185,height:121},
							popupImage2:{name:"textbox.jpg",x:249.8,y:92,width:217,height:215},
							popupText:{compId:"ID_btn01_header",x:305.8-34,y:98, width:182.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_btn01_body",x:305-28,y:128, width:165.1,height:65.05,size:11,textAlign:"left"}},
							{hotImage:"",
							div:[],
							x:22,
							y:190,
							width:70,
							height:45,
							closeBtn:{x:437,y:94},
							popupImage:{name:"switch.png",x:15.8,y:188,width:227,height:51},
							popupImage2:{name:"textbox.jpg",x:249.8,y:92,width:217,height:215},
							popupText:{compId:"ID_btn03_header",x:305.8-34,y:98, width:182.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_btn03_body",x:305-28,y:128, width:169.1,height:65.05,size:11,textAlign:"left"}},
							{hotImage:"",
							div:[],
							x:158,
							y:190,
							width:70,
							height:45,
							closeBtn:{x:437,y:94},
							popupImage:{name:"switch.png",x:15.8,y:188,width:227,height:51},
							popupImage2:{name:"textbox.jpg",x:249.8,y:92,width:217,height:215},
							popupText:{compId:"ID_btn03_header",x:305.8-34,y:98, width:182.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_btn03_body",x:305-28,y:128, width:169.1,height:65.05,size:11,textAlign:"left"}},
							{hotImage:"",
							div:[],
							x:28,
							y:254,
							width:55,
							height:48,
							closeBtn:{x:437,y:94},
							popupImage:{name:"router.png",x:28.8,y:255,width:200,height:73},
							popupImage2:{name:"textbox.jpg",x:249.8,y:92,width:217,height:215},
							popupText:{compId:"ID_btn04_header",x:305.8-34,y:98, width:182.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_btn04_body",x:305-28,y:128, width:169.1,height:65.05,size:11,textAlign:"left"}},
							{hotImage:"",
							div:[],
							x:165,
							y:254,
							width:55,
							height:48,
							closeBtn:{x:437,y:94},
							popupImage:{name:"router.png",x:28.8,y:255,width:200,height:73},
							popupImage2:{name:"textbox.jpg",x:249.8,y:92,width:217,height:215},
							popupText:{compId:"ID_btn04_header",x:305.8-34,y:98, width:182.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_btn04_body",x:305-28,y:128, width:169.1,height:65.05,size:11,textAlign:"left"}},
							
							]
							
	

    var slide_object = {images:slide_images,
		hotSpots:hotSpots,
        texts:slide_texts,
		graphics:graphic_slide};

    return {templateType:template_type,
        slideObject:slide_object};

}