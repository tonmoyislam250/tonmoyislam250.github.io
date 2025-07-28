
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

    var slide_images = [{name:"10_2_2_1.jpg",
						x:192.65,
						y:57.8,
						width:238.4,
						height:135.6,
						type:""},
						{name:"textbox.jpg",
						x:66.65,
						y:220.8,
						width:330,
						height:131,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:87+5,
							y:262-14, 
							width:309,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:212.25,
							y:35, 
							width:221.85,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up"},
							{compId:"ID_txt04",
							x:29.95,
							y:201.45-90, 
							width:135,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt05",
							x:32,
							y:332.45+27, 
							width:450,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up+down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}