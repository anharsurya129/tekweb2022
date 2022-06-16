Vue.createApp({
    data() {
      return {
        message: "Assalamu'alaikum World!!",
        header: {
            slogan: "Welcome to My Website",
            nama: "Anhar Suryadi",
            kelas: "2011016061 | Information System | Sains and Technology",
            univ : "Universitas Ahmad Dahlan (UAD)",
            quotes: "be yourself, then u will find real happiness",
            imageprofile: "./img/anharpubg.jpeg",
        },
        social: {
            ig: {
              url: "https://www.instagram.com/anh.surya09/",
              title: "anh.surya09",
            },
            fb: {
              url: "https://web.facebook.com/anhar.ibnrasyid",
              title: "Anhar Ibn Rasyid",
            },
            wa: {
              url: "https://wa.me/6281231852726/?text=Hi!%20Anhar%0AAku%20ingin%20berteman%20denganmu%20A,%20Apa%20kamu%20mau?",
              title: "Anhar Surya",
            },
            tg: {
              ulr: "https://t.me/annnhrrrraszhkva",
              title: "Anharrs"
            }
          },
  
        data_artikel: [],
      };
    },
    methods: {
        getArticles()
        {
            axios
            .get(
                "./articles.json"
            )
            .then((successFunction) => {
                console.log(res.data); //melihat respon data pada console browser
                this.data_artikel = res.data; //memperbarui variabel header pada bagian data()
            })
            .catch((error) => {
                console.log(error); //melihat error jika pengambilan data adalah gagal
            });
        }
    },
    getMarkdown()
        {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const article = urlParams.get('article');
          var converter = new showdown.Converter();
          console.log(article);
          axios
            .get(
              src="https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/assets/" + article
              )
            .then((res) => {
              var html = converter.makeHtml(res.data);
              this.article = html;
              console.log(html);
            })
            .catch((error) => {
              console.log(error);
            });
        },
    beforeMount() {
      this.getArticles() //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
    },
  }).mount("#app");
  
