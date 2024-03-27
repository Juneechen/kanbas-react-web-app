import axios from "axios";

const COURSES_API = "http://localhost:4000/api/courses";
const MODULES_API = "http://localhost:4000/api/modules";

export const findModulesForCourse = async (cid?: string) => {
  const res = await axios.get(`${COURSES_API}/${cid}/modules`);
  return res.data;
};

export const createModule = async (cid?: string, module?: any) => {
  // post takes care of generating the id
  const response = await axios.post(`${COURSES_API}/${cid}/modules`, module);
  return response.data;
};

export const deleteModule = async (moduleId?: string) => {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module: any) => {
  const response = await axios.put(`${MODULES_API}/${module._id}`, module);
  return response.data;
};
