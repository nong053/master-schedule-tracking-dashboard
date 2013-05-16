<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>
<%

String paramProjectCode=request.getParameter("paramProjectCode");
String paramMonth=request.getParameter("paramMonth");
String paramYear=request.getParameter("paramYear");

byProjectService  jndi = new  byProjectService();
String query="CALL MST_project_status_by_project_drilldown('"+paramProjectCode+"','"+paramYear+"','"+paramMonth+"')";
String field="1,2,3,4,5,6,7,8";
jndi.selectByIndex(query,field);
out.println(jndi.getData());
%>
