"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import { trackEvent } from "@/lib/analytics";
import { submitLead } from "@/lib/forms";
import { clinicConfig } from "@/content/clinic-config";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: clinicConfig.procedures[0],
    doctor: clinicConfig.doctors[0],
    date: "",
    time: "",
    message: "",
    website: "" // Honeypot field
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  // Calculate min/max dates for calendar picker
  const today = new Date();
  const minDateStr = today.toISOString().split("T")[0];
  
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Scheduling your appointment request..." });

    try {
      const result = await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        procedure: `Clinic: ${formData.department} | Practitioner: ${formData.doctor}`,
        preferredDate: `${formData.date} at ${formData.time}`,
        message: formData.message,
        website: formData.website,
        sourcePage: "appointment"
      });

      if (result.success) {
        setStatus({ type: "success", message: result.message || "Your appointment request has been submitted successfully!" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          department: clinicConfig.procedures[0],
          doctor: clinicConfig.doctors[0],
          date: "",
          time: "",
          message: "",
          website: ""
        });
        
        // Push conversion event to GTM
        trackEvent({
          action: "form_submit_appointment",
          category: "Lead Acquisition",
          label: `${formData.department} - ${formData.doctor}`
        });
      } else {
        setStatus({ type: "error", message: result.error || "An error occurred. Please check input fields and try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Network error occurred. Please check your internet connection." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans text-sm">
      {/* Honeypot Spam Protection */}
      <div className="hidden">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-brand-text-sec text-xs uppercase tracking-wider">
            Procedure / Consultation Type
          </label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors"
          >
            {clinicConfig.procedures.map((svc, idx) => (
              <option key={idx} value={svc}>
                {svc}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-brand-text-sec text-xs uppercase tracking-wider">
            Consulting Surgeon
          </label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors"
          >
            {clinicConfig.doctors.map((doc, idx) => (
              <option key={idx} value={doc}>
                {doc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors"
          required
        />
        <input
          type="date"
          name="date"
          min={minDateStr}
          max={maxDateStr}
          value={formData.date}
          onChange={handleChange}
          className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors cursor-pointer"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors cursor-pointer"
          required
        />
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Additional Notes / Symptoms (Optional)"
        rows={4}
        className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors resize-none"
      ></textarea>

      {status.type !== "idle" && (
        <div className={`p-4 text-xs ${
          status.type === "loading" ? "border border-brand-border bg-brand-card text-brand-text-sec animate-pulse" :
          status.type === "success" ? "border border-green-800/40 bg-green-950/20 text-green-400" :
          "border border-red-900/40 bg-red-950/20 text-red-400"
        }`}>
          {status.message}
        </div>
      )}

      <Button 
        variant="primary" 
        type="submit" 
        disabled={status.type === "loading"}
        className="mt-4 min-h-11 flex items-center justify-center disabled:opacity-50"
      >
        {status.type === "loading" ? "Scheduling..." : "Submit Request"}
      </Button>
    </form>
  );
}
