const config = {
  server: {
    api: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8080",
    bitmex: process.env.PUBLIC_BITMEX_API_URL || "https://www.bitmex.com/api",
  },
};

export default config;
