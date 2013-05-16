	//fucntion sbu
	var functionSBU = function(user_level,user_data,parentCbo,golbal_user_level){
		//alert(golbal_user_level);
		var htmlSBU="";
		htmlSBU+="<div class=\"overviewContent\" >";
		htmlSBU+="		<div class=\"contentColumn sbu\" id=\""+user_data+"\">";
		htmlSBU+="			<div class=\"text\">";
		htmlSBU+="<div class='textMarkSBU' id=\"textMark"+user_data+"\">+</div> "+user_data;
		htmlSBU+="			</div>";
		htmlSBU+="		</div>";
		
		
		
		
		var vLastMonth="";
		var vLastMonthYear="";
		if(parseInt($("#embedParamMonth").val())==1){
			vLastMonth=12;
			vLastMonthYear=parseInt($("#embedParamYear").val())-1;
		}else{
			vLastMonth=parseInt($("#embedParamMonth").val())-1;
			vLastMonthYear=parseInt($("#embedParamYear").val());
		}
		
		
		//single loop end
		//overall
		
		
		//LM
		$.ajax({
			url:'../Model/overall_project_status.jsp',
			type:'get',
			dataType:'json',
			async:false,
			data:{"paramUserLevel":user_level,"paramUserLevelData":user_data,
				"paramYear":vLastMonthYear,"paramMonth":vLastMonth,
				"paramInType":"overall","paramInNoOfDay":$("#embedParamOfFirstDay").val()},
			success:function(data){
				
				//define color value rate
				colorRateRed=data[0][0];
				colorRateYellow=data[0][3];
				colorRateGreen=data[0][6];
				
				$(".embedParamColor").remove();
				$("body").append("<input type=\"hidden\" id=\"embedcolorRateRed\" class=\"embedParamColor\" name=\"embedcolorRateRed\" value=\""+data[0][0]+"\">");
				$("body").append("<input type=\"hidden\" id=\"embedcolorRateYellow\" class=\"embedParamColor\" name=\"embedcolorRateYellow\" value=\""+data[0][3]+"\">");
				$("body").append("<input type=\"hidden\" id=\"embedcolorRateGreen\" class=\"embedParamColor\" name=\"embedcolorRateGreen\" value=\""+data[0][6]+"\">");
				
				//alert(data);
				htmlSBU+="		<div class=\"contentColumns\">";
				htmlSBU+="			<div class=\"contenttop\">";
				htmlSBU+="				<div class=\"contentL\">";
				htmlSBU+="					<div class=\"contentTxt\">LM</div>";
				htmlSBU+="				</div>";
				htmlSBU+="				<div class=\"contentR\">";
				htmlSBU+="					<div class=\"contentRTop\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Projects";
				htmlSBU+="					</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlSBU+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlSBU+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="					<div class=\"contentRBottom\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Days";
				htmlSBU+="						</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxTxtRed\" id=\""+user_data+"SBULmOverviewRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtYellow\" id=\""+user_data+"SBULmOverviewYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlSBU+="								<ul >";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtGreen\" id=\""+user_data+"SBULmOverviewGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="				</div>";
				htmlSBU+="			</div>";
				
				
			}
		});
		//TM

		$.ajax({
			url:'../Model/overall_project_status.jsp',
			type:'get',
			dataType:'json',
			async:false,
			data:{"paramUserLevel":user_level,"paramUserLevelData":user_data,
				"paramYear":$("#embedParamYear").val(),"paramMonth":$("#embedParamMonth").val(),
				"paramInType":"overall","paramInNoOfDay":$("#embedParamOfFirstDay").val()},
			success:function(data){
				
				htmlSBU+="			<div class=\"contentBottom\">";
				htmlSBU+="				<div class=\"contentL\">";
				htmlSBU+="					<div class=\"contentTxt\">TM</div>";
				htmlSBU+="				</div>";
				htmlSBU+="				<div class=\"contentR\">";
				htmlSBU+="					<div class=\"contentRTop\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Projects";
				htmlSBU+="						</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlSBU+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlSBU+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="					<div class=\"contentRBottom\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Days";
				htmlSBU+="						</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxTxtRed\" id=\""+user_data+"SBUTmOverviewRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtYellow\" id=\""+user_data+"SBUTmOverviewYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtGreen\" id=\""+user_data+"SBUTmOverviewGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="				</div>";
				htmlSBU+="			</div>";
				
				
				
				
			}
		});
		
		htmlSBU+="		</div>";
		
		
		//first_n_days
		//LM
		
		$.ajax({
			url:'../Model/overall_project_status.jsp',
			type:'get',
			dataType:'json',
			async:false,
			data:{"paramUserLevel":user_level,"paramUserLevelData":user_data,
				"paramYear":vLastMonthYear,"paramMonth":vLastMonth,
				"paramInType":"first_n_days","paramInNoOfDay":$("#embedParamOfFirstDay").val()},
			success:function(data){
				//alert("3"+data);
				htmlSBU+="		<div class=\"contentColumns\">";
				htmlSBU+="			<div class=\"contenttop\">";
				htmlSBU+="				<div class=\"contentL\">";
				htmlSBU+="					<div class=\"contentTxt\">LM</div>";
				htmlSBU+="				</div>";
				htmlSBU+="				<div class=\"contentR\">";
				htmlSBU+="					<div class=\"contentRTop\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Projects";
				htmlSBU+="					</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlSBU+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlSBU+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="					<div class=\"contentRBottom\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Days";
				htmlSBU+="						</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxTxtRed\" id=\""+user_data+"SBULmFirstRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtYellow\" id=\""+user_data+"SBULmFirstYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtGreen\" id=\""+user_data+"SBULmFirstGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="				</div>";
				htmlSBU+="			</div>";
				
				/*
				alert("color code="+data[0][0]);
				alert("red project="+data[0][1]);
				alert("red day="+data[0][2]);
				
				alert("color code="+data[0][3]);
				alert("yellow project="+data[0][4]);
				alert("yellow day="+data[0][5]);
				
				alert("color code="+data[0][6]);
				alert("green project="+data[0][7]);
				alert("green day="+data[0][8]);
				*/
				
			}
		});
		//TM
		$.ajax({
			url:'../Model/overall_project_status.jsp',
			type:'get',
			dataType:'json',
			async:false,
			data:{"paramUserLevel":user_level,"paramUserLevelData":user_data,
				"paramYear":$("#embedParamYear").val(),"paramMonth":$("#embedParamMonth").val(),
				"paramInType":"first_n_days","paramInNoOfDay":$("#embedParamOfFirstDay").val()},
			success:function(data){
				//alert("4"+data);
				/*
				alert("color code="+data[0][0]);
				alert("red project="+data[0][1]);
				alert("red day="+data[0][2]);
				
				alert("color code="+data[0][3]);
				alert("yellow project="+data[0][4]);
				alert("yellow day="+data[0][5]);
				
				alert("color code="+data[0][6]);
				alert("green project="+data[0][7]);
				alert("green day="+data[0][8]);
				*/
				htmlSBU+="			<div class=\"contentBottom\">";
				htmlSBU+="				<div class=\"contentL\">";
				htmlSBU+="					<div class=\"contentTxt\">TM</div>";
				htmlSBU+="				</div>";
				htmlSBU+="				<div class=\"contentR\">";
				htmlSBU+="					<div class=\"contentRTop\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Projects";
				htmlSBU+="						</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlSBU+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlSBU+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="					<div class=\"contentRBottom\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Days";
				htmlSBU+="						</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxTxtRed\" id=\""+user_data+"SBUTmFirstRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtYellow\" id=\""+user_data+"SBUTmFirstYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtGreen\" id=\""+user_data+"SBUTmFirstGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="				</div>";
				htmlSBU+="			</div>";
			}
		});
		
		htmlSBU+="		</div>";
		//after_first_n_days
		//LM
		$.ajax({
			url:'../Model/overall_project_status.jsp',
			type:'get',
			dataType:'json',
			async:false,
			data:{"paramUserLevel":user_level,"paramUserLevelData":user_data,
				"paramYear":vLastMonthYear,"paramMonth":vLastMonth,
				"paramInType":"after_first_n_days","paramInNoOfDay":$("#embedParamOfFirstDay").val()},
			success:function(data){
				//alert("5"+data);
				htmlSBU+="		<div class=\"contentColumns\">";
				htmlSBU+="			<div class=\"contenttop\">";
				htmlSBU+="				<div class=\"contentL\">";
				htmlSBU+="					<div class=\"contentTxt\">LM</div>";
				htmlSBU+="				</div>";
				htmlSBU+="				<div class=\"contentR\">";
				htmlSBU+="					<div class=\"contentRTop\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Projects";
				htmlSBU+="					</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlSBU+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlSBU+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="					<div class=\"contentRBottom\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Days";
				htmlSBU+="						</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxTxtRed\" id=\""+user_data+"SBULmLastRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtYellow\" id=\""+user_data+"SBULmLastYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtGreen\" id=\""+user_data+"SBULmLastGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="				</div>";
				htmlSBU+="			</div>";
				
				
			}
		});
		//TM
		$.ajax({
			url:'../Model/overall_project_status.jsp',
			type:'get',
			dataType:'json',
			async:false,
			data:{"paramUserLevel":user_level,"paramUserLevelData":user_data,
				"paramYear":$("#embedParamYear").val(),"paramMonth":$("#embedParamMonth").val(),
				"paramInType":"after_first_n_days","paramInNoOfDay":$("#embedParamOfFirstDay").val()},
			success:function(data){
				
				htmlSBU+="			<div class=\"contentBottom\">";
				htmlSBU+="				<div class=\"contentL\">";
				htmlSBU+="					<div class=\"contentTxt\">TM</div>";
				htmlSBU+="				</div>";
				htmlSBU+="				<div class=\"contentR\">";
				htmlSBU+="					<div class=\"contentRTop\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Projects";
				htmlSBU+="						</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlSBU+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlSBU+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="					<div class=\"contentRBottom\">";
				htmlSBU+="						<div class=\"titleContent\">";
				htmlSBU+="						#Days";
				htmlSBU+="						</div>";
				htmlSBU+="						<div class=\"boxContent\">";
				htmlSBU+="							<div class=\"boxTxtRed\" id=\""+user_data+"SBUTmLastRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtYellow\" id=\""+user_data+"SBUTmLastYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="							<div class=\"boxTxtGreen\" id=\""+user_data+"SBUTmLastGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlSBU+="								<ul>";
				htmlSBU+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlSBU+="									<li class=\"current_level\">SBU</li>";
				htmlSBU+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlSBU+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlSBU+="								</ul>";
				htmlSBU+="							</div>";
				htmlSBU+="						</div>";
				htmlSBU+="					</div>";
				htmlSBU+="				</div>";
				htmlSBU+="			</div>";
			}
		});
		htmlSBU+="		</div>";
		
		htmlSBU+="<div id=\"areaPj"+user_data+"\">";
		htmlSBU+="</div>";
		
		htmlSBU+="		</div>";
		
		
		//if cbo all give loop for content
		if(parentCbo!=""){
			$("#area"+parentCbo).append(htmlSBU);
			}else{
			$("#contentArea").html(htmlSBU);
			}
		
		//alert("#area"+parentCbo);
		
		//$("#contentArea").html(htmlSBU);
		//$("#cateProject").html(user_level);
		$(".boxTxtRed  ul").hide();
		$(".boxTxtYellow  ul").hide();
		$(".boxTxtGreen  ul").hide();
		
	
	};
	//--end