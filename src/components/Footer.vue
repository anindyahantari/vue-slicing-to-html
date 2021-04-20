<template>
<div>
    <footer>
            <div class="footer-container">
                <div class="logo">
                     <router-link to="/"><img src="assets/images/Pawmeals_Logotype_transparant_1.svg" alt="" srcset=""></router-link>
                </div>
                <div class="other-menu">
                    <p>Menu Lainnya</p>
                    <ul>
                        <li><router-link to="/cara-pembayaran">Cara Pembayaran</router-link></li>
                        <li><router-link to="/metode-pembayaran">Metode Pembayaran</router-link></li>
                        <li><router-link to="/contact">Hubungi Kami</router-link></li>
                        <li><router-link to="/faq">FAQ</router-link></li>
                    </ul>
                </div>
                <div class="menu">
                    <p>Menu</p>
                    <ul>
                        <li><router-link to="/about-us">About Us</router-link></li>
                        <li><router-link to="/calculator">Calculator</router-link></li>
                        <li><router-link to="/campaign">Campaign</router-link></li>
                        <li><router-link to="/blog">Blog</router-link></li>
                    </ul>
                </div>
                <div class="information">
                    <p>Informasi</p>
                    <ul>
                        <li class="location"> Jl. Mawar 12 RT.02 RW.01 <br> Jakarta</li>
                        <li class="phone">+62 81-2235-2234</li>
                        <li class="email">info@pawmeals.com</li>
                    </ul>
                </div>
                <div class="social-media">
                    <p>Follow Us</p>
                    <ul>
                        <li class="instagram"> <a href="">@pawmeals</a></li>
                        <li class="facebook"> <a href="">Pawmeals</a> </li>
                        <li class="twitter"> <a href="">Pawmeals</a></li>
                    </ul>
                </div>
            </div>
        </footer>
</div>
  
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>

</style>