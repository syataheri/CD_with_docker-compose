const { execSync } = require("child_process");

const restartDockerCompose = async () => {
  const commands = [
    "docker-compose stop",
    "docker-compose rm -f",
    "docker-compose pull",
    "start cmd /k  docker-compose -f docker-compose.yml up",
  ];

  // Execute the commands
  for (const command of commands) {
    execSync(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error restarting Docker Compose: ${error}`);
        return;
      }
      console.log(
        `Docker Compose command '${command}' execute successfully:\n${stdout}`
      );
      return;
    });
  }
  return;
};

module.exports = restartDockerCompose;
