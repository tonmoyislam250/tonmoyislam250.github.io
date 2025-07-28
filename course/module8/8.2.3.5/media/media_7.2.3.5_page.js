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
             x:338.5,
            y:306.35,
            width:100,
            height:36,
            size:11,
			tag:1,			
            textAlign:"center"},
        {compId:"ID_ip2_DS",
            x:281.5,
            y:350.35,
            width:100,
            height:36,
			tag:2,
            size:11,
            textAlign:"center"},
		{compId:"ID_ip3_DS",
			x:167.5,
            y:350.35,
            width:100,
            height:36,
			color:"#45505B",
            size:11,
			tag:3,
            textAlign:"center"},
		{compId:"ID_ip4_DS",
            x:110.5,
            y:306.35,
            width:100,
            height:36,
            size:11,
			tag:4,			
            textAlign:"center"},
		{compId:"ID_ip5_DS",
			 x:224.5,
            y:306.35,
            width:100,
            height:36,
            size:11,
			tag:5,			
            textAlign:"center"}];


    var dropBox = [{compId:"ID_drop01",
        x:29.5,
        y:83.4,
        width:100,
        height:36,
        size:11,
        answer:1,
        textAlign:"center"},
        {compId:"ID_drop02",
            x:29.5,
        y:125.4,
        width:100,
        height:36,
        size:11,
        answer:2,
        textAlign:"center"},
        {compId:"ID_drop03",
            x:29.5,
        y:167.4,
        width:100,
        height:36,
        size:11,
        answer:3,
        textAlign:"center"},
		{compId:"ID_drop04",
            x:29.5,
        y:209.4,
        width:100,
        height:36,
        size:11,
        answer:4,
        textAlign:"center"},
		{compId:"ID_drop05",
           x:29.5,
        y:251.4,
        width:100,
        height:36,
        size:11,
        answer:5,
        textAlign:"center"},
    ];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [];
    var slide_texts = [
						{compId:"ID_inst",
							x:4.45,
							y:4.4, 
							width:400,
							height:17,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt01",
							x:137.45,
							y:86.4, 
							width:625,
							height:17,
							size:11,							
							textAlign:"left"},

						{compId:"ID_txt02",
							x:137.45,
							y:128.4, 
							width:625,
							height:17,
							size:11,							
							textAlign:"left"},

						{compId:"ID_txt03",
							x:137.45,
							y:170.4, 
							width:625,
							height:17,
							size:11,							
							textAlign:"left"},

					{compId:"ID_txt04",
							x:137.45,
							y:212.4, 
							width:625,
							height:17,
							size:11,							
							textAlign:"left"},
						
					{compId:"ID_txt05",
							x:137.45,
							y:254.4, 
							width:625,
							height:17,
							size:11,							
							textAlign:"left"},
					

						];

    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_images = [{compId:"ID_image01",
        name:"bg.png",
        x:4,
        y:78,
        width:770,
        height:215,
        size:11,
        textAlign:"left"},
		];


   var submit_buttons = [{compId:"ID_CHECK",
        x:609,
        y:358,
        width:90,
        height:21,
        size:11,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_RESET",
          x:684,
          y:358,
			width:90,
			height:21,
			size:11,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}];
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:251,
        y:63,
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


