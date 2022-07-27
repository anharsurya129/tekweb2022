<!--  Tabel Users -->

GET: /users

data: [
{
      "id": "1",
      "nama": "Anhar Suryadi",
      "motto": "Syukuri apa adanya, hidup adalah anugerah",
      "ig_url": "https://instagram.com/anh.surya09",
      "fb_url": "https://www.facebook.com/anhar.ibnrasyid",
      "yt_url": "https://www.youtube.com/channel/UCAIBimJ85cii2JYsREqPJ3A"
      "avatar_url": "https://anharweb.nizaruad.my.id/img/anharpubg.jpeg"
}
]


GET: /users/[1]

data:{
    "id": "1",
     "nama": "Anhar Suryadi",
     "motto": "Syukuri apa adanya, hidup adalah anugerah",
     "ig_url": "https://instagram.com/anh.surya09",
     "fb_url": "https://www.facebook.com/anhar.ibnrasyid",
     "yt_url": "https://www.youtube.com/channel/UCAIBimJ85cii2JYsREqPJ3A"
     "avatar_url": "https://anharweb.nizaruad.my.id/img/anharpubg.jpeg"
}


POST: /users

data:{
     "nama": "Faishal Umar",
     "motto": "Guru yang terbaik adalah pengalaman",
     "ig_url": "https://instagram.com/anh.surya09",
     "fb_url": "https://www.facebook.com/anhar.ibnrasyid",
     "yt_url": "https://www.youtube.com/channel/UCAIBimJ85cii2JYsREqPJ3A"
     "avatar_url": "[https://anharweb.nizaruad.my.id/img/anharpubg.jpeg](https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/diri.jpg)"
}
}

PUT: /users/[2]

data:{
     "nama": "Nizar Abdr",
     "motto": "Jangan sekali-kali melupakan sejarah",
     "ig_url": "https://instagram.com/anh.surya09",
     "fb_url": "https://www.facebook.com/anhar.ibnrasyid",
     "yt_url": "https://www.youtube.com/channel/UCAIBimJ85cii2JYsREqPJ3A"
     "avatar_url": "[https://anharweb.nizaruad.my.id/img/anharpubg.jpeg](https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/diri.jpg)"

}



<!--  Tabel Portofolio -->

GET: /portofolio

data:[
{
    "id": "1",
    "gambar":"https://raw.githubusercontent.com/anharsurya129/tekweb2022/project/img/belajar.png",
    "title":"This is my portofolio",
    "deskripsi":"Namaku Anhar Srd, umurku 20 tahun. Saya kuliah di UAD jurusan Sistem Informmasi, saya ahli dalam bidang Design Web dan Videografi. Saya juga ahli dalam bahasa asing, seperti Bahasa Inggris dan Bahasa Korea"
}
]

GET: /portofolio/[1]

data:{
    "id": "1",
    "gambar":"https://raw.githubusercontent.com/anharsurya129/tekweb2022/project/img/belajar.png",
    "title":"Ini portofolioku",
    "deskripsi":"Namaku Anhar Srd, umurku 20 tahun. Saya kuliah di UAD jurusan Sistem Informmasi, saya ahli dalam bidang Design Web dan Videografi. Saya juga ahli dalam bahasa asing, seperti Bahasa Inggris dan Bahasa Korea"
}


POST: /portofolio

data:{
    "gambar":"https://raw.githubusercontent.com/anharsurya129/tekweb2022/project/img/belajar.png",
    "title":"Ini adalah portofolio milikku",
    "deskripsi":"Namaku Anhar Srd, umurku 20 tahun. Saya kuliah di UAD jurusan Sistem Informmasi, saya ahli dalam bidang Design Web dan Videografi. Saya juga ahli dalam bahasa asing, seperti Bahasa Inggris dan Bahasa Korea"
}


PUT: /portofolio/[2]

data:{
    "gambar":"https://raw.githubusercontent.com/anharsurya129/tekweb2022/project/img/belajar.png",
    "title":"Portofolio is mine",
    "deskripsi":"Namaku Anhar Srd, umurku 20 tahun. Saya kuliah di UAD jurusan Sistem Informmasi, saya ahli dalam bidang Design Web dan Videografi. Saya juga ahli dalam bahasa asing, seperti Bahasa Inggris dan Bahasa Korea"
}


<!--  Tabel Article -->

GET: /article

data:[
{
    "id": "1",
    "gambar": "https://raw.githubusercontent.com/anharsurya129/tekweb2022/project/article/sains.jpg",
    "title": "Sains itu menyenangkan",
    "author": "Oleh : Anhar Suryadi"
},
{
    "id": "2",
    "gambar": "https://raw.githubusercontent.com/umarfaishal/tekweb2022/master/img/diri.jpg",
    "title": "Bali adalah pulau indah",
    "author": "Oleh : Faishal Umar Al-Amin"
}
]


GET: /article/[2]

data:{
    "id": "2",
    "gambar": "https://raw.githubusercontent.com/anharsurya129/tekweb2022/project/article/sains.jpg",
    "title": "Bali adalah pulau indah",
    "author": "Oleh : Anhar Suryadi"
}


POST: /article

data:{
    "gambar": "https://raw.githubusercontent.com/anharsurya129/tekweb2022/project/article/sains.jpg",
    "title": "Indahnya pantai menganti di Kebumen",
    "author": "Oleh : Anhar Suryadi"
}


PUT: /article/[2]

data:{
    "gambar": "https://raw.githubusercontent.com/anharsurya129/tekweb2022/project/article/sains.jpg",
    "title": "Mengenal lanting, makanan khas Kebumen",
    "author": "Oleh : Anhar Suryadi"
}
