function ubahKondisiLampu(){
  let teksTombol = document.getElementById ('tombol').innerHTML;
if(teksTombol== 'on'){
  document.getElementById('lampu').src ='lampu_nyala.png';
  document.getElementById('tombol').innerHTML = 'of';
} else{
document.getElementById('lampu').src = 'lampu_mati.png';
    document.getElementById('tombol').innerHTML = 'on';
 }
}