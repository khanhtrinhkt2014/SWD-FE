import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, DatePicker, message } from "antd";
import dayjs from "dayjs";

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [form] = Form.useForm();

  const showModal = (appointment = null) => {
    setEditingAppointment(appointment);
    form.setFieldsValue(
      appointment ? { ...appointment, date: dayjs(appointment.date) } : {}
    );
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleSave = (values) => {
    const newAppointments = editingAppointment
      ? appointments.map((appt) =>
          appt.id === editingAppointment.id ? { ...values, id: appt.id } : appt
        )
      : [...appointments, { ...values, id: Date.now() }];
    setAppointments(newAppointments);
    message.success(
      editingAppointment ? "Updated successfully!" : "Added successfully!"
    );
    handleCancel();
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
    message.success("Deleted successfully!");
  };

  const columns = [
    { title: "Patient Name", dataIndex: "name", key: "name" },
    { title: "Doctor", dataIndex: "doctor", key: "doctor" },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => dayjs(date).format("YYYY-MM-DD"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button onClick={() => showModal(record)} type="link">
            Edit
          </Button>
          <Button onClick={() => handleDelete(record.id)} type="link" danger>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="p-5">
      <Button type="primary" onClick={() => showModal()} className="mb-4">
        Add Appointment
      </Button>
      <Table columns={columns} dataSource={appointments} rowKey="id" />
      <Modal
        title={editingAppointment ? "Edit Appointment" : "New Appointment"}
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item
            name="name"
            label="Patient Name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="doctor"
            label="Doctor"
            rules={[{ required: true, message: "Please enter doctor name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AppointmentManagement;
