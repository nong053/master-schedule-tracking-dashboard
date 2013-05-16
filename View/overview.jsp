<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link rel="stylesheet" href="../styles/dashboard_overview.css">
<link href="../styles/dashboard_overviewPj.css" rel="stylesheet">
<%
String paramUserLevel=request.getParameter("paramUserLevel");
String paramUserLevelData=request.getParameter("paramUserLevelData");
String paramYear=request.getParameter("paramYear");
String paramMonth=request.getParameter("paramMonth");
String paramInType=request.getParameter("paramInType");
String paramInNoOfDay=request.getParameter("paramInNoOfDay");

%>

<div class="overviewContentTitle">
	<div class="titleColumn">
	<div id="cateProject"></div>
	</div>
	<div class="titleColumns">
	Overview<br>Project Status
	</div>
	<div class="titleColumns">
	First <div class="ofFirstDayNumber"></div> Days <br>Project Status
	</div>
	<div class="titleColumns">
	After <div class="ofFirstDayNumber"></div> Days <br>Project Status
	</div>
	
</div>
<div id="contentArea">


</div>



<br style="clear:both">



