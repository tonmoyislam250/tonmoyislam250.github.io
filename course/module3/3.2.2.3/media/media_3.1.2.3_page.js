loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

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
        textAlign:"left"}];
    
	var slide_1_type = "MULTI_BUTTON";	
	var slide_1_buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
						
	var slide_1_buttons = [{compId:"ID_btn01",/*DNS*/
						x:150.05,
						y:61.5,
						width:50.25,
						height:18.45,
						size:11,
						color:"#227297",
						textAlign:"center"},
						
					{compId:"ID_btn02",/*BOOTP*/
						x:208.45,
						y:61.5,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn03",
						x:208.7,
						y:89,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn04",
						x:264.55,
						y:61.5,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn05",
						x:264.7,
						y:89,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn06",
						x:264.55,
						y:113.5,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn07",
						x:322.95,
						y:61.5,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn08",
						x:322.95,
						y:89,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn09",
						x:380.55,
						y:61.5,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn10",
						x:210.45,
						y:152.5,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn11",
						x:264.55,
						y:152.5,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn12",
						x:150.05,
						y:204,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn13",
						x:150.05,
						y:226,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn14",
						x:208.45,
						y:226.5,
						width:50.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn15",
						x:280.55,
						y:204,
						width:59.95,
						height:23,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn16",
						x:350.55,
						y:204,
						width:59.95,
						height:23,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn17",
						x:150.75,
						y:265,
						width:41.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn18",
						x:200.75,
						y:265,
						width:41.25,
						height:18.45,
						size:11,
						textAlign:"center"},
						
					{compId:"ID_btn19",
						x:250.05,
						y:265.5,
						width:70.25,
						height:18.45,
						size:11,
						textAlign:"center"},
					{compId:"ID_btn20",
						x:325.05,
						y:265.5,
						width:100.25,
						height:18.45,
						size:11,
						textAlign:"center"}];
						
	var slide_1_buttonObject = {style:slide_1_buttonStyle,
								buttons:slide_1_buttons};
								
	var slide_1_commonTexts = [];
	
	var slide_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_s1_txt01",
								x:40-20,
								y:80,
								width:127.85,
								height:17.95,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_s1_txt02",
								x:155,
								y:33+3,
								width:60,
								height:29.55,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_s1_txt03",
								x:215,
								y:33+3,
								width:60,
								height:29.55,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_s1_txt04",
								x:271,
								y:33+2,
								width:60,
								height:29.55,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_s1_txt05",
								x:327,
								y:33+3,
								width:60,
								height:29.55,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_s1_txt06",
								x:386,
								y:33+2,
								width:60,
								height:29.55,
								size:11,
								textAlign:"center"},
					
						{compId:"ID_s1_txt09",
								x:386-170,
								y:33+2+150,
								width:46,
								height:29.55,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_s1_txt10",
								x:386-170+59,
								y:33+2+150,
								width:166,
								height:29.55,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_s1_txt16",
								x:31,
								y:154.85,
								width:109.20,
								height:29.55,
								size:11,
								textAlign:"center"},
						{compId:"ID_s1_txt19",
								x:28,
								y:207.85,
								width:109.20,
								height:29.55,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_s1_txt29",
								x:22-2,
								y:267.85-9+7,
								width:126.2,
								height:29.55,
								size:11,
								textAlign:"center"},
						{compId:"ID_s1_txt22",
								x:220,
								y:183.35,
								width:44,
								height:29.55,
								size:11,
								textAlign:"center"},
						{compId:"ID_s1_txt24",
								x:284.35,
								y:183.35,
								width:148,
								height:29.55,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_s1_txt07",
								x:40-20,
								y:80+75,
								width:127.85,
								height:17.95,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_s1_txt08",
								x:40-20,
								y:80+75+52,
								width:127.85,
								height:17.95,
								size:11,
								textAlign:"center"},
						{compId:"ID_s1_txt11",
								x:40-20,
								y:80+75+52+60,
								width:127.85,
								height:17.95,
								size:11,
								textAlign:"center"}];
					
	var common_images = [{name:"3_1_2_3.png",
							x:9.5,
							y:27.5, 
							width:427,
							height:260,
							type:""},
						{name:"textbox.jpg",
							x:6,
							y:293, 
							width:432,
							height:111,
							type:""}];
	
						
	var slide_1_1_type = "DESCRIPTION";
	var slide_1_1_images = [];							
	var slide_1_1_dragtextboxs = [];
	var slide_1_1_textboxs = [{compId:"ID_bodyTxt01",
										x:7+5,
										y:320,
										width:440,
										height:17.45,
										size:11,
										textAlign:"left"}];	
												
	var slide_1_1_texts = [{compId:"ID_titleTxt01",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];		
														
	var slide_1_1_object = {templateType:slide_1_1_type,
							x:0,
							y:0,
							images:slide_1_1_images,							
							dragtextboxs:slide_1_1_dragtextboxs,
							textboxs:slide_1_1_textboxs,
							texts:slide_1_1_texts};
								
	var slide_1_2_type = "DESCRIPTION";
	
	var slide_1_2_images = [];		
						
	var slide_1_2_dragtextboxs = [];
	
	var slide_1_2_textboxs = [{compId:"ID_bodyTxt02",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
																
	var slide_1_2_texts = [{compId:"ID_titleTxt02",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
															
	var slide_1_2_object = {templateType:slide_1_2_type,
							x:0,
							y:0,
							images:slide_1_2_images,							
							dragtextboxs:slide_1_2_dragtextboxs,
							textboxs:slide_1_2_textboxs,
							texts:slide_1_2_texts};
							
	var slide_1_3_type = "DESCRIPTION";
	var slide_1_3_images = [];							
	var slide_1_3_dragtextboxs = [];
	var slide_1_3_textboxs = [{compId:"ID_bodyTxt03",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];
																	
	var slide_1_3_texts = [{compId:"ID_titleTxt03",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
														
	var slide_1_3_object = {templateType:slide_1_3_type,
							x:0,
							y:0,
							images:slide_1_3_images,							
							dragtextboxs:slide_1_3_dragtextboxs,
							textboxs:slide_1_3_textboxs,
							texts:slide_1_3_texts};

	var slide_1_4_type = "DESCRIPTION";
	var slide_1_4_images = [];							
	var slide_1_4_dragtextboxs = [];
	var slide_1_4_textboxs = [{compId:"ID_bodyTxt04",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_4_texts = [{compId:"ID_titleTxt04",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
															
	var slide_1_4_object = {templateType:slide_1_4_type,
										x:0,
										y:0,
										images:slide_1_4_images,							
										dragtextboxs:slide_1_4_dragtextboxs,
										textboxs:slide_1_4_textboxs,
										texts:slide_1_4_texts};

	var slide_1_5_type = "DESCRIPTION";
	
	var slide_1_5_images = [];	
							
	var slide_1_5_dragtextboxs = [];
	
	var slide_1_5_textboxs = [{compId:"ID_bodyTxt05",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_5_texts = [{compId:"ID_titleTxt05",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
												
	var slide_1_5_object = {templateType:slide_1_5_type,
										x:0,
										y:0,
										images:slide_1_5_images,							
										dragtextboxs:slide_1_5_dragtextboxs,
										textboxs:slide_1_5_textboxs,
										texts:slide_1_5_texts};
							
	var slide_1_6_type = "DESCRIPTION";
	
	var slide_1_6_images = [];		
						
	var slide_1_6_dragtextboxs = [];
	
	var slide_1_6_textboxs = [{compId:"ID_bodyTxt06",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_6_texts = [{compId:"ID_titleTxt06",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
												
	var slide_1_6_object = {templateType:slide_1_6_type,
										x:0,
										y:0,
										images:slide_1_6_images,							
										dragtextboxs:slide_1_6_dragtextboxs,
										textboxs:slide_1_6_textboxs,
										texts:slide_1_6_texts};
							
	var slide_1_7_type = "DESCRIPTION";
	
	var slide_1_7_images = [];	
							
	var slide_1_7_dragtextboxs = [];
	
	var slide_1_7_textboxs = [{compId:"ID_bodyTxt07",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_7_texts = [{compId:"ID_titleTxt07",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
											
	var slide_1_7_object = {templateType:slide_1_7_type,
							x:0,
							y:0,
							images:slide_1_7_images,							
							dragtextboxs:slide_1_7_dragtextboxs,
							textboxs:slide_1_7_textboxs,
							texts:slide_1_7_texts};
	var slide_1_8_type = "DESCRIPTION";
	var slide_1_8_images = [];							
	var slide_1_8_dragtextboxs = [];
	var slide_1_8_textboxs = [{compId:"ID_bodyTxt08",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_8_texts = [{compId:"ID_titleTxt08",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
																
	var slide_1_8_object = {templateType:slide_1_8_type,
							x:0,
							y:0,
							images:slide_1_8_images,							
							dragtextboxs:slide_1_8_dragtextboxs,
							textboxs:slide_1_8_textboxs,
							texts:slide_1_8_texts};
							
	var slide_1_9_type = "DESCRIPTION";
	var slide_1_9_images = [];							
	var slide_1_9_dragtextboxs = [];
	
	var slide_1_9_textboxs = [{compId:"ID_bodyTxt09",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_9_texts = [{compId:"ID_titleTxt09",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
												
	var slide_1_9_object = {templateType:slide_1_9_type,
							x:0,
							y:0,
							images:slide_1_9_images,							
							dragtextboxs:slide_1_9_dragtextboxs,
							textboxs:slide_1_9_textboxs,
							texts:slide_1_9_texts};
							
	var slide_1_10_type = "DESCRIPTION";
	
	var slide_1_10_images = [];						
		
	var slide_1_10_dragtextboxs = [];
	
	var slide_1_10_textboxs = [{compId:"ID_bodyTxt10",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_10_texts = [{compId:"ID_titleTxt10",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];		
															
	var slide_1_10_object = {templateType:slide_1_10_type,
										x:0,
										y:0,
									images:slide_1_10_images,							
									dragtextboxs:slide_1_10_dragtextboxs,
									textboxs:slide_1_10_textboxs,
									texts:slide_1_10_texts};
									
	var slide_1_11_type = "DESCRIPTION";
	var slide_1_11_images = [];							
	var slide_1_11_dragtextboxs = [];
	
	var slide_1_11_textboxs = [{compId:"ID_bodyTxt11",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_11_texts = [{compId:"ID_titleTxt11",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
															
	var slide_1_11_object = {templateType:slide_1_11_type,
										x:0,
										y:0,
									images:slide_1_11_images,							
									dragtextboxs:slide_1_11_dragtextboxs,
									textboxs:slide_1_11_textboxs,
									texts:slide_1_11_texts};

	var slide_1_12_type = "DESCRIPTION";
	var slide_1_12_images = [];							
	var slide_1_12_dragtextboxs = [];
	
	var slide_1_12_textboxs = [{compId:"ID_bodyTxt12",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_12_texts = [{compId:"ID_titleTxt12",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
															
	var slide_1_12_object = {templateType:slide_1_12_type,
										x:0,
										y:0,
										images:slide_1_12_images,							
										dragtextboxs:slide_1_12_dragtextboxs,
										textboxs:slide_1_12_textboxs,
										texts:slide_1_12_texts};
										
	var slide_1_13_type = "DESCRIPTION";
	var slide_1_13_images = [];							
	var slide_1_13_dragtextboxs = [];
	
	var slide_1_13_textboxs = [{compId:"ID_bodyTxt13",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_13_texts = [{compId:"ID_titleTxt13",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
														
	var slide_1_13_object = {templateType:slide_1_13_type,
										x:0,
										y:0,
										images:slide_1_13_images,							
										dragtextboxs:slide_1_13_dragtextboxs,
										textboxs:slide_1_13_textboxs,
										texts:slide_1_13_texts};
										
	var slide_1_14_type = "DESCRIPTION";
	var slide_1_14_images = [];							
	var slide_1_14_dragtextboxs = [];
	
	var slide_1_14_textboxs = [{compId:"ID_bodyTxt14",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_14_texts = [{compId:"ID_titleTxt14",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
												
	var slide_1_14_object = {templateType:slide_1_14_type,
								x:0,
								y:0,
								images:slide_1_14_images,							
								dragtextboxs:slide_1_14_dragtextboxs,
								textboxs:slide_1_14_textboxs,
								texts:slide_1_14_texts};
								
	var slide_1_15_type = "DESCRIPTION";
	var slide_1_15_images = [];							
	var slide_1_15_dragtextboxs = [];
	
	var slide_1_15_textboxs = [{compId:"ID_bodyTxt15",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_15_texts = [{compId:"ID_titleTxt15",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
												
	var slide_1_15_object = {templateType:slide_1_15_type,
							x:0,
							y:0,
							images:slide_1_15_images,							
							dragtextboxs:slide_1_15_dragtextboxs,
							textboxs:slide_1_15_textboxs,
							texts:slide_1_15_texts};
							
	var slide_1_16_type = "DESCRIPTION";
	var slide_1_16_images = [];							
	var slide_1_16_dragtextboxs = [];
	
	var slide_1_16_textboxs = [{compId:"ID_bodyTxt16",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_16_texts = [{compId:"ID_titleTxt16",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
												
	var slide_1_16_object = {templateType:slide_1_16_type,
							x:0,
							y:0,
							images:slide_1_16_images,							
							dragtextboxs:slide_1_16_dragtextboxs,
							textboxs:slide_1_16_textboxs,
							texts:slide_1_16_texts};
							
	var slide_1_17_type = "DESCRIPTION";
	var slide_1_17_images = [];							
	var slide_1_17_dragtextboxs = [];
	
	var slide_1_17_textboxs = [{compId:"ID_bodyTxt17",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_17_texts = [{compId:"ID_titleTxt17",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
												
	var slide_1_17_object = {templateType:slide_1_17_type,
							x:0,
							y:0,
							images:slide_1_17_images,							
							dragtextboxs:slide_1_17_dragtextboxs,
							textboxs:slide_1_17_textboxs,
							texts:slide_1_17_texts};
							
	var slide_1_18_type = "DESCRIPTION";
	var slide_1_18_images = [];							
	var slide_1_18_dragtextboxs = [];
	
	var slide_1_18_textboxs = [{compId:"ID_bodyTxt18",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_18_texts = [{compId:"ID_titleTxt18",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];		
											
	var slide_1_18_object = {templateType:slide_1_18_type,
							x:0,
							y:0,
							images:slide_1_18_images,							
							dragtextboxs:slide_1_18_dragtextboxs,
							textboxs:slide_1_18_textboxs,
							texts:slide_1_18_texts};
							
	var slide_1_19_type = "DESCRIPTION";
	var slide_1_19_images = [];							
	var slide_1_19_dragtextboxs = [];
	
	var slide_1_19_textboxs = [{compId:"ID_bodyTxt19",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_19_texts = [{compId:"ID_titleTxt19",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
												
	var slide_1_19_object = {templateType:slide_1_19_type,
							x:0,
							y:0,
							images:slide_1_19_images,							
							dragtextboxs:slide_1_19_dragtextboxs,
							textboxs:slide_1_19_textboxs,
							texts:slide_1_19_texts};
	var slide_1_20_type = "DESCRIPTION";
	var slide_1_20_images = [];							
	var slide_1_20_dragtextboxs = [];
	
	var slide_1_20_textboxs = [{compId:"ID_bodyTxt20",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_20_texts = [{compId:"ID_titleTxt20",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
												
	var slide_1_20_object = {templateType:slide_1_20_type,
							x:0,
							y:0,
							images:slide_1_20_images,							
							dragtextboxs:slide_1_20_dragtextboxs,
							textboxs:slide_1_20_textboxs,
							texts:slide_1_20_texts};
							
	var slide_1_21_type = "DESCRIPTION";
	var slide_1_21_images = [];							
	var slide_1_21_dragtextboxs = [];
	
	var slide_1_21_textboxs = [{compId:"ID_bodyTxt21",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_21_texts = [{compId:"ID_titleTxt21",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
														
	var slide_1_21_object = {templateType:slide_1_21_type,
							x:0,
							y:0,
							images:slide_1_21_images,							
							dragtextboxs:slide_1_21_dragtextboxs,
							textboxs:slide_1_21_textboxs,
							texts:slide_1_21_texts};
	var slide_1_22_type = "DESCRIPTION";
	var slide_1_22_images = [];							
	var slide_1_22_dragtextboxs = [];
	
	var slide_1_22_textboxs = [{compId:"ID_bodyTxt22",
										x:7+5,
										y:320,
										width:417,
										height:17.45,
										size:11,
										textAlign:"left"}];	
															
	var slide_1_22_texts = [{compId:"ID_titleTxt22",
									x:25+3-4,
									y:297,
									width:440,
									height:17.45,
									size:11,
									color:"#472e55",
									textAlign:"left"}];	
					
	var slide_1_22_object = {templateType:slide_1_22_type,
							x:0,
							y:0,
							images:slide_1_22_images,							
							dragtextboxs:slide_1_22_dragtextboxs,
							textboxs:slide_1_22_textboxs,
							texts:slide_1_22_texts};
							
	
										
	var slide_1_slides = [slide_1_1_object,slide_1_2_object,slide_1_3_object,slide_1_4_object,slide_1_5_object,slide_1_6_object,slide_1_7_object,slide_1_8_object,slide_1_9_object,slide_1_10_object,slide_1_11_object,slide_1_12_object,slide_1_13_object,slide_1_14_object,slide_1_15_object,slide_1_16_object,slide_1_17_object,slide_1_18_object,slide_1_19_object,slide_1_20_object,slide_1_21_object,slide_1_22_object,];
						
	var slide_1_object = {templateType:slide_1_type,
									 x:0,
									 y:0,
							textObject:slide_texts,
							images:common_images,
							buttonObject:slide_1_buttonObject,
							slideObject:slide_1_slides};

/* Second slide*/

var slide_2_type = "INTERACTIVEANIM";

			
			var slide_2_texts = {compId:"ID_s2_title",
			x:0,
			y:2,
			width:400,
			height:17,
			size:14,
			textAlign:"center"};
			
			var slide_2_object = {templateType:slide_2_type,
			x:0,
			y:0,
			texts:slide_2_texts,
			animId:0,
			};

/* second Slide ends*/

/* Third slide*/

var slide_3_type = "INTERACTIVEANIM";
			
			var slide_3_texts = {compId:"ID_s3_title",
			x:0,
			y:2,
			width:400,
			height:17,
			size:14,
			textAlign:"center"};
			
			var slide_3_object = {templateType:slide_3_type,
			x:0,
			y:0,
			animId:1,
			texts:slide_3_texts};

	var slides = [slide_1_object,slide_2_object,slide_3_object];
	  
    return {templateType:template_type,
        textObject:commonTexts,		
        slideObject:slides};
}