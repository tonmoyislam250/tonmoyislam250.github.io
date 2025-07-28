loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"../../../common/images/new_drag_img.png",
        overSkinImage:"drop_normal.png",
        dropNormalSkinImage:"drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

    var buttons = [{compId:"ID_a01_DS",
        x:-4,
        y:68.35,
        width:310,
        height:62,
	    tag:1,
        size:11,
        textAlign:"center"},
       {compId:"ID_a02_DS",
        x:-4,
        y:142.2,
        width:310,
        height:62,
	    tag:2,
        size:11,
        textAlign:"center"},
	{compId:"ID_a03_DS",
        x:-4,
        y:216.05,
        width:310,
        height:62,
	    tag:3,
        size:11,
        textAlign:"center"},
		{compId:"ID_a04_DS",
        x:-4,
        y:289.9,
        width:310,
        height:62,
	    tag:4,
        size:11,
        textAlign:"center"},
	
    ];
    var dropBox = [{compId:"a1_dt",
        x:330.5+10,
        y:68.35,
        width:310,
        height:62,
        size:11,
        answer:2,
        textAlign:"center"},
        {compId:"a2_dt",
            x:330.5+10,
			y:142.2,
			width:310,
			height:62,
            size:11,
            answer:4,
            textAlign:"center"},
        {compId:"a3_dt",
             x:330.5+10,
			y:216.05,
			width:310,
			height:62,
            size:11,
            answer:1,
            textAlign:"center"},
	{compId:"a4_dt",
            x:330.5+10,
			y:289.9,
			width:310,
			height:62,
            size:11,
            answer:3,
            textAlign:"center"},
	
    ];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [{compId:"ID_inst",
        x:2,
        y:0,
        width:292,
        height:17,
        size:11,
        textAlign:"left",
		expand:"down"},
		{compId:"ID_header01",
        x:413.05+10,
        y:38.85,
        width:337.2,
        height:17,
        size:11,
        textAlign:"center",
		expand:"down"},
		{compId:"ID_txt01",
        x:332.30,
        y:90.45,
        width:301,
        height:17,
        size:11,
        textAlign:"center",
		expand:"up+down"},
		{compId:"ID_txt02",
        x:332.30,
        y:165.45,
        width:301,
        height:17,
        size:11,
        textAlign:"center",
		expand:"up+down"},
		{compId:"ID_txt03",
        x:332.30,
        y:236.45,
        width:301,
        height:17,
        size:11,
        textAlign:"center",
		expand:"up+down"},
		{compId:"ID_txt04",
        x:332.30,
        y:310.45,
        width:301,
        height:17,
        size:11,
        textAlign:"center",
		expand:"up+down"},];
    var slide_text = [ ];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_images = [{compId:"ID_image01",
        name:"bg.png",
        x:310,
        y:19,
        width:365,
        height:347,
        size:11,
        textAlign:"left"},
                       
                    ];

    var submit_buttons = [{},{compId:"ID_RESET",
                            x:591.5+10,
                            y:373,
                            width:80.95,
                            height:21,
                            size:11,
                            normalSkinImage:"../../../common/images/btn_normal.png",
                            textAlign:"center"}
                        ];                    
    
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:2,
        y:120,
        width:150,
        height:17,
        size:11,
        image:"../../../common/images/feedback.png",
        textAlign:"center"}];
	
    var instobj = {ansType:"snap-back"};
	
    return {templateType:template_type,
        textObject:commonTexts,
        buttonObject:buttonObject,
        slideObject:slide_text,
        slideImages:slide_images,
        dropObject:dropObject,
        submitObject:submit_buttons,
        feedbackObj:feedbackObj,
	instobj:instobj
    };

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

