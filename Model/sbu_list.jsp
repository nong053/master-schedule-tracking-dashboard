<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>

<%
String paramCboCode=request.getParameter("paramCboCode");
//paramCboCode="CBO1";
overviewService  jndi = new  overviewService();
String query="CALL MST_sbu_list('"+paramCboCode+"')";
String field="1,2";
jndi.selectByIndex(query,field);
out.println(jndi.getData());

%>
