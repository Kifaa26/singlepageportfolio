import { createStore } from 'vuex-router'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://kifaa26.github.io/Vue-EOMP/JSON/data.json'
export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    experiences: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value
    },
    setAbout(state, value) {
      state.jobTitle = value
    },
    setEducation(state, value) {
      state.jobTitle = value
    },
    setExperiences(state, value) {
      state.jobTitle = value
    },
    setSkills(state, value) {
      state.jobTitle = value
    },
    setTestimonials(state, value) {
      state.jobTitle = value
    },
    setProjects(state, value) {
      state.jobTitle = value
    }
  },
  actions: {
    async fetchJobTitle(context) {
      try {
      let {jobTitle} = (await axios.get(portfolioURL)).data
      context.commit("setJobTitle", jobTitle)
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch the job title",
        icon: "error",
        timer: 2000
      })
    }
    },
    async fetchAbout(context) {
      try {
      let {about} = (await axios.get(portfolioURL)).data
      context.commit("setAbout", about)
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch the job title",
        icon: "error",
        timer: 2000
      })
    }
    },
    async fetchEducation(context) {
      try {
      let {education} = (await axios.get(portfolioURL)).data
      context.commit("setEducation", education)
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch the job title",
        icon: "error",
        timer: 2000
      })
    }
    },
    async fetchExperiences(context) {
      try {
      let {experiences} = (await axios.get(portfolioURL)).data
      context.commit("setExperiences", experiences)
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch the job title",
        icon: "error",
        timer: 2000
      })
    }
    },
    async fetchSkills(context) {
      try {
      let {skills} = (await axios.get(portfolioURL)).data
      context.commit("setSkills", skills)
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch the job title",
        icon: "error",
        timer: 2000
      })
    }
    },
    async fetchTestimonials(context) {
      try {
      let {testimonials} = (await axios.get(portfolioURL)).data
      context.commit("setTestimonials", testimonials)
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch the job title",
        icon: "error",
        timer: 2000
      })
    }
    },
    async fetchProjects(context) {
      try {
      let {Projects} = (await axios.get(portfolioURL)).data
      context.commit("setprojects ", Projects)
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch the job title",
        icon: "error",
        timer: 2000
      })
    }
    },
  },
  modules: {
  }
})
