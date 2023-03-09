function toggleMode(){
  const html = document.documentElement
  
  // pegar a imagem
    const image = document.querySelector('#profile img')

    // substituir a imagem 
   if (html.classList.contains("light")) {
     // se tiver light mode, adicionar a imagem light
   image.setAttribute("src", "./assets/avatar-light.png")
   }
   // se tiver sem light mode manter  a imagem  normal
    else {
   image.setAttribute("src", "./assets/avatar.png")
  }
  
  html.classList.toggle('light')
}