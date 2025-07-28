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

    var buttons = [{compId:"ID_drag01",
            x:120.5,
            y:128.4,
            width:140,
            height:36,
            size:11,
			
            textAlign:"center"},
       {compId:"ID_drag02",
            x:120.5,
            y:176.6,
            width:140,
            height:36,
            size:11,
			
            textAlign:"center"},
		{compId:"ID_drag03",
            x:120.5,
            y:224.8,
            width:140,
            height:36,
            size:11,
			
            textAlign:"center"},
		{compId:"ID_drag04",
            x:120.5,
            y:273,
            width:140,
            height:36,
            size:11,
			
            textAlign:"center"},
		{compId:"ID_drag05",
            x:120.5,
            y:321.2,
            width:140,
            height:36,
            size:11,
			
            textAlign:"center"},];
		


    var dropBox = [{compId:"ip1_dt",
        x:287.5,
        y:128.4,
        width:140,
        height:36,
        size:11,
        answer:4,
        textAlign:"center"},
       {compId:"ip2_dt",
         x:287.5,
        y:176.6,
        width:140,
        height:36,
        size:11,
        answer:2,
        textAlign:"center"},
       {compId:"ip3_dt",
        x:287.5,
        y:224.8,
        width:140,
        height:36,
        size:11,
        answer:3,
        textAlign:"center"},
		{compId:"ip4_dt",
         x:287.5,
        y:273,
        width:140,
        height:36,
        size:11,
        answer:5,
        textAlign:"center"},
		{compId:"ip5_dt",
		 x:287.5,
        y:321.2,
        width:140,
        height:36,
        size:11,
        answer:1,
        textAlign:"center"}];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [];
    var slide_texts = [{compId:"ID_inst",
							x:2,
							y:1, 
							width:255.9,
							height:17,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt01",
							x:438.35,
							y:137.9, 
							width:338.1,
							height:17,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt02",
							x:438.35,
							y:186.1, 
							width:338.1,
							height:17,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt03",
							x:438.35,
							y:234.3, 
							width:338.1,
							height:17,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt04",
							x:438.35,
							y:275.5, 
							width:338.1,
							height:17,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt05",
							x:438.35,
							y:330.7, 
							width:338.1,
							height:17,
							size:11,							
							textAlign:"left"},
		
						{compId:"ID_txt06",
							x:287.5,
							y:106.4, 
							width:141,
							height:17,
							size:11,							
							textAlign:"center"},

						{compId:"ID_txt07",
							x:485.4,
							y:106.4, 
							width:192,
							height:17,
							size:11,							
							textAlign:"center"}];

    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_images = [{compId:"ID_image01",
        name:"bg.png",
        x:267,
        y:93.1,
        width:489,
        height:269.9,
        size:11,
        textAlign:"left"},
		];


   var submit_buttons = [{compId:"ID_CHECK",
        x:607-6,
        y:366,
        width:90,
        height:21,
        size:11,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_RESET",
          x:684-6,
          y:366,
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


