loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");


function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 770;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        //dropNormalSkinImage:"../../../common/images/drop_normal.png",
		dropNormalSkinImage:"drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

    var buttons = [{compId:"ID_ip1_DS",
             			x:10,
						y:271.75,
						width:132,
						height:47.5,
						size:11,			
						textAlign:"center"},
					{compId:"ID_ip2_DS",
						x:10,
						y:164,
						width:132,
						height:47.5,			
						size:11,
						textAlign:"center"},
					{compId:"ID_ip3_DS",
						x:10,
						y:326.2,
						width:132,
						height:47.5,
						color:"#45505B",
						size:11,
						textAlign:"center"},
					{compId:"ID_ip4_DS",
						x:10,
						y:110.4,
						width:132,
						height:47.5,
						size:11,			
						textAlign:"center"},
					{compId:"ID_ip5_DS",
						 x:10,
						y:217.3,
						width:132,
						height:47.5,
						size:11,			
						textAlign:"center"}];


    var dropBox = [{compId:"ID_drop01",
						x:194.5+7,
						y:83.4-20,
						width:132,
						height:47.5,
						size:11,
						answer:3,
						textAlign:"center"},
					{compId:"ID_drop02",
						x:194.5+7,
						y:142.85-20,
						width:132,
						height:47.5,
						size:11,
						answer:1,
						textAlign:"center"},
					{compId:"ID_drop03",
						x:194.5+7,
						y:202.3-20,
						width:132,
						height:47.5,
						size:11,
						answer:4,
						textAlign:"center"},
					{compId:"ID_drop04",
						x:194.5+7,
						y:261.75-20,
						width:132,
						height:47.5,
						size:11,
						answer:2,
						textAlign:"center"},
					{compId:"ID_drop05",
						x:194.5+7,
						y:321.2-20,
						width:132,
						height:47.5,
						size:11,
						answer:5,
						textAlign:"center"}];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [];
    var slide_texts = [{compId:"ID_inst",
							x:2,
							y:1, 
							width:160.9,
							height:17,
							size:11,							
							textAlign:"left"},
		
						{compId:"ID_txt01",
							x:341.35+7,
							y:92.9-13, 
							width:458.1,
							height:17,
							size:11,							
							textAlign:"left"},

						{compId:"ID_txt02",
							x:341.35+7,
							y:152.35-13, 
							width:458.1,
							height:17,
							size:11,							
							textAlign:"left"},

						{compId:"ID_txt03",
							x:341.35+7,
							y:211.8-13, 
							width:458.1,
							height:17,
							size:11,							
							textAlign:"left"},

					{compId:"ID_txt04",
							x:341.35+7,
							y:271.25-13, 
							width:458.1,
							height:17,
							size:11,							
							textAlign:"left"},
						
					{compId:"ID_txt05",
							x:341.35+7,
							y:330.7-13, 
							width:458.1,
							height:17,
							size:11,							
							textAlign:"left"},
					{compId:"ID_txt06",
							x:221.3+7,
							y:58.9-13, 
							width:93.8,
							height:17,
							size:11,							
							textAlign:"left"},
					{compId:"ID_txt07",
							x:504.3+7,
							y:58.9-13, 
							width:194.3,
							height:17,
							size:11,							
							textAlign:"left"},
					{compId:"ID_drag_header",
							x:-9,
							y:79.9, 
							width:163.3,
							height:17,
							size:11,							
							textAlign:"center"}];

    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_images = [{compId:"ID_image01",
							name:"bg.png",
							x:175+7,
							y:49.05-20,
							width:582,
							height:322.95,
							size:11,
							textAlign:"left"},
						{compId:"ID_image02",
							name:"dragbg.png",
							x:-10,
							y:100.05,
							width:164.05,
							height:287.9,
							size:11,
							textAlign:"left"}];


   var submit_buttons = [{compId:"ID_CHECK",
							x:578,
							y:377-20,
							width:90,
							height:21,
							size:11,
							normalSkinImage:"../../../common/images/btn_normal.png",
							textAlign:"center"},
						{compId:"ID_RESET",
							x:693,
							y:377-20,
							width:90,
							height:21,
							size:11,
							normalSkinImage:"../../../common/images/btn_normal.png",
							textAlign:"center"}];
							
	var feedbackObj = [{compId:"ID_FEEDBACK",
							x:2-1,
							y:120,
							width:182,
							height:10,
							size:11,
							image:"../../../common/images/feedback-new.png",
							textAlign:"left"}];
							
    var instobj = {ansType:""};
    
    return {templateType:template_type,
        textObject:commonTexts,
        buttonObject:buttonObject,
        slideObject:slide_texts,
        slideImages:slide_images,
        dropObject:dropObject,
        submitObject:submit_buttons,
        feedbackObj:feedbackObj,
		instobj:instobj
    };

}


