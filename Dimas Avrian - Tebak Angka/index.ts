let chances = 3;
const randomNumber = Math.floor(Math.random() * 10);

while (chances > 0) {
  const tebakanUser = Number(prompt(`Masukkan Nomor Tebakanmu (Peluang: ${chances}) >`));

  if (tebakanUser < randomNumber) {
    console.log("Nomormu Terlalu Kecil");
  } else if (tebakanUser > randomNumber) {
    console.log("Nomormu Terlalu Besar");
  } else {
    console.log("Selamat Kamu Menang!");
    break;
  }

  chances--;
}

if (chances === 0) {
  console.log(`Kamu kehabisan peluang. Nomor yang benar adalah ${randomNumber}`);
}
