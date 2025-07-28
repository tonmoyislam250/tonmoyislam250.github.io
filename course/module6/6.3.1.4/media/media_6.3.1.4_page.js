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

    var slide_images = [{name:"6_3_1_4.png",
						x:10,
						y:40,
						width:450,
						height:320,
						type:""},
		];

    var slide_texts = [{compId:"ID_txt01",
							x:30+27-34,
							y:144.75+226, 
							width:288.6,
							height:17,
							size:11,
							textAlign:"left"}];
							
	var hotSpots = [{hotImage:"",
							div:[],
							x:10,
							y:40,
							width:114,
							height:204,
							popupImage:{name:"b1_1.png",x:10,y:40,width:117,height:204},
							popupText:{compId:"ID_bubble01",x:100.3,y:79.35, width:130,height:36,size:11,textAlign:"center"}},
							/*b2*/
							{hotImage:"",
							div:[],
							x:134,
							y:42,
							width:112,
							height:125,
							popupImage:{name:"b2.png",x:134,y:42,width:143,height:125},
							popupText:{compId:"ID_bubble02",x:240.3,y:79,width:150.1,height:60,size:11,textAlign:"left"}},
							/*b3*/							
							{hotImage:"",
							div:[],
							x:354,
							y:42,
							width:103,
							height:125,
							popupImage:{name:"b3.png",x:354,y:42,width:105,height:126},
							popupText:{compId:"ID_bubble03",x:228,y:100, width:192.1,height:65.05,size:11,textAlign:"left"}},
							/*b4*/							
							{hotImage:"",
							div:[],
							x:13.5,
							y:287.6,
							width:86,
							height:73,
							popupImage:{name:"b4.png",x:15,y:285,width:86,height:73},
							popupText:{compId:"ID_bubble04",x:40,y:242, width:120,height:36,size:11,textAlign:"center"}},
							/*b5*/							
							{hotImage:"",
							div:[],
							x:182.5,
							y:216,
							width:63,
							height:73,
							popupImage:{name:"b5.png",x:182.5,y:216,width:63,height:73},
							popupText:{compId:"ID_bubble05",x:130,y:83.45, width:140.1,height:65.05,size:11,textAlign:"left"}},
							/*b6*/							
							{hotImage:"",
							div:[],
							x:254.5,
							y:197,
							width:48,
							height:43,
							popupImage:{name:"b6.png",x:254.5,y:197,width:48,height:43},
							popupText:{compId:"ID_bubble06",x:210,y:92, width:142.1,height:65.05,size:11,textAlign:"left"}},
							/*b7*/							
							{hotImage:"",
							div:[],
							x:314,
							y:218,
							width:44,
							height:40,
							popupImage:{name:"b7.png",x:314,y:218,width:44,height:40},
							popupText:{compId:"ID_bubble07",x:345,y:175, width:130,height:36,size:11,textAlign:"center"}},
							/*b8*/							
							{hotImage:"",
							div:[],
							x:277,
							y:260,
							width:184,
							height:100,
							popupImage:{name:"b8.png",x:276,y:260,width:184,height:100},
							popupText:{compId:"ID_bubble08",x:90,y:245, width:222.1,height:95.05,size:11,textAlign:"left"}},
							];
							
	

    var slide_object = {images:slide_images,
		hotSpots:hotSpots,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}