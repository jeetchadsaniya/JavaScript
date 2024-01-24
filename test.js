let url;
fetch("https://pokeapi.co/api/v2/ability/150/")
  .then((response) => response.json())
  .then((json) => {
    console.log(json.sprites.back_default);
    url = json.sprites.back_default;
  });

  setTimeout(function(){

    console.log(`hello ${url}`);
    const img=document.querySelector('img')
    console.log(img.tagName);
    img.setAttribute('src',url)
  },5000) 