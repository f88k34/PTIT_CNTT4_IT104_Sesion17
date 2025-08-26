import React from "react";
type Job = {
  id: number;
  title: string;
  status: boolean;
};
export default function Ex9() {
  const [jobs, setJobs] = React.useState<Job[]>([
    { id: 1, title: "Học hook", status: true },
    { id: 2, title: "Cầu lông", status: false },
    { id: 3, title: "Làm bài tập", status: true },
  ]);
  const [taskName, setTaskName] = React.useState<string>("");
  const [editId, setEditId] = React.useState<number | null>(null);
  // Thêm hoặc cập nhật
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    if (editId) {
      // cập nhật
      setJobs((prev) =>
        prev.map((job) =>
          job.id === editId ? { ...job, title: taskName } : job
        )
      );
      setEditId(null);
    } else {
      // thêm mới
      const newJob: Job = {
        id: Date.now(),
        title: taskName,
        status: false,
      };
      setJobs((prev) => [...prev, newJob]);
    }
    setTaskName("");
  };

  // Xoá
  const handleDelete = (id: number) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  // Sửa
  const handleEdit = (job: Job) => {
    setTaskName(job.title);
    setEditId(job.id);
  };
  // Đánh dấu hoàn thành
  const toggleStatus = (id: number) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, status: !job.status } : job
      )
    );
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    Quản lý công việc
                  </h3>

                  {/* Form thêm/sửa */}
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex justify-content-center align-items-center mb-4"
                  >
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        className="form-control"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                      />
                      <label className="form-label">Thêm công việc</label>
                    </div>
                    <button type="submit" className="btn btn-info ms-2">
                      {editId ? "Cập nhật" : "Thêm"}
                    </button>
                  </form>

                  <ul className="list-group mb-0">
                    {jobs.map((job) => (
                      <li
                        key={job.id}
                        className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2"
                      >
                        <div className="d-flex align-items-center">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            checked={job.status}
                            onChange={() => toggleStatus(job.id)}
                          />
                          <label
                            className={
                              job.status
                                ? "mb-0 text-decoration-line-through"
                                : "mb-0"
                            }
                          >
                            {job.title}
                          </label>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-link btn-sm"
                            onClick={() => handleEdit(job)}
                          >
                            Sửa
                          </button>
                          <button
                            type="button"
                            className="btn btn-link btn-sm text-danger"
                            onClick={() => handleDelete(job.id)}
                          >
                            Xóa
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {jobs.length === 0 && (
                    <p className="text-center mt-3">Không có công việc nào</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
