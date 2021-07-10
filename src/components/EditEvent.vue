<template>
	<div id="edit-event">
		<h3>Edit Event</h3>
		<div class="row">
			<form
				@submit.prevent="updateEvent"
				class="col s12"
			>
				<div class="row">
					<div class="input-field col s12">
						<input
							disabled
							type="text"
							v-model="event_id"
						>
						<label class="active">Event ID: </label>
					</div>
				</div>

				<div class="row">
					<div class="input-field col s12">
						<input
							type="text"
							v-model="name"
							required
						>
						<label class="active">Name: </label>
					</div>
				</div>

				<div class="row">
					<div class="input-field col s12">
						<input
							type="text"
							v-model="date"
							required
						>
						<label class="active">Date: </label>
					</div>
				</div>

				<div class="row">
					<div class="input-field col s12">
						<input
							type="text"
							v-model="location"
							required
						>
						<label class="active">Location: </label>
					</div>
				</div>

				<button
					type="submit"
					name="action"
					class="btn waves-effect waves-light submit"
				>Submit<i class="material-icons right">send</i></button>

				<router-link
					to="/"
					class="btn cancel"
				>Cancel</router-link>

			</form>
		</div>
	</div>
</template>

<script>
import db from "./firebaseInit";

export default {
	name: "edit-event",
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
		udpateEvent() {
			if (confirm("Are you sure?")) {
				db.collection("events")
					.where("event_id", "==", this.$route.params.event_id)
					.get()
					.then((querySnapshot) => {
						querySnapshot.forEach((doc) => {
							doc.ref.update({
								event_id: this.event_id,
								name: this.name,
								location: this.location,
								date: this.date,
							});
							this.$router.push({
								name: "view-event",
								params: {
									event_id: this.event_id,
								},
							});
						});
					});
			}
		},
	},
};
</script>

<style scoped>
h3 {
	font-size: 2.375em; /* 38px/16px */
	color: #ee6e73;
}

/* label color */
.input-field label {
	color: #333;
}
.input-field input[type="text"] {
	border-bottom: 1px solid #333;
}
/* label focus color */
.input-field input[type="text"]:focus + label {
	color: #ee6e73;
}
/* label underline focus color */
.input-field input[type="text"]:focus {
	border-bottom: 1px solid #ee6e73;
	box-shadow: 0 1px 0 0 #ee6e73;
}
.btn.cancel {
	color: #fafafa;
	background: #777777;
	margin-left: 2.5714em; /* 36px/14px */
}
.btn.submit {
	background: #32bea7;
	color: #fafafa;
}
.btn.submit.material-icons {
	color: #fafafa;
}
@media (max-width: 43.75em) {
	/* 700px */
	h3 {
		font-size: 2em; /* 32px */
	}
	.col .row {
		margin-bottom: 0.75em; /* 12px */
	}
}
@media (max-width: 37.5em) {
	/* 600px */
	h3 {
		font-size: 1.75em; /* 28px */
	}
	.col .row {
		margin-bottom: 0.375em; /* 6px */
	}
}
</style>