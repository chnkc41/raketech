<template>
  <table
    class="w-full divide-y divide-gray-300 dark:divide-gray-700 overflow-y-hidden"
    style="width: 500px; overflow-x: auto; display: block"
  >
    <thead>
      <tr>
        <td
          v-for="title in teamTitles"
          :key="title"
          scope="col"
          class="text-center"
        >
          {{ title }}
        </td>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-slate-900">
      <tr
        v-for="(team, index) in teamList"
        :key="team.idStanding"
        v-show="index + 1 <= limit"
      >
        <td>{{ team.intPlayed }}</td>
        <td>{{ team.intWin }}</td>
        <td>{{ team.intDraw }}</td>
        <td>{{ team.intLoss }}</td>
        <td>{{ team.intGoalsFor }}</td>
        <td>{{ team.intGoalsAgainst }}</td>
        <td>{{ team.intGoalDifference }}</td>
        <td>{{ team.intPoints }}</td>
        <td>
          <div class="w-28">
            <span v-for="(form, index) in team.strForm" :key="index">
              <box-icon
                :name="
                  form === 'W'
                    ? 'check-circle'
                    : '' || form === 'L'
                    ? 'x-circle'
                    : 'minus-circle'
                "
                type="solid"
                :color="
                  form === 'W' ? 'green' : '' || form === 'L' ? 'red' : 'gray'
                "
                class="w-5"
              ></box-icon>
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
export default {
  name: "TeamScores",
  props: ["teamList", "limit"],
  data() {
    return {
      teamTitles: ["GP", "W", "D", "L", "GF", "GA", "GD", "Pts", "Form"],
    };
  },
};
</script>