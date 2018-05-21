import {find}  from './triangle.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var result1 = "equilateral";
var result2 = "isoceles";
var result3 = "scalene";
var result4 = "not a triangle";


$(document).ready(function() {
  $("form#length").submit(function() {
    event.preventDefault();
    var input1 = parseInt($("input#length1").val());
    var input2 = parseInt($("input#length2").val());
    var input3 = parseInt($("input#length3").val());
    var finalresult=find(input1,input2,input3);

    if (finalresult ==  result1)
    {
      
      $("#answer").text(result1);
      $("#result").show();
    }
    else if (finalresult ==  result2)
    {
      $("#answer").text(result2);
      $("#result").show();
    }
    else if (finalresult ==  result3)
    {
      $("#answer").text(result3);
      $("#result").show();
    }
    else if(finalresult ==  result4)
    {
      $("#negative_answer").text(result4);
      $("#negative_result").show();
    }

  });
});