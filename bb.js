
let BMI = (berat,tinggi) =>{
  let BMIhasil = berat / (tinggi * tinggi);
  let kategori;
  if(BMIhasil >= 30){
      ketegori = "Obesitas (sama dengan atau di atas 30)"
  }
  else if(BMIhasil >= 25 && BMIhasil < 30){
      kategori = "Berat badan berlebih (di antara 25 - 29,9)"
  }
  else if(BMIhasil >= 18.5 && BMIhasil < 25){
      kategori = "Berat badan normal (di antara 18,5 - 24,9)"
  }
  else if(BMIhasil < 18.5){
      kategori = "Berat badan di bawah normal (di bawah 18,5)"
  }
  console.log(`Berat badan ${berat}kg, dan tinggi badan saya ${tinggi} m.`);
  console.log(`Berat badan anda : ${BMIhasil}. Kamu termasuk dalam ${kategori}.`)
};

export default BMI;