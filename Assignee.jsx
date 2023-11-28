import React from 'react';

const
TaskDurationRescheduleSection= ({ taskDuration, setTaskDuration, rescheduled, setRescheduled, assignee, setAssignee}) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Task Duration:</label>
        <input type="text" value={taskDuration} onChange={(e) => setTaskDuration(e.target.value)} className="w-full border p-2 rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">
          <input type="checkbox" checked={rescheduled} onChange={() => setRescheduled(!rescheduled)} className="mr-2" />
          Rescheduled
        </label>
        <div className="mb-4">
      <label className="block text-sm font-semibold mb-1">Assignee:</label>
      <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} className="w-full border p-2 rounded" />
    </div>
      </div>
    </>
  );
}

export default TaskDurationRescheduleSection;
