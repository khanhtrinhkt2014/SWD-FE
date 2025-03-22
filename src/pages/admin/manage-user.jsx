import { Table, Tag, Avatar } from "antd";
import { UserService } from "../../services/user.service";
import { useEffect, useState } from "react";

const columns = [
  {
    title: "CANDIDATE NAME",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center gap-2">
        <Avatar src={record.avatar} />
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: "EMAIL ADDRESS",
    dataIndex: "email",
    key: "email",
  },


  {
    title: "STATUS",
    dataIndex: "enabled",
    key: "enabled",
    render: (enabled) => {
      let color = "";
      switch (enabled) {
        case true:
          color = "green";
          break;
      
        case false:
          color = "teal";
          break;
        default:
          color = "gray";
      }
      return <Tag color={color}>{enabled ? "Kích hoạt" : "Ngừng hoạt động"}</Tag>;
    },
  },
];


const ManageUser = () => {
  const [dataUser, setDataUser] = useState([])
  const asyncGetData = async () => {
    try {
      const response = await UserService.getAll()
      setDataUser(response)
    } catch (error) {
      console.log({error})
    }
  }
  
  useEffect(() => {
    asyncGetData()
  }, [])
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Manage User</h2>
      <Table columns={columns} dataSource={dataUser} pagination={false} />
    </div>
  );
};

export default ManageUser;
