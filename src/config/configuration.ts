export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    db_host:process.env.DATABASE_HOST,
    db_port: parseInt(process.env.DATABASE_PORT, 10)
  });