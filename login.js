// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// createApp({
//   data() {
//     return {
//       apiUrl: 'https://vue3-course-api.hexschool.io/v2',
//       user: {
//         username: '',
//         password: '',
//       },
//     };
//   },
//   methods: {
//     login() {
//       const api = `${this.apiUrl}/admin/signin`;

//       axios.post(api, this.user).then((response) => {
//         const { token, expired } = response.data;
//         // 寫入 cookie token
//         // expires 設置有效時間
//         document.cookie = `helenaToken=${token};expires=${new Date(expired)}; path=/`;
//         window.location = 'products.html';
//       }).catch((err) => {
//         alert(err.response.data.message);
//       });
//     },
//   },
// }).mount('#app');

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const url = 'https://vue3-course-api.hexschool.io/v2';


createApp({
  data() {
    return {
      url,
      user: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      const api = `${url}/admin/signin`;
      axios.post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `helenaToken=${token};expires=${new Date(expired)}`;
          window.location = 'products.html';
        })
        .catch((error) => {
          alert(error);
        })
    }
  },
}).mount('#app');