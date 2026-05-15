import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/api/tasks`;

export const getTasks =
  async () => {

    return await axios.get(API);

  };

export const createTask =
  async (taskData) => {

    return await axios.post(
      API,
      taskData
    );

  };

export const updateTask =
  async (id, updatedData) => {

    return await axios.put(
      `${API}/${id}`,
      updatedData
    );

  };

export const deleteTaskById =
  async (id) => {

    return await axios.delete(
      `${API}/${id}`
    );

  };