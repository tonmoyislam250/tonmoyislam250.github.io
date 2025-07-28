
loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;
var TYPE = 'MULTI_BAR'

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [];								
	var slide_1_texts = [{compId:"statictext1",
							bodyText:'<table cellpadding="0" cellspacing="0" border="0" width="450"><tr class="highlight"><td width="45%" align="left"><span>11111111.00000000.00000000.00000000</span></td><td width="5%" align="center"><span><b>/8</b></span></td><td width="48%" align="left">(255.0.0.0)<span id="spacer">16,777,214 host addresses</span></td></tr><tr><td width="45%" align="left">11111111.<span class="purple">1</span>0000000.00000000.00000000</td><td width="5%" align="center" class="purple"><b>/9</</td><td width="48%" align="left">(255.128.0.0)</span><span id="spacer">8,388,606 host addresses</td></tr><tr><td width="45%" align="left">11111111.<span class="purple">11</span>000000.00000000.00000000</td><td width="5%" align="center" class="purple"><b>/10</b></td><td width="48%" align="left">(255.192.0.0)</span><span id="spacer">4,194,302 host addresses</td></tr><tr><td width="45%" align="left">11111111.<span class="purple"<span class="purple">111</span>00000.00000000.00000000</td><td width="5%" align="center" class="purple"><b>/11</b></td><td width="48%" align="left">(255.224.0.0)</span><span id="spacer">2,097,150 host addresses</td></tr><tr><td width="45%" align="left">11111111.<span class="purple">1111</span>0000.00000000.00000000</td><td width="5%" align="center" class="purple"><b>/12</b></td><td width="48%" align="left">(255.240.0.0)</span><span id="spacer">1,048,574 host addresses</td></tr><tr><td width="45%" align="left">11111111.<span class="purple">11111</span>000.00000000.00000000</td><td width="5%" align="center" class="purple"><b>/13</b></td><td width="48%" align="left">(255.248.0.0)</span><span id="spacer">524,286 host addresses</td></tr><tr><td width="45%" align="left">11111111.<span class="purple">111111</span>00.00000000.00000000</td><td width="5%" align="center" class="purple"><b>/14</b></td><td width="48%" align="left">(255.252.0.0)</span><span id="spacer">262,142 host addresses</td></tr><tr><td width="45%" align="left">11111111.<span class="purple">1111111</span>0.00000000.00000000</td><td width="5%" align="center" class="purple"><b>/15</b></td><td width="48%" align="left">(255.254.0.0)</span><span id="spacer">131,070 addresses</td></tr><tr class="highlight"><td width="45%" align="left"><span>11111111.<span class="purple">11111111</span>.00000000.00000000</span></td><td width="5%" align="center"><span><b>/16</b></span></td><td width="48%" align="left"><span>(255.255.0.0)</span><span id="spacer">65,534 host addresses</span></td></tr><tr><td width="45%" align="left">11111111.11111111.<span class="purple">1</span>0000000.00000000</td><td width="5%" align="center" class="purple"><b>/17</b></td><td width="48%" align="left">(255.255.128.0)</span><span id="spacer">32,766 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.<span class="purple">11</span>000000.00000000</td><td width="5%" align="center" class="purple"><b>/18</b></td><td width="48%" align="left">(255.255.192.0)</span><span id="spacer">16,382 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.<span class="purple">111</span>00000.00000000</td><td width="5%" align="center" class="purple"><b>/19</b></td><td width="48%" align="left">(255.255.224.0)</span><span id="spacer">8,190 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.<span class="purple">1111</span>0000.00000000</td><td width="5%" align="center" class="purple"><b>/20</b></td><td width="48%" align="left">(255.255.240.0)</span><span id="spacer">4,094 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.<span class="purple">11111</span>000.00000000</td><td width="5%" align="center" class="purple"><b>/21</b></td><td width="48%" align="left">(255.255.248.0)</span><span id="spacer">2,046 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.<span class="purple">111111</span>00.00000000</td><td width="5%" align="center" class="purple"><b>/22</b></td><td width="48%" align="left">(255.255.252.0)</span><span id="spacer">1,022 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.<span class="purple">1111111</span>0.00000000</td><td width="5%" align="center" class="purple"><b>/23</b></td><td width="48%" align="left">(255.255.254.0)</span><span id="spacer">510 host addresses</td></tr><tr class="highlight"><td width="45%" align="left"><span>11111111.11111111.<span class="purple">11111111</span>.00000000</span></td><td width="5%" align="center"><span><b>/24</b></span></td><td width="48%" align="left"><span>(255.255.255.0)</span><span id="spacer">254 host addresses</span></td></tr><tr><td width="45%" align="left">11111111.11111111.11111111.<span class="purple">1</span>0000000</td><td width="5%" align="center" class="purple"><b>/25</b></td><td width="48%" align="left">(255.255.255.128)</span><span id="spacer">126 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.11111111.<span class="purple">11</span>000000</td><td width="5%" align="center" class="purple"><b>/26</b></td><td width="48%" align="left">(255.255.255.192)</span><span id="spacer">62 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.11111111.<span class="purple">111</span>00000</td><td width="5%" align="center" class="purple"><b>/27</b></td><td width="48%" align="left">(255.255.255.224)</span><span id="spacer">30 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.11111111.<span class="purple">1111</span>0000</td><td width="5%" align="center" class="purple"><b>/28</b></td><td width="48%" align="left">(255.255.255.240)</span><span id="spacer">14 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.11111111.<span class="purple">11111</span>000</td><td width="5%" align="center" class="purple"><b>/29</b></td><td width="48%" align="left">(255.255.255.248)</span><span id="spacer">6 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.11111111.<span class="purple">111111</span>00</td><td width="5%" align="center" class="purple"><b>/30</b></td><td width="48%" align="left">(255.255.255.252)</span><span id="spacer">2 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.11111111.<span class="purple">1111111</span>0</td><td width="5%" align="center" class="purple"><b>/31</b></td><td width="48%" align="left">(255.255.255.254)</span><span id="spacer">0 host addresses</td></tr><tr><td width="45%" align="left">11111111.11111111.11111111.<span class="purple">11111111</span></td><td width="5%" align="center" class="purple"><b>/32</b></td><td width="48%" align="left">(255.255.255.255)</span><span id="spacer">“Host Route”</td></tr></table>',
							x:-6,
							y:20-12, 
							width:450,
							height:236,
							size:10,
							textAlign:"left",
							},];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "TABLE";
		
		var slide_2_tables = [{compId:"ID_s2_table",
		x:2,
		y:40, 
		width:435,
		height:356}];
		var slide_2_texts = [];		
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