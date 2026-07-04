"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import { trackEvent } from "@/lib/analytics";
import { submitLead } from "@/lib/forms";

interface EvaluationFormProps {
  procedureTitle: string;
  procedureSlug: string;
}

export default function EvaluationForm({ procedureTitle, procedureSlug }: EvaluationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    website: "" // Honeypot field
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending request..." });

    try {
      const result = await submitLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        procedure: procedureTitle,
        message: formData.message,
        website: formData.website,
        sourcePage: `procedure-${procedureSlug}`
      });

      if (result.success) {
        setStatus({ type: "success", message: result.message || "Evaluation request sent successfully!" });
        setFormData({ name: "", phone: "", email: "", message: "", website: "" });

        // Push lead tracking event
        trackEvent({
          action: "form_submit_evaluation",
          category: "Lead Acquisition",
          label: procedureTitle
        });
      } else {
        setStatus({ type: "error", message: result.error || "Failed to submit request. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Network connection error. Please try again." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <div>
        <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-1.5">Your Name</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-brand-bg border border-brand-border/65 px-4 py-2.5 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none" 
          placeholder="Full Name"
        />
      </div>
      <div>
        <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-1.5">Phone Number</label>
        <input 
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full bg-brand-bg border border-brand-border/65 px-4 py-2.5 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none" 
          placeholder="10-digit mobile"
        />
      </div>
      <div>
        <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-1.5">Email Address</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-brand-bg border border-brand-border/65 px-4 py-2.5 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none" 
          placeholder="name@email.com"
        />
      </div>
      <div>
        <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-1.5">Select Procedure</label>
        <select 
          defaultValue={procedureSlug}
          disabled
          className="w-full bg-brand-bg border border-brand-border/65 px-4 py-2.5 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none opacity-80 cursor-not-allowed"
        >
          <option value={procedureSlug}>{procedureTitle}</option>
        </select>
      </div>
      <div>
        <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-1.5">Additional Notes</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full bg-brand-bg border border-brand-border/65 px-4 py-2.5 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none resize-none" 
          placeholder="Describe your requirements..."
        />
      </div>

      {status.type !== "idle" && (
        <div className={`p-3 text-[11px] ${
          status.type === "loading" ? "border border-brand-border bg-brand-card text-brand-text-sec animate-pulse" :
          status.type === "success" ? "border border-green-800/40 bg-green-950/20 text-green-400" :
          "border border-red-900/40 bg-red-950/20 text-red-400"
        }`}>
          {status.message}
        </div>
      )}

      <Button 
        type="submit" 
        variant="primary" 
        disabled={status.type === "loading"}
        className="w-full mt-2 text-xs py-3.5 uppercase tracking-widest font-semibold min-h-11 flex items-center justify-center disabled:opacity-50"
      >
        {status.type === "loading" ? "Submitting..." : "Book Evaluation"}
      </Button>
    </form>
  );
}
