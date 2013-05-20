<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>
<%
String paramUserLevel=request.getParameter("paramUserLevel");
String paramUserData=request.getParameter("paramUserData");
String paramYear=request.getParameter("paramYear");
String paramMonth=request.getParameter("paramMonth");
String paramOrderBy=request.getParameter("paramOrderBy");
/*
out.print("paramUserLevel="+paramUserLevel);
out.print("paramUserData="+paramUserData);
out.print("paramYear="+paramYear);
out.print("paramMonth="+paramMonth);
out.print("paramOrderBy="+paramOrderBy);
*/



byProjectService  jndi = new  byProjectService();
//'CBO','2013','04','CBO1','Ascending Project Start Date'
String query="CALL MST_project_status_by_project('"+paramUserLevel+"','"+paramYear+"','"+paramMonth+"','"+paramUserData+"','"+paramOrderBy+"')";
//String query="CALL MST_project_status_by_project('CBO','2013','04','CBO1','Ascending Project Start Date')";
String field="1,2,3,4,5";
jndi.selectByIndex(query,field);
out.println(jndi.getData());

%>
