import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, DatePicker, message } from "antd";
import dayjs from "dayjs";

const AppointmentManagement = () => {
    const [appointments, setAppointments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAppointment, setEditingAppointment] = useState(null);
    const [form] = Form.useForm();

    
    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        setAppointments(storedAppointments);
    }, []);

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
        let updatedAppointments;
        if (editingAppointment) {
            updatedAppointments = appointments.map((appt) =>
                appt.id === editingAppointment.id ? { ...values, id: appt.id } : appt
            );
        } else {
            updatedAppointments = [...appointments, { ...values, id: Date.now() }];
        }

        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
        message.success(editingAppointment ? "Updated successfully!" : "Added successfully!");
        handleCancel();
    };

    const handleDelete = (id) => {
        const updatedAppointments = appointments.filter((appt) => appt.id !== id);
        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
        message.success("Deleted successfully!");
    };

    const columns = [
        { title: "First Name", dataIndex: "firstName", key: "firstName" },
        { title: "Last Name", dataIndex: "lastName", key: "lastName" },
        { title: "Email", dataIndex: "workEmail", key: "workEmail" },
        { title: "Phone", dataIndex: "phoneNumber", key: "phoneNumber" },
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
                    <Button onClick={() => showModal(record)} type="link">Edit</Button>
                    <Button onClick={() => handleDelete(record.id)} type="link" danger>Delete</Button>
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
                    <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="workEmail" label="Work Email" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="date" label="Date" rules={[{ required: true }]}>
                        <DatePicker className="w-full" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AppointmentManagement;
