<template>
  <table
    class="divide-y divide-gray-300 dark:divide-gray-700"
    style="min-width: 222px"
  >
    <thead>
      <tr>
        <td scope="col" class="text-center" colspan="2">Teams</td>
      </tr>
    </thead>
    <tbody
      class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-slate-900"
    >
      <tr
        v-for="(team, index) in teamList"
        :key="team.idStanding"
        v-show="index + 1 <= limit"
      >
        <td class="flex items-center">
          {{ team.intRank <= 9 ? `0${team.intRank}` : team.intRank }}

          <img :src="team?.strTeamBadge" :alt="team.strTeam" class="w-6 mx-3" />
          <span
            v-tooltip.right-start="{
              content:
                '<ol><li>Player 1</li> <li>Player 2</li> <li>Player 2</li></ol>',
              classes:
                'bg-black text-gray-100 text-bold py-3 px-4 rounded-md text-sm',
            }"
          >
            {{ team.strTeam }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TeamNames",
  props: ["teamList", "limit"],
};
</script>