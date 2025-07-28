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
	var commonTexts = [{compId:"ID_title",
							 x:5,
							 y:2,
							 width:430,
							 height:17,
							 size:14,
							 textAlign:"center"}];
							
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"5_1_2_9.png",
							x:12,
							y:70, 
							width:430,
							height:230,
							type:"none"}];		
	
	var slide_1_texts = [{compId:"staticTxt",
							bodyText:'C:\\>netstat',
							x:22+15,
							y:80+3,
							width:380,
							height:17,
                        	textAlign:"left"},							
							{compId:"staticTxt1",
							bodyText:'Active Connections',
							x:22+15,
							y:90+15,
							width:380,
							height:17,
                        	textAlign:"left"},
							{compId:"staticTxt2",
							bodyText:'<table border="0" cellpadding="1" cellspacing="0" width="400" class="tabletext"><tr><td width="40">Proto</td><td width="90">Local Address</td><td width="130">Foreign Address</td><td width="60">State</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3126</td><td width="150">192.168.0.2:netbios-ssn</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3158</td><td width="130">207.138.126.152:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3159</td><td width="130">207.138.126.169:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3160</td><td width="130">207.138.126.169:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3161</td><td width="130">sc.msn.com:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40"  class="colortext">TCP</td><td width="90">kenpc:3166</td><td width="130">www.cisco.com:http</td><td width="60">ESTABLISHED</td></tr></table>',
							x:22+15,
							y:100+27,
							width:410,
							height:17,
                        	textAlign:"left"},
							
							{compId:"staticTxt3",
							bodyText:'C:\\>',
							x:22+15,
							y:245+3,
							width:380,
							height:17,
                        	textAlign:"left"},
							
							{compId:"ID_s1_caption",
							x:22,
							y:298,
							width:410,
							height:17,
                        	textAlign:"center"}
							];		

    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"5_1_2_9.png",
							x:12,
							y:70, 
							width:430,
							height:230,
							type:"none"}];		
	
	var slide_2_texts = [{compId:"staticTxt4",
							bodyText:'C:\\>netstat',
							x:22+15,
							y:80+3,
							width:380,
							height:17,
                        	textAlign:"left"},							
							{compId:"staticTxt5",
							bodyText:'Active Connections',
							x:22+15,
							y:90+15,
							width:380,
							height:17,
                        	textAlign:"left"},
							{compId:"staticTxt6",
							bodyText:'<table border="0" cellpadding="1" cellspacing="0" width="400" class="tabletext"><tr><td width="40">Proto</td><td width="90">Local Address</td><td width="130">Foreign Address</td><td width="60">State</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3126</td><td width="150">192.168.0.2:netbios-ssn</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3158</td><td width="130">207.138.126.152:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3159</td><td width="130">207.138.126.169:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3160</td><td width="130">207.138.126.169:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3161</td><td width="130">sc.msn.com:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:<span class="colortext">3166</span></td><td width="130">www.cisco.com:http</td><td width="60">ESTABLISHED</td></tr></table>',
							x:22+15,
							y:100+27,
							width:410,
							height:17,
                        	textAlign:"left"},
							
							{compId:"staticTxt7",
							bodyText:'C:\\>',
							x:22+15,
							y:245+3,
							width:380,
							height:17,
                        	textAlign:"left"},
							
							{compId:"ID_s2_caption",
							x:22,
							y:298,
							width:410,
							height:17,
                        	textAlign:"center"}
							];		

    var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};						
    
	
	
	
	
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"5_1_2_9.png",
							x:12,
							y:70, 
							width:430,
							height:230,
							type:"none"}];		
	
	var slide_3_texts = [{compId:"staticTxt4",
							bodyText:'C:\\>netstat',
							x:22+15,
							y:80+3,
							width:380,
							height:17,
                        	textAlign:"left"},							
							{compId:"staticTxt5",
							bodyText:'Active Connections',
							x:22+15,
							y:90+15,
							width:380,
							height:17,
                        	textAlign:"left"},
							{compId:"staticTxt6",
							bodyText:'<table border="0" cellpadding="1" cellspacing="0" width="400" class="tabletext"><tr><td width="40">Proto</td><td width="90">Local Address</td><td width="130">Foreign Address</td><td width="60">State</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3126</td><td width="150">192.168.0.2:netbios-ssn</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3158</td><td width="130">207.138.126.152:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3159</td><td width="130">207.138.126.169:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3160</td><td width="130">207.138.126.169:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3161</td><td width="130">sc.msn.com:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3166</td><td width="130"><span class="colortext">www.cisco.com</span>:http</td><td width="60">ESTABLISHED</td></tr></table>',
							x:22+15,
							y:100+27,
							width:410,
							height:17,
                        	textAlign:"left"},
							
							{compId:"staticTxt7",
							bodyText:'C:\\>',
							x:22+15,
							y:245+3,
							width:380,
							height:17,
                        	textAlign:"left"},
							
							{compId:"ID_s3_caption",
							x:22,
							y:298,
							width:410,
							height:17,
                        	textAlign:"center"}
							];		

    var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
							
							
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"5_1_2_9.png",
							x:12,
							y:70, 
							width:430,
							height:230,
							type:"none"}];		
	
	var slide_4_texts = [{compId:"staticTxt4",
							bodyText:'C:\\>netstat',
							x:22+15,
							y:80+3,
							width:380,
							height:17,
                        	textAlign:"left"},							
							{compId:"staticTxt5",
							bodyText:'Active Connections',
							x:22+15,
							y:90+15,
							width:380,
							height:17,
                        	textAlign:"left"},
							{compId:"staticTxt6",
							bodyText:'<table border="0" cellpadding="1" cellspacing="0" width="400" class="tabletext"><tr><td width="40">Proto</td><td width="90">Local Address</td><td width="130">Foreign Address</td><td width="60">State</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3126</td><td width="150">192.168.0.2:netbios-ssn</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3158</td><td width="130">207.138.126.152:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3159</td><td width="130">207.138.126.169:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3160</td><td width="130">207.138.126.169:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3161</td><td width="130">sc.msn.com:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3166</td><td width="130">www.cisco.com:<span class="colortext">http</span></td><td width="60">ESTABLISHED</td></tr></table>',
							x:22+15,
							y:100+27,
							width:410,
							height:17,
                        	textAlign:"left"},
							
							{compId:"staticTxt7",
							bodyText:'C:\\>',
							x:22+15,
							y:245+3,
							width:380,
							height:17,
                        	textAlign:"left"},
							
							{compId:"ID_s4_caption",
							x:22,
							y:298,
							width:410,
							height:17,
                        	textAlign:"center"}
							];		

    var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};
							
							
	var slide_5_type = "IMAGE";
	var slide_5_images = [{name:"5_1_2_9.png",
							x:12,
							y:70, 
							width:430,
							height:230,
							type:"none"}];		
	
	var slide_5_texts = [{compId:"staticTxt4",
							bodyText:'C:\\>netstat',
							x:22+15,
							y:80+3,
							width:380,
							height:17,
                        	textAlign:"left"},							
							{compId:"staticTxt5",
							bodyText:'Active Connections',
							x:22+15,
							y:90+15,
							width:380,
							height:17,
                        	textAlign:"left"},
							{compId:"staticTxt6",
							bodyText:'<table border="0" cellpadding="1" cellspacing="0" width="400" class="tabletext"><tr><td width="40">Proto</td><td width="90">Local Address</td><td width="130">Foreign Address</td><td width="60">State</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3126</td><td width="150">192.168.0.2:netbios-ssn</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3158</td><td width="130">207.138.126.152:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3159</td><td width="130">207.138.126.169:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3160</td><td width="130">207.138.126.169:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3161</td><td width="130">sc.msn.com:http</td><td width="60">ESTABLISHED</td></tr><tr><td width="40">TCP</td><td width="90">kenpc:3166</td><td width="130">www.cisco.com:http</td><td width="60" class="colortext">ESTABLISHED</td></tr></table>',
							x:22+15,
							y:100+27,
							width:410,
							height:17,
                        	textAlign:"left"},
							
							{compId:"staticTxt7",
							bodyText:'C:\\>',
							x:22+15,
							y:245+3,
							width:380,
							height:17,
                        	textAlign:"left"},
							
							{compId:"ID_s5_caption",
							x:22,
							y:298,
							width:410,
							height:17,
                        	textAlign:"center"}
							];		

    var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							texts:slide_5_texts};
							
							
										
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
