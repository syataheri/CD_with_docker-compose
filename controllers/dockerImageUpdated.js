const express = require("express");
const dockerImageUrlRouter = express.Router();
const restartDockerCompose = require("../utils/stopDockerCompose");

dockerImageUrlRouter.post("/imageUpdated", async (req, res, next) => {
  try {
    await restartDockerCompose();
    return res.status(200).json({ OK: true });
  } catch (error) {
    next(error);
  }
});

module.exports = { dockerImageUrlRouter };
