<!DOCTYPE html>
<html>

    <%
    dim fname,city
    fname=Request.Form("name")
    city=Request.Form("city")
    Response.Write("My name is " & fname & ". ")
    Response.Write("I am from " & city & ".")
    %>

<body>
    
</body>
</html>