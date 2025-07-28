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

    var slide_images = [
						{name:"textbox.png",
							x:85.95,
							y:226.3,
							width:384,
							height:171,
							},
							{name:"whitebg.png",
							x:6.95,
							y:6.3,
							width:361,
							height:263.35,
							},

						{name:"3.0.1.2.A.jpg",
							x:17.8,
							y:16,
							width:160,
							height:58,
							type:"STD",
							//url:"http://www.eciaonline.org/eiastandards"
							},
						{name:"3.0.1.2.B.jpg",
							x:185.55,
							y:116.95,
							width:155,
							height:49,
							type:"STD",
							//url:"http://www.ieee.org"
							},
						{name:"3.0.1.2.C.jpg",
							x:140.1,
							y:175.25,
							width:73,
							height:73,
							type:"STD",
							//url:"http://www.itu.int/en/Pages/default.aspx"
							},
						{name:"3.0.1.2.D.jpg",
							x:17.8,
							y:95.25,
							width:160,
							height:62,
							type:"STD",
							//url:"http://www.iana.org"
							},
						{name:"3.0.1.2.E.jpg",
							x:17.8,
							y:175.25,
							width:109,
							height:73,
							type:"STD",
							//url:"http://www.icann.org"
							},
						{name:"3.0.1.2.F.jpg",
							x:225,
							y:175.25,
							width:113,
							height:73,
							type:"STD",
							//url:"http://www.tiaonline.org"
							},
						{name:"3.0.1.2.G.jpg",
							x:185.55,
							y:16,
							width:155,
							height:85,
							type:"STD",
							//url:"http://www.ietf.org"
							}];


    var slide_texts = [{compId:"ID_txt01",
							x:155-58+37,
							y:290-78+64, 
							width:305,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

