//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"8_3_1_3.png",
						x:7,
						y:69.7,
						width:429.1,
						height:245.55,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"ID_txt01",
							x:161.15-7,
							y:52.55, 
							width:50,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt02",
							x:265.35-6,
							y:52.55, 
							width:50,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt03",
							x:41.75,
							y:70, 
							width:129.65,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt04",
							x:194.35+5,
							y:80, 
							width:70,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							
						{compId:"ID_txt11",
							x:302.5,
							y:70, 
							width:129.65,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt05",
							x:41.85,
							y:115.8, 
							width:129.65,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt06",
							x:194.35-27,
							y:115.8, 
							width:129.65,
							height:17,
							size:11,
							color:'#F26200',
							textAlign:"center"},
							
						{compId:"ID_txt07",
							x:303.85,
							y:115.8, 
							width:129.65,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt08",
							x:184.95-14,
							y:152.25+3, 
							width:129.65,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt09",
							x:355.45-7,
							y:306.95-19, 
							width:95,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt10",
							x:184.1-45,
							y:349.4, 
							width:220,
							height:17,
							size:11,
							textAlign:"left"},
							
						{compId:"staticTxt",
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td>2001 : 0DB8 : ACAD : <font color='#F68026'><b>0000</b></font> : <font color='#5FBC21'><b>0</b></font>000 : : /68</td></tr><tr><td>2001 : 0DB8 : ACAD : <font color='#F68026'><b>0000</b></font> : <font color='#5FBC21'><b>1</b></font>000 : : /68</td></tr><tr><td>2001 : 0DB8 : ACAD : <font color='#F68026'><b>0000</b></font> : <font color='#5FBC21'><b>2</b></font>000 : : /68</td></tr><tr><td>2001 : 0DB8 : ACAD : <font color='#F68026'><b>0000</b></font> : <font color='#5FBC21'><b>3</b></font>000 : : /68</td></tr><tr><td>2001 : 0DB8 : ACAD : <font color='#F68026'><b>0000</b></font> : <font color='#5FBC21'><b>4</b></font>000 : : /68</td></tr><tr><td>...</td></tr><tr><td>2001 : 0DB8 : ACAD : <font color='#F68026'><b>FFFF</b></font> : <font color='#5FBC21'><b>E</b></font>000 : : /68</td></tr><tr><td>2001 : 0DB8 : ACAD : <font color='#F68026'><b>FFFF</b></font> : <font color='#5FBC21'><b>F</b></font>000 : : /68</td></tr></table>",	
							x:136,
							y:178.9, 
							width:205.65,
							height:150,
							size:11,							
							textAlign:"left"},
						{compId:"ID_txt12",
							x:161.15+127-20,
							y:52.55+265-28,
							width:90}
							];

    var slide_object = {images:slide_images,
       					 texts:slide_texts};

    return {templateType:template_type,
        	slideObject:slide_object};

}