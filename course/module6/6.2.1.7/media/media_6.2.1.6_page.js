//loadScript("../../../common/scripts/templates/slide/InteractiveSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 830;
var STAGE_HEIGHT = 400;
// called from body onload event in media/index.html
function getData() 
{
	var template_type = "INTERACTIVE";
    var slide_images = [{name:"header.png",x:558,y:210,width:203,height:22},{name:"outputBox.png",x:205,y:2,width:569,height:204}/*,{name:"line.png",x:220,y:43,width:560,height:7},{name:"line.png",x:220,y:85,width:560,height:7},{name:"A.png",x:270.8,y:59.65,width:35,height:35},{name:"B.png",x:418.8,y:59.65,width:35,height:35},{name:"C.png",x:531.8,y:59.65,width:35,height:35},{name:"D.png",x:647.8,y:59.65,width:35,height:35},{name:"E.png",x:725.8,y:59.65,width:35,height:35}*/];	
    var slide_q = [{q:"txt_q1", a:"txt_a1"},{q:"txt_q2", a:"txt_a2"},{q:"txt_q3", a:"txt_a3"},{q:"txt_q4", a:"txt_a4"},{q:"txt_q5", a:"txt_a5"},{q:"txt_q6", a:"txt_a6"}];
	var slide_col = [{id:"txt_col1",width:39},{id:"txt_col2",width:36},{id:"txt_col3",width:37},{id:"txt_col4",width:40},{id:"txt_col5",width:36}]
	var slide_details = {x:210,
						y:208,
						width:550,
						height:135,
						qWidth:350,
						qHeight:50};
    var slide_texts = [{compId:"ID_inst",
							x:5,
							y:2, 
							width:200,
							height:17,
							size:11,
							textAlign:"left",
							expand:"down"},
						{compId:"txt_col1",
							x:558,
							y:214, 
							width:65,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"},
						{compId:"txt_col2",
							x:620,
							y:214, 
							width:22,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"},
						{compId:"txt_col3",
							x:650,
							y:214, 
							width:45,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"},
							{compId:"txt_col4",
							x:688,
							y:214, 
							width:45,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"},
							{compId:"txt_col5",
							x:730,
							y:214, 
							width:45,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"}];
							
	var slide_buttons = [{compId:"ID_Button01",
								x:584,
								y:368.8,
								width:90,
								height:21,
								size:11,
								type:"CHECK",
								textAlign:"center"},
						{compId:"ID_Button02",
								x:686,
								y:368.8,
								width:90,
								height:21,
								type:"RESET",
								size:12,
								textAlign:"center"}];
						
	var slide_feedback = [{correctTitleId:"ID_titleCorrect",x:20,y:205,size:11,width:160,color:"#573359",isBold:true},
						{correctBodyId:"ID_correctText",x:20,y:235,size:11,width:180},
						{wrongTitleId:"ID_titleIncorrect",x:20,y:205,size:11,width:160,color:"#573359",isBold:true},					
						{wrongBodyId:"ID_IncorrectText",x:20,y:235,size:11,width:180},
						{imageName:"textbox.jpg",x:2,y:200},
						{closeBtn:true, x:180,y:202}]

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




