// eslint-disable-next-line @typescript-eslint/no-var-requires
const { env } = require("./next.config");

module.exports = {
  siteUrl: env.SITE_URL,
};
