import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Phone, User, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CTA() {
  const navigate = useNavigate();
  const [view, setView] = useState("menu");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [joinForm, setJoinForm] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleJoinChange = (e) => {
    setJoinForm({ ...joinForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.status === "admin") {
      navigate("/dashboard");
      return;
    }

    if (data.status === "success") {
      alert("Message sent successfully");
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted");
    setJoinForm({ name: "", email: "", role: "", message: "" });
  };

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-xl mx-auto px-4">
        {/* MENU SCREEN */}
        {view === "menu" && (
          <div className="text-center space-y-10 animate-fadeIn">
            <h2 className="text-4xl font-semibold transition-transform duration-500 hover:scale-105">
              Connect With Bulldroid
            </h2>

            <p className="text-gray-600 transition-opacity duration-500 hover:opacity-80">
              Choose how you would like to interact with us
            </p>

            <div className="grid gap-6 mt-10">
              <button
                onClick={() => setView("contact")}
                className="group bg-white border rounded-xl p-8 shadow hover:shadow-xl transition-all duration-500 hover:border-red-500 hover:scale-[1.03]"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-300">
                  Contact Us
                </h3>
                <p className="text-gray-500 transition-opacity duration-300 group-hover:opacity-80">
                  Ask questions, request demos, or partner with us
                </p>
              </button>

              <button
                onClick={() => setView("join")}
                className="group bg-white border rounded-xl p-8 shadow hover:shadow-xl transition-all duration-500 hover:border-red-500 hover:scale-[1.03]"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-300">
                  Join Our Team
                </h3>
                <p className="text-gray-500 transition-opacity duration-300 group-hover:opacity-80">
                  Apply to work with our robotics engineering team
                </p>
              </button>
            </div>
          </div>
        )}

        {/* CONTACT FORM */}
        {view === "contact" && (
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-5 animate-slideUp">
            <button
              onClick={() => setView("menu")}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors duration-300"
            >
              <ArrowLeft size={16} /> Back
            </button>

            <h3 className="text-2xl font-semibold transition-transform duration-500 hover:scale-105">
              Contact Us
            </h3>

            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <User size={18} />
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <Mail size={18} />
              <Input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <Phone size={18} />
              <Input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 h-32 transition-shadow duration-300 focus:shadow-md"
            />

            <Button
              onClick={handleSubmit}
              className="bg-red-600 hover:bg-red-700 w-full transition-all duration-500 hover:scale-[1.05]"
            >
              Send Message
            </Button>
          </div>
        )}

        {/* JOIN FORM */}
        {view === "join" && (
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-5 animate-slideUp">
            <button
              onClick={() => setView("menu")}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors duration-300"
            >
              <ArrowLeft size={16} /> Back
            </button>

            <h3 className="text-2xl font-semibold transition-transform duration-500 hover:scale-105">
              Join Our Team
            </h3>

            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <User size={18} />
              <Input
                name="name"
                placeholder="Your Name"
                value={joinForm.name}
                onChange={handleJoinChange}
              />
            </div>

            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <Mail size={18} />
              <Input
                name="email"
                placeholder="Email"
                value={joinForm.email}
                onChange={handleJoinChange}
              />
            </div>

            <Input
              name="role"
              placeholder="Role you want to apply for"
              value={joinForm.role}
              onChange={handleJoinChange}
              className="transition-shadow duration-300 focus:shadow-md"
            />

            <textarea
              name="message"
              placeholder="Tell us about yourself..."
              value={joinForm.message}
              onChange={handleJoinChange}
              className="w-full border rounded-lg p-3 h-32 transition-shadow duration-300 focus:shadow-md"
            />

            <Button
              onClick={handleJoinSubmit}
              className="bg-red-600 hover:bg-red-700 w-full transition-all duration-500 hover:scale-[1.05]"
            >
              Apply Now
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

/* Add these custom animations in your global CSS (tailwind.css) */


