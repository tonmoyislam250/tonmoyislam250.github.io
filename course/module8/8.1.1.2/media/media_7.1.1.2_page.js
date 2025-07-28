loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");

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
	var slide_1_buttons = [/*{compId:"ID_s1_btn0",
						x:30+22,
						y:336+2,
						width:142.95,
						height:21,
						size:11,
						textAlign:"center"},*/
						{compId:"ID_s1_btn01",
						x:30+22,
						y:336+2,
						width:142.95,
						height:23,
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_btn02",
						x:185+30,
						y:336+2,
						width:100.1,
						height:23,
						size:11,
						textAlign:"center"},
						{compId:"ID_s1_btn03",
						x:295+38,
						y:336+2,
						width:100.1,
						height:23,
						size:11,
						textAlign:"center"}];
	var slide_1_buttonObject = {style:slide_1_buttonStyle,
								buttons:slide_1_buttons};
	
	var slide_1_commonTexts = [];
	
	
	/*var slide_1_1_type = "IMAGE";
	var slide_1_1_images = [{name:"7_1_1_2_main.jpg",
							x:60.05,
							y:110.65,
							width:367.75,
							height:87.35,
							type:""}];		
	var slide_1_1_texts = [];							
	var slide_1_1_object = {
						templateType:slide_1_1_type,
						x:0,
						y:0,
						images:slide_1_1_images,
						texts:slide_1_1_texts
						};*/
								
	var slide_1_2_type = "IMAGE";
	var slide_1_2_images = [{name:"7_1_1_2_A.jpg",
							x:60.05,
							y:110.65,
							width:367.75,
							height:87.35,
							type:""}];		
	var slide_1_2_texts = [{compId:"ID_s1_txt01",
						x:80+15,
						y:233.80-20,
						width:340.10,
						height:27.65,
						size:11,
						textAlign:"left"}];							
	var slide_1_2_object = {
						templateType:slide_1_2_type,
						x:0,
						y:0,
						images:slide_1_2_images,
						texts:slide_1_2_texts
						};
						
	var slide_1_3_type = "IMAGE";
	var slide_1_3_images = [{name:"7_1_1_2_B.jpg",
							x:60.05,
							y:110.65,
							width:367.75,
							height:87.35,
							type:""}];		
	var slide_1_3_texts = [{compId:"ID_s1_txt02",
						x:122+15,
						y:233.80-20,
						width:300.10,
						height:27.65,
						size:11,
						textAlign:"left"}];							
	var slide_1_3_object = {
						templateType:slide_1_3_type,
						x:0,
						y:0,
						images:slide_1_3_images,
						texts:slide_1_3_texts
						};
						
	var slide_1_4_type = "IMAGE";
	var slide_1_4_images = [{name:"7_1_1_2_C.jpg",
							x:60.05,
							y:110.65,
							width:367.75,
							height:87.35,
							type:""}];		
	var slide_1_4_texts = [{compId:"ID_s1_txt03",
						x:80+3,
						y:233.80-20,
						width:340.10,
						height:27.65,
						size:11,
						textAlign:"left"}];							
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

var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_s2_table01",
                            x:15.5,
                            y:61.3}];
	var slide_2_images = [{name:"arrow.png",
							x:137.65,
							y:154.15,
							width:10,
							height:110.85,
							type:""},
							{name:"arrow.png",
							x:168.65,
							y:154.15,
							width:10,
							height:110.85,
							type:""}];
	var slide_2_texts = [
						{compId:"ID_txt09",
						x:142,
						y:236.45+30,
						width:78.20,
						height:17,
						size:11,
						textAlign:"center"},
						{compId:"ID_txt11",
						x:78,
						y:331.45-8,
						width:365.2,
						height:17,
						size:11,
						textAlign:"left"},
						{compId:"ID_txt12",
						x:78,
						y:334.45+19,
						width:269.2,
						height:17,
						size:11,
						textAlign:"left"},
						{compId:"ID_txt10",
						x:15.45,
						y:243.1+22,
						width:132.6,
						height:17,
						size:11,
						color:"#F68026",
						textAlign:"right",
						expand:"up+down"},
						{compId:"ID_s2_txt02",
						x:26.85,
						y:216+94,
						width:46.35,
						height:17,
						size:11,
						textAlign:"center",
						expand:"up"}];	
						
	var graphics_slide = [{x:25,
							y:325, 
							width:30,
							height:15,
							color:"#C1ABD1",
							stroke:"#4E4C4D",
							thickness:2,
							corner:4,
							type:"rectangle"},
							{x:25,
							y:352, 
							width:30,
							height:15,
							color:"#E8A0AC",
							stroke:"#4E4C4D",
							thickness:2,
							corner:4,
							type:"rectangle"},
							];
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							texts:slide_2_texts,
							images:slide_2_images,
							graphics:graphics_slide};
		
		
	var slides = [slide_1_object,slide_2_object];
	

   
   
    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}