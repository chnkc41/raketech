<template>
  <div class="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
    <!-- header -->
    <header class="flex items-end justify-between">
      <img
        :src="require('@/assets/images/logo.png')"
        class="mt-5 w-48"
      />
      <div class="mr-5">
        <ThemeMode />
      </div>
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
          class="text-indigo-600 dark:text-indigo-200 hover:bg-indigo-100 dark:border-gray-800 hover:dark:bg-gray-900 sm:mr-6"
          @click="loadMore"
          v-if="limit < 20"
        >
          {{loadButtonText}}
        </button>
      </div>
    </main>
  </div>
</template>
 
<script>
import ThemeMode from "@/components/ThemeMode";
import TeamSkeleton from "@/components/TeamSkeleton";
import TeamNames from "@/components/TeamNames";
import TeamScores from "@/components/TeamScores";
import ResultBar from "@/components/ResultBar";
import { urls } from "@/constants/constants.js";
import axios from "axios";

export default {
  name: "TeamList",
  components: {
    ThemeMode,
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
      loadButtonText: "Load more..."
    };
  },

  created() {
    axios.get(urls.URL_TEAMS).then((response) => {
      this.teamList = response.data.table || []; 
    });
  },

  methods: {
    loadMore() {
      this.limit += this.increaseLimit;
    },
  },
};
</script>

