"use client"
import React, { useState } from 'react';
import TaskDurationRescheduleSection from './Assignee';
import RestOfTheForm from './page';

function Task() {
  const [assignee, setAssignee] = useState('');
  const [taskDuration, setTaskDuration] = useState('');
  const [rescheduled, setRescheduled] = useState(false);
  const [taskType, setTaskType] = useState('');
  const [completed, setCompleted] = useState(false);
  const [adminComment, setAdminComment] = useState('');
gi

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md w-full">
      <h1 className="text-2xl font-bold mb-4">Task</h1>

      <AssigneeSection  />
      <TaskDurationRescheduleSection
        taskDuration={taskDuration}
        setTaskDuration={setTaskDuration}
        rescheduled={rescheduled}
        setRescheduled={setRescheduled}
        setAssignee={setAssignee}
      />
      <RestOfTheForm
        taskType={taskType}
        setTaskType={setTaskType}
        completed={completed}
        setCompleted={setCompleted}
        adminComment={adminComment}
        setAdminComment={setAdminComment}
      />
    </div>
  );
}

export default Task;
