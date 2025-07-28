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

    var slide_images = [{name:"4.2.1.6.png",
						x:24.15,
						y:68.6,
						width:352.75,
						height:274.45,
						type:""}];

    var slide_texts = [{compId:"ID_title",					
						 x:10,
						y:10,
						width:460,
						height:15,
						size:14,
						textAlign:"center"},
							{compId:"ID_txt01",
							x:7,
							y:184.65, 
							width:104,
							height:17,
							size:11,							
							textAlign:"center"},

							{compId:"ID_txt02",
							x:81.35,
							y:224.9, 
							width:104,
							height:17,
							size:11,							
							textAlign:"left"},

							{compId:"ID_txt03",
							x:32,
							y:264.55, 
							width:104,
							height:17,
							size:11,							
							textAlign:"left"},
							{compId:"ID_txt04",
							x:102.95,
							y:320.8, 
							width:104,
							height:17,
							size:11,							
							textAlign:"right"},
							{compId:"ID_txt05",
							x:-100.95,
							y:304.45, 
							width:306.95,
							height:17,
							size:11,							
							textAlign:"right"},
							{compId:"ID_txt06",
							x:391.95,/* shapes for static text6*/
							y:130, 
							width:94,
							height:17,
							size:11,
							textAlign:"left"},

							{compId:"ID_txt07",
							x:391.95,
							y:175.6, 
							width:70,
							height:17,
							size:11,							
							textAlign:"left"},

							{compId:"ID_txt08",
							x:153.05,/* shapes for static text8*/
							y:116,
							width:134,
							height:17,
							size:11,
							textAlign:"left"},

							{compId:"ID_txt09",
							x:52.05,/* shapes for static text9 */
							y:38,
							width:104,
							height:17,
							size:11,
							textAlign:"center"},

							{compId:"ID_txt10",
							x:52.4,
							y:78.45 ,
							width:104,
							height:17,
							size:11,							
							textAlign:"left"},

							{compId:"ID_txt12",
							x:125.95,
							y:76.5, 
							width:104,
							height:17,
							size:11,
							color:"#5FBC21",
							textAlign:"left"},

							{compId:"ID_txt11",
							x:80.95,
							y:115, 
							width:104,
							height:17,
							size:11,	
							color:"#393536",						
							textAlign:"left"},

							{compId:"ID_caption01",
							x:2,
							y:370.45, 
							width:463.95,
							height:17,
							size:11,
							textAlign:"left"},


							{compId:"ID_bubble01",
							x:265.25,
							y:48.45, 
							size:11,
							textAlign:"left"},

							{compId:"ID_bubble02",
							x:271-27,
							y:310-24, 
							size:11,
							textAlign:"left"}];

							
							
    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

