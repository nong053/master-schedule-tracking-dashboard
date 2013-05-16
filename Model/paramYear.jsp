<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>
<%
mainService  jndi = new  mainService();
jndi.setOptionYear("CALL MST_project_plan_year()");
out.println(jndi.getOptionYear());
%>
