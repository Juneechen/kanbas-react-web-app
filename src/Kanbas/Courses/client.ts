import axios from "axios"; // axios is a promise-based HTTP client for the browser and node.js, used to make HTTP requests from the browser to the server

const COURSES_API = "http://localhost:4000/api/courses";

export const fetchAllCourses = async () => {
  const res = await axios.get(COURSES_API);
  return res.data; // returns an array of courses
};

// ? means optional parameter; if id is not provided, it will be undefined
export const fetchCourseById = async (cid?: string) => {
  const res = await axios.get(`${COURSES_API}/${cid}`);
  return res.data; // returns a single course
};

// post to create a new course
export const createCourse = async (course: any) => {
  const res = await axios.post(COURSES_API, course);
  return res.data; // returns the newly created course
};

// delete a course by id
export const deleteCourse = async (cid?: string) => {
  const res = await axios.delete(`${COURSES_API}/${cid}`); // return 204, no content
  return res.data;
};

// update a course given the updated course object
export const updateCourse = async (course: any) => {
  const res = await axios.put(`${COURSES_API}/${course._id}`, course); // return 204, no content
  return res; // contains status code, headers, etc., but no data
};
