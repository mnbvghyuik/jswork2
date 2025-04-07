function upDate(previewPic) {
    console.log("Mouse or focus triggered:", previewPic.alt);
    const image = document.getElementById("image");
    image.style.backgroundImage = `url('${previewPic.src}')`;
    image.textContent = previewPic.alt;
  }
  
  function unDo() {
    const image = document.getElementById("image");
    image.style.backgroundImage = "url('')";
    image.textContent = "Наведи курсор или используй клавиатуру, чтобы увидеть изображение.";
  }
  
  function addTabIndex() {
    console.log("Страница загружена — добавляем tabindex");
    const images = document.querySelectorAll("#gallery img");
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute("tabindex", "0");
    }
  }