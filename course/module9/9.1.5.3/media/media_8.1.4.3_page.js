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
	
	var commonImages = [];
	var commonTexts = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"border.png",
							 x:357.5+13,
							 y:150, 
							 width:7.3,
							 height:121,
							 size:11,							 
							 type:""}];								
	var slide_1_texts = [{compId:"staticTxt1_1",
							 bodyText:"<table width='200' border='0' cellspacing='0' cellpadding='0'> <tr> <td class='wide'>&nbsp;</td> <td class='green'>11000000.10101000.00010100</td> <td class='orange'>.000</td> <td class='orange'>00000</td> <td>&nbsp;</td> <td>192.168.20.0/24</td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>0</td> <td class='green'>11000000.10101000.00010100</td> <td class='purple'>.000</td> <td class='orange'>00000</td> <td>&nbsp;</td> <td>192.168.20.0/27</td> </tr> <tr> <td>1</td> <td class='green'>11000000.10101000.00010100</td> <td class='purple'>.001</td> <td class='orange'>00000</td> <td>&nbsp;</td> <td>192.168.20.32/27</td> </tr> <tr> <td>2</td> <td class='green'>11000000.10101000.00010100</td> <td class='purple'>.010</td> <td class='orange'>00000</td> <td>&nbsp;</td> <td>192.168.20.64/27</td> </tr> <tr> <td>3</td> <td class='green'>11000000.10101000.00010100</td> <td class='purple'>.011</td> <td class='orange'>00000</td> <td>&nbsp;</td> <td>192.168.20.96/27</td> </tr> <tr> <td>4</td> <td class='green'>11000000.10101000.00010100</td> <td class='purple'>.100</td> <td class='orange'>00000</td> <td>&nbsp;</td> <td>192.168.20.128/27</td> </tr> <tr> <td>5</td> <td class='green'>11000000.10101000.00010100</td> <td class='purple'>.101</td> <td class='orange'>00000</td> <td>&nbsp;</td> <td>192.168.20.160/27</td> </tr> <tr> <td>6</td> <td class='green'>11000000.10101000.00010100</td> <td class='purple'>.110</td> <td class='orange'>00000</td> <td>&nbsp;</td> <td>192.168.20.192/27</td> </tr> <tr> <td>7</td> <td class='green'>11000000.10101000.00010100</td> <td class='purple'>.111</td> <td class='orange'>00000</td> <td>&nbsp;</td> <td>192.168.20.224/27</td> </tr></table>",
							 x:60-42,
							 y:118.3, 
							 width:365,
							 height:17,
							 size:11,			
							 textAlign:"left"},
							 {compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:377.95+15,
							y:158.75, 
							width:58,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt02",
							x:377.95+15,
							y:208.25, 
							width:58,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt03",
							x:161.45,
							y:275.95, 
							width:120,
							height:17,
							size:11,
							textAlign:"left"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"border_2.png",
							 x:357.5+21,
							 y:167, 
							 width:7.3,
							 height:121,
							 size:11,							 
							 type:""},
							 {name:"arrow.png",
							 x:1,
							 y:123.25, 
							 width:15.8,
							 height:49,
							 size:11,							 
							 type:""},
							 {name:"arrow_straight.png",
							 x:228.5,
							 y:132.25, 
							 width:13.3,
							 height:36.05,
							 size:11,							 
							 type:""}
							 ];								
	var slide_2_texts = [{compId:"staticTxt1_1",
							 bodyText:"<table width='200' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='right' class='wide'>7</td> <td class='green'>11000000.10101000.00010100</td> <td class='purple'>.111</td> <td class='orange'><span class='font_purple'>000</span></td> <td class='orange'>00</td> <td>&nbsp;</td> <td>192.168.20.224/27</td> </tr> <tr> <td height='35'>&nbsp;</td> <td>&nbsp;</td> <td colspan='2'>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td>7:0 </td> <td class='green'>11000000.10101000.00010100</td> <td colspan='2' class='purple'>.111000</td> <td class='orange'>00</td> <td>&nbsp;</td> <td>192.168.20.224/30</td> </tr> <tr> <td>7:1</td> <td class='green'>11000000.10101000.00010100</td> <td colspan='2' class='purple'>.111001</td> <td class='orange'>00</td> <td>&nbsp;</td> <td>192.168.20.228/30</td> </tr> <tr> <td>7:2</td> <td class='green'>11000000.10101000.00010100</td> <td colspan='2' class='purple'>.111010</td> <td class='orange'>00</td> <td>&nbsp;</td> <td>192.168.20.232/30</td> </tr> <tr> <td>7:3</td> <td class='green'>11000000.10101000.00010100</td> <td colspan='2' class='purple'>.111011</td> <td class='orange'>00</td> <td>&nbsp;</td> <td>192.168.20.236/30</td> </tr> <tr> <td>7:4</td> <td class='green'>11000000.10101000.00010100</td> <td colspan='2' class='purple'>.111100</td> <td class='orange'>00</td> <td>&nbsp;</td> <td>192.168.20.240/30</td> </tr> <tr> <td>7:5</td> <td class='green'>11000000.10101000.00010100</td> <td colspan='2' class='purple'>.111101</td> <td class='orange'>00</td> <td>&nbsp;</td> <td>192.168.20.244/30</td> </tr> <tr> <td>7:6</td> <td class='green'>11000000.10101000.00010100</td> <td colspan='2' class='purple'>.111110</td> <td class='orange'>00</td> <td>&nbsp;</td> <td>192.168.20.248/30</td> </tr> <tr> <td>7:7</td> <td class='green'>11000000.10101000.00010100</td> <td colspan='2' class='purple'>.111111</td> <td class='orange'>00</td> <td>&nbsp;</td> <td>192.168.20.252/30</td> </tr></table>",
							 x:60-44,
							 y:118.3, 
							 width:376,
							 height:17,
							 size:11,			
							 textAlign:"left"},
							 {compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:28.2+10,
							y:142.75, 
							width:200,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s2_txt02",
							x:380.95+18,
							y:182.25, 
							width:58,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s2_txt03",
							x:380.95+18,
							y:227.5, 
							width:58,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s2_txt04",
							x:162.65,
							y:306.05, 
							width:120,
							height:17,
							size:11,
							textAlign:"left"}
							 ];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};

	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			slideObject:slides};
	
}
