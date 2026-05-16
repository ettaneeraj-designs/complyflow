import { useEffect, useState } from "react";

import {
  useNavigate,
} from "react-router-dom";

import {

  getTasks,

  createTask,

  updateTask,

  deleteTaskById,

} from "../services/taskService";

function Dashboard() {

  const navigate =
    useNavigate();

  const [tasks, setTasks] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [dueDate, setDueDate] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [darkMode, setDarkMode] =
    useState(false);

  const fetchTasks =
    async () => {

      try {

        const response =
          await getTasks();

        setTasks(
          response.data
        );

      } catch (error) {

        alert(
          "Failed to load tasks"
        );

      }

    };

  useEffect(() => {

    fetchTasks();

  }, []);

  const handleCreateTask =
    async (e) => {

      e.preventDefault();

      try {

        await createTask({

          title,

          dueDate,

          priority,

          status: "Pending",

        });

        setTitle("");
        setDueDate("");
        setPriority("Medium");

        fetchTasks();

      } catch (error) {

        alert(
          "Task creation failed"
        );

      }

    };

  const handleDelete =
    async (id) => {

      try {

        await deleteTaskById(id);

        fetchTasks();

      } catch (error) {

        alert(
          "Delete failed"
        );

      }

    };

  const handleStatusChange =
    async (id, status) => {

      try {

        await updateTask(id, {
          status,
        });

        fetchTasks();

      } catch (error) {

        alert(
          "Update failed"
        );

      }

    };

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    navigate("/");

  };

  return (

    <div style={{

      minHeight: "100vh",

      background:
        darkMode
          ? "#111827"
          : "#f3f4f6",

      color:
        darkMode
          ? "#f9fafb"
          : "#111827",

      padding: "30px",

      transition:
        "0.3s ease",

    }}>

      <div style={{

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        marginBottom: "30px",

      }}>

        <h1 style={{

          color:
            darkMode
              ? "#f9fafb"
              : "#111827",

        }}>

          Welcome to ComplyFlow 🚀

        </h1>

        <div>

          <button

            onClick={() =>
              setDarkMode(
                !darkMode
              )
            }

            style={{

              marginRight:
                "15px",

              padding:
                "10px 15px",

              border: "none",

              borderRadius:
                "8px",

              cursor: "pointer",

              background:
                darkMode
                  ? "#374151"
                  : "#d1d5db",

              color:
                darkMode
                  ? "white"
                  : "black",

            }}
          >

            {darkMode
              ? "Light Mode"
              : "Dark Mode"}

          </button>

          <button

            onClick={logout}

            style={{

              padding:
                "10px 15px",

              background:
                "#dc2626",

              color: "white",

              border: "none",

              borderRadius:
                "8px",

              cursor: "pointer",

            }}
          >

            Logout

          </button>

        </div>

      </div>

      <div style={{

        background:
          darkMode
            ? "#1f2937"
            : "white",

        padding: "25px",

        borderRadius:
          "15px",

        marginBottom:
          "30px",

        boxShadow:
          "0 0 10px rgba(0,0,0,0.1)",

      }}>

        <h2 style={{

          marginBottom:
            "20px",

          color:
            darkMode
              ? "#f9fafb"
              : "#111827",

        }}>

          Create New Task

        </h2>

        <form
          onSubmit={
            handleCreateTask
          }
        >

          <input

            type="text"

            placeholder="Task Title"

            value={title}

            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }

            required

            style={{

              width: "100%",

              padding:
                "12px",

              marginBottom:
                "15px",

              borderRadius:
                "8px",

              border:
                "1px solid #ccc",

            }}
          />

          <input

            type="date"

            value={dueDate}

            onChange={(e) =>
              setDueDate(
                e.target.value
              )
            }

            required

            style={{

              width: "100%",

              padding:
                "12px",

              marginBottom:
                "15px",

              borderRadius:
                "8px",

              border:
                "1px solid #ccc",

            }}
          />

          <select

            value={priority}

            onChange={(e) =>
              setPriority(
                e.target.value
              )
            }

            style={{

              width: "100%",

              padding:
                "12px",

              marginBottom:
                "15px",

              borderRadius:
                "8px",

            }}
          >

            <option>
              Low
            </option>

            <option>
              Medium
            </option>

            <option>
              High
            </option>

          </select>

          <button

            type="submit"

            style={{

              width: "100%",

              padding:
                "12px",

              background:
                "#16a34a",

              color: "white",

              border: "none",

              borderRadius:
                "8px",

              cursor: "pointer",

              fontWeight:
                "bold",

            }}
          >

            Create Task

          </button>

        </form>

      </div>

      <div style={{

        background:
          darkMode
            ? "#1f2937"
            : "white",

        padding: "25px",

        borderRadius:
          "15px",

        boxShadow:
          "0 0 10px rgba(0,0,0,0.1)",

      }}>

        <h2 style={{

          marginBottom:
            "20px",

          color:
            darkMode
              ? "#f9fafb"
              : "#111827",

        }}>

          Your Tasks

        </h2>

        {tasks.length === 0 ? (

          <p style={{

            color:
              darkMode
                ? "#d1d5db"
                : "#4b5563",

          }}>

            Create your new tasks.

          </p>

        ) : (

          tasks.map((task) => (

            <div

              key={task._id}

              style={{

                display: "flex",

                justifyContent:
                  "space-between",

                alignItems:
                  "center",

                padding:
                  "15px",

                marginBottom:
                  "15px",

                borderRadius:
                  "10px",

                background:
                  darkMode
                    ? "#374151"
                    : "#f9fafb",

              }}
            >

              <div>

                <h3 style={{

                  color:
                    darkMode
                      ? "#f9fafb"
                      : "#111827",

                }}>

                  {task.title}

                </h3>

                <p style={{

                  color:
                    darkMode
                      ? "#d1d5db"
                      : "#4b5563",

                }}>

                  Due:
                  {" "}
                  {new Date(
                    task.dueDate
                  ).toLocaleDateString()}

                </p>

                <p style={{

                  color:
                    darkMode
                      ? "#d1d5db"
                      : "#4b5563",

                }}>

                  Priority:
                  {" "}
                  {task.priority}

                </p>

              </div>

              <div>

                <select

                  value={
                    task.status
                  }

                  onChange={(e) =>
                    handleStatusChange(

                      task._id,

                      e.target.value

                    )
                  }

                  style={{

                    padding:
                      "8px",

                    borderRadius:
                      "8px",

                    marginRight:
                      "10px",

                  }}
                >

                  <option>
                    Pending
                  </option>

                  <option>
                    Completed
                  </option>

                </select>

                <button

                  onClick={() =>
                    handleDelete(
                      task._id
                    )
                  }

                  style={{

                    padding:
                      "8px 12px",

                    background:
                      "#dc2626",

                    color:
                      "white",

                    border:
                      "none",

                    borderRadius:
                      "8px",

                    cursor:
                      "pointer",

                  }}
                >

                  Delete

                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default Dashboard;