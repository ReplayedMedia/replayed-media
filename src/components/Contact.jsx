import { useState } from "react";
import { send } from "@emailjs/browser";

const SERVICE_ID   = "service_2nrmg6e";
const TEMPLATE_ID  = "template_a9avjbo";
const PUBLIC_KEY   = "QtycUN2YIr5S5TRz6";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name:     form.name,     // matches {{name}}
        reply_to: form.email,    // matches {{reply_to}}
        subject:  form.subject,  // matches {{subject}}
        message:  form.message,  // matches {{message}}
      },
      PUBLIC_KEY
    )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="relative mt-20 border-t border-neutral-800 min-h-[800px]"
    >
      <h2 className="text-5xl lg:text-6xl text-center mt-20 tracking-wide mb-10 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
        Contact{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
          Us
        </span>
      </h2>

      <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left message */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-2xl sm:text-4xl text-center lg:text-left font-semibold text-cyan-400 mb-6">
            Let’s Talk Strategy
          </h3>
          <p className="text-lg text-center lg:text-left text-white mb-4">
            Ready to elevate your brand or grow your influence? Our team crafts
            bespoke influencer campaigns that command attention and drive real
            results.
          </p>
          <p className="text-lg text-center lg:text-left text-neutral-400">
            Fill out the form and we’ll reach out in under 24 hours to start
            planning your next big win.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-neutral-700" />

        {/* Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-6 space-y-6">
            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium mb-1 text-cyan-400"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  required
                  value={form[field]}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 text-cyan-400"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  transition-colors duration-300 ease-in-out
                  bg-cyan-400 text-white border border-cyan-400
                  rounded-md py-2 px-3
                  hover:bg-white hover:text-black
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Sent!"
                  : status === "error"
                  ? "Retry"
                  : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;