<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>
<%
String paramYear=request.getParameter("paramYear");
mainService  jndi = new  mainService();
jndi.setOptionMonth("CALL MST_project_plan_month("+paramYear+")");
out.println(jndi.getOptionMonth());
%>
