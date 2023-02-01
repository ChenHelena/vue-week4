// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// let productModal = null;
// let delProductModal = null;

// createApp({
//   data() {
//     return {
//       apiUrl: 'https://vue3-course-api.hexschool.io/v2',
//       apiPath: 'helena27',
//       products: [],
//       isNew: false,
//       tempProduct: {
//         imagesUrl: [],
//       },
//     }
//   },
//   mounted() {
//     productModal = new bootstrap.Modal(document.getElementById('productModal'), {
//       keyboard: false
//     });

//     delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
//       keyboard: false
//     });

//     // 取出 Token
//     const token = document.cookie.replace(/(?:(?:^|.*;\s*)helenaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
//     axios.defaults.headers.common.Authorization = token;

//     this.checkAdmin();
//   },
//   methods: {
//     checkAdmin() {
//       const url = `${this.apiUrl}/api/user/check`;
//       axios.post(url)
//         .then(() => {
//           this.getData();
//         })
//         .catch((err) => {
//           alert(err.response.data.message)
//           window.location = 'login.html';
//         })
//     },
//     getData() {
//       const url = `${this.apiUrl}/api/${this.apiPath}/admin/products/all`;
//       axios.get(url).then((response) => {
//         this.products = response.data.products;
//       }).catch((err) => {
//         alert(err.response.data.message);
//       })
//     },
//     updateProduct() {
//       let url = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
//       let http = 'post';

//       if (!this.isNew) {
//         url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.tempProduct.id}`;
//         http = 'put'
//       }

//       axios[http](url, { data: this.tempProduct }).then((response) => {
//         alert(response.data.message);
//         productModal.hide();
//         this.getData();
//       }).catch((err) => {
//         alert(err.response.data.message);
//       })
//     },
//     openModal(isNew, item) {
//       if (isNew === 'new') {
//         this.tempProduct = {
//           imagesUrl: [],
//         };
//         this.isNew = true;
//         productModal.show();
//       } else if (isNew === 'edit') {
//         this.tempProduct = { ...item };
//         this.isNew = false;
//         productModal.show();
//       } else if (isNew === 'delete') {
//         this.tempProduct = { ...item };
//         delProductModal.show()
//       }
//     },
//     delProduct() {
//       const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.tempProduct.id}`;

//       axios.delete(url).then((response) => {
//         alert(response.data.message);
//         delProductModal.hide();
//         this.getData();
//       }).catch((err) => {
//         alert(err.response.data.message);
//       })
//     },
//     createImages() {
//       this.tempProduct.imagesUrl = [];
//       this.tempProduct.imagesUrl.push('');
//     },
//   },
// }).mount('#app');




// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// let productModal = '';
// let delProductModal = '';

// createApp({
//   data() {
//     return {
//       apiUrl: "https://vue3-course-api.hexschool.io/v2",
//       apiPath: 'helena27',
//       products: [],
//       tempProduct: {
//         imagesUrl: [],
//       },
//       isNew: false,
//     }
//   },
//   mounted() {
//     const token = document.cookie.replace(/(?:(?:^|.*;\s*)helenaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
//     axios.defaults.headers.common.Authorization = token;
//     this.checkAdmin();

//     //modal
//     productModal = new bootstrap.Modal('#productModal');
//     delProductModal = new bootstrap.Modal('#delProductModal');
//   },
//   methods: {
//     checkAdmin() {
//       const url = `${this.apiUrl}/api/user/check`;
//       axios.post(url)
//         .then((res) => {
//           this.getData();
//         })
//         .catch((err) => {
//           alert(err.response.data.message);
//           window.location = 'login.html';
//         })
//     },
//     getData() {
//       const url = `${this.apiUrl}/api/${this.apiPath}/admin/products/all`;
//       axios.get(url)
//         .then((res) => {
//           this.products = res.data.products;
//         })
//         .catch((err) => {
//           console.log(err.response.data.message);
//         })
//     },
//     updateProduct() {
//       let url = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
//       let method = 'post';
//       if (!this.isNew) {
//         url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.tempProduct.id}`;
//         method = 'put';
//       }
//       axios[method](url, { data: this.tempProduct })
//         .then((res) => {
//           this.getData();
//           productModal.hide();
//         })
//         .catch((err) => {
//           console.log(err.response.data.message);
//         })
//     },
//     delProduct() {
//       const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.tempProduct.id}`;
//       axios.delete(url)
//         .then((res) => {
//           this.getData();
//           delProductModal.hide();
//         })
//         .catch((err) => {
//           console.log(err.response.data.message);
//         })
//     },
//     openModal(status, item) {
//       if (status === "new") {
//         productModal.show();
//         this.isNew = true;
//         //帶入初始化資料
//         this.tempProduct = {
//           imagesUrl: [],
//         }
//       } else if (status === "edit") {
//         productModal.show();
//         this.isNew = false;
//         //帶入當前資料
//         this.tempProduct = { ...item };
//       } else if (status === "delete") {
//         delProductModal.show();
//         //帶入當前資料
//         this.tempProduct = { ...item };
//       }
//     }
//   },
// }).mount("#app")


import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

import pagination from './pagination.js'

let productModal = '';
let delProductModal = '';

const app = createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'helena27',
      products: [],
      tempProduct: {
        imageUrl: []
      },
      isNew: false,//確認modal是新增還是編輯
      page:{},
    }
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)helenaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin();

    productModal = new bootstrap.Modal('#productModal');
    delProductModal = new bootstrap.Modal('#delProductModal');
  },
  methods: {
    checkAdmin() {
      const url = `${this.apiUrl}/api/user/check`
      axios.post(url)
        .then((res) => {
          this.getData();
        })
        .catch((err) => {
          console.log(err.response.data.message);
          window.location = 'login.html'
        })
    },
    getData(page=1) {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products/?page=${page}`
      axios.get(url)
        .then((res) => {
          this.products = res.data.products;
          this.page = res.data.pagination;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        })
    },
    updateProduct() {
      let url = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
      let method = 'post'
      if (!this.isNew) {
        url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.tempProduct.id}`;
        method = 'put'
      }
      axios[method](url, { data: this.tempProduct })
        .then((res) => {
          this.getData();
          productModal.hide();
        })
        .catch((err) => {
          console.log(err.response.data.message);
        })
    },
    delProduct() {
      let url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.tempProduct.id}`;
      axios.delete(url)
        .then((res) => {
          this.getData();
          delProductModal.hide();
        })
        .catch((err) => {
          console.log(err.response.data.message);
        })
    },
    openModal(status, item) {
      if (status === "new") {
        productModal.show();
        this.isNew = true;
        //帶入初始化資料
        this.tempProduct = {
          imageUrl: []
        }
      } else if (status === "edit") {
        productModal.show();
        this.isNew = false;
        //帶入要編輯的資料
        this.tempProduct = { ...item };
      } else if (status === "delete") {
        delProductModal.show();
        //帶入要刪除的資料
        this.tempProduct = { ...item };
      }
    },
    createImages() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    },
  },
  components:{
    pagination,
  }
})
//元件化
app.component('product-modal',{
  props:['tempProduct','createImages','updateProduct'],
  template:'#productModal'
})

app.component('del-product-modal',{
  props:['delProduct','tempProduct'],
  template:'#delProductModal'
})
app.mount('#app')