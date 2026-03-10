import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CTA() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 // admin logic here 
 const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  });

  const data = await res.json();

  console.log(data); // debugging

  if (data.status === "admin") {
    navigate("/dashboard");
    return;
  }

  if (data.status === "success") {
    alert("Message sent successfully");
    setForm({ name: "", email: "", phone: "", message: "" });
  }
};

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-4xl text-center mb-4">Contact Bulldroid</h2>
        <p className="text-gray-600 text-center mb-10">
          Book demo, ask questions, or partner with us.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-4">

            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange}/>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <Input name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <Input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange}/>
            </div>

            <textarea
              name="message"
              placeholder="Your Questions..."
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 h-32"
            />

            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 w-full">
              Send Message
            </Button>

          </div>

          <div>
            <h3 className="text-xl mb-3">Our Location</h3>

            <iframe
              title="Bulldroid Location"
              src="https://www.google.com/maps?q=Alagappa%20Incubation%20Forum%20Karaikudi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-lg shadow"
            ></iframe>

          </div>

        </div>
      </div>
    </section>
  );
}