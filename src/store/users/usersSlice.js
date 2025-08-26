import img2 from '../../assets/images/22459-iwt 1.png';
import img1 from '../../assets/images/mellow-yellow-1 1.png';
import img3 from '../../assets/images/Image.png';
import img4 from '../../assets/images/Image (1).png';
import img5 from '../../assets/images/Image (2).png';
import img6 from '../../assets/images/Image (3).png';
import img7 from '../../assets/images/Image (4).png';
import img8 from '../../assets/images/Image (5).png';
import img9 from '../../assets/images/Image (6).png';


import { createSlice } from '@reduxjs/toolkit';

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9];


// Функция для генерации массива данных (восстанавливаем, но упрощаем)
function generateProductsData() {
    const data = [
      {
        id: 1,
        title: 'Стеклянные',
        img: imgs[0], // img1

      },
      {
        id: 2,
        title: 'Силиконовые',
        img: imgs[1], // img2

      },
      {
        id: 3,
        title: 'Кожаные',
        img: imgs[2], // img3
      },
      {
        id: 4,
        title: 'Apple BYZ S852I',
        price: 2927,
        descount: 20,
        raiting: 4.7,
        img: imgs[3], // img1

      },
      {
        id: 5,
        title: 'Apple EarPods',
        price: 2327,
        descount: 0,
        raiting: 4.5,
        img: imgs[4], // img2

      },
      {
        id: 6,
        title: 'Apple EarPods',
        price: 2327,
        descount: 0,
        raiting: 4.5,
        img: imgs[5], // img3
      },
      {
        id: 7,
        title: 'Apple BYZ S852I',
        price: 3527,
        descount: 20,
        raiting: 4.7,
        img: imgs[3], // img1

      },
      {
        id: 8,
        title: 'Apple EarPods',
        price: 2327,
        descount: 0,
        raiting: 4.5,
        img: imgs[4], // img2

      },
      {
        id: 9,
        title: 'Apple EarPods',
        price: 2327,
        descount: 0,
        raiting: 4.7,
        img: imgs[5], // img3
      },
      {
        id: 10,
        title: 'Apple AirPods',
        price: 3527,
        descount: 20,
        raiting: 4.7,
        img: imgs[6], // img1

      },
      {
        id: 11,
        title: 'GERLAX GH-04',
        price: 2327,
        descount: 0,
        raiting: 4.7,
        img: imgs[7], // img2

      },
      {
        id: 12,
        title: 'BOROFONE BO4',
        price: 2327,
        descount: 0,
        raiting: 4.7,
        img: imgs[8], // img3
      },
    ];
    return data;
}

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: {
    data: generateProductsData(),  // Используем результат generateProductsData()
    count: 0,
  },
  reducers: {
    addCount(state, action) {
      state.count += action.payload;
    },
    minusCount(state, action) {
      state.count -= action.payload;
    },
    addToData(state, action) {
      state.data.push(action.payload); //  Добавляем в data (если нужно)
    },
  },
});

export const { addCount, minusCount, addToData } = usersSlice.actions;
export default usersSlice.reducer;
export const usersSelector = (state) => state.usersSlice.data; //  Экспортируем selector




