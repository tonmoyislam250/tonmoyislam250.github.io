loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");
//loadScript("multidrag.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        dropNormalSkinImage:"drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

    var buttons = [[{compId:"ID_s1_drag01",
        x:262 - 30,
        y:143,
        width:120,
        height:25,
	    tag:2,
        size:11,
        textAlign:"center"},
        {compId:"ID_s1_drag02",
		x:262 - 30,
        y:171.25,
        width:120,
        height:25,
	    tag:2,
        size:11,
        textAlign:"center"},
		{compId:"ID_s1_drag03",
        x:262 - 30,
        y:199.5,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
		{compId:"ID_s1_drag04",
        x:262 - 30,
        y:227.75,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
	    {compId:"ID_s1_drag05",
        x:262 - 30,
        y:256,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
		{compId:"ID_s1_drag06",
        x:262 - 30,
        y:284.25,
        width:120,
        height:25,
	    tag:2,
        size:11,
        textAlign:"center"},
		{compId:"ID_s1_drag07",
        x:262 - 30,
        y:312.5,
        width:120,
        height:25,
	    tag:2,
        size:11,
        textAlign:"center"},
		{compId:"ID_s1_drag08",
        x:262 - 30,
        y:340.75,
        width:120,
        height:25,
	    tag:2,
        size:11,
        textAlign:"center"}],
		/*2nd group */
		[{compId:"ID_s2_drag01",
        x:262 - 30,
        y:143,
        width:120,
        height:25,
	    tag:2,
        size:11,
        textAlign:"center"},
        {compId:"ID_s2_drag02",
		x:262 - 30,
        y:171.25,
        width:120,
        height:25,
	    tag:2,
        size:11,
        textAlign:"center"},
		{compId:"ID_s2_drag03",
        x:262 - 30,
        y:199.5,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
		{compId:"ID_s2_drag04",
        x:262 - 30,
        y:227.75,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
	    {compId:"ID_s2_drag05",
        x:262 - 30,
        y:256,
        width:120,
        height:25,
	    tag:2,
        size:11,
        textAlign:"center"},
		{compId:"ID_s2_drag06",
        x:262 - 30,
        y:284.25,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
		{compId:"ID_s2_drag07",
        x:262 - 30,
        y:312.5,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
		{compId:"ID_s2_drag08",
        x:262 - 30,
        y:340.75,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"}],
		/*S3 group*/
		[{compId:"ID_s3_drag01",
        x:262- 30,
        y:143,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
        {compId:"ID_s3_drag02",
		x:262 - 30,
        y:171.25,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
		{compId:"ID_s3_drag03",
        x:262 - 30,
        y:199.5,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
		{compId:"ID_s3_drag04",
        x:262 - 30,
        y:227.75,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
	    {compId:"ID_s3_drag05",
        x:262 - 30,
        y:256,
        width:120,
        height:25,
	    tag:2,
        size:11,
        textAlign:"center"},
		{compId:"ID_s3_drag06",
        x:262 - 30,
        y:284.25,
        width:120,
        height:25,
	    tag:1,
        size:11,
        textAlign:"center"},
		{compId:"ID_s3_drag07",
        x:262 - 30,
        y:312.5,
        width:120,
        height:25,
	    tag:2,
        size:11,
        textAlign:"center"},
		{compId:"ID_s3_drag08",
        x:262 - 30,
        y:340.75,
        width:120,
        height:25,
	    tag:2,
        size:11,
        textAlign:"center"}]
    ];
    var dropBox = [{compId:"a1_dt",/* first group */
        x:459.8 - 30,
        y:141,
        width:120,
        height:25,
        size:11,
        answer:1,
        textAlign:"center"},
        {compId:"a2_dt",
        x:459.8 - 30,
        y:169.25,
        width:120,
        height:25,
        size:11,
        answer:1,
        textAlign:"center"},
        {compId:"a3_dt",
        x:459.8 - 30,
        y:197.5,
        width:120,
        height:25,
        size:11,
        answer:1,
        textAlign:"center"},
	{compId:"a4_dt",
        x:459.8 - 30,
        y:225.75,
        width:120,
        height:25,
        size:11,
        answer:1,
        textAlign:"center"},
	{compId:"a5_dt",
        x:459.8 - 30,
        y:254,
        width:120,
        height:25,
        size:11,
        answer:1,
        textAlign:"center"},
        {compId:"a6_dt",
        x:459.8 - 30,
        y:282.25,
        width:120,
        height:25,
        size:11,
        answer:1,
        textAlign:"center"},
	{compId:"a7_dt",
        x:459.8 - 30,
        y:310.5,
        width:120,
        height:25,
        size:11,
        answer:1,
        textAlign:"center"},
   {compId:"a8_dt",
        x:459.8 - 30,
        y:338.75,
        width:120,
        height:25,
        size:11,
        answer:1,
        textAlign:"center"},
	/* Second Group */
	{compId:"b1_dt",/* first group */
        x:631 - 30,
        y:141,
        width:120,
        height:25,
        size:11,
        answer:2,
        textAlign:"center"},
        {compId:"b2_dt",
        x:631 - 30,
        y:169.25,
        width:120,
        height:25,
        size:11,
        answer:2,
        textAlign:"center"},
        {compId:"b3_dt",
        x:631 - 30,
        y:197.5,
        width:120,
        height:25,
        size:11,
        answer:2,
        textAlign:"center"},
	{compId:"b4_dt",
        x:631 - 30,
        y:225.75,
        width:120,
        height:25,
        size:11,
        answer:2,
        textAlign:"center"},
	{compId:"b5_dt",
        x:631 - 30,
        y:254,
        width:120,
        height:25,
        size:11,
        answer:2,
        textAlign:"center"},
        {compId:"b6_dt",
        x:631 - 30,
        y:282.25,
        width:120,
        height:25,
        size:11,
        answer:2,
        textAlign:"center"},
	{compId:"b7_dt",
        x:631 - 30,
        y:310.5,
        width:120,
        height:25,
        size:11,
        answer:2,
        textAlign:"center"},
   {compId:"b8_dt",
        x:631 - 30,
        y:338.75,
        width:120,
        height:25,
        size:11,
        answer:2,
        textAlign:"center"},
    ];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [{compId:"ID_inst",
        x:2,
        y:1,
        width:222,
        height:17,
        size:11,
        textAlign:"left",
		expand:"down"},
		{compId:"ID_public",
        x:506.05 - 30,
         y:120.7,
        width:104,
        height:17,
        size:11,
        textAlign:"center",
		expand:"left+right"},
		{compId:"ID_private",
        x:670 - 30,
        y:120.7,
        width:104,
        height:17,
        size:11,
        textAlign:"center",
		expand:"left+right"}];
    var slide_text = [ ];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_images = [{compId:"ID_image01",
        name:"bg.png",
        x:440 - 30,
        y:5-2,
        width:160,
        height:365,
        size:11,
        textAlign:"left"},
		{compId:"ID_image02",
        name:"bg.png",
        x:610 - 30,
        y:5-2,
        width:160,
        height:365,
        size:11,
        textAlign:"left"},
		{compId:"ID_image03",
        name:"Cloud.png",
        x:443 - 30,
        y:13.3,
        width:152.75,
        height:92.35,
        size:11,
        textAlign:"left"},
		{compId:"ID_image04",
        name:"comp.png",
        x:621.45 - 30,
        y:9.9,
        width:137,
        height:109,
        size:11,
        textAlign:"left"},
                       
                    ];

    var submit_buttons = [{compId:"ID_CHECK",
                            x:553,
                            y:369,
                            width:90,
                            height:21,
                            size:11,
                            normalSkinImage:"../../../common/images/btn_normal.png",
                            textAlign:"center"},
						{compId:"ID_RESET",
                            x:698 - 30,
                            y:369,
                            width:90,
                            height:21,
                            size:11,
                            normalSkinImage:"../../../common/images/btn_normal.png",
                            textAlign:"center"}
                        ];                    
    
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:30 - 30,
        y:120,
        width:150,
        height:17,
        size:11,
        image:"../../../common/images/feedback.png",
        textAlign:"center"}];
	
	// var instobj = {ansType:"many-one", isDragSets:true};
    var instobj = {ansType:"many-one",isDragSets:true, clue:1};
	
    return {templateType:template_type,
        textObject:commonTexts,
        buttonObject:buttonObject,
        slideObject:slide_text,
        slideImages:slide_images,
        dropObject:dropObject,
        submitObject:submit_buttons,
        feedbackObj:feedbackObj,
		instobj:instobj, };

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

