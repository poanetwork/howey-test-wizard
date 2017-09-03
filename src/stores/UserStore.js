let UserStore = {
  user: {
    projectName: "Your token",
    email: "",
    projectUrl: ""
  },

  initializeUser() {
    this.user = {
      projectName: "Your token",
      email: "",
      projectUrl: ""
    }
  }
}

export default UserStore;
