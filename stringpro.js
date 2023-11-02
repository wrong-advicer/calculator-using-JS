

function fname(){
    var a=document.getElementsByName("name1")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.length;
  
}

function replace(){
    var a=document.getElementsByName("name1")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.replace(a,"Bye......!");
  
}
function uppercase(){
    var a=document.getElementsByName("name1")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.toUpperCase()
  
}
function lowercase(){
    var a=document.getElementsByName("name1")[0].value;
    var b=document.getElementById("out");
    b.innerHTML=a.toLowerCase();
  
}