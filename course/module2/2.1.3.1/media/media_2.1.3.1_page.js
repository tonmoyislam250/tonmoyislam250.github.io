//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"2_1_3_1.jpg",
        x:0,
        y:20,
        width:470,
        height:361,
        type:""}];

    var slide_texts = [{compId:"ID_title",                  
                         x:10,
                        y:1,
                        width:460,
                        height:17,
                        size:14,
                        textAlign:"center"},
						{compId:"ID_txt01",                  
                         x:10,
                        y:5,
                        width:460,
                        height:17,
                        size:14,
                        textAlign:"center"},
						{compId:"ID_txt02",
						bodyText:"<b>User EXEC Command-Router> </b>",                  
                        x:14.25,
                        y:22.25,
                        width:185.7,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt03",
						bodyText:"ping<br>show (limited)<br>enable<br>etc.", 
                        x:14.25,
                        y:37.25,
                        width:131.7,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt04",
						bodyText:"<b>Privileged EXEC Commands-Router# </b>",
                        x:14,
                        y:85,
                        width:242.2,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt05",
						bodyText:"all User EXEC Commands<br>debug commands<br>reload<br>configure<br>etc.",          
                        x:14,
                        y:99,
                        width:182.2,
                        height:69,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt06",
						bodyText:"<b>Global Configuration Commands-Router(configure)#</b>",                  
                        x:100,
                        y:118,
                        width:357.7,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt07",
						 bodyText:"hostname<br>enable secret<br>ip route",    
                         x:100,
                        y:133,
                        width:110.7,
                        height:36,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt08",
						bodyText:"interface",                        
						x:98,
                        y:173,
                        width:251.7,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt09",
						bodyText:"ethernet<br>serial<br>dsl<br>etc.",          
                         x:163,
                        y:174,
                        width:251.7,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt10",
						bodyText:"router",          
                        x:99,
                        y:248,
                        width:251.7,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt11",
						bodyText:"rip<br>ospf<br>eigrp<br>etc.",          
                        x:162,
                        y:249,
                        width:251.7,
                        height:50,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt12",
						bodyText:"<b>Interface Commands-Router(config-if)#</b>",     
                         x:221.45,
                        y:175.55,
                        width:263.2,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt13",
						bodyText:"ip address<br>ipv6 address<br>encapsulation<br>shutdown/no shutdown<br>etc.",                  
                         x:221.45,
                        y:191.55,
                        width:257.2,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt14",
						bodyText:"<b>Routing Engine Commands-Router(config-router)#</b>",     
                         x:222.45,
                        y:251.55,
                        width:263.2,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt15",
						bodyText:"network<br>version<br>auto summary<br>etc.",                        
						x:223.45,
                        y:269.55,
                        width:257.2,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt16",
						bodyText:"<b>Line Commands-Router(config-line)#</b>", 
                        x:222.45,
                        y:315.55,
                        width:257.2,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt17",
						bodyText:"password<br>login<br>modem commands<br>etc.",
						x:224.45,
                        y:331.55,
                        width:256.2,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt18",
						bodyText:"line",                        
						x:98.45,
                        y:316.55,
                        width:257.2,
                        height:17,
                        size:10,
                        textAlign:"left"},
						{compId:"ID_txt19",
						bodyText:"vty<br>console<br>etc.",                        
						x:161.45,
                        y:316.55,
                        width:250.2,
                        height:17,
                        size:10,
                        textAlign:"left"}
						];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
