import React, { useState } from "react";

const programs = [
  { id: 1, name: "Insomnia Support", category: "Cognitive Health" },
  { id: 2, name: "Happy School Journey", category: "Emotional Health" },
];

const SupportProgram = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [registeredPrograms, setRegisteredPrograms] = useState([]);

  const handleRegisterClick = (program) => {
    setSelectedProgram(program);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registeredPrograms.includes(selectedProgram.id)) {
      alert("You have already registered for this program.");
    } else {
      setRegisteredPrograms([...registeredPrograms, selectedProgram.id]);
      alert("Registration successful!");
      setSelectedProgram(null);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        notes: "",
      });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Support Programs</h1>

      {!selectedProgram ? (
        <ul>
          {programs.map((program) => (
            <li key={program.id} className="p-2 border-b">
              <p className="font-semibold">{program.name}</p>
              <p className="text-sm text-gray-600">{program.category}</p>
              <button
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                onClick={() => handleRegisterClick(program)}
              >
                Register
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-lg font-semibold">
            Register for {selectedProgram.name}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="notes"
              placeholder="Additional Notes (optional)"
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Submit Registration
            </button>
          </form>
          <button
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
            onClick={() => setSelectedProgram(null)}
          >
            Back to Programs
          </button>
        </div>
      )}
    </div>
  );
};

export default SupportProgram;
