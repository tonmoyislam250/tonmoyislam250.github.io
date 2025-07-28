loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "MULTI_BAR";
    var commonTexts = [];
    
	var slide_1_type = "MULTI_BUTTON";	
	var slide_1_buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
	var slide_1_buttons = [{compId:"ID_s1_btn01",
						x:80,
						y:336+2,
						width:93,
						height:21,
						size:11,
						textAlign:"center",
						expand:"right"},
						{compId:"ID_s1_btn02",
						x:194.95,
						y:336+2,
						width:93,
						height:21,
						size:11,
						textAlign:"center",
						expand:"right"},
						{compId:"ID_s1_btn03",
						x:309,
						y:336+2,
						width:93,
						height:21,
						size:11,
						textAlign:"center",
						expand:"right"}];
	var slide_1_buttonObject = {style:slide_1_buttonStyle,
								buttons:slide_1_buttons};
	
	var slide_1_commonTexts = [{compId:"ID_s2_inst",
						x:43,
						y:379,
						width:395,
						height:17,
						size:11,
						textAlign:"left",
						expand:"up"}];
	
	
	var slide_1_2_type = "IMAGE";
	var slide_1_2_images = [{name:"3_1_1_7_A_1.png",
							x:56,
							y:52,
							width:350,
							height:284,
							type:""},
							{name:"wave.gif",
							x:56-30+105,
							y:52-25-14,
							width:350,
							height:284,
							scrollable:"YES",
							divId:"commonImageText",
							type:""}];
									
	var slide_1_2_texts = [
							{compId:"ID_s1_txt01",
							x:0+62,
							y:275.95,
							width:45,
							height:17,
							size:11,
							textAlign:"right",
							expand:"right"},
							];							
	var slide_1_2_object = {
						templateType:slide_1_2_type,
						x:0,
						y:0,
						images:slide_1_2_images,
						texts:slide_1_2_texts
						};
						
	var slide_1_3_type = "IMAGE";
	var slide_1_3_images = [{name:"3_1_1_7_A_2.png",
							x:56,
							y:52,
							width:350,
							height:284,
							type:""},
							{name:"wave.gif",
							x:56-30+105,
							y:52-25-14,
							width:350,
							height:284,
							scrollable:"YES",
							divId:"commonImageText",
							type:""}];		
	var slide_1_3_texts = [{compId:"ID_s2_txt01",
							x:0+62,
							y:275.95,
							width:45,
							height:17,
							size:11,
							textAlign:"right",
							expand:"right"},
							];							
	var slide_1_3_object = {
						templateType:slide_1_3_type,
						x:0,
						y:0,
						images:slide_1_3_images,
						texts:slide_1_3_texts
						};
						
	var slide_1_4_type = "IMAGE";
	var slide_1_4_images = [{name:"3_1_1_7_A_3.png",
							x:56,
							y:56,
							width:350,
							height:284,
							type:""},
							{name:"wave.gif",
							x:56-30+105,
							y:52-25-14,
							width:350,
							height:284,
							scrollable:"YES",
							divId:"commonImageText",
							type:""}];		
	var slide_1_4_texts = [{compId:"ID_s2_txt01",
							x:0+62,
							y:275.95,
							width:45,
							height:17,
							size:11,
							textAlign:"right",
							expand:"right"}];							
	var slide_1_4_object = {
						templateType:slide_1_4_type,
						x:0,
						y:0,
						images:slide_1_4_images,
						texts:slide_1_4_texts
						};
						
						
						
							
										
	var slide_1_slides = [slide_1_2_object,slide_1_3_object,slide_1_4_object];
						
	var slide_1_object = {templateType:slide_1_type,
									 x:0,
									 y:0,
							textObject:slide_1_commonTexts,
							buttonObject:slide_1_buttonObject,
							slideObject:slide_1_slides};

//Slide 2 Starts


var slide_2_type = "MULTI_BUTTON";	
	var slide_2_buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
	var slide_2_buttons = [{compId:"ID_s2_btn01",
						x:80,
						y:320,
						width:93,
						height:21,
						size:11,
						textAlign:"center",
						expand:"right"},
						{compId:"ID_s2_btn02",
						x:194.95,
						y:320,
						width:93,
						height:21,
						size:11,
						textAlign:"center",
						expand:"right"},
						{compId:"ID_s2_btn03",
						x:309,
						y:320,
						width:93,
						height:21,
						size:11,
						textAlign:"center",
						expand:"right"}];
	var slide_2_buttonObject = {style:slide_2_buttonStyle,
								buttons:slide_2_buttons};
	
	var slide_2_commonTexts = [{compId:"ID_s1_txt01",
						x:309-200-74,
						y:320-143+5+14, 
						width:93,
						height:21,
						size:11,
						textAlign:"center",
						expand:"right"},
						{compId:"ID_s2_inst",
						x:309-200-114+39,
						y:320-143+5+212-10,
						width:410,
						height:21,
						size:11,
						textAlign:"center",
						expand:"right"}];
	
	
	var slide_2_2_type = "INTERACTIVEANIM";
										
	var slide_2_2_texts = [];							
	var slide_2_2_object = {
						templateType:slide_2_2_type,
						x:0,
						y:0,
						animId:0,
						texts:slide_2_2_texts
						};
						

	var slide_2_3_type = "INTERACTIVEANIM";										
	var slide_2_3_texts = [];							
	var slide_2_3_object = {
						templateType:slide_2_3_type,
						x:0,
						y:0,
						animId:1,
						texts:slide_2_3_texts
						};

						
				
	var slide_2_4_type = "INTERACTIVEANIM";										
	var slide_2_4_texts = [];							
	var slide_2_4_object = {
						templateType:slide_2_4_type,
						x:0,
						y:0,
						animId:2,
						texts:slide_2_4_texts
						};					
						
							
										
	var slide_2_slides = [slide_2_2_object,slide_2_3_object,slide_2_4_object];
						
	var slide_2_object = {templateType:slide_2_type,
									 x:0,
									 y:0,
							textObject:slide_2_commonTexts,
							buttonObject:slide_2_buttonObject,
							slideObject:slide_2_slides};

		
		
	var slides = [slide_1_object,slide_2_object];
	

   
   
    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}