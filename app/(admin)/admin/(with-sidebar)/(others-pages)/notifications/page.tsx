"use client";

import React, { useState } from "react";
import { Send, AlertCircle } from "lucide-react";
import DatePicker from "@/components/form/date-picker";

export default function Notifications() {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    recipientType: "all",
    recipients: "",
    priority: "normal",
    scheduledTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.title.trim() || !formData.message.trim()) {
      setError("Title and message are required");
      return;
    }

    if (formData.recipientType === "specific" && !formData.recipients.trim()) {
      setError("Please specify recipients");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send notification");

      setSuccess("Notification sent successfully!");
      setFormData({
        title: "",
        message: "",
        recipientType: "all",
        recipients: "",
        priority: "normal",
        scheduledTime: "",
      });
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const [eventLevel, setEventLevel] = useState("");
  const status = {
    Danger: "danger",
    Success: "success",
    Primary: "primary",
    Warning: "warning",
  };

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
          Notifications
        </h3>
        <p className="text-theme-sm mt-1 text-gray-500 dark:text-gray-400">
          Create and send notifications to your users
        </p>

        <div onSubmit={handleSubmit} className="my-10 space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-500"
            >
              Notification Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., System Maintenance Alert"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-500 transition outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:text-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your notification message here..."
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 text-gray-500 transition outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:text-gray-400"
            />
          </div>

          <div className="mt-6">
            <label className="mb-4 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Event Color
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {Object.entries(status).map(([key, value]) => (
                <div key={key} className="n-chk">
                  <div
                    className={`form-check form-check-${value} form-check-inline`}
                  >
                    <label
                      className="form-check-label flex items-center text-sm text-gray-700 dark:text-gray-400"
                      htmlFor={`modal${key}`}
                    >
                      <span className="relative">
                        <input
                          className="form-check-input sr-only"
                          type="radio"
                          name="event-level"
                          value={key}
                          id={`modal${key}`}
                          checked={eventLevel === key}
                          onChange={() => setEventLevel(key)}
                        />
                        <span className="box mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700">
                          <span
                            className={`h-2 w-2 rounded-full bg-white ${
                              eventLevel === key ? "block" : "hidden"
                            }`}
                          ></span>
                        </span>
                      </span>
                      {key}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scheduled Time */}
          <div>
            <DatePicker
              id="date-picker"
              label="Schedule (Optional)"
              placeholder="Select a date"
              onChange={(dates, currentDateString) => {
                // Handle your logic
                console.log({ dates, currentDateString });
              }}
            />
            <p className="mt-1 text-xs text-gray-500">
              Leave empty to send immediately
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <span className="text-sm text-red-700">{error}</span>
            </div>
          )}

          {/* Success Alert */}
          {success && (
            <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
              <Send className="h-5 w-5 text-green-600" />
              <span className="text-sm text-green-700">{success}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() =>
                setFormData({
                  title: "",
                  message: "",
                  recipientType: "all",
                  recipients: "",
                  priority: "normal",
                  scheduledTime: "",
                })
              }
              className="rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-300"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
            >
              <Send className="h-5 w-5" />
              {loading ? "Sending..." : "Send Notification"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
