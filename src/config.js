const API = {
  baseURL: process.env.REACT_APP_API_PORT
    ? `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`
    : process.env.REACT_APP_API_HOST,
  host: process.env.REACT_APP_API_HOST,
  port: process.env.REACT_APP_API_PORT,
  v1: {
    auth: "/api/v1/login",
    employees: "/api/v1/employees",
    logout: "/api/v1/logout",
    refresh: "/api/v1/refresh",
    register: "/api/v1/register",
    users: "/api/v1/users",
    patients: "/api/v1/patients",
    records: "/api/v1/records",
  },
};

const RECORDS = {
  meta: {
    folder: "easyai/patients/meta",
    fileType: "meta",
  },
  ecg: {
    folder: "easyai/patients/ecg",
    fileType: "csv",
  },
};

module.exports = { API, RECORDS };
