<template>
	<nav>
		<div class="nav-wrapper">
			<div class="container">
				<router-link
					to="/"
					class="brand-logo"
				><i class="material-icons">event_available</i>My Event Planner</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
</script>

<style scoped>
nav {
	color: #fafafa;
	background-color: #ee6e73;
}

.material-icons {
	font-size: 1em; /* 32px */
	line-height: 2.125em; /* 68px/32px */
}
@media (max-width: 43.75em) {
	/* 700px */
	.brand-logo {
		font-size: 1.625em; /* 26px/16 */
	}
	.material-icons {
		font-size: 1em; /* 26px/26px */
		line-height: 2.576923em; /* 67px/26px */
	}
}
@media (max-width: 37.5em) {
	/* 600px */
	.brand-logo {
		font-size: 1.375em; /* 22px/16px */
	}
	.material-icons {
		font-size: 1em; /* 22px */
		line-height: 2.5454545em; /* 56px/22 */
	}
}
@media (max-width: 31.25em) {
	/* 500px */
	.brand-logo {
		font-size: 1.25em; /* 20px */
	}
	.material-icons {
		display: none;
		margin-right: 0;
	}
}
@media (max-width: 25em) {
	/* 400px */
	.brand-logo {
		font-size: 1.125em; /* 18px */
	}
}
</style>