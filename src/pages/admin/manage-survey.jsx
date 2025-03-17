import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Space, Popconfirm } from "antd";

const SurveyManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSurvey, setEditingSurvey] = useState(null);
  const [form] = Form.useForm();

  const [surveys, setSurveys] = useState([
    {
      id: 1,
      name: "Customer Feedback",
      description: "Survey on customer satisfaction",
    },
    {
      id: 2,
      name: "Product Review",
      description: "Survey on new product launch",
    },
  ]);

  const openModal = (survey = null) => {
    setEditingSurvey(survey);
    setIsModalOpen(true);
    if (survey) {
      form.setFieldsValue(survey);
    } else {
      form.resetFields();
    }
  };

  const handleDelete = (id) => {
    setSurveys(surveys.filter((survey) => survey.id !== id));
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (editingSurvey) {
        setSurveys((prev) =>
          prev.map((item) =>
            item.id === editingSurvey.id ? { ...values, id: item.id } : item
          )
        );
      } else {
        setSurveys([...surveys, { ...values, id: Date.now() }]);
      }
      setIsModalOpen(false);
    });
  };

  const columns = [
    { title: "Survey Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => openModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-5">
      <Button type="primary" onClick={() => openModal()} className="mb-4">
        Add Survey
      </Button>
      <Table columns={columns} dataSource={surveys} rowKey="id" />

      <Modal
        title={editingSurvey ? "Edit Survey" : "Create Survey"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Survey Name"
            rules={[{ required: true, message: "Please enter survey name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SurveyManagement;
