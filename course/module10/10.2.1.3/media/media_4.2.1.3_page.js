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

    var slide_images = [{name:"4_2_1_3A.png",
						x:30,
						y:60,
						width:419.1,
						height:271.6,
						type:""},
						{name:"4_2_1_3.jpg",
						x:152,
						y:52,
						width:162.45,
						height:73,
						type:"STD"},
						{name:"highlightbox.png",
						x:172,
						y:86,
						width:110,
						height:73,
						type:""},
						{name:"arrow.png",
						x:288,
						y:90,
						width:80,
						height:15,
						type:""},
						];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:18,
							y:230, 
							width:84,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:362,
							y:230, 
							width:84,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:5,
							y:370, 
							width:470,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt04",
							x:200,
							y:172, 
							width:128.9,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_txt05",
							x:379,
							y:79, 
							width:103.85,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt06",
							x:118,
							y:207, 
							width:235.55,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt07",
							x:153,
							y:332, 
							width:159.4,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt08",
							x:135,
							y:260, 
							width:200,
							height:40,
							size:11,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
