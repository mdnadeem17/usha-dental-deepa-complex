import { createFileRoute } from "@tanstack/react-router";
import { Check, Calendar, ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
});

function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, phone, service, date, message } = formData;
    
    const text = `Hello Usha Dental Clinic! I would like to book an appointment.

*Details:*
- *Name:* ${fullName || "Not provided"}
- *Phone:* ${phone || "Not provided"}
- *Service:* ${service || "Not selected"}
- *Preferred Date:* ${date || "Not provided"}
- *Message:* ${message || "N/A"}`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "919980609894";
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-foreground selection:bg-primary/20 selection:text-primary flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </a>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Book a Visit</span>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.1] md:text-6xl text-foreground">
              Schedule Your <span className="text-primary">Perfect Smile</span> Today
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
              Tell us a little about you and your needs. Our concierge team will confirm your appointment within 1 business hour.
            </p>
          </div>

          <ul className="space-y-4 pt-4">
            {[
              "Free initial consultation",
              "Same-day emergency slots",
              "Insurance & EMI accepted",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/80 font-medium">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check className="h-3 w-3" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-gray-100">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-300"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (WhatsApp preferred)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-300"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-700 appearance-none bg-white"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="consultation">General Consultation</option>
                  <option value="implant">Dental Implant</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-700"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us a bit about your concern..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-300"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3.5 rounded-xl transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <Calendar className="h-4 w-4" /> Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
