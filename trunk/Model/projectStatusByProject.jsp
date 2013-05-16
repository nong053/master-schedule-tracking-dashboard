<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>
<%
String paramUserLevel=request.getParameter("paramUserLevel");
String paramUserData=request.getParameter("paramUserData");
String paramYear=request.getParameter("paramYear");
String paramMonth=request.getParameter("paramMonth");
String paramOrderBy=request.getParameter("paramOrderBy");



byProjectService  jndi = new  byProjectService();
String query="CALL MST_project_status_by_project('"+paramUserLevel+"','"+paramYear+"','"+paramMonth+"','"+paramUserData+"','"+paramOrderBy+"')";
String field="1,2,3,4";
jndi.selectByIndex(query,field);
out.println(jndi.getData());
%>
