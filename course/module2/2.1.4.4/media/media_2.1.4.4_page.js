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

    var slide_1_type = "IMAGE";
    var slide_1_images = [];
    var slide_1_texts = [{compId:"ID_title",
        x:5,
        y:2,
        width:430,
        height:17,
        size:14,
        textAlign:"center"},
        {compId:"ID_s1_txt01",
            x:19,
            y:120.85,
            width:200,
            height:17,
            size:11,
            textAlign:"left"},
        {compId:"ID_s1_txt02",		
            x:248,
            y:90,
            width:185,
            height:17,
            size:11,
            textAlign:"left"},
        {compId:"ID_s1_txt03",
            x:90,
            y:297,
            width:230,
            height:17,
            size:11,
            textAlign:"left"},
      
		
		{compId:"staticTxt1",/* Static text1 */
			bodyText:'Switch#><b>clock set </b> <br/><span>% Incomplete command.</span><br/>Switch#<b>clock set 19:50:00</b> <span>% Incomplete command.</span>',
			x:13,
			y:40, 
			width:198,
			height:59,
			size:11,
			textAlign:"left"},
				
		{compId:"staticTxt2",/* Static text2 */
			bodyText:'Switch#<b>c</b><br/><span>% Ambiguous command:&#39;c&#39;</span>',
			x:241,
			y:40, 
			width:183.95,
			height:33.50,
			size:11,
			textAlign:"left"},

			{compId:"staticTxt3",/* Static text3 */
			bodyText:'Switch#<b>clock set 19:50:00 25 6 </b><br/> <span class="arrow">^</span> <br/><span>% Invalid input detected at &#39;^&#39; <br/>marker.</span>',
			x:83,
			y:216, 
			width:240,
			height:80,
			size:11,
			textAlign:"left"}];


	var slide_graphics = [{	x:5,/* shapes for static text1 */
							y:40, 
							width:210,
							height:70,
							color:"#f3f3f3",
							corner:5},

							{x:233,/* shapes for static text2*/
							y:40, 
							width:198,
							height:44,
							color:"#f3f3f3",
							corner:5},

							{x:75,/* shapes for static text3*/
							y:216, 
							width:249,
							height:72,
							color:"#f3f3f3",
							corner:5},
								
							
							/* Help messages box */
							{x:5,/* shapes for ID_s1_txt01*/
							y:115, 
							width:211,
							height:70,
							color:"#e0d5e6",
							corner:5,
							shadow:"YES"},

							{x:233,/* shapes for ID_s1_txt02*/
							y:86, 
							width:194,
							height:85,
							color:"#e0d5e6",
							corner:5,
							shadow:"YES"},
								
							{x:76,/*shapes for ID_s1_txt03*/
							y:291, 
							width:247,
							height:60,
							color:"#e0d5e6",
							corner:5,
							shadow:"YES",	
							}];
							
	
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
		graphics:slide_graphics,		
        texts:slide_1_texts};


   
			
   var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_s2_table",
							x:15,
							y:90-15, 
							width:420,
							height:300}];	
	
	var slide_2_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"}];	
	

	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							texts:slide_2_texts};


    var slides = [slide_1_object,slide_2_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}