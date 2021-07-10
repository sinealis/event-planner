<template>
	<div id="view-event">
		<ul class="collection with-header">
			<li class="collection-header">
				<h4>{{name}}</h4>
			</li>
			<li class="collection-item">ID: {{event_id}}</li>
			<li class="collection-item">Date: {{date}}</li>
			<li class="collection-item">Location: {{location}}</li>
		</ul>

		<router-link
			to="/"
			class="btn waves-effect waves-light back"
			tag="button"
		>Back</router-link>

		<button
			@click="deleteEvent"
			class="btn waves-effect waves-light delete"
		>Delete</button>

		<div class="fixed-action-btn">
			<router-link
				:to="{name:'edit-event', params: {event_id: $route.params.event_id}}"
				class="btn-floating btn-large waves-effect waves-light edit"
			>
				<i class="material-icons">edit</i>
			</router-link>
		</div>
	</div>
</template>

<script>
import db from "./firebaseInit";

export default {
	name: "view-event",
	data() {
		return {
			event_id: null,
			name: null,
			location: null,
			date: null,
		};
	},
	beforeRouteEnter(to, from, next) {
		db.collection("events")
			.where("event_id", "==", to.params.event_id)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					next((vm) => {
						vm.event_id = doc.data().event_id;
						vm.name = doc.data().name;
						vm.location = doc.data().location;
						vm.date = doc.data().date;
					});
				});
			});
	},
	created() {
		this.$watch(
			() => this.$route.params,
			() => this.fetchData()
		);
	},
	methods: {
		fetchData() {
			db.collection("events")
				.where("event_id", "==", true)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						this.event_id = doc.data().event_id;
						this.name = doc.data().name;
						this.location = doc.data().location;
						this.date = doc.data().date;
					});
				});
		},
		deleteEvent() {
			if (confirm("Are you sure?")) {
				db.collection("events")
					.where("event_id", "==", this.$route.params.event_id)
					.get()
					.then((querySnapshot) => {
						querySnapshot.forEach((doc) => {
							doc.ref.delete();
							this.$router.push("/");
						});
					});
			}
		},
	},
};
</script>

<style scoped>
.collection.with-header .collection-item {
	padding-left: 1.25em; /* 20px/16px */
}
.collection-item {
	font-weight: 400;
	line-height: 2.5em; /* 40px/16px */
}
.btn.delete {
	margin-left: 2.5714em; /* 36px/14px */
	color: #fafafa;
	background: #ee6e73;
}
.btn.back {
	color: #fafafa;
	background: #777777;
}
.btn-floating.edit {
	background: #777777;
}
@media (max-width: 43.75em) {
	/* 700px */
	h4 {
		font-size: 1.75em; /* 28px/16px */
	}
}
@media (max-width: 37.5em) {
	/* 600px */
	h4 {
		font-size: 1.5em; /* 24px/16px */
	}
}
</style>