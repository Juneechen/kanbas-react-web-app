// client.ts handles all the interactions with the server.
// It exports functions that make requests to the server.
// The client.ts file is imported into the client-side code (e.g., Courses/index.tsx) to fetch data from the server.
// ? The client.ts file is also imported into the server-side code (e.g., server.ts) to handle the requests from the client-side code.
// This separation of concerns makes the client-side code easier to read and maintain.
// It also makes it easier to test the client-side code because you can mock the server responses in the client.ts file.

import axios from "axios"; // for making requests to the server

const request = axios.create({
  baseURL: "http://localhost:4000/api", // the base URL of the server; every request will be appended to this URL
  withCredentials: true, // send cookies with the request
});

export const fetchAllUsers = async () => {
  const res = await request.get("/users");
  return res.data;
};

export const registerUser = async (user: any) => {
  // const res = await request.post("/users", user); // use get for now for testing
  const res = await request.get(
    `/users/register/${user.username}/${user.password}`
  );
  return res.data;
};

export const loginUser = async (user: any) => {
  // const res = await request.post("/users/login", user); // use get for now for testing
  const res = await request.get(
    `/users/login/${user.username}/${user.password}`
  );
  return res.data;
};

// get the profile of the currently logged in user
export const profile = async () => {
  const res = await request.get("/users/profile");
  return res.data;
};

export const logoutUser = async () => {
  const res = await request.get("/users/logout");
  return res.data;
};
