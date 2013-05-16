<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>
<%
mainService  jndi = new  mainService();
jndi.setOptionMonth("CALL MST_project_plan_month(2013)");
out.println(jndi.getOptionMonth());
%>
