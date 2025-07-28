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

    var slide_images = [{name:"media_9.2.4.2.jpg",
							x:9,
							y:72, 
							width:433.95,
							height:211,
							type:""}];
	var graphic_slide = [];
    var slide_texts = [{compId:"ID_title",
							x:0,
							y:2,
							width:470,
							height:17,
							size:14,
							textAlign:"center"},
					    {compId:"ID_inst",
							x:20,
							y:380.8, 
							width:460,
							height:17,
							size:11,
							textAlign:"left"},
						{compId:"ID_txt05",
							x:321+42-19,
							y:96.85+35,
							width:76,
							height:17,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt04",
							x:245+40-11,
							y:96.85+35,
							width:76,
							height:17,
							size:11,
							textAlign:"center"},

						{compId:"ID_txt07",
							x:25+37,
							y:96.85+7,
							width:222,
							height:55,
							size:11,
							textAlign:"center"},
						{compId:"ID_txt08",
							x:17,
							y:166,
							width:74,
							height:17,
							size:11,
							color:'#FFFFFF',
							textAlign:"center"},
					  {compId:"ID_txt01",
							x:18+50,
							y:167-9,
							width:66,
							height:17,
							size:11,
							color:'#FFFFFF',
							textAlign:"center"},
					  {compId:"ID_txt02",
							x:94+49-4,
							y:168-10,
							width:67,
							height:17,
							size:11,
							color:'#FFFFFF',
							textAlign:"center"},
					 {compId:"ID_txt03",
							x:168+45-6,
							y:166-10+2,
							width:68,
							height:17,
							size:11,
							color:'#FFFFFF',
							textAlign:"center"}
							];
							
	var hotSpots = [		{hotImage:"",
							div:["ID_txt01"],
							x:53.55,y:134,width:74,height:60,
							closeBtn:{x:442,y:234.5},
							hideText:[],
							greyText:[],
							grayBG:{},
							popupImage2:{},
							popupImage:{name:"textbox.jpg",
							x:5,
							y:230, 
							width:470,
							height:150,},
							popupText:{compId:"ID_titleTxt01",x:31,y:238, width:258.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_bodyTxt01",x:34,y:74+190, width:411.1,height:65.05,size:11,textAlign:"left"}},
							
							{hotImage:"",
							div:["ID_txt03"],
							x:198,y:134,width:70,height:60,
							closeBtn:{x:442,y:234.5},
							hideText:[],
							greyText:[],
							grayBG:{},
							popupImage2:{},
							popupImage:{name:"textbox.jpg",
							x:5,
							y:230, 
							width:470,
							height:150,},
							popupText:{compId:"ID_titleTxt03",x:31,y:238, width:258.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_bodyTxt03",x:34,y:74+190, width:411.1,height:65.05,size:11,textAlign:"left"}},
							{hotImage:"",
							div:["ID_txt02"],
							x:127,y:134,width:70.5,height:60,
							closeBtn:{x:442,y:234.5},
							hideText:[],
							greyText:[],
							grayBG:{},
							popupImage2:{},
							popupImage:{name:"textbox.jpg",
							x:5,
							y:230, 
							width:470,
							height:150,},
							popupText:{compId:"ID_titleTxt02",x:31,y:238, width:258.1,height:17,size:11,textAlign:"left"},
							popupText2:{compId:"ID_bodyTxt02",x:34,y:74+190, width:411.1,height:65.05,size:11,textAlign:"left"}},
							]
							
	

    var slide_object = {images:slide_images,
		hotSpots:hotSpots,
        texts:slide_texts,
		graphics:graphic_slide};

    return {templateType:template_type,
        slideObject:slide_object};

}