"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/input-with-label";
import {
  validatePassword,
  validateEmail,
  validateUsername,checkUsernameAvailability
} from "@validation-lib/form-checker"; 

// Modal component
const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  formData: { email: string; username: string; password: string };
}> = ({ isOpen, onClose, formData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <h3 className="text-xl font-semibold mb-4">Form Data</h3>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Username:</strong> {formData.username}
        </p>
        <p>
          <strong>Password:</strong> {formData.password}
        </p>
        <Button onClick={onClose} className="mt-4">
          Close
        </Button>
      </div>
    </div>
  );
};

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: string[] = [];

    const validPassword = validatePassword(formData.password);
    const validEmail = validateEmail(formData.email);
    const validUsername = validateUsername(formData.username);

    const userNameAlreadyExists = await checkUsernameAvailability(
      formData.username,
      "http://localhost:3001/api/check-username"
    );

    if (typeof userNameAlreadyExists === "string") {
      errors.push(userNameAlreadyExists);
      console.log("user already exists");
    }

    if (typeof validPassword === "string") {
      errors.push(validPassword);
      console.log("password error");
    }

    if (typeof validEmail === "string") {
      errors.push(validEmail);
      console.log("email error");
    }

    if (typeof validUsername === "string") {
      errors.push(validUsername);
      console.log("username error");
    }

    if (errors.length > 0) {
      setErrorMessage(errors.join("\n"));
      return;
    }

    setErrorMessage(null); // Clear error message if both validations pass
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Testing Form
          </h2>
          <InputWithLabel
            label="Email"
            id="email"
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputWithLabel
            label="Username"
            id="username"
            placeholder="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <InputWithLabel
            label="Password"
            id="password"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errorMessage && (
            <p className="text-red-600 text-center whitespace-pre-wrap">
              {errorMessage}
            </p>
          )}
          <Button variant="default" className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} formData={formData} />
    </>
  );
};

export default FormComponent;
