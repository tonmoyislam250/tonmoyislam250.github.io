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
    var commonTexts = [];

    var slide_1_type = "IMAGE";

	var slide_1_images = [{name:"outputBox.png",
								x:166.2,
								y:88.15,
								width:278,
								height:194.85,
								type:""},
							{name:"arrow_up.png",
									x:100,
									y:77.35,
									width:13,
									height:109.25,
									type:""},
							{name:"arrow_down.png",
									x:100,
									y:285,
									width:13,
									height:75,
									type:""},
							{name:"curley_arrow.png",
									x:148.5,
									y:98,
									width:22,
									height:182.05,
									type:""}];

    var slide_1_texts = [{compId:"ID_title",
        x:2,
        y:2,
        width:468,
        height:17,
        size:14,
        textAlign:"center"},

        {compId:"ID_txt01",
            x:22,
            y:149.1,
            width:119.00,
            height:32,
            size:11,
            textAlign:"left"},
         {compId:"ID_txt02",
            x:22,
            y:260,
            width:119.00,
            height:32,
            size:11,
            textAlign:"left"},
		 {compId:"ID_txt03",
            x:190,
            y:244,
            width:260,
            height:17,
            size:11,
            textAlign:"left"},

			{compId:"staticTxt1",/* Static text1 */
			bodyText:'Switch#<b>show running-config</b>',
			x:20,
			y:57, 
			width:198,
			height:59,
			size:11,
            color:'#000',
			textAlign:"left"},	
		
			{compId:"staticTxt2",/* Static text1 */
			bodyText:'Switch#<b>show running-config</b> <br/>Building configuration...<br/>Current configuration : 2904 bytes<br/>!<br/>! Last configuration change at 00:02:32 <br/>UTC Mon Mar 1 1993<br/>!<br/>version 15.0<br/>no service pad<br/>service timestamps debug datetime msec<br/>service timestamps log datetime msec<br/>no service password-encryption<br/>!<br/><br/>!',
			x:190,
			y:102.5, 
			width:255,
			height:14,
			size:11,
			textAlign:"left"},			

			{compId:"staticTxt3",/* Static text1 */
			bodyText:'Switch#<b style="color:#000;">copy running-config startup-config</b>',
			x:20,
			y:368, 
			width:298,
			height:59,
			size:11,
			textAlign:"left"}];

	var slide_graphics = [{	x:3,/* shapes for static text1 */
							y:53, 
							width:431.65,
							height:21.25,
							color:"#f3f3f3",
							stroke:"#918F90",
							thickness:2,
							corner:5},

							{x:3,/* shapes for static text2 */
							y:363.95, 
							width:431.65,
							height:21.25,
							color:"#f3f3f3",
							stroke:"#918F90",
							thickness:2,
							corner:5},]
	
	var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
		graphics:slide_graphics,		
        images:slide_1_images,
		texts:slide_1_texts};



   
			
  var slide_2_type = "SYNTAX_CHECKER";
  var slide_2_texts=[];
		
	
	var slide_2_object = {templateType:slide_2_type,
			texts:slide_2_texts,
        	syntax:"sc1"};

    var slides = [slide_1_object,slide_2_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}