  let clickCount = 0;
  const clickedPositions = new Set();
  const carta = document.getElementById("carta");
  const contenido = document.getElementById("contenido");

  document.body.addEventListener("click", (e) => {
    const key = `${e.clientX},${e.clientY}`;
    

    if (!clickedPositions.has(key)) {
      clickedPositions.add(key);
      clickCount++;
    }


    const maxX = window.innerWidth - carta.offsetWidth;
    const maxY = window.innerHeight - carta.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    carta.style.position = "absolute";
    carta.style.left = `${randomX}px`;
    carta.style.top = `${randomY}px`;


    if (clickCount >= 20) {
      carta.style.display = "none";
      contenido.style.display = "block";
    }
  });