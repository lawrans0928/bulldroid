import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Phone, User } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) {
      alert("Please enter Name and Email");
      return;
    }

    alert("Thanks! Bulldroid team will contact you soon.");
    console.log(form);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-4xl text-center mb-4">Contact Bulldroid</h2>
        <p className="text-gray-600 text-center mb-10">
          Book demo, ask questions, or partner with us.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* CONTACT FORM */}
          <div className="space-y-4">

            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <Input name="name" placeholder="Your Name" onChange={handleChange}/>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <Input name="email" placeholder="Email" onChange={handleChange}/>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <Input name="phone" placeholder="Phone Number" onChange={handleChange}/>
            </div>

            <textarea
              name="message"
              placeholder="Your Questions..."
              onChange={handleChange}
              className="w-full border rounded-lg p-3 h-32"
            />

            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 w-full">
              Send Message
            </Button>

            <p className="text-sm text-gray-500">
              Email: ceo@bulldroid.in
            </p>

          </div>

          {/* GOOGLE MAP */}
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