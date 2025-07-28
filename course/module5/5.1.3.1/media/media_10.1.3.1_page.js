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
	var commonTexts = [{compId:"ID_s1_title",
							x:11,
							y:2, 
							width:430,
							height:17,
							size:14,
							expand:"down",
							textAlign:"center"}];
							
	var commonImages = [];
							
	var graphics_slide = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [];	

var table_1 ='<table id="tr1">'; 
table_1+='<tr><td >Decimal</td></tr>';
table_1+='<tr><td >0</td></tr>';
table_1+='<tr><td >1</td></tr>'; 
table_1+='<tr><td >2</td></tr>';
table_1+='<tr><td >3</td></tr>'; 
table_1+='<tr><td >4</td></tr>';
table_1+='<tr><td >5</td></tr>'; 
table_1+='<tr><td >6</td></tr>';
table_1+='<tr><td >7</td></tr>';
table_1+='<tr><td >8</td></tr>';
table_1+='<tr><td >9</td></tr>';
table_1+='<tr><td >10</td></tr>';
table_1+='<tr><td >11</td></tr>'; 
table_1+='<tr><td >12</td></tr>';
table_1+='<tr><td >13</td></tr>'; 
table_1+='<tr><td >14</td></tr>';
table_1+='<tr><td >15</td></tr>';
table_1+='</table>'; 

var table_2 ='<table id="tr2">'; 
table_2+='<tr><td >Binary</td></tr>';
table_2+='<tr><td >0000</td></tr>';
table_2+='<tr><td >0001</td></tr>'; 
table_2+='<tr><td >0010</td></tr>';
table_2+='<tr><td >0011</td></tr>'; 
table_2+='<tr><td >0100</td></tr>';
table_2+='<tr><td >0101</td></tr>'; 
table_2+='<tr><td >0110</td></tr>';
table_2+='<tr><td >0111</td></tr>';
table_2+='<tr><td >1000</td></tr>';
table_2+='<tr><td >1001</td></tr>';
table_2+='<tr><td >1010</td></tr>';
table_2+='<tr><td >1011</td></tr>'; 
table_2+='<tr><td >1100</td></tr>';
table_2+='<tr><td >1101</td></tr>'; 
table_2+='<tr><td >1110</td></tr>';
table_2+='<tr><td >1111</td></tr>';
table_2+='</table>';

var table_3 ='<table id="tr3">'; 
table_3+='<tr><td >Hexadecimal</td></tr>';
table_3+='<tr><td >0</td></tr>';
table_3+='<tr><td >1</td></tr>'; 
table_3+='<tr><td >2</td></tr>';
table_3+='<tr><td >3</td></tr>'; 
table_3+='<tr><td >4</td></tr>';
table_3+='<tr><td >5</td></tr>'; 
table_3+='<tr><td >6</td></tr>';
table_3+='<tr><td >7</td></tr>';
table_3+='<tr><td >8</td></tr>';
table_3+='<tr><td >9</td></tr>';
table_3+='<tr><td >A</td></tr>';
table_3+='<tr><td >B</td></tr>'; 
table_3+='<tr><td >C</td></tr>';
table_3+='<tr><td >D</td></tr>'; 
table_3+='<tr><td >E</td></tr>';
table_3+='<tr><td >F</td></tr>';
table_3+='</table>';

var table_4 ='<table id="tr4">'; 
table_4+='<tr><td >Decimal</td></tr>';
table_4+='<tr><td >0</td></tr>';
table_4+='<tr><td >1</td></tr>'; 
table_4+='<tr><td >2</td></tr>';
table_4+='<tr><td >3</td></tr>'; 
table_4+='<tr><td >4</td></tr>';
table_4+='<tr><td >5</td></tr>'; 
table_4+='<tr><td >6</td></tr>';
table_4+='<tr><td >7</td></tr>';
table_4+='<tr><td >8</td></tr>'; 
table_4+='<tr><td >10</td></tr>';
table_4+='<tr><td >15</td></tr>'; 
table_4+='<tr><td >16</td></tr>';
table_4+='<tr><td >32</td></tr>'; 
table_4+='<tr><td >64</td></tr>';
table_4+='<tr><td >128</td></tr>'; 
table_4+='<tr><td >192</td></tr>'; 
table_4+='<tr><td >202</td></tr>';
table_4+='<tr><td >240</td></tr>'; 
table_4+='<tr><td >255</td></tr>'; 
table_4+='</table>'; 

var table_5 ='<table id="tr5">'; 
table_5+='<tr><td >Binary</td></tr>';
table_5+='<tr><td >0000 0000</td></tr>';
table_5+='<tr><td >0000 0001</td></tr>'; 
table_5+='<tr><td >0000 0010</td></tr>';
table_5+='<tr><td >0000 0011</td></tr>'; 
table_5+='<tr><td >0000 0100</td></tr>';
table_5+='<tr><td >0000 0101</td></tr>'; 
table_5+='<tr><td >0000 0110</td></tr>';
table_5+='<tr><td >0000 0111</td></tr>';
table_5+='<tr><td >0000 1000</td></tr>';
table_5+='<tr><td >0000 1010</td></tr>';
table_5+='<tr><td >0000 1111</td></tr>';
table_5+='<tr><td >0001 0000</td></tr>'; 
table_5+='<tr><td >0010 0000</td></tr>';
table_5+='<tr><td >0100 0000</td></tr>'; 
table_5+='<tr><td >1000 0000</td></tr>';
table_5+='<tr><td >1100 0000</td></tr>'; 
table_5+='<tr><td >1100 1010</td></tr>'; 
table_5+='<tr><td >1111 0000</td></tr>';
table_5+='<tr><td >1111 1111</td></tr>';
table_5+='</table>';

var table_6 ='<table id="tr6">'; 
table_6+='<tr><td >Hexadecimal</td></tr>';
table_6+='<tr><td >00</td></tr>';
table_6+='<tr><td >01</td></tr>'; 
table_6+='<tr><td >02</td></tr>';
table_6+='<tr><td >03</td></tr>'; 
table_6+='<tr><td >04</td></tr>';
table_6+='<tr><td >05</td></tr>'; 
table_6+='<tr><td >06</td></tr>';
table_6+='<tr><td >07</td></tr>';
table_6+='<tr><td >08</td></tr>';
table_6+='<tr><td >0A</td></tr>';
table_6+='<tr><td >0F</td></tr>'; 
table_6+='<tr><td >10</td></tr>';
table_6+='<tr><td >20</td></tr>'; 
table_6+='<tr><td >40</td></tr>';
table_6+='<tr><td >80</td></tr>'; 
table_6+='<tr><td >C0</td></tr>';
table_6+='<tr><td >CA</td></tr>'; 
table_6+='<tr><td >F0</td></tr>';
table_6+='<tr><td >FF</td></tr>';
table_6+='</table>';
 
	var slide_1_texts = [{compId:"static_txt01",
							bodyText:table_1,
							x:6.1,
							y:38.75,
							width:120,
							height:16,
							size:11,
							textAlign:"center"},
						{compId:"static_txt02",
							bodyText:table_2,
							x:6.1+150,
							y:38.75,
							width:120,
							height:16,
							size:11,
							textAlign:"center"},
						{compId:"static_txt03",
							bodyText:table_3,
							x:6.1+300,
							y:38.75,
							width:120,
							height:16,
							size:11,
							textAlign:"center"},
						{compId:"ID_s1_txt01", 
							x:6.1+50,
							y:22.75,
							width:340,
							height:16,
							size:11,
							textAlign:"center"}
							];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [];								
	var slide_2_texts = [	{compId:"ID_s2_txt01", 
							x:6.1+50,
							y:22.75,
							width:340,
							height:16,
							size:11,
							textAlign:"center"},
							{compId:"static_txt01",
							bodyText:table_4,
							x:6.1,
							y:38.75,
							width:120,
							height:16,
							size:11,
							textAlign:"center"},
						{compId:"static_txt02",
							bodyText:table_5,
							x:6.1+150,
							y:38.75,
							width:120,
							height:16,
							size:11,
							textAlign:"center"},
						{compId:"static_txt03",
							bodyText:table_6,
							x:6.1+300,
							y:38.75,
							width:120,
							height:16,
							size:11,
							textAlign:"center"}
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
			graphics:graphics_slide,
			slideObject:slides};
	
}
