	//fucntion cbo
	var functionCBO = function(user_level,user_data,cboAll,golbal_user_level){
		//alert(golbal_user_level);
		var htmlCBO="";
		htmlCBO+="<div class=\"overviewContent\" >";
		htmlCBO+="		<div class=\"contentColumn cbo\" id=\""+user_data+"\">";
		htmlCBO+="			<div class=\"text\">";
		htmlCBO+="			<div class='textMarkCBO' id=\"textMark"+user_data+"\">+</div> "+user_data;
		htmlCBO+="			</div>";
		htmlCBO+="		</div>";
		
		
		
		
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
				htmlCBO+="		<div class=\"contentColumns\">";
				htmlCBO+="			<div class=\"contenttop\">";
				htmlCBO+="				<div class=\"contentL\">";
				htmlCBO+="					<div class=\"contentTxt\">LM</div>";
				htmlCBO+="				</div>";
				htmlCBO+="				<div class=\"contentR\">";
				htmlCBO+="					<div class=\"contentRTop\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Projects";
				htmlCBO+="					</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+parseInt(data[0][1])+"</div>";
				htmlCBO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+parseInt(data[0][4])+"</div>";
				htmlCBO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+parseInt(data[0][7])+"</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="					<div class=\"contentRBottom\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Days";
				htmlCBO+="						</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxTxtRed\" id=\""+user_data+"CBOLmOverviewRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+parseInt(data[0][2]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][2])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtYellow\" id=\""+user_data+"CBOLmOverviewYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+parseInt(data[0][5]);
				htmlCBO+="								<ul >";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][5])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtGreen\" id=\""+user_data+"CBOLmOverviewGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+parseInt(data[0][8]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][8])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="				</div>";
				htmlCBO+="			</div>";
				
				
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
				
				htmlCBO+="			<div class=\"contentBottom\">";
				htmlCBO+="				<div class=\"contentL\">";
				htmlCBO+="					<div class=\"contentTxt\">TM</div>";
				htmlCBO+="				</div>";
				htmlCBO+="				<div class=\"contentR\">";
				htmlCBO+="					<div class=\"contentRTop\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Projects";
				htmlCBO+="						</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+parseInt(data[0][1])+"</div>";
				htmlCBO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+parseInt(data[0][4])+"</div>";
				htmlCBO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+parseInt(data[0][7])+"</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="					<div class=\"contentRBottom\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Days";
				htmlCBO+="						</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxTxtRed\" id=\""+user_data+"CBOTmOverviewRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+parseInt(data[0][2]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][2])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtYellow\" id=\""+user_data+"CBOTmOverviewYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+parseInt(data[0][5]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][5])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtGreen\" id=\""+user_data+"CBOTmOverviewGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+parseInt(data[0][8]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][8])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="				</div>";
				htmlCBO+="			</div>";
				
				
				
				
			}
		});
		
		htmlCBO+="		</div>";
		
		
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
				htmlCBO+="		<div class=\"contentColumns\">";
				htmlCBO+="			<div class=\"contenttop\">";
				htmlCBO+="				<div class=\"contentL\">";
				htmlCBO+="					<div class=\"contentTxt\">LM</div>";
				htmlCBO+="				</div>";
				htmlCBO+="				<div class=\"contentR\">";
				htmlCBO+="					<div class=\"contentRTop\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Projects";
				htmlCBO+="					</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+parseInt(data[0][1])+"</div>";
				htmlCBO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+parseInt(data[0][4])+"</div>";
				htmlCBO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+parseInt(data[0][7])+"</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="					<div class=\"contentRBottom\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Days";
				htmlCBO+="						</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxTxtRed\" id=\""+user_data+"CBOLmFirstRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+parseInt(data[0][2]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][2])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtYellow\" id=\""+user_data+"CBOLmFirstYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+parseInt(data[0][5]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][5])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtGreen\" id=\""+user_data+"CBOLmFirstGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+parseInt(data[0][8]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][8])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="				</div>";
				htmlCBO+="			</div>";
				
				/*
				alert("color code="+data[0][0]);
				alert("red project="+parseInt(data[0][1]));
				alert("red day="+parseInt(data[0][2]));
				
				alert("color code="+data[0][3]);
				alert("yellow project="+parseInt(data[0][4]));
				alert("yellow day="+parseInt(data[0][5]));
				
				alert("color code="+data[0][6]);
				alert("green project="+parseInt(data[0][7]));
				alert("green day="+parseInt(data[0][8]));
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
				alert("red project="+parseInt(data[0][1]));
				alert("red day="+parseInt(data[0][2]));
				
				alert("color code="+data[0][3]);
				alert("yellow project="+parseInt(data[0][4]));
				alert("yellow day="+parseInt(data[0][5]));
				
				alert("color code="+data[0][6]);
				alert("green project="+parseInt(data[0][7]));
				alert("green day="+parseInt(data[0][8]));
				*/
				htmlCBO+="			<div class=\"contentBottom\">";
				htmlCBO+="				<div class=\"contentL\">";
				htmlCBO+="					<div class=\"contentTxt\">TM</div>";
				htmlCBO+="				</div>";
				htmlCBO+="				<div class=\"contentR\">";
				htmlCBO+="					<div class=\"contentRTop\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Projects";
				htmlCBO+="						</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+parseInt(data[0][1])+"</div>";
				htmlCBO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+parseInt(data[0][4])+"</div>";
				htmlCBO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+parseInt(data[0][7])+"</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="					<div class=\"contentRBottom\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Days";
				htmlCBO+="						</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxTxtRed\" id=\""+user_data+"CBOTmFirstRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+parseInt(data[0][2]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][2])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtYellow\" id=\""+user_data+"CBOTmFirstYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+parseInt(data[0][5]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][5])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtGreen\" id=\""+user_data+"CBOTmFirstGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+parseInt(data[0][8]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][8])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="				</div>";
				htmlCBO+="			</div>";
			}
		});
		
		htmlCBO+="		</div>";
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
				htmlCBO+="		<div class=\"contentColumns\">";
				htmlCBO+="			<div class=\"contenttop\">";
				htmlCBO+="				<div class=\"contentL\">";
				htmlCBO+="					<div class=\"contentTxt\">LM</div>";
				htmlCBO+="				</div>";
				htmlCBO+="				<div class=\"contentR\">";
				htmlCBO+="					<div class=\"contentRTop\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Projects";
				htmlCBO+="					</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+parseInt(data[0][1])+"</div>";
				htmlCBO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+parseInt(data[0][4])+"</div>";
				htmlCBO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+parseInt(data[0][7])+"</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="					<div class=\"contentRBottom\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Days";
				htmlCBO+="						</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxTxtRed\" id=\""+user_data+"CBOLmLastRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+parseInt(data[0][2]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][2])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtYellow\" id=\""+user_data+"CBOLmLastYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+parseInt(data[0][5]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][5])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtGreen\" id=\""+user_data+"CBOLmLastGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+parseInt(data[0][8]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][8])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="				</div>";
				htmlCBO+="			</div>";
				
				
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
				
				htmlCBO+="			<div class=\"contentBottom\">";
				htmlCBO+="				<div class=\"contentL\">";
				htmlCBO+="					<div class=\"contentTxt\">TM</div>";
				htmlCBO+="				</div>";
				htmlCBO+="				<div class=\"contentR\">";
				htmlCBO+="					<div class=\"contentRTop\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Projects";
				htmlCBO+="						</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+parseInt(data[0][1])+"</div>";
				htmlCBO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+parseInt(data[0][4])+"</div>";
				htmlCBO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+parseInt(data[0][7])+"</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="					<div class=\"contentRBottom\">";
				htmlCBO+="						<div class=\"titleContent\">";
				htmlCBO+="						#Days";
				htmlCBO+="						</div>";
				htmlCBO+="						<div class=\"boxContent\">";
				htmlCBO+="							<div class=\"boxTxtRed\" id=\""+user_data+"CBOTmLastRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+parseInt(data[0][2]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][2])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtYellow\" id=\""+user_data+"CBOTmLastYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+parseInt(data[0][5]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][5])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="							<div class=\"boxTxtGreen\" id=\""+user_data+"CBOTmLastGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+parseInt(data[0][8]);
				htmlCBO+="								<ul>";
				htmlCBO+="									<li class=\"user_level\">"+golbal_user_level+"</li>";
				htmlCBO+="									<li class=\"current_level\">CBO</li>";
				htmlCBO+="									<li class=\"current_data\">"+user_data+"</li>";
				htmlCBO+="									<li class=\"current_days\">"+parseInt(data[0][8])+"</li>";
				htmlCBO+="								</ul>";
				htmlCBO+="							</div>";
				htmlCBO+="						</div>";
				htmlCBO+="					</div>";
				htmlCBO+="				</div>";
				htmlCBO+="			</div>";
			}
		});
		htmlCBO+="		</div>";
		
		htmlCBO+="<div id=\"area"+user_data+"\"> ";
		htmlCBO+="</div>";
		
		htmlCBO+="		</div>";
		//if cbo all give loop for content
		if(cboAll!=""){
		$(".cboAll").append(htmlCBO);
		}else{
			
		$("#contentArea").html(htmlCBO);
		}
		$(".boxTxtRed  ul").hide();
		$(".boxTxtYellow  ul").hide();
		$(".boxTxtGreen  ul").hide();
		
		

	
		
		
		
		
	};
	//--end