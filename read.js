Vue.createApp({
    data() {
      return {
        article: null,
      };
    },
    methods: {
      getMarkdownData() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const article = urlParams.get("article");
        var converter = new showdown.Converter();
        console.log(article);
        axios
          .get("https://raw.githubusercontent.com/anharsurya129/tekweb2022/master/contents/" + article)
          .then((res) => {
            var html = converter.makeHtml(res.data);
            this.article = html;
            console.log(html);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    beforeMount() {
      this.getMarkdownData();
    },
  }).mount("#app");
