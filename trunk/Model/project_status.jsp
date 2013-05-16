<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>

<%


String paramPjCode=request.getParameter("paramPjCodeR");
String paramYear=request.getParameter("paramYear");
String paramMonth=request.getParameter("paramMonth");
//out.print(paramPjCode);
//out.print(paramYear);
//out.print(paramMonth);
//paramPjCode="CON120";
//paramYear="2013";
//paramMonth="04";
overviewService  jndi = new  overviewService();
String query="CALL MST_project_status('"+paramPjCode+"','"+paramYear+"','"+paramMonth+"')";
String field="1,2,3,4";
jndi.selectByIndex(query,field);
out.println(jndi.getData());


%>
