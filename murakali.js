import http from "k6/http";
import { check, group, sleep, fail } from "k6";

export const options = {
  vus: 1,
  iterations: 1,
  // duration: "10s",

  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<150", "p(99)<300"],
  },
  summaryTrendStats: ["min", "max", "avg", "p(95)", "p(99)"],
};

const BASE_URL = "https://be.murakali.store";

export default () => {
  const url = `${BASE_URL}/api/v1/product`;
  console.log(url);
  const res = http.get(url);
};
