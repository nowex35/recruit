<template>
  <div>
    <!-- Object.keys(job).length はjobオブジェクトが空かどうかをチェック。空ならelse文の待機処理 -->
    <v-container v-if="job && Object.keys(job).length">
      <h2 class="mb-5">{{ job.company_name }}</h2>
      <p>職種: {{ job.job_title }}</p>
      <p>内容: {{ job.job_description }}</p>
      <p>給料: {{ job.job_salary }}</p>
      <p>都道府県: {{ job.job_prefectures }}</p>
      <p>市町村: {{ job.job_city }}</p>
      <v-btn
        color="success"
        class="mr-2"
        :to="{ name: 'JobEditorView', params: { id: job.id } }"
      >
        編集
      </v-btn>
      <v-btn color="error" @click="deleteJobData"> 削除 </v-btn>
    </v-container>
    <v-container v-else>
      <p>Loading...</p>
      <!-- データが取得されるまで「Loading...」を表示 -->
    </v-container>
  </div>
</template>

<script>
import { apiService } from "../common/api.service.js";

export default {
  name: "JobView",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      job: {},
    };
  },
  methods: {
    setPageTitle() {
      document.title = this.job.company_name;
    },
    getJobData() {
      //バッククォートでないと${}が認識されない
      let endpoint = `/api/jobs/${this.id}/`;
      apiService(endpoint)
        .then((data) => {
          this.job = data;
          this.setPageTitle(data.company_name);
        })
        .catch((error) => {
          console.log("API error", error);
        });
    },
    deleteJobData() {
      let endpoint = `/api/jobs/${this.id}/`;
      apiService(endpoint, "DELETE")
        .then(() => {
          this.$router.push({ name: "HomeView" });
        })
        .catch((error) => {
          console.error("Error while deleting job data:", error);
        });
    },
  },
  created() {
    this.getJobData();
  },
};
</script>
