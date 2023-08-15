  function ran_col() 
  {
      var color = '#'; 
      var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
      color += letters[Math.floor(Math.random() * letters.length)];
      document.getElementById('posts').style.background = color; }




  function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   function display(value) {
    document.getElementById("result").value += value;
   }
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }

   






   function currencyConverter(valuenumber) {
    if(currency_converter.rupees.value <= 0)
    window.alert("Error in Value, Less Than 1");
    else
    {
       document.getElementById("dollar").value=(valuenumber/176.46).toFixed(2);
      document.getElementById("euro").value=(valuenumber/199.20).toFixed(2)
      document.getElementById("pkr").value=(valuenumber/1).toFixed(2)
      document.getElementById("riyal").value=(valuenumber/47.04).toFixed(2)
       document.getElementById("pound").value=(valuenumber/234.32).toFixed(2)
    }
     }