<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EventCard from "@/components/EventCard.vue"; // @ is an alias to /src

@Options({
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          title: "Event 1",
          date: "2020-01-01",
          time: "12:00",
        },
        {
          id: 2,
          title: "Event 2",
          date: "2020-01-02",
          time: "12:00",
        },
        {
          id: 3,
          title: "Event 3",
          date: "2020-01-03",
          time: "12:00",
        },
      ],
    };
  },
})
export default class Home extends Vue {
  /*  */
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
