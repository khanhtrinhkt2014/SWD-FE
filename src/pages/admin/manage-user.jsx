import { Table, Tag, Avatar } from "antd";

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
    title: "CONTACT NUMBER",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "COURSE TITLE",
    dataIndex: "job",
    key: "job",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = "";
      switch (status) {
        case "2nd Round":
          color = "green";
          break;
        case "Machine Test":
          color = "blue";
          break;
        case "Final Round":
          color = "cyan";
          break;
        case "1st Round":
          color = "teal";
          break;
        default:
          color = "gray";
      }
      return <Tag color={color}>{status}</Tag>;
    },
  },
];

const data = [
  {
    key: "1",
    name: "Ebin Sunny",
    email: "robinanderson@gmail.com",
    phone: "+91 9456782446",
    job: "UI UX Designer",
    status: "2nd Round",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    key: "2",
    name: "Julia Gomez",
    email: "julia123gomez@gmail.com",
    phone: "+91 9456782446",
    job: "Software Developer",
    status: "Machine Test",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    key: "3",
    name: "Taison Joe",
    email: "1010taison@gmail.com",
    phone: "+91 9456782446",
    job: "Finance Manager",
    status: "Final Round",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    key: "4",
    name: "Kiya Johnson",
    email: "kiyajohnson@gmail.com",
    phone: "+91 9456782446",
    job: "SEO Specialist",
    status: "2nd Round",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    key: "5",
    name: "Allen Bravo",
    email: "allen324200@gmail.com",
    phone: "+91 9456782446",
    job: "Android Developer",
    status: "1st Round",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
];

const ManageUser = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Manage User</h2>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default ManageUser;
