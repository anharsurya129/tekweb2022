Vue.createApp({
    data() {
      return {
        mesage: "Hello Vue!",
        header: {
          nama: "Anhar Suryadi",
          kelas: "2011016061 | Sistem Informasi | Universitas Ahmad Dahlan",
          quotes: '"Saya Adalah Mahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta"',
          imageprofile: "https://raw.githubusercontent.com/anharsurya129/tekweb2022/master/img/anhars.jpg",
        },
        portofolio: [
          {
            title: "JOGJA DARURAT SAMPAH",
            desc: "Dibalik tutupnya TPA Piyungan",
            image: "https://raw.githubusercontent.com/anharsurya129/tekweb2022/master/img/tpajogja.jpg",
          },
        ],
        list_markdown: [],
        tabel: {
          judul: "Tabel Skill",
          nama: ["No.", "Keahlian", "Skill"],
          list: [
            {
              Keahlian: "Python",
              Skill: "Intermediate",
            },
            {
              Keahlian: "CSS",
              Skill: "Basic",
            },
            {
              Keahlian: "HTML",
              Skill: "Advance",
            },
            {
              Keahlian: "Javascript",
              Skill: "Basic",
            },
            {
              Keahlian: "Java",
              Skill: "Basic",
            },
            {
              Keahlian: "Microsoft",
              Skill: "Advance",
            },
          ],
        },
      };
    },
    methods: {
      getListMarkdown() {
        axios
          .get(("https://raw.githubusercontent.com/anharsurya129/tekweb2022/master/contents/articles.json"))
          .then((res) => {
            console.log(res.data); //melihat respon data pada console browser
            this.list_markdown = res.data; //memperbarui variabel header pada bagian data()
          })
          .catch((error) => {
            console.log(error); //melihat error jika pengambilan data adalah gagal
          });
      },
    },
    beforeMount() {
      this.getListMarkdown();
    },
  }).mount("#app");