//loadScript("../../../common/scripts/templates/slide/InteractiveSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 870;
var STAGE_HEIGHT = 400;
// called from body onload event in media/index.html
function getData() 
{
	var template_type = "INTERACTIVE";
    var slide_images = [{name:"header.jpg",x:548,y:6,width:212,height:22}];	
    var slide_q = [{q:"txt_q1", a:"txt_a1"},{q:"txt_q2", a:"txt_a2"},{q:"txt_q3", a:"txt_a3"},{q:"txt_q4", a:"txt_a4"},{q:"txt_q5", a:"txt_a5"},{q:"txt_q6", a:"txt_a6"},{q:"txt_q7", a:"txt_a7"},{q:"txt_q8", a:"txt_a8"},{q:"txt_q9", a:"txt_a9"},{q:"txt_q10", a:"txt_a10"}];
	var slide_col = [{id:"txt_col1",width:108},{id:"txt_col2",width:104}]
	var slide_details = {x:210,
						y:2,
						width:550,
						height:345,
						qWidth:339,
						qHeight:32};
    var slide_texts = [{compId:"ID_inst",
							x:5,
							y:10, 
							width:200,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
						{compId:"txt_col1",
							x:543,
							y:8, 
							width:138,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"},
						{compId:"txt_col2",
							x:653,
							y:8, 
							width:134,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"}];
	var slide_buttons = [{compId:"ID_Button01",
						x:602,
						y:375.8+1,
						width:75,
						height:23,
						size:11,
						type:"CHECK",
						textAlign:"center"},
						{compId:"ID_Button02",
						x:684,
						y:375.8,
						width:75,
						height:23,
						type:"RESET",
						size:11,
						textAlign:"center"}];
	var slide_feedback = [{correctTitleId:"ID_titleCorrect",x:17,y:170,size:11,width:160,color:"#442557",isBold:true},
						{correctBodyId:"ID_correctText",x:18,y:200,size:11,width:180},
						{wrongTitleId:"ID_titleIncorrect",x:17,y:170,size:11,width:160,color:"#442557",isBold:true},					
						{wrongBodyId:"ID_IncorrectText",x:18,y:200,size:11,width:180},
						{imageName:"textbox.jpg",x:-1,y:165},
						{closeBtn:true, x:174,y:167}]

    var slide_object = {type:"ON_OFF",
			questions:slide_q,
			columns:slide_col,
			buttons:slide_buttons,
			feedback:slide_feedback,
			details:slide_details,
			images:slide_images,
       		texts:slide_texts};

    return {templateType:template_type,
			slideObject:slide_object};	
}




