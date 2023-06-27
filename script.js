function toggleMode() {
  const html = document.documentElement
  //Function Native
  html.classList.toggle("light")

  //Get Image
  const img = document.querySelector("#profile img")

  //Replacement Image

  if (html.classList.contains("light")) {
    //Conditional light true
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Imagem de Carlos Eduardo com regata de basquete com fundo preto"
    )
  } else {
    //Condictional dark true
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute(
      "alt",
      "Imagem de Carlos Eduardo com camisa branca e fundo colorido"
    )
  }
  //Function Custom
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
}