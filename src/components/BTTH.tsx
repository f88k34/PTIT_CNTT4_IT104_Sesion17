import React from "react";
type Jobs = {
  id: number;
  title: string;
  status: boolean;
};

export default function BTTH() {
    const [jobs, setJobs] = React.useState<Jobs[]>([
    { id: 1, title: "Học hook", status: true },
    { id: 2, title: "Cầu lông", status: false },
    { id: 3, title: "Làm bài tập", status: true },
    ])
    //Hiển thị 
    //Thêm công việc
    const [taskName, setTaskName] = React.useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTaskName(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        //validate
        if(taskName.trim() === ""){
            alert("Vui lòng nhập tên công việc");
            return;
        }
        //check trùng lặp
        const isExist = jobs.some((job) => job.title.toLowerCase() === taskName.toLowerCase());
        if(isExist){
            alert("Công việc đã tồn tại");
            return;
        }
        //tạo object mới
        const newJob: Jobs = {
            id: jobs.length + 1,
            title: taskName,
            status: false,//công việc mới chưa làm
        };
        //thêm vào danh sách
        setJobs([...jobs, newJob]);
        
    }
    const handleDelete = (id: number) =>{
      const confirm = window.confirm("Bạn có chắc muốn xóa công việc này không?");
      if(!confirm) return;    
        const newJobs = jobs.filter((job) => job.id !== id);
        setJobs(newJobs);
    }
    //đếm số kí tự
    const countCharacters = (str: string) =>{
      return str.length;
    }
    return (
     

  );
}
