loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");


function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 770;
var STAGE_HEIGHT = 388;

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
             x:40.5,
            y:128.4,
            width:171,
            height:36,
            size:11,
			
            textAlign:"center"},
       {compId:"ID_ip2_DS",
            x:40.5,
            y:176.6,
            width:171,
            height:36,
            size:11,
			
            textAlign:"center"},
		{compId:"ID_ip3_DS",
            x:40.5,
            y:224.8,
            width:171,
            height:36,
            size:11,
			
            textAlign:"center"},
		{compId:"ID_ip4_DS",
            x:40.5,
            y:273,
            width:171,
            height:36,
            size:11,
			
            textAlign:"center"},
		{compId:"ID_ip5_DS",
            x:40.5,
            y:321.2,
            width:171,
            height:36,
            size:11,
			
            textAlign:"center"},];
		


    var dropBox = [{compId:"ip1_dt",
        x:238.5+15,
        y:128.4-70,
        width:171,
        height:36,
        size:11,
        answer:1,
        textAlign:"center"},
       {compId:"ip2_dt",
         x:238.5+15,
        y:176.6-70,
        width:171,
        height:36,
        size:11,
        answer:4,
        textAlign:"center"},
       {compId:"ip3_dt",
        x:238.5+15,
        y:224.8-70,
        width:171,
        height:36,
        size:11,
        answer:3,
        textAlign:"center"},
		{compId:"ip4_dt",
         x:238.5+15,
        y:273-70,
        width:171,
        height:36,
        size:11,
        answer:5,
        textAlign:"center"},
		{compId:"ip5_dt",
		 x:238.5+15,
        y:321.2-70,
        width:171,
        height:36,
        size:11,
        answer:2,
        textAlign:"center"}];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [];
    var slide_texts = [{compId:"ID_inst",
							x:2,
							y:1, 
							width:225.9,
							height:17,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt01",
							x:414.35+17,
							y:137.9-70, 
							width:328.1,
							height:17,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt02",
							x:414.35+17,
							y:186.1-70, 
							width:338.1,
							height:17,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt03",
							x:414.35+17,
							y:234.3-70, 
							width:338.1,
							height:17,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt04",
							x:414.35+17,
							y:275.5-70, 
							width:338.1,
							height:17,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt05",
							x:414.35+17,
							y:330.7-70, 
							width:338.1,
							height:17,
							size:11,							
							textAlign:"left"},
		
						{compId:"ID_txt06",
							x:234.5+17,
							y:34.4, 
							width:171,
							height:17,
							size:11,							
							textAlign:"center"},

						{compId:"ID_txt07",
							x:416.3+17+72,
							y:34.4, 
							width:171,
							height:17,
							size:11,							
							textAlign:"center"}];

    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_images = [{compId:"ID_image01",
        name:"bg.png",
        x:235,
        y:25,
        width:539,
        height:269.9,
        size:11,
        textAlign:"left"},
		];


   var submit_buttons = [{compId:"ID_CHECK",
        x:607,
        y:356,
        width:90,
        height:21,
        size:11,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_RESET",
          x:684,
          y:356,
			width:90,
			height:21,
			size:11,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}];
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:-1,
        y:168,
        width:172,
        height:10,
        size:12,
        image:"../../../common/images/feedback.png",
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


