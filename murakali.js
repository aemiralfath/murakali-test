import http from "k6/http";
import { check, group, sleep, fail } from "k6";

export const options = {
  vus: 1,
  iterations: 1,
  // duration: "10s",

  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<400", "p(99)<400"],
  },
  summaryTrendStats: ["min", "max", "avg", "p(95)", "p(99)"],
};

const BASE_URL = "http://be.murakali.store/api/v1";

export default () => {
  const url = `${BASE_URL}/product?limit=30`;
  console.log(url);
  const res = http.get(url);
};

// product
// product?search=baju
// product?category=elektronik
// product?category=elektronik&search=shirt