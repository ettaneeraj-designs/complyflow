import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/api/tasks`;

const getToken = () => {

  return localStorage.getItem(
    "token"
  );

};

const authHeaders = () => {

  return {

    headers: {

      Authorization:
        `Bearer ${getToken()}`,

    },

  };

};

export const getTasks =
  async () => {

    return await axios.get(

      API,

      authHeaders()

    );

};

export const createTask =
  async (taskData) => {

    return await axios.post(

      API,

      taskData,

      authHeaders()

    );

};

export const updateTask =
  async (id, updatedData) => {

    return await axios.put(

      `${API}/${id}`,

      updatedData,

      authHeaders()

    );

};

export const deleteTaskById =
  async (id) => {

    return await axios.delete(

      `${API}/${id}`,

      authHeaders()

    );

};