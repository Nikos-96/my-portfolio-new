module.exports = {
  apps: [{
    name: 'my-portfolio-new',
    script: 'dist/index.js',
    exec_mode: 'cluster',
    instances: 1,
    env_production: {
      NODE_ENV: 'production',
    },
    kill_timeout: 25000,
    wait_ready: true,
    listen_timeout: 10000,
  }]
}