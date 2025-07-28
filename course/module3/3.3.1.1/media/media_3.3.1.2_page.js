loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");


function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "MULTI_BAR";
    var commonTexts = [{compId:"ID_inst",
        x:5,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"},
		{compId:"ID_s1_title",
							x:34,
							y:2, 
							width:417,
							height:17,
							size:16,
							textAlign:"center"}
		];
    
	var slide_1_type = "MULTI_BUTTON";	
	var slide_1_buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
	var slide_1_buttons = [{compId:"ID_s1_btn01",
						x:228.75,
						y:289.25,
						width:100.1,
						height:20,
						size:11,
						textAlign:"center"},
					{compId:"ID_s1_btn02",
						x:333.55,
						y:289.25,
						width:100.1,
						height:20,
						size:11,
						textAlign:"center"}];
	var slide_1_buttonObject = {style:slide_1_buttonStyle,
								buttons:slide_1_buttons};
	var slide_1_commonTexts = [];
	
	var slide_1_1_type = "INTERACTIVEANIM";
			
	var slide_1_1_texts = {};							
	var slide_1_1_object = {
						templateType:slide_1_1_type,
						x:0,
						y:0,
						animId:0,
						texts:slide_1_1_texts
						};
								
	var slide_1_2_type = "INTERACTIVEANIM";
	var slide_1_2_texts ={};							
	var slide_1_2_object = {
						templateType:slide_1_2_type,
						x:0,
						y:0,
						animId:1,
						texts:slide_1_2_texts
						};
							
										
	var slide_1_slides = [slide_1_1_object,slide_1_2_object];
						
	var slide_1_object = {templateType:slide_1_type,
									 x:0,
									 y:0,
							textObject:slide_1_commonTexts,
							buttonObject:slide_1_buttonObject,
							slideObject:slide_1_slides};
												
	var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"3_3_1_2_B_1.png",
							x:28,
							y:66,
							width:412.15,
							height:284.8,
							type:""}];
    var slide_2_texts = [{compId:"ID_s2_txt01",
						x:240,
						y:70,
						width:210,
						height:17,
						size:11,
						textAlign:"left"},
						{compId:"ID_s2_txt02",
						x:190,
						y:282.5,
						width:205,
						height:17,
						size:11,
						textAlign:"center"}
						];
							
	var slide_2_slides = [slide_2_object];
	
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        texts:slide_2_texts};
		
		
	var slides = [slide_1_object,slide_2_object];
	

   
   
    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}