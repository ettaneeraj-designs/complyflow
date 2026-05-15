function TaskForm({

  title,
  setTitle,

  dueDate,
  setDueDate,

  assignedTo,
  setAssignedTo,

  priority,
  setPriority,

  createTask,

  isEditing,

  setIsEditing,

  setEditingTask,

}) {

  return (

    <div style={{
      background: "white",

      padding: "30px",

      borderRadius: "20px",

      marginBottom: "30px",

      display: "flex",

      gap: "20px",

      flexWrap: "wrap",

      alignItems: "center",
    }}>

      <input

        type="text"

        placeholder="Task Title"

        value={title}

        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }

        style={{
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          flex: 1,
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

        style={{
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      />

      <input

        type="text"

        placeholder="Assigned To"

        value={assignedTo}

        onChange={(e) =>
          setAssignedTo(
            e.target.value
          )
        }

        style={{
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
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
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd"
        }}
      >

        <option value="Low">
          Low
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="High">
          High
        </option>

      </select>

      <button

        onClick={createTask}

        style={{
          background:
            isEditing
              ? "#2563eb"
              : "green",

          color: "white",

          border: "none",

          padding: "14px 25px",

          borderRadius: "10px",

          cursor: "pointer",

          fontWeight: "bold",
        }}
      >

        {isEditing
          ? "Update Task"
          : "Add Task"}

      </button>

      {isEditing && (

        <button

          onClick={() => {

            setIsEditing(false);

            setEditingTask(null);

            setTitle("");

            setDueDate("");

            setAssignedTo("");

            setPriority("Medium");

          }}

          style={{
            background: "gray",

            color: "white",

            border: "none",

            padding: "14px 25px",

            borderRadius: "10px",

            cursor: "pointer",

            fontWeight: "bold",
          }}
        >

          Cancel

        </button>

      )}

    </div>

  );

}

export default TaskForm;