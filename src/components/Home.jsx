import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home-tittle-div">
      <h3 className="home-tittle">
        6-oy 8-dars vazifasi API dan malumot olish
      </h3>
      <p className="lesson-info">
        Bu yerda Foydalanuvchi royxatini korsatish va yangisini qoshish, Kitob
        qo'shish va o'qilgan kitoblarni boshqarish, Havo ob-havosi haqida
        ma'lumot olish, Ish qidiruv formasi (filter), Film qidirish ilovasi va
        shunga oxshash bolimlar bor.
      </p>
      <button>Boshlash</button>
    </div>
  );
}

export default Home;
