import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, User, ArrowLeft } from "lucide-react";

export default function Application() {

  const navigate = useNavigate();

  const [joinErrors, setJoinErrors] = useState({});
  const [joinSuccess, setJoinSuccess] = useState(false);

  const [joinForm, setJoinForm] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const handleJoinChange = (e) => {
    setJoinForm({ ...joinForm, [e.target.name]: e.target.value });
  };

  const handleJoinSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!joinForm.name) newErrors.name = "Name required";
    if (!joinForm.email) newErrors.email = "Email required";
    if (!joinForm.role) newErrors.role = "Please select a role"; // updated message
    if (!joinForm.message) newErrors.message = "Tell us about yourself";

    setJoinErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setJoinSuccess(true);
    setTimeout(() => setJoinSuccess(false), 3000);

    setJoinForm({ name: "", email: "", role: "", message: "" });
    setJoinErrors({});
  };

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-xl mx-auto px-4">

        <div className="bg-white p-8 rounded-xl shadow-lg space-y-5 animate-slideUp transition-all duration-500">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors duration-300"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <h3 className="text-2xl font-semibold">Join Our Team</h3>

          {/* NAME */}
          <div>
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <User size={18} />
              <Input
                name="name"
                placeholder="Your Name"
                value={joinForm.name}
                onChange={handleJoinChange}
              />
            </div>
            {joinErrors.name && (
              <p className="text-red-500 text-sm">{joinErrors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <Mail size={18} />
              <Input
                name="email"
                placeholder="Email"
                value={joinForm.email}
                onChange={handleJoinChange}
              />
            </div>
            {joinErrors.email && (
              <p className="text-red-500 text-sm">{joinErrors.email}</p>
            )}
          </div>

          {/* ROLE FIELD (CHANGED FROM INPUT TO SELECT DROPDOWN) */}
          <div>
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <FontAwesomeIcon icon={faBriefcase} />

              {/* CHANGED: this used to be <Input ... /> */}
              <select
                name="role"
                value={joinForm.role}
                onChange={handleJoinChange}
                className="w-full border rounded-lg p-2 bg-white"
              >
                {/* NEW: dropdown options */}
                <option value="">Select Role</option>
                <option value="Robotics Engineer">Robotics Engineer</option>
                {/* <option value="AI Developer"></option> */}
                <option value="Mechanical Designer">Mechanical Designer</option>
                <option value="Embedded Systems Engineer">
                  Product Development Engineer
                </option>
                <option value="Intern">Intern</option>
              </select>

            </div>

            {joinErrors.role && (
              <p className="text-red-500 text-sm">{joinErrors.role}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              name="message"
              placeholder="Tell us about yourself..."
              value={joinForm.message}
              onChange={handleJoinChange}
              className="w-full border rounded-lg p-3 h-32 transition-shadow duration-300 focus:shadow-md"
            />
            {joinErrors.message && (
              <p className="text-red-500 text-sm">{joinErrors.message}</p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <Button
            onClick={handleJoinSubmit}
            className="bg-red-600 hover:bg-red-700 w-full transition-all duration-500 hover:scale-[1.05]"
          >
            Apply Now
          </Button>

          {/* SUCCESS MESSAGE */}
          {joinSuccess && (
            <div className="flex items-center gap-2 text-green-600 text-sm animate-fadeIn">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              Application submitted
            </div>
          )}

        </div>

      </div>
    </section>
  );
}