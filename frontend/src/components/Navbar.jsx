import { CSVLink } from "react-csv";

function Navbar({

  tasks,

  logout,

  search,

  setSearch,

  statusFilter,

  setStatusFilter,

  darkMode,

  setDarkMode,

  sortOrder,

  setSortOrder,

}) {

  return (

    <div style={{
      display: "flex",

      justifyContent: "space-between",

      alignItems: "center",

      marginBottom: "40px",

      flexWrap: "wrap",

      gap: "20px"
    }}>

      <div>

        <h1 style={{

          fontSize: "40px",

          marginBottom: "10px",

          color:
            darkMode
              ? "#f8fafc"
              : "#111827"

        }}>
          Welcome Back
        </h1>

        <p style={{

          color:
            darkMode
              ? "#d1d5db"
              : "#374151"

        }}>
          Monitor your compliance activities
        </p>

      </div>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        flexWrap: "wrap"
      }}>

        <input
          type="text"

          placeholder="Search Tasks..."

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }

          style={{
            padding: "12px 15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            width: "250px"
          }}
        />

        <select

          value={statusFilter}

          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }

          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        >

          <option value="All">
            All
          </option>

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

        <select

          value={sortOrder}

          onChange={(e) =>
            setSortOrder(
              e.target.value
            )
          }

          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        >

          <option value="High">
            High → Low
          </option>

          <option value="Low">
            Low → High
          </option>

        </select>

        <button

          onClick={() =>
            setDarkMode(
              !darkMode
            )
          }

          style={{
            background:
              darkMode
                ? "#facc15"
                : "#111827",

            color:
              darkMode
                ? "black"
                : "white",

            border: "none",

            padding: "12px 20px",

            borderRadius: "10px",

            cursor: "pointer",

            fontWeight: "bold"
          }}
        >

          {darkMode
            ? "Light Mode"
            : "Dark Mode"}

        </button>

        <CSVLink
          data={tasks || []}
          filename="tasks-report.csv"
        >

          Export CSV

        </CSVLink>

        <button
          onClick={logout}

          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default Navbar;