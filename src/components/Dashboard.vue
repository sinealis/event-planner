<template>
	<div id="dashboard">
		<ul class="collection with-header">
			<li class="collection-header">
				<h4>Events</h4>
			</li>
			<li
				v-for="event in events"
				:key="event.id"
				class="collection-item"
			>
				<div class="chip">{{event.date}}</div>
				{{event.name}}

				<router-link
					:to="{name:'view-event', params:{event_id: event.event_id}}"
					class="secondary-content"
				><i class="material-icons">keyboard_arrow_down</i>
				</router-link>
			</li>
		</ul>

		<div class="fixed-action-btn">
			<router-link
				to="/new"
				class="btn-floating btn-large waves-effect waves-light"
			>
				<i class="material-icons">add</i>
			</router-link>
		</div>
	</div>
</template>

<script>
import db from "./firebaseInit";
export default {
	name: "dashboard",
	data() {
		return {
			events: [],
		};
	},
	created() {
		db.collection("events")
			.orderBy("event_id")
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					const data = {
						id: doc.id,
						event_id: doc.data().event_id,
						name: doc.data().name,
						location: doc.data().location,
						date: doc.data().date,
					};
					this.events.push(data);
				});
			});
	},
};
</script>

<style scoped>
h4 {
	color: #32bea7;
	font-weight: 600;
}
.collection.with-header .collection-item {
	padding-left: 1.25em; /* 20px/16px */
}
li.collection-item {
	font-weight: 400;
	line-height: 2.5em; /* 40px/16px */
}
.collection-item .chip {
	font-weight: 600;
	color: #fafafa;
	background: #32bea7;
}
.secondary-content {
	color: #32bea7;
	margin-top: 0.625em; /* 10px/16px */
}
.btn-floating {
	background: #ee6e73;
}
.btn-floating i {
	color: #fafafa;
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
		font-weight: 400;
	}
}
</style>