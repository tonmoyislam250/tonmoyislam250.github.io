//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"2_1_4_3.png",
							x:6,
							y:40, 
							width:300, 
							height:342.05,
							type:"none"},
							{name:"arrow1.png",
							x:126,
							y:65, 
							width:180, 
							height:13.30,
							type:""},
							{name:"arrow2.png",
							x:196,
							y:146, 
							width:130, 
							height:13.30,
							type:""},
							{name:"arrow3.png",
							x:215,
							y:224, 
							width:108, 
							height:13,
							type:""}];
							
	var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							
							{compId:"ID_txt01",
							x:310,
							y:45.85, 
							width:151,
							height:43,
							size:11,
							textAlign:"left"},
							
							{compId:"ID_txt02",
							x:310,
							y:124, 
							width:151,
							height:43,
							size:11,
							textAlign:"left"},
							
							{compId:"ID_txt03",
							x:310,
							y:217.55, 
							width:151,
							height:43,
							size:11,
							textAlign:"left"},							
							
							{compId:"staticTxt",
							bodyText:"Switch#<b>cl?</b><br />clear  clock ",
							x:30,
							y:55,
							width:214,
							size:11,
							color:"#000000",
							textAlign:"left",
							},
							{compId:"staticTxt1",
							bodyText:"Switch#<b>clock set ?</b><br />&nbsp;&nbsp;hh:mm:ss  Current Time",
							x:30,
							y:145,
							width:214,
							size:11,
							color:"#000000",
							textAlign:"left",
							},
							{compId:"staticTxt1",
							bodyText:"Switch#<b>clock set 19:50:00 ?</b><br />&nbsp;&nbsp;<1-31>&nbsp;Day of the month<br />						                                      &nbsp;&nbsp;MONTH&nbsp;&nbsp;Month of the year",
							x:30,
							y:215,
							width:214,
							size:11,
							color:"#000000",
							textAlign:"left",
							},
							{compId:"staticTxt2",
							bodyText:"Switch#<b>clock set 19:50:00 25 June 2012</b><br />Switch#",
							x:30,
							y:310,
							width:267,
							size:11,
							color:"#000000",
							textAlign:"left",
							}
							];
	

	
	
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);