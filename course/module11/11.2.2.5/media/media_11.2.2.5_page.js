loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 772;
var STAGE_HEIGHT = 400;
var TYPE = "MULTI_BAR";
var isDD = true;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = []	
	var common_images = [];
	
	var slide_1_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        dropNormalSkinImage:"drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

    var buttons = [{compId:"ID_s1_traget01",
		x:13,
        y:94.4,
        width:171,
        height:34.45,
        size:11,
		tag:1,
        textAlign:"center"},     
       {compId:"ID_s1_traget02",
		x:13,
        y:133.9,
        width:171,
        height:34.45,
        size:11,		
        textAlign:"center"},
		{compId:"ID_s1_traget03",
		x:13,
        y:173.4,
        width:171,
        height:34.45,
        size:11,		
        textAlign:"center"},
		{compId:"ID_s1_traget04",
		x:13,
        y:212.9,
        width:171,
        height:34.45,
        size:11,		
        textAlign:"center"},
		{compId:"ID_s1_traget05",
		x:13,
        y:252.4,
        width:171,
        height:34.45,
        size:11,
		tag:2,
        textAlign:"center"},
		{compId:"ID_s1_traget06",
		x:13,
        y:291.9,
        width:171,
        height:34.45,
        size:11,		
        textAlign:"center"}]   
      
    var dropBox = [{compId:"a1_dt",
		x:218.5,
        y:151.4,
        width:171,
        height:34.45,
        size:11,
        answer:1,
        textAlign:"center"},
        {compId:"a2_dt",
		x:218.5,
        y:270.3,
        width:171,
        height:34.45,
        size:11,     
        answer:2,
        textAlign:"center"},		
		];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [];
    var slide_1_texts = [
		{compId:"ID_s1_inst",
		x:30,
        y:1,
        width:688.8,
        height:17,
        size:11,		
        textAlign:"left"},
			{compId:"ID_s1_txt01",
            x:396.35,
            y:149.55,
            width:330,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_s1_txt02",
            x:396.35,
            y:269.45,
            width:330,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_s1_txt03",
		x:218.5,
        y:63.4,
        width:171,
        height:17,
        size:11,		
        textAlign:"center"},
		{compId:"ID_s1_txt04",
		x:400.3,
        y:63.4,
        width:328.25,
        height:17,
        size:11,		
        textAlign:"center"}];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_1_images = [{name:"bg.png",
							x:195,
							y:60.15, 
							width:539,
							height:312.85,
							type:""},];
    var submit_buttons = [{compId:"ID_s1_CHECK",
        x:557,
        y:377,
        width:80,
		height:23,
        size:11,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_s1_RESET",
             x:662,
			 y:377,
             width:80,
			 height:23,
			size:11,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}
    ];
    var feedbackObj = [{compId:"ID_FEEDBACK",
         x:12,
        y:131,
        width:170,
        height:98,
        size:11,
        image:"../../../common/images/feedback4.png",
        textAlign:"left"}];
    var instobj = {ansType:"many-one",clue:1};
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts,
							textObject:commonTexts,
							buttonObject:buttonObject,
							slideObject:slide_1_texts,
							slideImages:slide_1_images,
							dropObject:dropObject,
							submitObject:submit_buttons,
							feedbackObj:feedbackObj,
                            instobj:instobj
    };
	
	/* Slide 2 */
	var slide_2_type = "DRAG_DROP";
    var buttonStyle = {
		normalSkinImage:"drag_normal.png",
		//normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        dropNormalSkinImage:"drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

  var buttons = [{compId:"ID_s2_traget01",
		x:13,
        y:94.4,
        width:171,
        height:34.45,
        size:11,
		
        textAlign:"center"},     
       {compId:"ID_s2_traget02",
		x:13,
        y:133.9,
        width:171,
        height:34.45,
        size:11,
			
        textAlign:"center"},
		{compId:"ID_s2_traget03",
		x:13,
        y:173.4,
        width:171,
        height:34.45,
        size:11,
			tag:1,
        textAlign:"center"},
		{compId:"ID_s2_traget04",
		x:13,
        y:212.9,
        width:171,
        height:34.45,
        size:11,
			tag:2,
        textAlign:"center"},
		{compId:"ID_s2_traget05",
		x:13,
        y:252.4,
        width:171,
        height:34.45,
        size:11,		
        textAlign:"center"},
		{compId:"ID_s2_traget06",
		x:13,
        y:291.9,
        width:171,
        height:34.45,
        size:11,
		
        textAlign:"center"}]   
      
    var dropBox = [{compId:"b1_dt",
		x:218.5,
        y:151.4,
        width:171,
        height:34.45,
        size:11,
        answer:1,
        textAlign:"center"},
        {compId:"b2_dt",
		x:218.5,
        y:270.3,
        width:171,
        height:34.45,
        size:11,     
        answer:2,
        textAlign:"center"}];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [];
    var slide_2_texts = [
		{compId:"ID_s2_inst",
		x:30,
        y:1,
        width:688.8,
        height:17,
        size:11,		
        textAlign:"left"},
			{compId:"ID_s2_txt01",
            x:396.35,
            y:149.55,
            width:330,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_s2_txt02",
            x:396.35,
            y:269.45,
            width:330,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_s2_txt03",
			x:218.5,
        y:63.4,
        width:171,
        height:17,
        size:11,		
        textAlign:"center"},
		{compId:"ID_s2_txt04",
		x:400.3,
        y:63.4,
        width:328.25,
        height:17,
        size:11,		
        textAlign:"center"}];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_2_images = [{name:"bg.png",
							x:195,
							y:60.15, 
							width:539,
							height:312.85,
							type:""},];
    var submit_buttons = [{compId:"ID_s2_CHECK",
        x:557,
        y:377,
        width:80,
		height:23,
        size:11,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_s2_RESET",
             x:662,
			 y:377,
             width:80,
			 height:23,
			size:11,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}
    ];
    var feedbackObj = [{compId:"ID_FEEDBACK",
         x:12,
        y:131,
        width:170,
        height:98,
        size:11,
        image:"../../../common/images/feedback4.png",
        textAlign:"left"}];
    var instobj = {ansType:"many-one",clue:1};
	
 var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							textObject:commonTexts,
							buttonObject:buttonObject,
							slideObject:slide_2_texts,
							slideImages:slide_2_images,
							dropObject:dropObject,
							submitObject:submit_buttons,
							feedbackObj:feedbackObj,
                            instobj:instobj
    };

 /* Slide 3 */
	var slide_3_type = "DRAG_DROP";
    var buttonStyle = {
		normalSkinImage:"drag_normal.png",
		//normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        dropNormalSkinImage:"drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

  var buttons = [{compId:"ID_s3_traget01",
		x:13,
        y:94.4,
        width:171,
        height:34.45,
        size:11,
		
        textAlign:"center"},     
       {compId:"ID_s3_traget02",
		x:13,
        y:133.9,
        width:171,
        height:34.45,
        size:11,
	  tag:2,
        textAlign:"center"},
		{compId:"ID_s3_traget03",
		x:13,
        y:173.4,
        width:171,
        height:34.45,
        size:11,		
        textAlign:"center"},
		{compId:"ID_s3_traget04",
		x:13,
        y:212.9,
        width:171,
        height:34.45,
        size:11,		
        textAlign:"center"},
		{compId:"ID_s3_traget05",
		x:13,
        y:252.4,
        width:171,
        height:34.45,
        size:11,		
        textAlign:"center"},
		{compId:"ID_s3_traget06",
		x:13,
        y:291.9,
        width:171,
        height:34.45,
        size:11,
		tag:1,
        textAlign:"center"}]   
      
    var dropBox = [{compId:"c1_dt",
		x:218.5,
        y:151.4,
        width:171,
        height:34.45,
        size:11,
        answer:1,
        textAlign:"center"},
        {compId:"c2_dt",
		x:218.5,
        y:270.3,
        width:171,
        height:34.45,
        size:11,     
        answer:2,
        textAlign:"center"}];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [];
    var slide_3_texts = [{compId:"ID_s3_inst",
		x:30,
        y:1,
        width:688.8,
        height:17,
        size:11,		
        textAlign:"left"},
			{compId:"ID_s3_txt01",
            x:396.35,
            y:149.55,
            width:330,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_s3_txt02",
            x:396.35,
            y:269.45,
            width:330,
            height:17,
            size:11,
            textAlign:"left"},
			{compId:"ID_s3_txt03",
		x:218.5,
        y:63.4,
        width:171,
        height:17,
        size:11,		
        textAlign:"center"},
		{compId:"ID_s3_txt04",
		x:400.3,
        y:63.4,
        width:328.25,
        height:17,
        size:11,		
        textAlign:"center"}];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_3_images = [{name:"bg.png",
							x:195,
							y:60.15, 
							width:539,
							height:312.85,
							type:""},
							];
    var submit_buttons = [{compId:"ID_s3_CHECK",
        x:557,
        y:377,
        width:80,
		height:23,
        size:11,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_s3_RESET",
             x:662,
			 y:377,
             width:80,
			 height:23,
			size:11,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}
    ];
    var feedbackObj = [{compId:"ID_FEEDBACK",
         x:12,
        y:131,
        width:170,
        height:98,
        size:11,
        image:"../../../common/images/feedback4.png",
        textAlign:"left"}];
   var instobj = {ansType:"many-one",clue:1};
	
 var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts,
							textObject:commonTexts,
							buttonObject:buttonObject,
							slideObject:slide_3_texts,
							slideImages:slide_3_images,
							dropObject:dropObject,
							submitObject:submit_buttons,
							feedbackObj:feedbackObj,
                            instobj:instobj
    };
		
			
	
															
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
		    images:common_images,
			slideObject:slides,
			buttonBarPos:{x:718}};
	
}



