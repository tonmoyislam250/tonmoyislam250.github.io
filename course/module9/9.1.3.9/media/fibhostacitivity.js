var hostAddress,subnetMask,netAddress,netAddressbin = [];
var incTF,corTF;
var fibhostacitivity = function(data)
{
	Data = data;
	$("#left_container").html($(data).find("component#ID_inst").text());
	$("#ID_txt01").html($(data).find("component#ID_txt01").text());
	$("#ID_txt02").html($(data).find("component#ID_txt02").text());
	$("#ID_txt03").html($(data).find("component#ID_txt03").text()); 
}




var temp ='';
temp+='<div id="main_wrapper">';
temp+='<div id="main_container">';
temp+='<div id="left_container"/>'; 
temp+='<div id="right_container"><div id="right_innercontainer">';
temp+='<div id="inner_leftcontainer"><div id="ID_txt01"/><div id="ID_txt02"/><div id="ID_txt03"/></div>';
temp+='<div id="inner_rightcontainer">';
temp+='<table id="mainTable">';
temp+='<tr><td class="tbHead" colspan="4"></td></tr>';
temp+='<tr>';
temp+='<td class="exponent_bg" id="subnet1"></td>';
temp+='<td class="exponent_bg" id="subnet2"></td>';
temp+='<td class="exponent_bg" id="subnet3"></td>';
temp+='<td class="exponent_bg" id="subnet4"></td>';
temp+='</tr>';

temp+='<tr>';
temp+='<td class="position_bg">';
temp+='<input value="" id="subnetbin0" class="subnetbin" maxlength="8" type="text">';
temp+='</td>';
temp+='<td class="position_bg">';
temp+='<input value="" id="subnetbin1" class="subnetbin" maxlength="8" type="text">';
temp+='</td>';
temp+='<td class="position_bg">';
temp+='<input value="" id="subnetbin2" class="subnetbin" maxlength="8" type="text">';
temp+='</td>';
temp+='<td class="position_bg">';
temp+='<input value="" id="subnetbin3" class="subnetbin" maxlength="8" type="text">';
temp+='</td>';
temp+='</tr>';

temp+='<tr>'; 
temp+='<td class="exponent_bg" colspan="4">';
temp+='<input type="text" id="prefixNotation" class="prefixNotation" maxlength="4" style="background-color:#66C0E5;color:#000000;"/>';
temp+='</td>'; 
temp+='</tr>';
temp+='<tr><td colspan="4">';
temp+='<table id="innerTable"><tr><td colspan="3"></td></tr>';
temp+='<tr>';
temp+='<td><input type="submit" class="button_add" name="check" id="check" value="Check" /></td>';
temp+='<td><input type="submit" name="reset" class="button_add" id="reset" value="Reset" /></td>';
temp+='<td><input type="submit" name="new_nub" class="button_add" id="new_nub" value="New Number" /></td>';
temp+='</tr></table>'; 
temp+='</td></tr>';
temp+='</table>';

temp+='<div id="pannel" style="display:none;">';
temp+='<div class="cross"><span></span>';
temp+='<a href="#" id="incorrect">';
temp+='<img src="cross.png" width="10" height="10" alt="">';
temp+='</a>';
temp+='</div>';
temp+='<div class="result">';
temp+='<p></p>';
temp+='</div>';
temp+='</div>';  
temp+='<div id="pannel_2" style="display:none">';
temp+='<div class="cross_2">';
temp+='<span></span>';
temp+='<a href="#" id="correct">';
temp+='<img src="cross.png" width="10" height="10" alt="">';
temp+='</a>';
temp+='</div>';
temp+='<div class="result_2">';
temp+='<p></p>';
temp+='</div>';
temp+='</div>'; 
temp+='</div>';  
temp+='</div></div>'; 

//temp = '<div id="ID_txt01"></div><div id="ID_txt02"></div><div id="ID_txt03"></div><table  width="600" border="0" cellspacing="0" cellpadding="0" style="padding-left:9px;" id="subtable"><tr><td width="700" align="left" valign="top"><table cellpadding="0" cellspacing="0" border="0" width="95%"><tr><td id="title"></td></tr><tr><td height="10"></td></tr><tr><td id="title_sub"></td></tr></table></td><td width="500" align="center" valign="top"><table width="520" border="0" cellspacing="1" cellpadding="1" class="top_gap"><tr><td></td><td colspan="13"></td></tr><tr><td class="top_gap"></td><td colspan="5"></td></tr><tr><td height="26" class="align_right" id="decival"></td><td colspan="5"><table width="101%" border="0" id="title_bg" cellspacing="0" cellpadding="0"><tr><td width="100%" height="25"></td></tr></table></td></tr><tr height="25"><td class="align_right"></td></td><td class="exponent_bg" width="43" id="subnet1"></td><td class="exponent_bg" width="43" id="subnet2"></td><td class="exponent_bg" width="43" id="subnet3"></td><td class="exponent_bg" width="43" id="subnet4"></td></tr>  <tr height="25"><td class="align_right"></td><td class="position_bg" width="43" ><input type="text" id="subnetbin0" class="subnetbin" maxlength="8"  style="background-color:#66C0E5;color:#000000;" /></td><td class="position_bg" width="43" ><input type="text" id="subnetbin1" class="subnetbin" maxlength="8"  style="background-color:#66C0E5;color:#000000;" /></td><td class="position_bg" width="43" ><input type="text" id="subnetbin2" class="subnetbin" maxlength="8"  style="background-color:#66C0E5;color:#000000;"/></td><td class="position_bg" width="43"><input type="text" id="subnetbin3" class="subnetbin" maxlength="8"  style="background-color:#66C0E5;color:#000000;" /></td></tr><tr height="25"><td class="align_right"></td><td class="exponent_bg" width="252" colspan="4"><input type="text" id="prefixNotation" class="prefixNotation" maxlength="4" style="background-color:#66C0E5;color:#000000;"/></td></td></tr><tr><td>&nbsp;</td><td colspan="8" class="align_center" id="enter"></td></tr><tr><td>&nbsp;</td><td colspan="8" align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0" class=shift_right"><tr><td colspan="2"><input type="submit" class="button_add" name="check" id="check" value="Check" /></td><td>&nbsp;</td><td colspan="2"><input type="submit" name="reset" class="button_add" id="reset" value="Reset" /></td><td>&nbsp;</td><td colspan="2"><input type="submit" name="new_nub" class="button_add" id="new_nub" value="New Number" /></td><td>&nbsp;</td></tr></table></td></tr></table></td></tr><div id="pannel" style="display:none;"><div class="cross"><span></span><a href="#" id="incorrect"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel_2" style="display:none"><div class="cross_2"><span></span><a href="#" id="correct"><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script>$("a#incorrect").click(function (event) {$("#pannel").hide();event.preventDefault();$(this).hide();});</script><script>$("a#correct").click(function (event) {$("#pannel_2").hide();event.preventDefault();$(this).hide();});</script></table>';



$("#mainDiv").html(temp);


$(function(){

$("a#incorrect").click(function (event) {
	$("#pannel").hide();event.preventDefault();$(this).hide();
});

$("a#correct").click(function (event) {
	$("#pannel_2").hide();event.preventDefault();$(this).hide();
});

newBtnClickHandler();	

$('#subnetbin0,#subnetbin1,#subnetbin2,#subnetbin3').focus(function(){ $("#pannel").css("display","none");for(var i = 0;i<4;i++){$("input#subnetbin"+(i)).css("color","black");}
						});
$('#prefixNotation').focus(function(){ $("#pannel").css("display","none");$("input#prefixNotation").css("color","black");});
$('#subnetbin0,#subnetbin1,#subnetbin2,#subnetbin3').keypress(function(key)
 {
	 $("#pannel").css("display","none");
	 
	var k = key.charCode;
	if(k == 48 || k == 49 ||k == 0)
	{
	return true;
	}
	else
	{			
	return false;
	}
});

$('#prefixNotation').keypress(function(key)
 {
	 $("#pannel").css("display","none");
	 var k = key.charCode;
	 if(k == 48 || k == 49 ||k == 50 ||k == 51 || k == 52 || k == 53 || k == 54 || k == 55 || k == 56 || k == 57 || k == 0 || k == 47)
	{
	return true;
	}
	else
	{			
	return false;
	}
});


$("#new_nub").click(function(){newBtnClickHandler();})

});



function newBtnClickHandler()
{
	$("#pannel").css("display","none");
	$("input#subnetbin0").attr("value","");
	$("input#subnetbin1").attr("value","");
	$("input#subnetbin2").attr("value","");
	$("input#subnetbin3").attr("value","");	
		
	
	hostAddress = [];
	subnetMask = [];

	subnetMask = new Array(4);
	numHosts = 0;
	// First two octets are always 255
	var validMasks = new Array(255, 254, 252, 248, 240, 224, 192, 128, 0);
	subnetMask[0] = 255;
	subnetMask[1] = 255;

	var rand = Math.round(Math.random()*(validMasks.length+6));// Make it 8/16 chance for 255
	if (rand<=7) {
		rand = 0;
	} else {
		rand = rand-7;
	}// Adjust for everything else
	subnetMask[2] = validMasks[rand];

	// Ignore 255 for the last octet
	subnetMask[3] = (subnetMask[2] == 255 ? (validMasks[Math.round(Math.random()*(validMasks.length-2))+1]) : 0);

	// Calculate the number of hosts
	var bits = 0;
	for (var i = 0; i<4; i++) {
		var mask = 0x80;
		for (var j = 0; j<8; j++) {
			if (subnetMask[i] & mask) {
				bits++;
			} else {
				break;
			}
			mask = mask >> 1;
		}
		if (!(subnetMask[i] & mask) && mask != 0) {
			break;
		}
	}
	var n = 32-bits;
	var numHosts = Math.pow(2, n)-2;	
	
		
	$("#subnet1").html(subnetMask[0]);
	$("#subnet2").html(subnetMask[1]);
	$("#subnet3").html(subnetMask[2]);
	$("#subnet4").html(subnetMask[3]);	
	
	netAddress = [];
	// Calculate the network address
	for (var i = 0; i<4; i++) {
		netAddress[i] = ((hostAddress[i] & 0xFF) & (subnetMask[i] & 0xFF)) & 0xFF;
	}
	
		
	for(i=1;i<=4;i++)
	{
	$("#hostbin"+i).html(dec2bin($("#host"+i).text()));
	}
	for(i=1;i<=4;i++)
	{
	$("#subnetbin"+i).html(dec2bin($("#subnet"+i).text()));
	}
	
	$("input#prefixNotation").attr("value","");
	
}
$("#check").click(function(){ $(".cross span").html($(Data).find("component#txt_incorrect").text());
						$(".result p").html($(Data).find("component#txt_body_incorrect").text());
						$("#pannel").css("display","block");
						for(var i = 0;i<4;i++){$("input#subnetbin"+(i)).css("color","black");}
						$("input#prefixNotation").css("color","black");
						});
$("#reset").live("click",function(){	
	for(var i = 0;i<4;i++){$("input#subnetbin"+(i)).css("color","black");}
	$("input#prefixNotation").css("color","black");
	$("input#subnetbin0").attr("value","");
	$("input#subnetbin1").attr("value","");
	$("input#subnetbin2").attr("value","");
	$("input#subnetbin3").attr("value","");
	$("input#prefixNotation").attr("value","");
	
	$("#pannel").css("display","none");	
	/*$("#check").click(function(){ $(".cross span").html($(Data).find("component#txt_incorrect").text());
						$(".result p").html($(Data).find("component#txt_body_incorrect").text());
						$("#pannel").css("display","block");
						for(var i = 0;i<4;i++){$("input#subnetbin"+(i)).css("color","black");}
						$("input#prefixNotation").css("color","black");
						});*/
	});

$("#check").click(function(){
	$("#pannel").css("display","none");
	val1 = $("input#subnetbin0").attr("value");
	val2 = $("input#subnetbin1").attr("value");
	val3 = $("input#subnetbin2").attr("value");
	val4 = $("input#subnetbin3").attr("value");
	for(var i = 0;i<4;i++){$("input#subnetbin"+(i)).css("color","black");}
	$("input#prefixNotation").css("color","black");
	var prefixTrue= false;
	if (document.getElementById("prefixNotation").value == ("/"+findPrefix())) {
				
		$("input#prefixNotation").css("color","black");
		prefixTrue = true;
	} else {
		
		$("input#prefixNotation").css("color","#DD0000")
		prefixTrue = false;
	}
	var cnt= 0;
	for(var i = 0;i<4;i++)
	{	
		
		if(document.getElementById("subnetbin"+i).value == dec2bin(subnetMask[i]))
		{
			$("input#subnetbin"+(i)).css("color","black");
			cnt++;
		}
		else
		{
			$("input#subnetbin"+(i)).css("color","#DD0000");
			
		}
	}
	
	if(cnt == 4 && prefixTrue)
	{
						$(".cross span").html($(Data).find("component#txt_correct").text());
						$(".result p").html($(Data).find("component#txt_body_correct").text());
						$("#pannel").css("display","block");
						
		
	}
	else
	{
		//wrong feedback
						$(".cross span").html($(Data).find("component#txt_incorrect").text());
						$(".result p").html($(Data).find("component#txt_body_incorrect").text());
						$("#pannel").css("display","block");
						
	}
	
});

function findPrefix()
{
	var cnt = 0;
	
	for (var i = 0; i<4; i++) {
		var _bin= String(dec2bin(subnetMask[i])).split("");		
		for (var j = 0; j<8; j++) {
			if(_bin[j] == 1)
			{
				cnt++;
			}
		}		
	}
	return cnt;
}



function dec2bin(val) {
	var result= "";

	while (val>0) {
		if (val & 0x01) {
			result = "1"+result;
		} else {
			result = "0"+result;
		}
		val = (val >> 1);
	}
	while (result.length%8 || result.length == 0) {
		result = "0"+result;
	}
	return result;
}

function bin2dec(val) {
	var result = 0;

	while (val.length != 0) {
		if (val.substr(0, 1) == "1") {
			result = result | 0x1;
		}
		result = result << 1;
		val = val.substr(1);
	}

	result = result >> 1;
	return result;
}




