Vue.createApp({
    data() {
      return {
        mesage: "Hello Vue!",
        header: {
          nama: "Anhar Suryadi",
          kelas: "2011016061 | Sistem Informasi | Universitas Ahmad Dahlan",
          quotes: "Semua dimulai dari mencoba, kita tidak pernah merasakan keberhasilan dan kesuksesan tanpai pernah memulai dan tanpa berani mencoba.",
          imageprofile: "https://raw.githubusercontent.com/anharsurya129/tekweb2022/master/img/anhars.jpeg",
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
          tele: {
            ulr: "https://t.me/annnhrrrraszhkva",
            title: "Anharrs"
          }
        },

        data_artikel: [],
        article: null,
      };
    },
    methods: {
      getArticle() 
      {
        axios 
        .get(
          "https://raw.githubusercontent.com/anharsurya129/tekweb2022/master/content/articles.json"
        )
        .then((res) => {
          console.log(res.data);
          this.data_artikel = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
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
            src="https://raw.githubusercontent.com/anharsurya129/tekweb2022/master/content/" + article
            )
          .then((res) => {
            var html = converter.makeHtml(res.data);
            this.article = html;
            console.log(html);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getArticle(),
      this.getMarkdown()
    },
}).mount("#arc");
       
$('.skill-per').each(function() {
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width",per+'%');
  $({animatedValue: 0}).animate({animatedValue: per}, {
    duration: 1000,
    step: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  });
});
