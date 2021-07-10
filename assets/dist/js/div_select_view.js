function selected(value){
    var div_form = document.getElementById('carro');
        if(value != "Escolha..."){
          div_form[0].style.display = 'block';
      }else{
        div_form[0].style.display = 'none';
      }
    }
