"use client";

import { Calendar, Clock, Mail, Phone, User, Users, X } from "lucide-react";
import { useState } from "react";

const Reservation = ({
  isReservationOpen,
  setIsReservationOpen,
}: {
  isReservationOpen: boolean;
  setIsReservationOpen: any;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation submitted successfully!");
    setIsReservationOpen(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      specialRequests: "",
    });
  };

  const timeSlots = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      {isReservationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="max-h-[80vh] w-full max-w-md overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 p-6">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                <Calendar className="h-6 w-6 text-amber-600" />
                Make Reservation
              </h2>
              <button
                onClick={() => setIsReservationOpen(false)}
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4 p-6">
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                  <User className="h-5 w-5 text-amber-600" />
                  Personal Information
                </h3>

                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="+60 12-345 6789"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="flex items-center gap-2 pt-2 text-lg font-semibold text-gray-700">
                  <Calendar className="h-5 w-5 text-amber-600" />
                  Reservation Details
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={today}
                      required
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Guests *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                        className="w-full appearance-none rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {guestOptions.map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "guest" : "guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full appearance-none rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="specialRequests"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Any dietary restrictions, special occasions, or seating preferences..."
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsReservationOpen(false)}
                  className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 rounded-md bg-amber-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-amber-700"
                >
                  Confirm Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Reservation;
