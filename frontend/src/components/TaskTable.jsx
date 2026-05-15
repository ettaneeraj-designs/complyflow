function TaskTable({

  tasks,

  updateTaskStatus,

  deleteTask,

  editTask,

}) {

  return (

    <div style={{
      background: "white",

      padding: "30px",

      borderRadius: "20px",

      overflowX: "auto",
    }}>

      <div style={{
        marginBottom: "20px",

        fontSize: "18px",

        fontWeight: "bold",

        color: "#374151",
      }}>

        Showing {tasks.length} Task
        {tasks.length !== 1 && "s"}

      </div>

      <div style={{
        display: "flex",

        gap: "15px",

        flexWrap: "wrap",

        marginBottom: "25px",
      }}>

        <div style={{
          background: "green",

          color: "white",

          padding: "12px 18px",

          borderRadius: "12px",

          fontWeight: "bold",
        }}>

          Completed:
          {" "}

          {

            tasks.filter(
              (task) =>
                task.status ===
                "Completed"
            ).length

          }

        </div>

        <div style={{
          background: "#2563eb",

          color: "white",

          padding: "12px 18px",

          borderRadius: "12px",

          fontWeight: "bold",
        }}>

          In Progress:
          {" "}

          {

            tasks.filter(
              (task) =>
                task.status ===
                "In Progress"
            ).length

          }

        </div>

        <div style={{
          background: "gray",

          color: "white",

          padding: "12px 18px",

          borderRadius: "12px",

          fontWeight: "bold",
        }}>

          Pending:
          {" "}

          {

            tasks.filter(
              (task) =>
                task.status ===
                "Pending"
            ).length

          }

        </div>

        <div style={{
          background: "red",

          color: "white",

          padding: "12px 18px",

          borderRadius: "12px",

          fontWeight: "bold",
        }}>

          At Risk:
          {" "}

          {

            tasks.filter(
              (task) =>
                task.status ===
                "At Risk"
            ).length

          }

        </div>

      </div>

      <table style={{
        width: "100%",

        borderCollapse: "collapse",
      }}>

        <thead>

          <tr style={{
            background: "#f3f4f6",
          }}>

            <th style={{
              padding: "15px",
              textAlign: "left",
            }}>
              Title
            </th>

            <th style={{
              padding: "15px",
              textAlign: "left",
            }}>
              Due Date
            </th>

            <th style={{
              padding: "15px",
              textAlign: "left",
            }}>
              Assigned To
            </th>

            <th style={{
              padding: "15px",
              textAlign: "left",
            }}>
              Priority
            </th>

            <th style={{
              padding: "15px",
              textAlign: "left",
            }}>
              Status
            </th>

            <th style={{
              padding: "15px",
              textAlign: "left",
            }}>
              Created
            </th>

            <th style={{
              padding: "15px",
              textAlign: "left",
            }}>
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {

            tasks.length === 0

            ? (

              <tr>

                <td
                  colSpan="7"

                  style={{
                    textAlign: "center",

                    padding: "50px",

                    color: "gray",

                    fontSize: "20px",
                  }}
                >

                  🚀 No tasks found

                  <div style={{
                    marginTop: "10px",
                    fontSize: "16px",
                  }}>

                    Create your first task
                    to get started

                  </div>

                </td>

              </tr>

            )

            : (

              tasks.map((task) => (

                <tr key={task._id}>

                  <td style={{
                    padding: "15px",
                    borderBottom:
                      "1px solid #eee",
                  }}>

                    {task.title}

                  </td>

                  <td style={{
                    padding: "15px",
                    borderBottom:
                      "1px solid #eee"
                  }}>

                    {

                      (() => {

                        const today =
                          new Date();

                        const due =
                          new Date(
                            task.dueDate
                          );

                        today.setHours(
                          0, 0, 0, 0
                        );

                        due.setHours(
                          0, 0, 0, 0
                        );

                        let color =
                          "green";

                        let label =
                          "Upcoming";

                        if (
                          due < today
                        ) {

                          color =
                            "red";

                          label =
                            "Overdue";

                        }

                        else if (

                          due.getTime()

                          ===

                          today.getTime()

                        ) {

                          color =
                            "orange";

                          label =
                            "Due Today";

                        }

                        return (

                          <div>

                            <div>
                              {
                                due.toLocaleDateString()
                              }
                            </div>

                            <span style={{
                              color,

                              fontWeight:
                                "bold",

                              fontSize:
                                "12px"
                            }}>

                              {label}

                            </span>

                          </div>

                        );

                      })()

                    }

                  </td>

                  <td style={{
                    padding: "15px",
                    borderBottom:
                      "1px solid #eee",
                  }}>

                    {task.assignedTo}

                  </td>

                  <td style={{
                    padding: "15px",
                    borderBottom:
                      "1px solid #eee",
                  }}>

                    <span style={{

                      background:

                        task.priority === "High"

                        ? "red"

                        : task.priority === "Medium"

                        ? "orange"

                        : "green",

                      color: "white",

                      padding: "6px 12px",

                      borderRadius: "20px",

                      fontSize: "12px",

                      fontWeight: "bold",
                    }}>

                      {task.priority}

                    </span>

                  </td>

                  <td style={{
                    padding: "15px",
                    borderBottom:
                      "1px solid #eee",
                  }}>

                    <select

                      value={task.status}

                      onChange={(e) =>
                        updateTaskStatus(
                          task._id,
                          e.target.value
                        )
                      }

                      style={{

                        padding: "8px",

                        borderRadius: "8px",

                        color: "white",

                        fontWeight: "bold",

                        border: "none",

                        background:

                          task.status === "Completed"

                          ? "green"

                          : task.status === "In Progress"

                          ? "#2563eb"

                          : task.status === "At Risk"

                          ? "red"

                          : "gray"

                      }}
                    >

                      <option value="Pending">
                        Pending
                      </option>

                      <option value="In Progress">
                        In Progress
                      </option>

                      <option value="Completed">
                        Completed
                      </option>

                      <option value="At Risk">
                        At Risk
                      </option>

                    </select>

                  </td>

                  <td style={{
                    padding: "15px",
                    borderBottom:
                      "1px solid #eee",
                  }}>

                    {

                      task.createdAt

                      ? new Date(
                          task.createdAt
                        ).toLocaleDateString()

                      : "N/A"

                    }

                  </td>

                  <td style={{
                    padding: "15px",
                    borderBottom:
                      "1px solid #eee",
                  }}>

                    <div style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}>

                      <button

                        onClick={() =>
                          editTask(task)
                        }

                        style={{
                          background:
                            "#2563eb",

                          color: "white",

                          border: "none",

                          padding:
                            "8px 12px",

                          borderRadius:
                            "8px",

                          cursor:
                            "pointer",
                        }}
                      >

                        Edit

                      </button>

                      <button

                        onClick={() =>
                          deleteTask(
                            task._id
                          )
                        }

                        style={{
                          background:
                            "red",

                          color: "white",

                          border: "none",

                          padding:
                            "8px 12px",

                          borderRadius:
                            "8px",

                          cursor:
                            "pointer",
                        }}
                      >

                        Delete

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )

          }

        </tbody>

      </table>

    </div>

  );

}

export default TaskTable;