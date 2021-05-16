import React from "react";
import "./task-item.css";
import PropTypes from "prop-types";

export default function TaskItem({ id, title, taskState }) {
  return <div>{title}</div>;
}

TaskItem.protoTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};
