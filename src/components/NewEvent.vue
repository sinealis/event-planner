<template>
	<div id="new-event">
		<h3>New Event</h3>
		<div class="row">
			<form
				@submit.prevent="saveEvent"
				class="col s12"
			>
				<div class="row">
					<div class="input-field col s12">
						<input
							type="text"
							v-model="event_id"
							required
						>
						<label>Event ID: </label>
					</div>
				</div>

				<div class="row">
					<div class="input-field col s12">
						<input
							type="text"
							v-model="name"
							required
						>
						<label>Name: </label>
					</div>
				</div>

				<div class="row">
					<div class="input-field col s12">
						<input
							type="text"
							v-model="date"
							required
						>
						<label>Date: </label>
					</div>
				</div>

				<div class="row">
					<div class="input-field col s12">
						<input
							type="text"
							v-model="location"
							required
						>
						<label>Location: </label>
					</div>
				</div>

				<button
					type="submit"
					name="action"
					class="btn waves-effect waves-light submit"
				>Submit<i class="material-icons right">send</i></button>
				<router-link
					to="/"
					class="btn waves-effect waves-dark cancel"
				>Cancel</router-link>

			</form>
		</div>
	</div>
</template>

<script>
import db from "./firebaseInit";

export default {
	name: "new-event",
	data() {
		return {
			event_id: null,
			name: null,
			location: null,
			date: null,
		};
	},
	methods: {
		saveEvent() {
			db.collection("events")
				.add({
					event_id: this.event_id,
					name: this.name,
					date: this.date,
					location: this.location,
				})
				.then(db.collection("events").doc(), this.$router.push("/"))
				.catch((error) => alert("Something goes wrong", error));
		},
	},
};
</script>

<style scoped>
h3 {
	color: #32bea7;
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