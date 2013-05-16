var functionPJ =function(paramPjCode){
	//alert(paramPjCode);

	
var project_TM= new Array();
var project_LM= new Array();
var htmlPJ="";

var vLastMonth="";
var vLastMonthYear="";
if(parseInt($("#embedParamMonth").val())==1){
	vLastMonth=12;
	vLastMonthYear=parseInt($("#embedParamYear").val())-1;
}else{
	vLastMonth=parseInt($("#embedParamMonth").val())-1;
	vLastMonthYear=parseInt($("#embedParamYear").val());
}

//alert(paramPjCode);
//alert("embedParamYear"+$("#embedParamYear").val());
//alert("embedParamMonth"+$("#embedParamMonth").val());
$.ajax({
	url:"../Model/project_status.jsp",
	type:"get",
	dataType:"json",
	async:false,
	data:{"paramPjCodeR":""+paramPjCode+"","paramYear":$("#embedParamYear").val(),"paramMonth":$("#embedParamMonth").val()},
	success:function(data){
		//alert(data);
		$.each(data,function(index,indexEntry){
			project_TM[index] = []; // here is a fix
			/*
			console.log("--------------recode at"+index+"-----------------------");
			console.log(indexEntry[0]);
			console.log(indexEntry[1]);
			console.log(indexEntry[2]);
			console.log(indexEntry[3]);
			*/
			//alert(indexEntry[0]);
			
			project_TM[index]["mile_stone_code"]=indexEntry[0];
			project_TM[index]["mile_stone_name"]=indexEntry[1];
			project_TM[index]["prj_delay_day"]=indexEntry[2];
			project_TM[index]["threshold_color"]=indexEntry[3];
			
			
			
		});
		
	}
});

$.ajax({
	url:"../Model/project_status.jsp",
	type:"get",
	dataType:"json",
	async:false,
	data:{"paramPjCode":paramPjCode,"paramYear":vLastMonthYear,"paramMonth":vLastMonth},
	success:function(data){
		
		$.each(data,function(index,indexEntry){
			project_LM[index] = []; // here is a fix
			/*
			console.log("--------------recode at"+index+"-----------------------");
			console.log(indexEntry[0]);
			console.log(indexEntry[1]);
			console.log(indexEntry[2]);
			console.log(indexEntry[3]);
			//alert(paramPjCode);
			*/
			project_LM[index]["mile_stone_code"]=indexEntry[0];
			project_LM[index]["mile_stone_name"]=indexEntry[1];
			project_LM[index]["prj_delay_day"]=indexEntry[2];
			project_LM[index]["threshold_color"]=indexEntry[3];
			
			
		});
		
	}
});
/*
if(!project_LM[0]){
	alert("is not data");
}
*/
/*
if(!project_LM[0]){
	project_LM_color="#cccccc";
	prject_LM_delay_day=0; 
}else{
	
	project_LM_color=project_LM[i]["threshold_color"];
	prject_LM_delay_day=project_LM[i]["prj_delay_day"];
}
*/
//alert(project_TM.length);
//alert(project_LM[0]["mile_stone_code"]);
//alert(project_LM[0]["mile_stone_name"]);
//alert(project_LM[0]["prj_delay_day"]);
//alert(project_LM[0]["threshold_color"]);




htmlPJ+="		<div class=\"mainContentContent\">";
htmlPJ+="			<div class=\"content\">";
htmlPJ+="			<!-- BOX START-->";
htmlPJ+="				<div id=\""+paramPjCode+"\" class=\"projectBox clickable\">";
				
htmlPJ+="					<div class=\"title\">"+paramPjCode+"</div>";
	
htmlPJ+="				</div>";
htmlPJ+="			<!-- BOX END-->";
htmlPJ+="			</div>";

//alert(project_TM.length);

for(var i=0; i<project_TM.length;i++){
	//alert("project_TM="+project_TM[i]["threshold_color"]);
	//alert("project_LM="+project_LM[i]["threshold_color"]);
	var project_LM_color="";
	var prject_LM_delay_day="";
	if(project_LM[0]){
		 project_LM_color=project_LM[i]["threshold_color"];
		 prject_LM_delay_day=project_LM[i]["prj_delay_day"];
	}else{
		project_LM_color="#cccccc";
		prject_LM_delay_day=0;
	}
htmlPJ+="			<!-- LOOP START-->";
htmlPJ+="			<div class=\"content\">";
htmlPJ+="			<!-- BOX START-->";
htmlPJ+="				<div class=\"projectBox\">";
htmlPJ+="					<div class=\"projectTop\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="						LM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\" style=\"background:"+project_LM_color+"\">";
htmlPJ+="								<div class=\"boxText\">"+prject_LM_delay_day+"</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";

htmlPJ+="					<div class=\"projectBottom\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="							TM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\"  style=\"background:"+project_TM[i]["threshold_color"]+"\">";
htmlPJ+="								<div class=\"boxText\">"+project_TM[i]["prj_delay_day"]+"</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="				</div>";
htmlPJ+="			<!-- BOX END-->";
htmlPJ+="			</div>";
htmlPJ+="			<!-- LOOP END-->";

}

htmlPJ+="		</div>";



return htmlPJ;

//loop start
/*
htmlPJ+="		<div class=\"mainContentContent\">";
htmlPJ+="			<div class=\"content\">";
htmlPJ+="			<!-- BOX START-->";
htmlPJ+="				<div class=\"projectBox\">";
				
htmlPJ+="					<div class=\"title\">"+paramPjCode+"</div>";
	
htmlPJ+="				</div>";
htmlPJ+="			<!-- BOX END-->";
htmlPJ+="			</div>";


htmlPJ+="			<!-- LOOP START-->";
htmlPJ+="			<div class=\"content\">";
htmlPJ+="			<!-- BOX START-->";
htmlPJ+="				<div class=\"projectBox\">";
htmlPJ+="					<div class=\"projectTop\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="						LM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";

htmlPJ+="					<div class=\"projectBottom\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="							TM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="				</div>";
htmlPJ+="			<!-- BOX END-->";
htmlPJ+="			</div>";
htmlPJ+="			<!-- LOOP END-->";


htmlPJ+="			<div class=\"content\">";
htmlPJ+="			<!-- BOX START-->";
htmlPJ+="				<div class=\"projectBox\">";
htmlPJ+="					<div class=\"projectTop\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="						LM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="					<div class=\"projectBottom\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="							TM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="				</div>";
htmlPJ+="			<!-- BOX END-->";
htmlPJ+="			</div>";

htmlPJ+="			<div class=\"content\">";
htmlPJ+="			<!-- BOX START-->";
htmlPJ+="				<div class=\"projectBox\">";
htmlPJ+="					<div class=\"projectTop\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="						LM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="					<div class=\"projectBottom\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="							TM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="				</div>";
htmlPJ+="			<!-- BOX END-->";
htmlPJ+="			</div>";
htmlPJ+="			<div class=\"content\">";
htmlPJ+="			<!-- BOX START-->";
htmlPJ+="				<div class=\"projectBox\">";
htmlPJ+="					<div class=\"projectTop\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="						LM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="					<div class=\"projectBottom\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="							TM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="				</div>";
htmlPJ+="			<!-- BOX END-->";
htmlPJ+="			</div>";
htmlPJ+="			<div class=\"content\">";
htmlPJ+="			<!-- BOX START-->";
htmlPJ+="				<div class=\"projectBox\">";
htmlPJ+="					<div class=\"projectTop\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="						LM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="					<div class=\"projectBottom\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="							TM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="				</div>";
htmlPJ+="			<!-- BOX END-->";
htmlPJ+="			</div>";
htmlPJ+="			<div class=\"content\">";
htmlPJ+="			<!-- BOX START-->";
htmlPJ+="				<div class=\"projectBox\">";
htmlPJ+="					<div class=\"projectTop\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="						LM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="					<div class=\"projectBottom\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="							TM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="				</div>";
htmlPJ+="			<!-- BOX END-->";
htmlPJ+="			</div>";
htmlPJ+="			<div class=\"content\">";
htmlPJ+="			<!-- BOX START-->";
htmlPJ+="				<div class=\"projectBox\">";
htmlPJ+="					<div class=\"projectTop\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="						LM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="					<div class=\"projectBottom\">";
htmlPJ+="						<div class=\"left\">";
htmlPJ+="							TM<br>#Days";
htmlPJ+="						</div>";
htmlPJ+="						<div class=\"right\">";
htmlPJ+="							<div class=\"boxColorGreen\">";
htmlPJ+="								<div class=\"boxText\">0</div>";
htmlPJ+="							</div>";
htmlPJ+="						</div>";
htmlPJ+="					</div>";
htmlPJ+="				</div>";
htmlPJ+="			<!-- BOX END-->";
htmlPJ+="			</div>";
htmlPJ+="		</div>";
//loop end			
	return htmlPJ;
	
*/
};