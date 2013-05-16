	//fucntion ceo
	var functionCEO = function(user_level,user_data){
		//single loop start
		
		var htmlCEO="";
		htmlCEO+="<div class=\"overviewContent\" >";
		htmlCEO+="		<div class=\"contentColumn ceo\" id=\""+user_data+"\">";
		htmlCEO+="			<div class=\"text\">";
		htmlCEO+="			<div class='textMark' id=\"textMark"+user_data+"\">+</div> #of Projects <br>";
		htmlCEO+="			by Status";
		htmlCEO+="			</div>";
		htmlCEO+="		</div>";
		
		/*
		htmlCEO+="		<div class=\"contentColumns\">";
		htmlCEO+="			<div class=\"contenttop\">";
		htmlCEO+="				<div class=\"contentL\">";
		htmlCEO+="					<div class=\"contentTxt\">LM</div>";
		htmlCEO+="				</div>";
		htmlCEO+="				<div class=\"contentR\">";
		htmlCEO+="					<div class=\"contentRTop\">";
		htmlCEO+="						<div class=\"titleContent\">";
		htmlCEO+="						#Projects";
		htmlCEO+="					</div>";
		htmlCEO+="						<div class=\"boxContent\">";
		htmlCEO+="							<div class=\"boxRed\">20</div>";
		htmlCEO+="							<div class=\"boxYello\">1</div>";
		htmlCEO+="							<div class=\"boxGreen\">5</div>";
		htmlCEO+="						</div>";
		htmlCEO+="					</div>";
		htmlCEO+="					<div class=\"contentRBottom\">";
		htmlCEO+="						<div class=\"titleContent\">";
		htmlCEO+="						#Days";
		htmlCEO+="						</div>";
		htmlCEO+="						<div class=\"boxContent\">";
		htmlCEO+="							<div class=\"boxTxtRed\">-185</div>";
		htmlCEO+="							<div class=\"boxTxtYellow\">-3</div>";
		htmlCEO+="							<div class=\"boxTxtGreen\">48</div>";
		htmlCEO+="						</div>";
		htmlCEO+="					</div>";
		htmlCEO+="				</div>";
		htmlCEO+="			</div>";
		htmlCEO+="			<div class=\"contentBottom\">";
		htmlCEO+="				<div class=\"contentL\">";
		htmlCEO+="					<div class=\"contentTxt\">TM</div>";
		htmlCEO+="				</div>";
		htmlCEO+="				<div class=\"contentR\">";
		htmlCEO+="					<div class=\"contentRTop\">";
		htmlCEO+="						<div class=\"titleContent\">";
		htmlCEO+="						#Projects";
		htmlCEO+="						</div>";
		htmlCEO+="						<div class=\"boxContent\">";
		htmlCEO+="							<div class=\"boxRed\">20</div>";
		htmlCEO+="							<div class=\"boxYello\">1</div>";
		htmlCEO+="							<div class=\"boxGreen\">5</div>";
		htmlCEO+="						</div>";
		htmlCEO+="					</div>";
		htmlCEO+="					<div class=\"contentRBottom\">";
		htmlCEO+="						<div class=\"titleContent\">";
		htmlCEO+="						#Days";
		htmlCEO+="						</div>";
		htmlCEO+="						<div class=\"boxContent\">";
		htmlCEO+="							<div class=\"boxTxtRed\">-185</div>";
		htmlCEO+="							<div class=\"boxTxtYellow\">-3</div>";
		htmlCEO+="							<div class=\"boxTxtGreen\">48</div>";
		htmlCEO+="						</div>";
		htmlCEO+="					</div>";
		htmlCEO+="				</div>";
		htmlCEO+="			</div>";
		htmlCEO+="		</div>";
		*/
		
		
		var vLastMonth="";
		var vLastMonthYear="";
		if(parseInt($("#embedParamMonth").val())==1){
			vLastMonth=12;
			vLastMonthYear=parseInt($("#embedParamYear").val())-1;
		}else{
			vLastMonth=parseInt($("#embedParamMonth").val())-1;
			vLastMonthYear=parseInt($("#embedParamYear").val());
		}
		//alert(vLastMonth);
		//alert(vLastMonthYear);
		
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
				htmlCEO+="		<div class=\"contentColumns\">";
				htmlCEO+="			<div class=\"contenttop\">";
				htmlCEO+="				<div class=\"contentL\">";
				htmlCEO+="					<div class=\"contentTxt\">LM</div>";
				htmlCEO+="				</div>";
				htmlCEO+="				<div class=\"contentR\">";
				htmlCEO+="					<div class=\"contentRTop\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Projects";
				htmlCEO+="					</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				//url("images/ui-bg_highlight-soft_100_deedf7_1x100.png") repeat-x scroll 50% 50% #DEEDF7
				//htmlCEO+="							<div class=\"boxRed\" style=\"background-image:url(../images/highlight.png)  repeat-x scroll 50% 50% #DEEDF7 \">"+data[0][1]+"</div>";
				htmlCEO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlCEO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlCEO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="					<div class=\"contentRBottom\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Days";
				htmlCEO+="						</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				htmlCEO+="							<div class=\"boxTxtRed\" id=\"ceoLmOverviewRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtYellow\" id=\"ceoLmOverviewYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlCEO+="								<ul >";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtGreen\" id=\"ceoLmOverviewGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="				</div>";
				htmlCEO+="			</div>";
				
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
				"paramInType":"overall","paramInNoOfDay":$("#embedParamOfFirstDay").val()},
			success:function(data){
				//alert("2"+data);
				
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
				htmlCEO+="			<div class=\"contentBottom\">";
				htmlCEO+="				<div class=\"contentL\">";
				htmlCEO+="					<div class=\"contentTxt\">TM</div>";
				htmlCEO+="				</div>";
				htmlCEO+="				<div class=\"contentR\">";
				htmlCEO+="					<div class=\"contentRTop\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Projects";
				htmlCEO+="						</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				htmlCEO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlCEO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlCEO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="					<div class=\"contentRBottom\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Days";
				htmlCEO+="						</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				htmlCEO+="							<div class=\"boxTxtRed\" id=\"ceoTmOverviewRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtYellow\" id=\"ceoTmOverviewYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtGreen\" id=\"ceoTmOverviewGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="				</div>";
				htmlCEO+="			</div>";
				
				
				
				
			}
		});
		
		htmlCEO+="		</div>";
		
		
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
				htmlCEO+="		<div class=\"contentColumns\">";
				htmlCEO+="			<div class=\"contenttop\">";
				htmlCEO+="				<div class=\"contentL\">";
				htmlCEO+="					<div class=\"contentTxt\">LM</div>";
				htmlCEO+="				</div>";
				htmlCEO+="				<div class=\"contentR\">";
				htmlCEO+="					<div class=\"contentRTop\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Projects";
				htmlCEO+="					</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				htmlCEO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlCEO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlCEO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="					<div class=\"contentRBottom\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Days";
				htmlCEO+="						</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				htmlCEO+="							<div class=\"boxTxtRed\" id=\"ceoLmFirstRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtYellow\" id=\"ceoLmFirstYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtGreen\" id=\"ceoLmFirstGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="				</div>";
				htmlCEO+="			</div>";
				
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
				htmlCEO+="			<div class=\"contentBottom\">";
				htmlCEO+="				<div class=\"contentL\">";
				htmlCEO+="					<div class=\"contentTxt\">TM</div>";
				htmlCEO+="				</div>";
				htmlCEO+="				<div class=\"contentR\">";
				htmlCEO+="					<div class=\"contentRTop\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Projects";
				htmlCEO+="						</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				htmlCEO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlCEO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlCEO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="					<div class=\"contentRBottom\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Days";
				htmlCEO+="						</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				htmlCEO+="							<div class=\"boxTxtRed\" id=\"ceoTmFirstRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtYellow\" id=\"ceoTmFirstYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtGreen\" id=\"ceoTmFirstGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="				</div>";
				htmlCEO+="			</div>";
			}
		});
		
		htmlCEO+="		</div>";
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
				htmlCEO+="		<div class=\"contentColumns\">";
				htmlCEO+="			<div class=\"contenttop\">";
				htmlCEO+="				<div class=\"contentL\">";
				htmlCEO+="					<div class=\"contentTxt\">LM</div>";
				htmlCEO+="				</div>";
				htmlCEO+="				<div class=\"contentR\">";
				htmlCEO+="					<div class=\"contentRTop\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Projects";
				htmlCEO+="					</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				htmlCEO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlCEO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlCEO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="					<div class=\"contentRBottom\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Days";
				htmlCEO+="						</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				htmlCEO+="							<div class=\"boxTxtRed\" id=\"ceoLmLastRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtYellow\" id=\"ceoLmLastYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtGreen\" id=\"ceoLmLastGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="				</div>";
				htmlCEO+="			</div>";
				
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
				"paramInType":"after_first_n_days","paramInNoOfDay":$("#embedParamOfFirstDay").val()},
			success:function(data){
				//alert("6"+data);
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
				htmlCEO+="			<div class=\"contentBottom\">";
				htmlCEO+="				<div class=\"contentL\">";
				htmlCEO+="					<div class=\"contentTxt\">TM</div>";
				htmlCEO+="				</div>";
				htmlCEO+="				<div class=\"contentR\">";
				htmlCEO+="					<div class=\"contentRTop\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Projects";
				htmlCEO+="						</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				htmlCEO+="							<div class=\"boxRed\" style=\"background:"+data[0][0]+";\">"+data[0][1]+"</div>";
				htmlCEO+="							<div class=\"boxYello\" style=\"background:"+data[0][3]+";\">"+data[0][4]+"</div>";
				htmlCEO+="							<div class=\"boxGreen\" style=\"background:"+data[0][6]+";\">"+data[0][7]+"</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="					<div class=\"contentRBottom\">";
				htmlCEO+="						<div class=\"titleContent\">";
				htmlCEO+="						#Days";
				htmlCEO+="						</div>";
				htmlCEO+="						<div class=\"boxContent\">";
				htmlCEO+="							<div class=\"boxTxtRed\" id=\"ceoTmLastRedCarryingCost\" style=\"color:"+data[0][0]+";\">"+data[0][2];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][2]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtYellow\" id=\"ceoTmLastYellowCarryingCost\" style=\"color:"+data[0][3]+";\">"+data[0][5];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][5]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="							<div class=\"boxTxtGreen\" id=\"ceoTmLastGreenCarryingCost\" style=\"color:"+data[0][6]+";\">"+data[0][8];
				htmlCEO+="								<ul>";
				htmlCEO+="									<li class=\"user_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_level\">CEO</li>";
				htmlCEO+="									<li class=\"current_data\">All</li>";
				htmlCEO+="									<li class=\"current_days\">"+data[0][8]+"</li>";
				htmlCEO+="								</ul>";
				htmlCEO+="							</div>";
				htmlCEO+="						</div>";
				htmlCEO+="					</div>";
				htmlCEO+="				</div>";
				htmlCEO+="			</div>";
			}
		});
		htmlCEO+="		</div>";
		
		htmlCEO+="<div class=\"cboAll\">";
		htmlCEO+="</div>";
		
		htmlCEO+="		</div>";
		
		
		$("#contentArea").html(htmlCEO);
		$(".boxTxtRed  ul").hide();
		$(".boxTxtYellow  ul").hide();
		$(".boxTxtGreen  ul").hide();
		
		
	};
	//--end
	
	