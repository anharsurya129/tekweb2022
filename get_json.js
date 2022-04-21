Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {},
      };
    },
    methods: {
        getArticles()
        {
            axios
            .get(
                "articles.json"
            )
            .then((successFunction) => {
                console.log(res.data); //melihat respon data pada console browser
                this header = res.data; //memperbarui variabel header pada bagian data()
            })
            .catch((error) => {
                console.log(error); //melihat error jika pengambilan data adalah gagal
            });
        }
    },
    beforeMount() {
      this.getArticles() //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
    },
  }).mount("#app");
  