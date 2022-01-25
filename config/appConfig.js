import dotenv from 'dotenv';
dotenv.config()

const required = [
  'POSTGRES_HOST',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DB',
];

const envs = {
  NODE_ENV: process.env.NODE_ENV,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_PORT: Number(process.env.POSTGRES_PORT) || 5432,
  POSTGRES_DB: process.env.POSTGRES_DB,
  PORT: process.env.PORT,
};

(() => {
  const notMeetRequirements = required.filter(v => !process.env[v]);
  if (notMeetRequirements.length) {
    // eslint-disable-next-line no-console
    console.log(
      `ERROR: Missing required environment variables: ${notMeetRequirements.join(
        ', '
      )})`
    );
    process.exit(1);
  }
  required.forEach(v => {
    envs[v] = process.env[v];
  });
})();

export default envs;
