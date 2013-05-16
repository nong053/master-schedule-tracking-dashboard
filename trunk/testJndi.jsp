<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
  <head>
    <title>DB Test</title>
  </head>
  <body>

  <%
    pruksa.f2.service.connectionJNDI jndi = new pruksa.f2.service.connectionJNDI();


	out.println("<br>------------------ <br>");
	
	 jndi.init2();
	out.println(jndi.getdata1());

  
  %>


 

  </body>
</html>