import {
  useState,
  useEffect,
  useCallback,
} from "react";

import axios from "axios";

import { toast } from "react-toastify";

import {
  getTasks,
  createTask as createTaskService,
  deleteTaskById,
  updateTask,
} from "../services/taskService";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskTable from "../components/TaskTable";
import TaskForm from "../components/TaskForm";
import AnalyticsChart from "../components/AnalyticsChart";
import UploadSection from "../components/UploadSection";
import StatsCards from "../components/StatsCards";
import ProgressBar from "../components/ProgressBar";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {

  const [tasks, setTasks] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [title, setTitle] =
    useState("");

  const [dueDate, setDueDate] =
    useState("");

  const [assignedTo, setAssignedTo] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [editingTask, setEditingTask] =
    useState(null);

  const [isEditing, setIsEditing] =
    useState(false);

  const [selectedFile, setSelectedFile] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [sortOrder, setSortOrder] =
    useState("High");

  const [darkMode, setDarkMode] =
    useState(

      localStorage.getItem(
        "darkMode"
      ) === "true"

    );

  const priorityOrder = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  const filteredTasks = tasks

    .filter((task) => {

      const matchesSearch =

        task.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =

        statusFilter === "All"

        ||

        task.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );

    })

    .sort((a, b) => {

      if (sortOrder === "High") {

        return (
          priorityOrder[b.priority]
          -
          priorityOrder[a.priority]
        );

      }

      return (
        priorityOrder[a.priority]
        -
        priorityOrder[b.priority]
      );

    });

  const chartData = [
    {
      name: "Completed",
      value: tasks.filter(
        (task) =>
          task.status === "Completed"
      ).length,
    },

    {
      name: "Pending",
      value: tasks.filter(
        (task) =>
          task.status === "Pending"
      ).length,
    },

    {
      name: "In Progress",
      value: tasks.filter(
        (task) =>
          task.status ===
          "In Progress"
      ).length,
    },

    {
      name: "At Risk",
      value: tasks.filter(
        (task) =>
          task.status === "At Risk"
      ).length,
    },
  ];

  const COLORS = [
    "green",
    "orange",
    "blue",
    "red",
  ];

  const fetchTasks = useCallback(

    async () => {

      try {

        setLoading(true);

        setError("");

        const response =
          await getTasks();

        setTasks(

          response.data.sort(

            (a, b) =>

              new Date(
                b.createdAt
              )

              -

              new Date(
                a.createdAt
              )

          )

        );

      } catch (error) {

        console.log(error);

        setError(
          "Failed to load tasks"
        );

      } finally {

        setLoading(false);

      }

    },

    []

  );

  useEffect(() => {

    fetchTasks();

  }, [fetchTasks]);

  useEffect(() => {

    localStorage.setItem(
      "darkMode",
      darkMode
    );

  }, [darkMode]);

  const createTask = async () => {

    try {

      if (isEditing) {

        await updateTask(

          editingTask._id,

          {
            title,
            dueDate,
            assignedTo,
            priority,
          }

        );

        toast.success(
          "Task Updated"
        );

        setIsEditing(false);

        setEditingTask(null);

      } else {

        await createTaskService({
          title,
          dueDate,
          assignedTo,
          priority,
        });

        toast.success(
          "Task Created"
        );

      }

      fetchTasks();

      setTitle("");

      setDueDate("");

      setAssignedTo("");

      setPriority("Medium");

    } catch (error) {

      console.log(error);

      toast.error(
        "Operation Failed"
      );

    }

  };

  const editTask = (task) => {

    setIsEditing(true);

    setEditingTask(task);

    setTitle(task.title);

    setDueDate(task.dueDate);

    setAssignedTo(
      task.assignedTo
    );

    setPriority(
      task.priority || "Medium"
    );

  };

  const deleteTask = async (id) => {

    try {

      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this task?"
        );

      if (!confirmDelete) return;

      await deleteTaskById(id);

      fetchTasks();

      toast.success(
        "Task Deleted"
      );

    } catch (error) {

      console.log(error);

      toast.error(
        "Delete Failed"
      );

    }

  };

  const updateTaskStatus = async (
    id,
    status
  ) => {

    try {

      await updateTask(id, {
        status,
      });

      fetchTasks();

      toast.success(
        "Status Updated"
      );

    } catch (error) {

      console.log(error);

      toast.error(
        "Update Failed"
      );

    }

  };

  const uploadFile = async () => {

    try {

      const formData =
        new FormData();

      formData.append(
        "document",
        selectedFile
      );

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/upload`,
        formData
      );

      toast.success(
        "File Uploaded"
      );

    } catch (error) {

      console.log(error);

      toast.error(
        "Upload Failed"
      );

    }

  };

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    window.location.href =
      "/login";

  };

  return (

    <div style={{
      display: "flex",

      flexDirection:
        window.innerWidth < 768
          ? "column"
          : "row",

      minHeight: "100vh",

      background:
        darkMode
          ? "#0f172a"
          : "#f5f7f6",

      fontFamily: "Arial",

      color:
        darkMode
          ? "#f3f4f6"
          : "#111827",
    }}>

      <Sidebar tasks={tasks} />

      <div style={{
        flex: 1,
        padding: "40px"
      }}>

        <Navbar
          tasks={tasks}

          logout={logout}

          search={search}
          setSearch={setSearch}

          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}

          darkMode={darkMode}
          setDarkMode={setDarkMode}

          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <StatsCards tasks={tasks} />

        <ProgressBar tasks={tasks} />

        <TaskForm
          title={title}
          setTitle={setTitle}

          dueDate={dueDate}
          setDueDate={setDueDate}

          assignedTo={assignedTo}
          setAssignedTo={
            setAssignedTo
          }

          priority={priority}
          setPriority={setPriority}

          createTask={createTask}

          isEditing={isEditing}

          setIsEditing={
            setIsEditing
          }

          setEditingTask={
            setEditingTask
          }
        />

        <AnalyticsChart
          chartData={chartData}
          COLORS={COLORS}
        />

        <UploadSection
          setSelectedFile={
            setSelectedFile
          }

          uploadFile={uploadFile}
        />

        {loading ? (

          <div style={{
            background:
              darkMode
                ? "#1e293b"
                : "white",

            padding: "30px",

            borderRadius: "20px",

            textAlign: "center",

            fontSize: "20px"
          }}>

            Loading Tasks...

          </div>

        ) : error ? (

          <div style={{
            background:
              darkMode
                ? "#1e293b"
                : "white",

            padding: "30px",

            borderRadius: "20px",

            textAlign: "center",

            color: "red",

            fontSize: "20px"
          }}>

            {error}

          </div>

        ) : (

          <>
            <TaskTable
              tasks={filteredTasks}

              updateTaskStatus={
                updateTaskStatus
              }

              deleteTask={deleteTask}

              editTask={editTask}
            />

            <RecentActivity
              tasks={tasks}
            />
          </>

        )}

      </div>

    </div>

  );

}

export default Dashboard;