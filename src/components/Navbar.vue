<template>
  <div>
     <div class="navbar-container" id="navbar-home">
            <nav>
                <div class="nav-logo">
                    <router-link to="/"><img src="assets/images/Pawmeals_Logotype_transparant_1.svg" alt="" srcset=""></router-link>
                </div>
                
                <ul class="menu-items">
                    <li>
                        <router-link to="/calculator">Calculator</router-link>
                    </li>
                    <li>
                        <router-link to="/menu">Menu</router-link>
                    </li>
                    <li>
                        <router-link to="/puppypedia">Puppypedia</router-link>
                    </li>
                    <li>
                        <router-link to="/faq">Faq</router-link>
                    </li>
                    <li>
                        <router-link to="/order">Order</router-link>
                    </li>
                    <li>
                        <router-link to="/about-us">About Us</router-link>
                    </li>
                    <li>
                        <router-link to="/dogtionary">Menu</router-link>
                    </li>
                </ul>
            </nav>
     </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>