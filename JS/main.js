  const boton = document.getElementById("iniciar");
  const pastel = document.getElementById("pastel");
  const link = document.getElementById("link-carta");
  const audio = document.getElementById("audio");

  boton.addEventListener("click", () => {
    boton.style.display = "none";

    pastel.style.display = "block";

    audio.play();

    setTimeout(() => {
      link.style.display = "block";
    }, 10000); // 
  });