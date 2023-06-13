<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
    <!-- Header -->
    <header>
      <img
        :src="require('@/assets/images/logo.png')"
        class="mt-5 w-48 mx-auto"
      />
    </header>

    <main class="mt-8 mx-0">
      <!-- Content -->
      <div class="flex justify-center">
        <TeamNames :teamList="teamList" :limit="limit" />
        <TeamScores :teamList="teamList" :limit="limit" />
      </div>

      <TeamSkeleton v-if="!teamList.length" />

      <div
        class="flex items-center justify-between text-center my-5"
        v-if="teamList.length"
      >
        <ResultBar :limit="limit" :totalElement="teamList.length" />
        <button
          type="button"
          class="text-indigo-600 hover:bg-indigo-100 sm:mr-6"
          @click="loadMore"
          v-if="limit < 20"
        >
          Load more...
        </button>
      </div>
    </main>
  </div>
</template>



<script>
import TeamSkeleton from "@/components/TeamSkeleton";
import TeamNames from "@/components/TeamNames";
import TeamScores from "@/components//TeamScores";
import ResultBar from "@/components//ResultBar";
import { urls } from "@/constants/constants.js";
import axios from "axios";

export default {
  name: "TeamList",
  components: {
    TeamSkeleton,
    TeamNames,
    TeamScores,
    ResultBar,
  },

  data() {
    return {
      teamList: [],
      limit: 5,
      increaseLimit: 3,
    };
  },

  created() {
    axios.get(urls.URL_TEAMS).then((response) => {
      this.teamList = response.data.table || [];
      console.log(response.data.table);
    });
  },

  methods: {
    loadMore() {
      this.limit += this.increaseLimit;
    },
  },
};
</script>

