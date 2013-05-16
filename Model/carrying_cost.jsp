<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>

<%

String paramUserLevel=request.getParameter("paramUserLevel");
String paramCurentLevel=request.getParameter("paramCurentLevel");
String paramCurentData=request.getParameter("paramCurentData");
String paramYear=request.getParameter("paramYear");
String paramMonth=request.getParameter("paramMonth");

String paramDays="";
if(request.getParameter("paramDays").equals("null")){
	 paramDays="0";
}else{
	 paramDays=request.getParameter("paramDays");
}

/*out.println(paramUserLevel);
out.println(paramCurentLevel);
out.println(paramCurentData);
out.println(paramDays);
*/
overviewService  jndi = new  overviewService();
String query="CALL MST_carrying_cost('"+paramUserLevel+"','"+paramCurentLevel+"','"+paramCurentData+"','"+paramYear+"','"+paramMonth+"','"+paramDays+"' )";
String field="1";
jndi.selectByIndex(query,field);
out.println(jndi.getData());

%>
