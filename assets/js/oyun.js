sifirlaBtn.addEventListener("click", skorSifirla);
tasBtn.addEventListener("click", () => hamleSec("tas"));
kagitBtn.addEventListener("click", () => hamleSec("kagit"));
makasBtn.addEventListener("click", () => hamleSec("makas"));

const bilgisayarHamleSecenekleri = ["tas", "kagit", "makas"];

function bilgisayarHamlesi() {
  return bilgisayarHamleSecenekleri.at(Math.floor(Math.random() * 3));
}

function hamleSec(oyuncuHamlesi) {
  const bilgisayarSecimi = bilgisayarHamlesi();

  document.querySelector(".oyuncuSecim").innerHTML = `<button class="${oyuncuHamlesi}Btn"><img src="assets/images/${oyuncuHamlesi}-img.svg" alt="${oyuncuHamlesi}"></button>`;
  document.querySelector(".bilgisayarSecim").innerHTML = `<button class="${bilgisayarSecimi}Btn"><img src="assets/images/${bilgisayarSecimi}-img.svg" alt="${bilgisayarSecimi}"></button>`;

  const secimler = document.querySelector('.oyuncuHamlesi');
  secimler.classList.add('hidden');

  if (
    (bilgisayarSecimi == "tas" && oyuncuHamlesi == "kagit") ||
    (bilgisayarSecimi == "kagit" && oyuncuHamlesi == "makas") ||
    (bilgisayarSecimi == "makas" && oyuncuHamlesi == "tas")
  ) {
    oyuncuSayac();
  } else if (
    (bilgisayarSecimi == "tas" && oyuncuHamlesi == "makas") ||
    (bilgisayarSecimi == "kagit" && oyuncuHamlesi == "tas") ||
    (bilgisayarSecimi == "makas" && oyuncuHamlesi == "kagit")
  ) {
    bilgisayarSayac();
  } else {
    kazanan.innerText = 'SCORELESS';
  }

  setTimeout(() => {
    secimler.classList.remove('hidden');
    document.querySelector(".oyuncuSecim").innerHTML = '';
    document.querySelector(".bilgisayarSecim").innerHTML = '';
  }, 3000);
}

let oyuncuSkorSayac = 0;
function oyuncuSayac() {
  oyuncuSkorSayac++;
  oyuncuSkor.innerText = oyuncuSkorSayac;
  kazanan.innerText = "YOU WIN";
}

let bilgisayarSkorSayac = 0;
function bilgisayarSayac() {
  bilgisayarSkorSayac++;
  bilgisayarSkor.innerText = bilgisayarSkorSayac;
  kazanan.innerText = "YOU LOSE";
}

function skorSifirla() {
  oyuncuSkor.innerText = 0;
  bilgisayarSkor.innerText = 0;
  kazanan.innerText = ' ';
  bilgisayarSecimiTxt.innerText = ' ';
  bilgisayarSkorSayac = 0;
  oyuncuSkorSayac = 0;
}
