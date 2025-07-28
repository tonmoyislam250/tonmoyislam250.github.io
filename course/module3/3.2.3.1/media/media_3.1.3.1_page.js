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

    var slide_images = [{name:"3.1.3.1.A.jpg",
							x:10,
							y:40,
							width:220,
							height:80,
							type:"HOTSPOT",
							url:"http://www.eciaonline.org/eiastandards"},
						{name:"3.1.3.1.B.jpg",
							x:240,
							y:175.3,
							width:220,
							height:68.8,
							type:"HOTSPOT",
							url:"http://www.ieee.org"},
						{name:"3.1.3.1.C.jpg",
							x:182.15,
							y:259,
							width:100,
							height:100,
							type:"HOTSPOT",
							url:"http://www.itu.int/en/Pages/default.aspx"},
						{name:"3.1.3.1.D.jpg",
							x:10,
							y:147.05,
							width:220,
							height:84.65,
							type:"HOTSPOT",
							url:"http://www.iana.org"},
						{name:"3.1.3.1.E.jpg",
							x:10,
							y:258.95,
							width:149.3,
							height:100,
							type:"HOTSPOT",
							url:"http://www.icann.org"},
						{name:"3.1.3.1.F.jpg",
							x:305,
							y:259,
							width:155,
							height:100,
							type:"HOTSPOT",
							url:"http://www.tiaonline.org"},
						{name:"3.1.3.1.G.jpg",
							x:240,
							y:40,
							width:220,
							height:120,
							type:"HOTSPOT",
							url:"http://www.ietf.org"}];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
						{compId:"ID_inst",
							x:6,
							y:381, 
							width:455,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

