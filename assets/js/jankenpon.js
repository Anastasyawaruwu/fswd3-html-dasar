alert("Hallo pilih warna yok");
alert("Sekarang tanggal : " + new Date());

let color = prompt("warna apa yang kamu suka?");
switch (color) {
    case "red":
        alert("Kamu suka Merah");
        break;
    case "blue":
        alert("Kamu suka biru");
        break;
    default:
        alert("Kamu suka warna ini?");
        break;
}