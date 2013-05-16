<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>

<%

overviewService  jndi = new  overviewService();
String query="CALL MST_cbo_list()";
String field="1,2";
jndi.selectByIndex(query,field);
out.println(jndi.getData());

%>
