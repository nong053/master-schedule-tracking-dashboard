package com.candidjava;
import org.json.JSONArray;
import org.json.JSONException;

public class JArray
{
  public static void main(String args[]) throws JSONException{
   JSONArray arrayObj=new JSONArray();
 arrayObj.put("name :");
 arrayObj.put("Deepa");
 arrayObj.put("Reg No");
 arrayObj.put(123);
 arrayObj.put("Mark");
 arrayObj.put(new Double(90));
 arrayObj.put("City");
 arrayObj.put("Chennai");
 
 System.out.println(arrayObj);


 int length=arrayObj.length();
 String opt=arrayObj.optString(2);
 boolean data=arrayObj.isNull(3);
 String getMark=arrayObj.getString(5);
 Object ob=arrayObj.get(7);
 
 System.out.println("Length: "+length);
 System.out.println("2nd Position: "+opt);
 System.out.println("isNull: "+data);
 System.out.println("Mark:" +getMark);
 System.out.println("City: "+ob);
 
 
 
  }
}