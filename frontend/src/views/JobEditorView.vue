<template>
  <div>
    <v-container>
      <form @submit.prevent="onSubmit">
        <v-text-field v-model="company_name" label="会社名" required>
        </v-text-field>
        <v-text-field
          v-model="company_email"
          label="メールアドレス"
          required
          type="email"
        >
        </v-text-field>
        <v-text-field v-model="job_title" label="職種" required> </v-text-field>
        <v-text-field v-model="job_description" label="仕事内容" required>
        </v-text-field>
        <v-text-field v-model="job_salary" label="給料" required>
        </v-text-field>
        <v-text-field v-model="job_prefectures" label="都道府県" required>
        </v-text-field>
        <v-text-field v-model="job_city" label="市町村" required>
        </v-text-field>

        <div class="text-center">
          <v-btn color="success" type="submit"> 送信 </v-btn>
        </div>
      </form>
    </v-container>
  </div>
</template>

<script>
import { apiService } from "../common/api.service.js";

export default {
  name: "JobEditorView",
  props: {
    id: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      company_name: null,
      company_email: null,
      job_title: null,
      job_description: null,
      job_salary: null,
      job_prefectures: null,
      job_city: null,
      error: null,
      loading: false,
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      let endpoint = "/api/jobs/";
      let method = "POST";
      if (this.id !== undefined) {
        endpoint += `${this.id}/`;
        method = "PUT";
      }
      apiService(endpoint, method, {
        company_name: this.company_name,
        company_email: this.company_email,
        job_title: this.job_title,
        job_description: this.job_description,
        job_salary: this.job_salary,
        job_prefectures: this.job_prefectures,
        job_city: this.job_city,
      })
        .then((job_data) => {
          this.$router.push({
            name: "JobView",
            params: { id: job_data.id },
          });
        })
        .catch((error) => {
          console.error("Error while submitting job data:", error);
          this.error = "An error occurred while submitting the job data.";
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  async beforeRouteEnter(to, from, next) {
    if (to.params.id !== undefined) {
      try {
        let endpoint = `/api/jobs/${to.params.id}/`;
        let data = await apiService(endpoint);
        next((vm) => {
          vm.company_name = data.company_name;
          vm.company_email = data.company_email;
          vm.job_title = data.job_title;
          vm.job_description = data.job_description;
          vm.job_salary = data.job_salary;
          vm.job_prefectures = data.job_prefectures;
          vm.job_city = data.job_city;
        });
      } catch (error) {
        console.error("Error while fetching job data:", error);
        next(false);
      }
    } else {
      return next();
    }
  },
  created() {
    document.title = "Editor - Job";
  },
};
</script>
