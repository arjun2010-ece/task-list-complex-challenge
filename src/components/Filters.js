import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context";

const Filters = () => {
  const { taskLists, setTaskLists } = useContext(TaskContext);

  const [OriginalTaskLists, setOriginalTaskLists] = useState([]);
  const [filterSelect, setFilterSelect] = useState("all");

  useEffect(() => {
    setOriginalTaskLists(taskLists)
  }, [])

  const handleClick = (type) => {
    setFilterSelect(type);
    if (type === "all") {
      setTaskLists(OriginalTaskLists)
    }

    if (type === "high") {
      const highPriorityTask = taskLists.map((task) => {
        if (task.priority === "3") return task;
        return false;
      });
      setTaskLists(highPriorityTask);
    }

    if (type === "medium") {
      const mediumPriorityTask = taskLists.map((task) => {
        if (task.priority === "2") return task;
        return false;
      });
      setTaskLists(mediumPriorityTask);
    }

    if (type === "low") {
      const lowPriorityTask = taskLists.map((task) => {
        if (task.priority === "1") return task;
        return false;
      });
      setTaskLists(lowPriorityTask);
    }
  };

  return (
    <div className="filters-wrapper">
      <div className="filter-header">
        <i className="fa-regular fa-calendar-check"></i>
        <p className="title"> Task priority</p>
      </div>

      <div className="filter-btn-list">
        <button
          onClick={() => handleClick("all")}
          className={`btn ${filterSelect === "all" ? "active" : "normal"}`}
        >
          All
        </button>
        <button
          onClick={() => handleClick("high")}
          className={`btn ${filterSelect === "high" ? "active" : "normal"}`}
        >
          High
        </button>
        <button
          onClick={() => handleClick("medium")}
          className={`btn ${filterSelect === "medium" ? "active" : "normal"}`}
        >
          Medium
        </button>
        <button
          onClick={() => handleClick("low")}
          className={`btn ${filterSelect === "low" ? "active" : "normal"}`}
        >
          Low
        </button>
      </div>
    </div>
  );
};

export default Filters;
