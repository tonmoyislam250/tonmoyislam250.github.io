//loadScript("../../../common/scripts/templates/slide/InteractiveSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 800;
var STAGE_HEIGHT = 400;
// called from body onload event in media/index.html
function getData() 
{
	var template_type = "INTERACTIVE";
    var slide_images = [{name:"header.jpg",x:654.5,y:49.5,width:106,height:20}];	
    var slide_q = [{q:"txt_q1", a:"txt_a1"},{q:"txt_q2", a:"txt_a2"},{q:"txt_q3", a:"txt_a3"},{q:"txt_q4", a:"txt_a4"},{q:"txt_q5", a:"txt_a5"},{q:"txt_q6", a:"txt_a6"}];
	var slide_col = [{id:"txt_col1",width:53},{id:"txt_col2",width:52}]
	var slide_details = {x:210,
						y:50,
						width:550,
						height:300,
						qWidth:445,
						qHeight:45};
    var slide_texts = [{compId:"ID_inst",
							x:5,
							y:2, 
							width:200,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
						{compId:"txt_col1",
							x:589+70,
							y:53, 
							width:65,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"},
						{compId:"txt_col2",
							x:637+66,
							y:53, 
							width:82,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"},
						{compId:"txt_col3",
							x:713,
							y:7, 
							width:45,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"}
							];
	var slide_buttons = [{compId:"ID_Button01",
						x:573,
						y:315.8+48,
						width:90,
						height:21,
						size:11,
						type:"CHECK",
						textAlign:"center"},
						{compId:"ID_Button02",
						x:670,
						y:315.8+48,
						width:90,
						height:21,
						type:"RESET",
						size:11,
						textAlign:"center"}];
	var slide_feedback = [{correctTitleId:"ID_titleCorrect",x:20,y:120,size:11,width:160,color:"#442557",isBold:true},
						{correctBodyId:"ID_correctText",x:20,y:150,size:11,width:180,color:"#000"},
						{wrongTitleId:"ID_titleIncorrect",x:20,y:120,size:11,width:160,color:"#442557",isBold:true},					
						{wrongBodyId:"ID_IncorrectText",x:20,y:150,size:11,width:180,color:"#000"},
						{imageName:"textbox.jpg",x:2,y:115},
						{closeBtn:true, x:180,y:118}]

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




