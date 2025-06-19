import img2 from '../../assets/images/Rectangle 5.png';
import img1 from '../../assets/images/Rectangle 15.png';
import img3 from '../../assets/images/Vector 3.svg';

import { createSlice } from '@reduxjs/toolkit';

const imgs = [img1, img2, img3];
const bigImgs = [img1, img2, img3];
const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

// Функция для генерации массива данных
function generateProductsData() {
  const data = [];

  let imgIndex = 0;
  let priceIndex = 0;

  for (let i = 1; i <= 99; i++) {
    const currentImg = imgs[imgIndex];
    // Используем оператор остатка от деления (%) для циклического перебора массива цен.
    // Если priceIndex становится больше или равен длине массива prices, то priceIndex % prices.length вернет остаток от деления,
    // что позволит нам начать перебор массива prices с начала.
    const currentPrice = prices[priceIndex % prices.length];
    data.push({
      id: i,
      title: `title${i}`,
      img: currentImg,
      text: `text1(${i})`,
      text2: `text2(${i})`,
      rating: (Math.random() * 2 + 3).toFixed(1),
      img2: bigImgs[i % bigImgs.length],
      price: currentPrice,
    });

    imgIndex++;
    if (imgIndex >= imgs.length) {
      imgIndex = 0;
    }
    priceIndex++; //Увеличиваем индекс цен для следующего товара
  }
  return data;
}

export const data = generateProductsData();
const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: {
    data: generateProductsData(),
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
      state.data.push(action.payload);
    },
  },
});

export const { addCount, minusCount, addToData } = usersSlice.actions;
export default usersSlice.reducer;
export const usersSelector = (state) => state.usersSlice;



