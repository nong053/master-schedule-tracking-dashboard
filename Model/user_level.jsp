<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>
<%

String paramUserName=request.getParameter("paramUserName");
String paramYear=request.getParameter("paramYear");
String paramMonth=request.getParameter("paramMonth");


mainService  jndi = new  mainService();
String query="CALL MST_user_level('"+paramYear+"','"+paramMonth+"','"+paramUserName+"')";
String field="1,2";
jndi.selectByIndex(query,field);
out.println(jndi.getData());
%>
