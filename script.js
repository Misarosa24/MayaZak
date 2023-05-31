
    var listaElementos = document.querySelectorAll('li');


    listaElementos.forEach(function(elemento) {
      elemento.addEventListener('click', function() {
        
        this.classList.toggle('highlight');
      });
    });