<template>
	<div id="app">
		<Navbar />
		<div class="container">
			<router-view></router-view>
		</div>
	</div>

</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
	name: "app",
	components: {
		Navbar,
	},
};
</script>

<style>
@import "./assets/css/style.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap");
#app {
	font-family: "Montserrat", "Helvetica Neue", sans-serif;
	font-size: 16px;
	background: linear-gradient(to top, #cccccc, #eef2f3);
	background: -webkit-linear-gradient(to top, #cccccc, #eef2f3);
	height: 100vh;
}
</style>

<style scoped>
.container {
	margin-top: 2.5em; /* 40px/16px */
}
</style>
