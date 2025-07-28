loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

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
	var commonTexts = [];
	var common_images = [];

	var slide_1_type = "INTERACTIVE";
    var slide_1_images = [{name:"header.jpg",x:496,y:40,width:218,height:22}];	
    var slide_1_q = [{q:"txt_q1", a:"txt_a1"},{q:"txt_q2", a:"txt_a2"},{q:"txt_q3", a:"txt_a3"},{q:"txt_q4", a:"txt_a4"},{q:"txt_q05", a:"txt_a5"},{q:"txt_q6", a:"txt_a6"}];
	var slide_1_col = [{id:"txt_col1",width:128},{id:"txt_col2",width:84}]
	var slide_1_details = {x:246,
						y:38,
						width:468,
						height:320,
						qWidth:250,
						qHeight:50};
    var slide_1_texts = [{compId:"ID_s1_inst",
							x:0,
							y:10, 
							width:258,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
						{compId:"txt_col1",
							x:215+290,
							y:20+24, 
							width:138,
							height:17,
							size:11,
							color:"#fff",
							textAlign:"center"},
						{compId:"txt_col2",
							x:616+21,
							y:44,
							width:84,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"}];
	var slide_1_buttons = [{compId:"ID_Button01",
						x:503,
						y:375.8,
						width:90,
						height:21,
						size:11,
						type:"CHECK",
						textAlign:"center"},
						{compId:"ID_Button02",
						x:600,
						y:375.8,
						width:90,
						height:21,
						type:"RESET",
						size:11,
						textAlign:"center"}];
	var slide_1_feedback = [{correctTitleId:"ID_titleCorrect",x:17,y:110,size:11,width:160,color:"#442557",isBold:true},
						{correctBodyId:"ID_correctText",x:18,y:140,size:11,width:180,color:"#000"},
						{wrongTitleId:"ID_titleIncorrect",x:17,y:110,size:11,width:160,color:"#442557",isBold:true},					
						{wrongBodyId:"ID_IncorrectText",x:18,y:140,size:11,width:180,color:"#000"},
						{imageName:"textbox.jpg",x:-1,y:105},
						{closeBtn:true, x:174,y:107}]

    var slide_inter_object = {type:"ON_OFF",
			questions:slide_1_q,
			columns:slide_1_col,
			buttons:slide_1_buttons,
			feedback:slide_1_feedback,
			details:slide_1_details,
			images:slide_1_images,
       		texts:slide_1_texts};

	 var slide_1_object = {templateType:slide_1_type,
			x:0,
			y:0,
			slideObject:slide_inter_object}
	
	/* Slide 2 */
	var slide_2_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        dropNormalSkinImage:"drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

   var buttons = [{compId:"ID_s2_drag01",
		x:27.55-5,
        y:304.7,
        width:103.25,
        height:39.8,
        size:11,
		tag:1,
		color:"#393536",
        textAlign:"center"},     
       {compId:"ID_s2_drag02",
		x:144.9-5,
        y:304.7,
        width:103.25,
        height:39.8,
        size:11,
		tag:7,
        textAlign:"center"},
		{compId:"ID_s2_drag03",
		x:262.25-5,
        y:304.7,
        width:103.25,
        height:39.8,
		tag:3,
        textAlign:"center"},
	{compId:"ID_s2_drag04",
		x:379.6-5,
        y:304.7,
        width:103.25,
        height:39.8,
        size:11,
		tag:5,
        textAlign:"center"},
{compId:"ID_s2_drag05",
		x:27.55-5,
        y:355.9,
        width:103.25,
        height:39.8,
        size:11,
		tag:2,
        textAlign:"center"},
	   {compId:"ID_s2_drag06",
		x:145.1-5,
        y:355.9,
        width:103.25,
        height:39.8,
        size:11,
		tag:4,
        textAlign:"center"}, 
	   {compId:"ID_s2_drag007",
		x:262.65-5,
        y:355.9,
        width:103.25,
        height:39.8,
        size:11,
		tag:6,
        textAlign:"center"}, 
       ];
    var dropBox = [{compId:"a1_dt",
        x:45.4-5,
        y:58.85,
        width:103.25,
        height:39.8,
        size:11,
        answer:1,
        textAlign:"center"},
        {compId:"a2_dt",
        x:45.4-5,
        y:107.65,
        width:103.25,
        height:39.8,
        size:11,
        answer:2,
        textAlign:"center"},
		{compId:"a3_dt",
        x:45.4-5,
        y:156.45,
        width:103.25,
        height:39.8,
        size:11,
        answer:3,
        textAlign:"center"},
        {compId:"a4_dt",
        x:45.4-5,
        y:205.25,
        width:103.25,
        height:39.8,
        size:11,
        answer:4,
        textAlign:"center"},
		{compId:"a5_dt",
		x:45.4-5,
        y:254.05,
        width:103.25,
        height:39.8,
        size:11,
        answer:5,
        textAlign:"center"},
       ];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [ ];
    var slide_2_texts = [
		{compId:"ID_s2_inst",
        x:30-5,
        y:1,
        width:706.05,
        height:17,
        size:11,
        textAlign:"left"},
		{compId:"ID_s2_txt01",
			x:156.1-5,
            y:70.25,
            width:257.05,
            height:17,
            size:11,
            textAlign:"left"},

       {compId:"ID_s2_txt02",
          x:156.1-5,
            y:116.05,
            width:288.05,
            height:17,
            size:11,
            textAlign:"left"},
	{compId:"ID_s2_txt03",
			x:156.1-5,
            y:163.35,
            width:288.05,
            height:17,
            size:11,
            textAlign:"left"},

       {compId:"ID_s2_txt04",
          x:156.1-5,
            y:214.15,
            width:303.05,
            height:17,
            size:11,
            textAlign:"left"},
		    {compId:"ID_s2_txt05",
			 x:156.1-5,
            y:263.15,
            width:288.05,
            height:17,
            size:11,
            textAlign:"left"},
		    {compId:"ID_s2_txt07",
			x:594-5,
            y:122,
            width:53,
            height:17,
            size:11,
            textAlign:"left"},
		    {compId:"ID_s2_txt08",
			x:582-5,
            y:181,
            width:53,
            height:17,
            size:11,
            textAlign:"left"},
		    {compId:"ID_s2_txt09",
			x:640-5,
            y:181,
           width:53,
            height:17,
            size:11,
            textAlign:"left"},

		   {compId:"ID_s2_txt10",
			x:538-5,
            y:267.15,
            width:207.05,
            height:17,
            size:11,
            textAlign:"left"}];

		   
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_2_images = [{name:"bg.png",
							x:23.30-5,
							y:52.85, 
							width:470,
							height:245.15,
							type:""},							
						{name:"bg2.png",
							x:476.95-5,
							y:45.85, 
							width:280,
							height:330,
							type:""},
							{name:"10.3.1.7.png",
							x:560.85-5,
							y:70, 
							width:127,
							height:182,
							type:""}];
    var submit_buttons = [{compId:"ID_s2_CHECK",
        x:594,
        y:377,
        width:80,
		height:23,
        size:11,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_s2_RESET",
             x:669,
			 y:377,
             width:80,
			 height:23,
			size:11,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}
    ];
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:30,
        y:105,
        width:170,
        height:98,
        size:11,
        image:"../../../common/images/feedback2.png",
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
			
	
															
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:common_images,
			slideObject:slides,
		
			buttonBarPos:{x:718}};
	
}


function callBackFromButtonBar(_id)
{
	if(_id==0)
			{
				$("#mainDiv").hide();			
			}
			else
			{
				$("#mainDiv").show();		
			}
}
