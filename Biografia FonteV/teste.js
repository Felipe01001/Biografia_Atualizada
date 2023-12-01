function mudarTema(opcao) {
    const elementos = document.getElementsByTagName('*');
  
    if (opcao === 'pretoebranco') {
      for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.color = 'black';
        elementos[i].style.backgroundColor = 'white';
      }
    } else if (opcao === 'normal') {
      for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.color = '';
        elementos[i].style.backgroundColor = '';
      }
    }
  }
  