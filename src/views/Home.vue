<template>
  <div class="home">
    <div class="wrapper">
      <Navbar />
    <header class="hero-container">
            <!-- <div class="hero-container-bg"></div> -->
            <div class="left">
                <h3>Freshly Cooked, <br> Healthy & Natural Food For Your Furkids</h3>
                <p class="description">Kini sumber protein alami yang Human-Grade jadi begitu mudah untuk disajikan bagi anabul kesayangan</p>
                <ul class="verified-list">
                    <li><span class="hooman">Hooman</span> Lab Tested</li>
                    <li>Vet Supervised</li>
                    <li>Dog's Approved</li>
                </ul>
                <router-link to="/calculator" class="btn" >Hitung Porsi Makan</router-link>
            </div>

            <div class="right">
                <img src="assets/images/pawmeals_product.png" alt="" width="762">
            </div>
        </header>
        <!-- End of Hero Container-->

        <section class="caution-section">
            <h3 class="section-title">1st Lab Tested Canine <br> Cooked Food in 🇮🇩</h3>
            <p class="section-description">Healthy for your dogs, easy to serve, and it's pawkin' tasty!</p>
            <div class="caution-container">
                <img src="assets/images/Homepage_Icon_1.svg" alt="">
                <img src="assets/images/Homepage_Icon_2.svg" alt="">
                <img src="assets/images/Homepage_Icon_3.svg" alt="">
            </div>
        </section>
        <!-- End of Caution Container-->

        <section class="miracle-section">
            <div class="left">
                <h3 class="section-title">Pawmeals + Miracle 🌟</h3>
                <p class="section-description">Ada banyak perubahan pawsitive yang bisa terjadi saat kamu mengajak anabul untuk memulai kebiasaan yang baik dan sehat. Berikan waktu 14 hari untuk merasakan sendiri <br> #Pawmiracle-mu!</p>
                <div class="rounded-bg"></div>
                <img class="vector" src="assets/images/Ellipse_1.svg" alt="">
                <img class="vector2" src="assets/images/Ellipse_2.svg" alt="">
                <img class="vector-group" src="assets/images/Group_1.svg" alt="">    
            </div>
            <div class="right">
                <img class="video" src="assets/images/Pawmeals_Miracle.png" alt="">
                <img class="vector-group" src="assets/images/Group_2.svg" alt="">
                <img class="play-button" src="assets/images/play-button.svg" alt="">
            </div>              
        </section>
        <!-- End of Miracle Container-->

        <section class="miracle-section2">
            <h3 class="section-title">14 Days of Pawmiracle</h3>
                <p class="section-description">Kami akan memastikan anabul anda tetap sehat, tampil cantik dan bebas <br> dari penyakit yang berbahaya bagi anabul.</p>
                <div class="row">
                    <div class="column">
                        <div class="card-container">
                            <img src="assets/images/Rectangle_19.png" alt="">
                            <div class="card-text">
                                <h5>Hello Poop Cantik</h5>
                                <p>Poop yang padat namun tidak keras, al dente deh pokoknya! Tidak berbau menyengat dan mudah diangkat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card-container">
                            <img src="assets/images/Rectangle_18.png" alt="">
                            <div class="card-text">
                                <h5>Welcome Bulu Glowing</h5>
                                <p>Kulit terlihat lebih bersih dan bersinar. Coba lihat di bawah cahaya, sudah cling-cling kan?</p>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card-container">
                            <img src="assets/images/Rectangle_17.png" alt="">
                            <div class="card-text">
                                <h5>Good Bye Alergi</h5>
                                <p>Merah-merah pergi, please jangan datang lagi. Sekarang anabul bisa lebih happy dan sehat!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <router-link to="/calculator" class="btn" >Hitung Porsi Makan</router-link>
                </div>
                <div class="row-bg"></div>
        </section>
        <!-- End of Miracle Section 2-->

        <section class="testimonials-section">
            <h3><span>"</span>Customers Tastymony</h3>
            <div class="testimonials-container">
                <div class="testimonials">
                    <div class="testimonial">
                        <p class="content-title"> 
                            Anabul Saya Bulunya Kian Glowing
                        </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                        <img src="/assets/images/testimonials-photo.png" alt="" class="author-photo">
                        <div class="author">
                            <p class="author-name">Jenny Wilson</p>
                            <p class="author-loc">Jakarta</p>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p class="content-title"> 
                            Alergi Anabul Saya Sudah Mulai Hilang
                        </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                        <img src="/assets/images/testimonials-photo2.png" alt="" class="author-photo">
                        <div class="author">
                            <p class="author-name">Bela Alexandria</p>
                            <p class="author-loc">Surabaya</p>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p class="content-title"> 
                            Anabul Semakin Gembul dan Sehat
                        </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                        <img src="/assets/images/testimonials-photo3.jpg" alt="" class="author-photo">
                        <div class="author">
                            <p class="author-name">Mark Lee</p>
                            <p class="author-loc">Bandung</p>
                        </div>
                        
                    </div>
                </div>
                <span class="slider-prev">
                    <img src="assets/images/arrow-left.svg" alt="">
                </span>
                <span class="slider-next">
                    <img src="assets/images/arrow-right.svg" alt="">
                </span>
                <img class="testimonials-line" src="assets/images/testimonials-line.svg" alt="">
            </div>
            <img src="assets/images/ellipse-green.svg" alt="" class="green-ellipse">
        </section>
        <!-- End of Testimonials Section-->

        <section class="menu-section">
            <h3 class="section-title">Our Menu</h3>
            <p class="section-description">Pilih variasi Healthy Cooked Food for Dogs terlengkap <br> untuk kebutuhan anabulmu</p>
            <div class="row">
                <div class="column">
                    <div class="card-container card-menu">
                        <img src="assets/images/Rectangle19.png" alt="">
                        <h5>Puppy Stage</h5>
                        <p>Nutrisi yang mendukung pertumbuhan optimal anak anjing berusia 2-6 bulan </p>
                    </div>
                </div>
                <div class="column">
                    <div class="card-container card-menu">
                        <img src="assets/images/Rectangle20.png" alt="">
                        <h5>All Life Stages</h5>
                        <p>Variasi rotasi protein untuk anjing dewasa sehat mulai dari usia 6 bulan</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card-container card-menu">
                        <img src="assets/images/Rectangle21.png" alt="">
                        <h5>Sensitive Series</h5>
                        <p>Pilihan menu makanan untuk anjing yang kulit dan pencernaannya lebih sensitif</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card-container card-menu">
                        <img src="assets/images/Rectangle22.png" alt="">
                        <h5>Meal Topping</h5>
                        <p>Membantu Picky Eater agar makannya lebih lahap dan menambah nafsu makan</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- End of Menu Section-->

        <section class="gallery-section">
            <h3 class="section-title">Follow us on @instagram</h3>
            <p class="section-description">Temukan berbagai informasi seputar anabul dan bagikanlah </p>
            <div class="gallery-container">
                <img src="assets/images/Rectangle23.png" alt="">
                <img src="assets/images/Rectangle24.png" alt="">
                <img src="assets/images/Rectangle25.png" alt="">
                <img src="assets/images/Rectangle26.png" alt="">
                <img src="assets/images/Rectangle27.png" alt="">
                <img src="assets/images/Rectangle28.png" alt="">
                <img src="assets/images/Rectangle29.png" alt="">
                <img src="assets/images/Rectangle30.png" alt="">
            </div>
            <div class="button">
                <a href="" class="btn">Follow</a>
            </div>
        </section>

      <Footer />
    </div>
  
        
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>
