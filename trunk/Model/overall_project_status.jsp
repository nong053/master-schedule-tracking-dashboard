<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>
<%
String paramUserLevel=request.getParameter("paramUserLevel");
String paramUserLevelData=request.getParameter("paramUserLevelData");
String paramYear=request.getParameter("paramYear");
String paramMonth=request.getParameter("paramMonth");
String paramInType=request.getParameter("paramInType");
String paramInNoOfDay=request.getParameter("paramInNoOfDay");
/*
out.println("paramUserLevel"+paramUserLevel+"<br>");
out.println("paramUserLevelData"+paramUserLevelData+"<br>");
out.println("paramYear"+paramYear+"<br>");
out.println("paramMonth"+paramMonth+"<br>");
out.println("paramInType"+paramInType+"<br>");
out.println("paramInNoOfDay"+paramInNoOfDay+"<br>");
*/

mainService  jndi = new  mainService();
String query="CALL MST_overall_project_status('"+paramUserLevel+"','"+paramUserLevelData+"','"+paramYear+"','"+paramMonth+"','"+paramInType+"','"+paramInNoOfDay+"' )";
String field="1,2,3,4,5,6,7,8,9";
jndi.selectByIndex(query,field);
out.println(jndi.getData());

%>
