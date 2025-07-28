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
    var slide_images = [{name:"header.jpg",x:584.5,y:3,width:186,height:21}];	
    var slide_q = [{q:"txt_q1", a:"txt_a1"},{q:"txt_q2", a:"txt_a2"},{q:"txt_q3", a:"txt_a3"},{q:"txt_q4", a:"txt_a4"},{q:"txt_q5", a:"txt_a5"}];
	var slide_col = [{id:"txt_col1",width:53},{id:"txt_col2",width:52},{id:"txt_col3",width:75}]
	var slide_details = {x:210,
						y:2,
						width:550,
						height:300,
						qWidth:375,
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
							x:589,
							y:7, 
							width:65,
							height:17,
							size:11,
							color:"#FFF",
							textAlign:"center"},
						{compId:"txt_col2",
							x:637,
							y:7, 
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
						x:558,
						y:372.8,
						width:90,
						height:23,
						size:11,
						type:"CHECK",
						textAlign:"center"},
						{compId:"ID_Button02",
						x:670,
						y:372.8,
						width:90,
						height:23,
						type:"RESET",
						size:11,
						textAlign:"center"}];
	var slide_feedback = [{correctTitleId:"ID_titleCorrect",x:20,y:120,size:11,width:160,color:"#573359",isBold:true},
						{correctBodyId:"ID_correctText",x:20,y:150,size:11,width:180},
						{wrongTitleId:"ID_titleIncorrect",x:20,y:120,size:11,width:160,color:"#573359",isBold:true},					
						{wrongBodyId:"ID_IncorrectText",x:20,y:150,size:11,width:180},
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




