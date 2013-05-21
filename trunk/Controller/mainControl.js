$(document).ready(function(){
	//varible global
	var userNameLogin="";
	//userNameLogin="1";//CEO
	//userNameLogin="527";//CBO
	//userNameLogin="10946";//SBU
	
	var user_level="";
	var golbal_user_level="";
	var user_data="";
	var golbal_user_data="";
	
	var colorRateRed="";
	var colorRateYellow="";
	var colorRateGreen="";
	var htmlPJ="";
	
	//ฟังก์ชันจัดการ Commas
	function addCommas(nStr)
	{
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	}

		//--function call model get username
		//alert("hello Test");
		
		var functionGetUser=function(){
			$.ajax({
				url:'../Model/getUserPentaho.jsp',
				type:'get',
				dataType:'text',
				async:false,
				cache: false,
				success:function(data){
				//alert(data);
				userNameLogin=$.trim(data);
				}
			});
		};
	functionGetUser();
	//alert(userNameLogin);
	if(userNameLogin=="joe"){
		userNameLogin="00000001";
	}
		//--end
	
		//insert year parameter
		$.ajax({
			url:'../Model/paramYear.jsp',
			type:'get',
			dataType:'html',
			async:false,
			success:function(data){
				//alert(data);
				$("#paramYearArea").html(data);
				$("#paramYear").kendoDropDownList();
			}
		});
		//--end
		//console.log($("#paramYear").get());
		$("#paramYear").live("change",function(){
					$.ajax({
						url:'../Model/paramMonth.jsp',
						type:'get',
						dataType:'html',
						data:{'paramYear':$(this).val()},
						success:function(data){
							$("#paramMonthArea").html(data);
							$("#paramMonth").kendoDropDownList();
						}
					});
			});	
			$("#paramYear").change();
		//--end
		//set of frist day parameter
		$("#paramOfFirstDay").click(function(){
			//$(this).val("");
		});
		//--end
		
		
		
		//click submit action
		$("#submit").click(function(){
			/*
			alert($("#paramYear").val());
			alert($("#paramMonth").val());
			alert($("#paramOfFirstDay").val());
			*/
			$(".embedParam").remove();
			$("body").append("<input type=\"hidden\" id=\"embedParamYear\" class=\"embedParam\" name=\"embedParamYear\" value=\""+$("#paramYear").val()+"\">");
			$("body").append("<input type=\"hidden\" id=\"embedParamMonth\" class=\"embedParam\" name=\"embedParamMonth\" value=\""+$("#paramMonth").val()+"\">");
			$("body").append("<input type=\"hidden\" id=\"embedParamOfFirstDay\" class=\"embedParam\" name=\"embedParamOfFirstDay\" value=\""+$("#paramOfFirstDay").val()+"\">");

			functionOverviewPage();
			
			
		});
		//--end
		
		
		
		
		$(".selectList").kendoDropDownList();
		 $("#tabPruksa").tabs();
		 //$("#tabBsc").hide();
		 $(".ui-tabs-panel").css({"padding":"0px","background":"#DEEDF7"});
		 
		 
		 
		 
		 
		 $("a[href=#tab1]").click(function(){
			 functionOverviewPage();
			
		 });
		 var functionOverviewPage = function(){
			 $.ajax({
				 url:'../View/overview.jsp',
				 type:'get',
				 dataType:'html',
				 success:function(data){
					 $("#tab1").html(data);
					//ofFirstDayNumber
					$(".ofFirstDayNumber").html($("#paramOfFirstDay").val());
					functionGetLevel(); 
				
				 }
			 });
			 
			 $("#mainContentPruksa").show();
		 }
		 
		 $("a[href=#tab2]").click(function(){
			 $(".tooltipContent").hide();
			 $.ajax({
				 url:'../View/byProject.jsp',
				 type:'get',
				 dataType:'html',
				 success:function(data){
					
					 $("#tab2").html(data);
					 
				 }
			 });
		 });
		 
		 
	
	
	
		//script tab2 start
		
		 $(".ceo").live("click",function(){
			
			var id = this.id;
			var thisActive= $(this).attr("active");
			if($.trim(thisActive) == "clicked"){
			$(".cboAll").hide();
			$(this).attr({"active":""});
			$("#textMark"+id).html("+");
			}else{
			
			$("#textMark"+id).html("-");
			$(this).attr({"active":"clicked"});
			//id =id.substring(3);
			$.ajax({
				url:'../Model/cbo_list.jsp',
				type:'get',
				dataType:'json',
				success:function(data){
					//alert(id);
					$(".cboAll").empty();
					$.each(data,function(index,indexEntry){
						//alert(indexEntry[0]);
						//alert(indexEntry[1]);
						//Get user_level,level_data
						functionCBO(indexEntry[0],indexEntry[1],"cboAll",golbal_user_level);
						//$(".cboAll").html(data);
					});
					$(".cboAll").show();
				}
			});
			

			}//if

		});
		
	
	$(".cbo").live("click",function(){
		  
			var id = this.id;
			
			var thisActive= $(this).attr("active");
			if($.trim(thisActive) == "clicked"){
			$(this).attr({"active":""});
			//alert("clickeed="+"#areaPj"+id);
			$("#area"+id).hide();
			$("#textMark"+id).html("+");
			}else{
			$("#textMark"+id).html("--");
			$(this).attr({"active":"clicked"});
			

			$.ajax({
				url:'../Model/sbu_list.jsp',
				type:'get',
				dataType:'json',
				data:{'paramCboCode':id},
				success:function(data){
					//alert("user_data="+user_data);
					//alert("id="+id);
					$("#area"+id).empty();
					$.each(data,function(index,indexEntry){
						//alert(indexEntry[0]);
						//alert(indexEntry[1]);
						//Get user_level,level_data
						functionSBU(indexEntry[0],indexEntry[1],id,golbal_user_level);

						//$(".user_data").html(data);
					});
					$("#area"+id).show();
				}
			});

			}

		});
	

	$(".sbu").live("click",function(){
			var id = this.id;
			
			
			var thisActive= $(this).attr("active");
			if($.trim(thisActive) == "clicked"){
			$(this).attr({"active":""});
			$("#areaPj"+id+"").hide();
			$("#textMark"+id).html("+");
			}else{
			$("#textMark"+id).html("---");
	    $(this).attr({"active":"clicked"});
		htmlPJ="";
		htmlPJ+="<div class=\"overviewPj\">";
		htmlPJ+="		<div class=\"mainContentTitle\">";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			Project ";
		htmlPJ+="			</div>";
		
		//loop
	$.ajax({
		url:"../Model/mile_stone_list.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			//alert(data);
			$.each(data,function(index,indexEntry){
				
				htmlPJ+="			<div class=\"title\">";
				htmlPJ+="			"+indexEntry+" ";
				htmlPJ+="			</div>";
			});
		}
	});
	/*
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			โอนกรรม<br>สิทธิ์ที่ดิน ";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			เริ่มถมดิน  ";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			Master <br>Layout";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			ได้รับอนุญาต<br>รวม/แบ่งแปลง  ";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			ได้รับอนุญาต<br>ก่อสร้างสะพาน ";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			ได้รับอนุญาต<br>ออกโฉนด<br>แปลงย่อย ";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			1st Unit<br> Transfer";
		htmlPJ+="			</div>";
		htmlPJ+="			<div class=\"title\">";
		htmlPJ+="			1st Unit<br> Transfer";
		htmlPJ+="			</div>";
	*/
		//loop

		
		htmlPJ+="		</div>";
		//functionPJ();
			/*
			var id = this.id;
			$.ajax({
				url:'../View/overviewPj.jsp',
				type:'get',
				dataType:'html',
				data:{'paramSbuCode':id},
				success:function(data){
					$("#areaPjCN").html(data);
				}
			});
			*/
			
			$.ajax({
				url:'../Model/project_list.jsp',
				type:'get',
				dataType:'json',
				data:{'paramSbuCode':id},
				async:false,
				success:function(data){
					
					$.each(data,function(index,indexEntry){
						//alert("hello world"+index);
						//if(index==0){
						//alert("newProjectCode");
						//functionPJ(indexEntry);
						htmlPJ+=""+functionPJ(indexEntry);
						
						//}
						
					});
					
						
				}
			});
			
			htmlPJ+="</div>";
			
			//alert(htmlPJ);
			
			$("#areaPj"+id+"").html(htmlPJ);		
			$("#areaPj"+id+"").show();

			}//if	
		});//click sbu
	//script tab2 end	
	
	
	
	
	
	
	
	//function create table grid
	//define function grid
	
	//create table for grid table
	var createTableCreate = function(gridName,gridArea){
	var	htmlTableGird="";
	htmlTableGird+="<table id=\""+gridName+"\">";
	htmlTableGird+="<thead>";
		htmlTableGird+="<tr>";
			htmlTableGird+="<th data-field=\"Field1\" ><center><b>Activity</b></center></th>";
			htmlTableGird+="<th data-field=\"Field2\" ><center><b>Accum <br>Target Day</b></center></th>";
			htmlTableGird+="<th data-field=\"Field3\" ><center><b>Target<br>Date</b></center></th>";
			htmlTableGird+="<th data-field=\"Field4\" ><center><b>Accum<br>Actual Day</b></center></th>";
			htmlTableGird+="<th data-field=\"Field5\" ><center><b>Actual<br>Date</b></center></th>";
			htmlTableGird+="<th data-field=\"Field6\" ><center><b>Delay Days</b></center></th>";
			htmlTableGird+="<th data-field=\"Field7\" ><center><b>Responsibility</b></center></th>";
			htmlTableGird+="<th data-field=\"Field8\" ><center><b>Revised Target<br>(if no action)</b></center></th>";
		htmlTableGird+="</tr>";
	htmlTableGird+="</thead>";
	htmlTableGird+="<tbody>";
		htmlTableGird+="<tr>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
			htmlTableGird+="<td></td>";
		htmlTableGird+="</tr>";
	htmlTableGird+="</tbody>";
	
	htmlTableGird+="</table>";
	
	$("#"+gridArea).html(htmlTableGird);
	
	};
	//--end
	
	//--end
	var grid = function(gridName,gridArea,gridData){
		
		createTableCreate(gridName,gridArea);
		//create table by dinamic web
		/*
		<table id="grid1">
		  <thead>
		      <tr>
				  
				  <!--<th class="k-hierarchy-cell k-header">&nbsp;</th>-->
		          <th data-field="Field1" ><center><b>Activity</b></center></th>
				  <th data-field="Field2"><center><b>Accum Days<br>Target</b></center></th>	 
				  <th data-field="Field3"><center><b>Target<br>Date</b></center></th>
				  <th data-field="Field4"><center><b>Accum<br>Actual Day</b></center></th>
				  <th data-field="Field5"><center><b>Actual<br>Date</b></center></th>
				  <th data-field="Field6"><center><b>Accum <br>Delay Days</b></center></th>
				  <th data-field="Field7"><center><b>Responsibility</b></center></th>
		          <th data-field="Field8"><center><b>Revised Target<br>(if no action)</b></center></th>
				 

			  </tr>
		  </thead>
		  <tbody>
		      <tr>
		          <td></td>
		          <td></td>
				  <td></td>
		          <td></td>
				  <td></td>
		          <td></td>
				  <td></td>
		          <td></td>
				  
		      	  
			</tr>

		  </tbody>
		 </table>
		 
		*/
	
	
	var $title =[
	              {
	                  field: "Field1",
					   width: 220
	              },
	              {
	                  field: "Field2",
					  type: "number" 
					  //width: 310
				 },
	              {
	                  field: "Field3",
					  //width: 70
				 },
	              {
	                  field: "Field4",
					 type: "number" 
					  //width:100
				 },
	              {
	                  field: "Field5",
					  //width: 70
				 },
	              {
	                  field: "Field6",
					  type: "number" 
					  //width: 100
				 },
	              {
	                  field: "Field7",
					  type: "number" 
					  //width: 100
				 },
	              {
	                  field: "Field8",
					  type: "number" 
					  //width: 90
				 }];
	
	
	var $data =[
                 {
                     Field1: "ST",
					 Field2: "<div id='kpiN'>KS1</div>การลงทุนด้าน ว และ ท ในภาคการผลิต ภาคบริการและภาคการผลิต ภาคบริการและภาคเกษตรกรรม",
                     Field3: " <div id='textR'>1.1</div> ",
					 Field4: "เท่าของการลงทุนปี54",
                     Field5: "<div id='textR'>25</div>",
					 Field6:"4,500 (ล้านบาท)",
					 Field7:"2,000(ล้านบาท)",
					 Field8: " <div id='textR'>0.44</div>",
                     
                 },
                 {
                	 Field1: "ST",
					 Field2: "<div id='kpiN'>KS1</div>การลงทุนด้าน ว และ ท ในภาคการผลิต ภาคบริการและภาคการผลิต ภาคบริการและภาคเกษตรกรรม",
                     Field3: " <div id='textR'>1.1</div> ",
					 Field4: "เท่าของการลงทุนปี54",
                     Field5: "<div id='textR'>25</div>",
					 Field6:"4,500 (ล้านบาท)",
					 Field7:"2,000(ล้านบาท)",
					 Field8: " <div id='textR'>0.44</div>",
					 
				},
                 {
                	 Field1: "ST",
					 Field2: "<div id='kpiN'>KS1</div>การลงทุนด้าน ว และ ท ในภาคการผลิต ภาคบริการและภาคการผลิต ภาคบริการและภาคเกษตรกรรม",
                     Field3: " <div id='textR'>1.1</div> ",
					 Field4: "เท่าของการลงทุนปี54",
                     Field5: "<div id='textR'>25</div>",
					 Field6:"4,500 (ล้านบาท)",
					 Field7:"2,000(ล้านบาท)",
					 Field8: " <div id='textR'>0.44</div>",
					
                 }
				]; 
	
	
 $("#"+gridName).kendoGrid({
		 theme:$(document).data("kendoSkin") || "black",
		 dataSource: {
				 data:gridData
		 },
           scrollable:true,
		   sortable: true,
           columns:$title
 });
//$("#"+gridName+"  tbody tr td:eq(1)").addClass("txtNumber");
setTextForSort(gridName);

};
var setTextForSort = function(gridName){
$("#"+gridName+" tbody tr").each(function(){
     	 $("td:eq(1)",this).addClass("txtNumber"); 
		 $("td:eq(3)",this).addClass("txtNumber"); 
		 $("td:eq(5)",this).addClass("txtNumber"); 
		 $("td:eq(6)",this).addClass("txtNumber"); 
		 $("td:eq(7)",this).addClass("txtNumber"); 
     	
});
}
//k-header
$(".k-grid-header-wrap table thead tr th.k-header").live("click",function(){

	var gridName=($(this).parent().parent().parent().parent().parent().parent().parent().attr("id"));
	setTextForSort(gridName);
});
//--end
//grid();

	
	//click event header for request content table grid

	
	$("h3.ui-accordion-header").live("click",function(){
		var projectCode = this.id;
		$(".ui-accordion-content").css({"height":"342px","padding":"2px"});
		$("ui-accordion-content p").css({"margin":"0px"});
		$("#content"+projectCode+"").css({"margin":"0px"});
		
		$.ajax({
			url:'../Model/project_status_by_project_drilldown.jsp',
			type:'get',
			dataType:'json',
			data:{"paramProjectCode":projectCode,
				  "paramMonth":$("#embedParamMonth").val(),
				  "paramYear":$("#embedParamYear").val()},
			success:function(data){
				
				var objGird="";
				objGird+="[";
				var i=0;
				$.each(data,function(index,EntryIndex){
					if(i==0){
						objGird+="{";
					}else{
						objGird+=",{";
					}

					//check null value
					var actualDate="";
					var responsibility="";
					var RevisedTarget="";
					if(EntryIndex[4]==null){
						actualDate=0;
					}else{
						actualDate=parseInt(EntryIndex[4]);
					}
					
					if(EntryIndex[6]==null){
						responsibility=0;
					}else{
						responsibility=parseInt(EntryIndex[6]);
					}

					
					if(RevisedTarget[7]==null){
						RevisedTarget=0;
					}else{
						RevisedTarget=parseInt(EntryIndex[7]);
					}
					objGird+="Field1:\""+EntryIndex[0]+"\",";
					objGird+="Field2:\""+parseInt(EntryIndex[1])+"\",";
					objGird+="Field3:\""+EntryIndex[2]+"\",";
					objGird+="Field4:\""+parseInt(EntryIndex[3])+"\",";
					objGird+="Field5:\""+actualDate+"\",";
					objGird+="Field6:\""+parseInt(EntryIndex[5])+"\",";
					objGird+="Field7:\""+responsibility+"\",";
					objGird+="Field8:\""+RevisedTarget+"\"";
					objGird+="}";
				i++;	
				});
				objGird+="]";
				var objEval=eval("("+objGird+")");
				var gridName="grid"+projectCode;
				var gridArea="content"+projectCode;
				//alert("gridName="+gridName);
				//alert("gridArea="+gridArea);
				grid(gridName,gridArea,objEval);
			}
		});
		
	});
	
	//--end


	

	//--request username for get position
	var functionGetLevel = function(){
	
	$.ajax({
		url:"../Model/user_level.jsp",
		type:"get",
		dataType:'json',
		data:{"paramUserName":userNameLogin,"paramYear":$("#embedParamYear").val(),"paramMonth":$("#embedParamMonth").val()},
		async:false,
		success:function(data){
			//alert(data);
			user_level=data[0][0];//user_level
			golbal_user_level=data[0][0];
			user_data=data[0][1];//user_data
			golbal_user_data=data[0][1];
			
			//alert(golbal_user_level);
			$(".embedParamUser").remove();
			$("body").append("<input type=\"hidden\" id=\"embedParamGlobalUserLevel\" class=\"embedParamUser\" name=\"embedParamGlobalUserLevel\" value=\""+golbal_user_level+"\">");
			$("body").append("<input type=\"hidden\" id=\"embedParamGlobalUserData\" class=\"embedParamUser\" name=\"embedParamGlobalUserData\" value=\""+golbal_user_data+"\">");
			//embed user golbal_user_level and golbal_user_data
			$("#cateProject").html(golbal_user_level);
			if(user_level=="CEO"){
				
			//single loop
				functionCEO(user_level,user_data);
				
				

			}else if(user_level=="CBO"){
			//multiloop
				//functionCBO(user_level,user_data,cboAll="");
				functionCBO(user_level,user_data,cboAll="",golbal_user_level);
			}else if(user_level=="SBU"){
			//multiloop
				//functionSBU(user_level,user_data,parentCbo="");
				//user_level,user_data,parentCbo,golbal_user_level
				functionSBU(user_level,user_data,parentCbo="",golbal_user_level);
			}
			
			
		}
	});
	};
	//--end



	
	
	
	//check carrying cost
	$(".boxTxtRed").live("mouseover",function(e){
			
			colorRateRed=$("#embedcolorRateRed").val();
			colorRateYellow=$("#embedcolorRateYellow").val();
			colorRateGreen=$("#embedcolorRateGreen").val();
			
			var widthTooltip=e.pageX+10;
			var heightTooltip=e.pageY+10;
			var overallId = this.id;
			//alert(overallId);
			var user_level=$("#"+overallId+" >ul li.user_level").text();
			var current_level=$("#"+overallId+" >ul li.current_level").text();
			var current_data=$("#"+overallId+" >ul li.current_data").text();
			var current_days=$("#"+overallId+" >ul li.current_days").text();
			
			
			//alert(overallId);
			/*
			alert("user_level"+user_level);
			alert("current_level"+current_level);
			alert("current_data"+current_data);
			alert("current_days"+current_days);
			*/
			$.ajax({
				url:'../Model/carrying_cost.jsp',
				type:'get',
				dataType:'json',
				//data:{'paramUserLevel':user_level,'paramCurentLevel':current_level,'paramCurentData':current_data,'paramDays':current_days},
				data:{'paramUserLevel':user_level,'paramCurentLevel':current_level,'paramCurentData':current_data,'paramYear':$("#embedParamYear").val(),'paramMonth':$("#embedParamMonth").val(),'paramDays':current_days},
				success:function(data){
					//alert(data[0][0]);
					
					$("#carryingPrice").html(addCommas(data[0][0]));
					$(".tooltipContent").css({"top":heightTooltip+"px","left":widthTooltip+"px","color":colorRateRed,"border":"2px solid "+colorRateRed}).show();
				}
			});
			
		//alert("hello");
	}).live("mouseout",function(){
		$(".tooltipContent").hide();
	});
	
	
	
	
	$(".boxTxtYellow").live("mouseover",function(e){
		colorRateRed=$("#embedcolorRateRed").val();
		colorRateYellow=$("#embedcolorRateYellow").val();
		colorRateGreen=$("#embedcolorRateGreen").val();

		$(".tooltipContent").hide();
		var widthTooltip=e.pageX+10;
		var heightTooltip=e.pageY+10;
		var overallId = this.id;
		var user_level=$("#"+overallId+" >ul li.user_level").text();
		var current_level=$("#"+overallId+" >ul li.current_level").text();
		var current_data=$("#"+overallId+" >ul li.current_data").text();
		var current_days=$("#"+overallId+" >ul li.current_days").text();
		
		//alert("user_level"+user_level);
		//alert("current_level"+current_level);
		//alert("current_data"+current_data);
		//alert("current_days"+current_days);
		
		$.ajax({
			url:'../Model/carrying_cost.jsp',
			type:'get',
			dataType:'json',
				//'CBO','CBO','CBO1','2013','04','10'
			data:{'paramUserLevel':user_level,'paramCurentLevel':current_level,'paramCurentData':current_data,'paramYear':$("#embedParamYear").val(),'paramMonth':$("#embedParamMonth").val(),'paramDays':current_days},
			success:function(data){
				
				$("#carryingPrice").html(data[0][0]);
				$(".tooltipContent").css({"top":heightTooltip+"px","left":widthTooltip+"px","color":"black","border":"2px solid "+colorRateYellow}).show();
			}
		});
		
		//alert("hello");
	}).live("mouseout",function(){
		$(".tooltipContent").hide();
	});
	/*
	$(".boxTxtGreen").live("mouseenter",function(e){
		var widthTooltip=e.pageX+10;
		var heightTooltip=e.pageY+10;
		var overallId = this.id;
		var user_level=$("#"+overallId+" >ul li.user_level").text();
		var current_level=$("#"+overallId+" >ul li.current_level").text();
		var current_data=$("#"+overallId+" >ul li.current_data").text();
		var current_days=$("#"+overallId+" >ul li.current_days").text();
		
		//alert("user_level"+user_level);
		//alert("current_level"+current_level);
		//alert("current_data"+current_data);
		//alert("current_days"+current_days);
		
		$.ajax({
			url:'../Model/carrying_cost.jsp',
			type:'get',
			dataType:'json',
			data:{'paramUserLevel':user_level,'paramCurentLevel':current_level,'paramCurentData':current_data,'paramDays':current_days},
			success:function(data){
				//alert(data[0][0]);
				$("#carryingPrice").html(data[0][0]);
				$(".tooltipContent").css({"top":heightTooltip+"px","left":widthTooltip+"px","color":colorRateGreen,"border":"2px solid "+colorRateGreen}).show();
			}
		});
		
		//alert("hello");
	}).live("mouseleave",function(){
		$(".tooltipContent").hide();
	});
	*/

	$("#cateProject").live("click",function(){
		 $(".tooltipContent").hide();
		$("a[href=#tab1]").click();
	});

	$(".contentColumn").live("mouseover",function(e){
		$(this).css({"opacity":"0.8"});
		 $(".tooltipContent").hide();
	}).live("mouseleave",function(){
		$(this).css({"opacity":"1"});
	});;

	//click link new tab in pentaho
	$(".projectBox").live("click",function(){
		
		newTab(this.id,$("#embedParamMonth").val(),$("#embedParamYear").val());
	});
	var newTab = function(pjCode,paramMonth,paramYear){
	top.mantle_openTab("BSC-"+pjCode+"","BSC","pruksa-dashboard/index.jsp?pjCode="+pjCode+"&paramMonth="+paramMonth+"&paramYear="+paramYear+"");
	}
	$("body").live("mouseover",function(e){
			$(".tooltipContent").hide();
	});

	
		$(".clickable").live("mouseover",function(e){
		$(".tooltipContent").hide();
		$(this).css({"background":"#DBEEF4"});
	}).live("mouseleave",function(){
		$(this).css({"background":""});
	});;
	

	//ajax Start
	$("#loading").ajaxStart(function(){
		
		/*
		var	width = $("body").width();
			width = (width/2)-20;
			hieght =18;
		*/
			var widthImg=(screen.availWidth/2)-50;
			var	hieghtImg=(screen.availHeight/2)-50;
		$(this).css({"top":hieghtImg+"px","left":widthImg}).show();
		});


	//ajax Stop
	$("#loading").ajaxStop(function(){
	$(this).hide();
	
	}); 

	$(".linkPj").live("click",function(event){
		var id = $.trim($(this).attr("id"));
		newTab(id,$("#embedParamMonth").val(),$("#embedParamYear").val());
		event.stopPropagation();
	});

});