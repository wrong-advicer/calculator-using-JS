var a=document.getElementById("txt");

        function val(value){
            a.value+=value;
        }
        
        function clearscreen(){
            a.value="";
        }

        function results(){
            var result=eval(a.value)
            a.value=result;
        }