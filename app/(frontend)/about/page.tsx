import React from "react";
import { Users, Calendar, Clock, Star, Shield, Utensils } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-orange-500" />,
      title: "Easy Reservations",
      description:
        "Book your table in just a few clicks with our intuitive reservation system.",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Real-time Availability",
      description:
        "See live table availability and get instant confirmation for your bookings.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Group Booking",
      description:
        "Perfect for date nights, family dinners, or large group celebrations.",
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Secure & Reliable",
      description:
        "Your reservations are protected with enterprise-grade security.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Diners" },
    { number: "500+", label: "Partner Restaurants" },
    { number: "50,000+", label: "Reservations Made" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#ffecd1]">
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full border border-orange-500/30 bg-orange-500/20 p-4 backdrop-blur-xs">
                <Utensils className="h-12 w-12 text-orange-400" />
              </div>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-black sm:text-6xl">
              Connecting You With
              <span className="bg-linear-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                {" "}
                Great Dining
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-black">
              We&apos;re revolutionizing how people discover and book restaurant
              experiences. From intimate dinners to grand celebrations, we make
              reservations simple and seamless.
            </p>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-amber-500/10 blur-3xl delay-1000"></div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="transform transition-transform duration-300 group-hover:scale-105">
                  <div className="mb-2 text-4xl font-bold text-slate-800 md:text-5xl">
                    {stat.number}
                  </div>
                  <div className="font-medium text-slate-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-linear-to-r from-slate-50 to-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-slate-900">
                Our Mission
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-700">
                We believe that great dining experiences bring people together
                and create lasting memories. Our platform bridges the gap
                between food lovers and exceptional restaurants, making it
                easier than ever to discover, book, and enjoy incredible meals.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Whether you&apos;re planning a romantic dinner, a business lunch, or
                a celebration with friends, we&apos;re here to ensure your dining
                experience starts perfectly from the moment you make your
                reservation.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-linear-to-br from-orange-400 to-amber-500 p-1 shadow-2xl">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                  <div className="text-center">
                    <Star className="mx-auto mb-4 h-16 w-16 text-orange-500" />
                    <h3 className="mb-2 text-2xl font-bold text-slate-800">
                      Excellence
                    </h3>
                    <p className="text-slate-600">In every reservation</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-400/20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-amber-400/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Why Choose Our Platform?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              We&apos;ve designed every feature with both diners and restaurants in
              mind, creating a seamless experience for everyone.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="h-full transform rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                  <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-slate-900 via-slate-800 to-orange-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Ready to Start Dining?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-300">
            Join thousands of food lovers who trust us to help them discover and
            book amazing dining experiences.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/restaurants"
              className="transform rounded-xl bg-linear-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Browse Restaurants
            </Link>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute left-1/4 top-1/2 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"></div>
      </div>
    </div>
  );
}
