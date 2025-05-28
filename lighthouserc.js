module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/projects/portfolio",
      ],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
