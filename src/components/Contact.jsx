import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mnjorvqj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setSuccess(true);
      e.target.reset();
    } else {
      alert("Something went wrong ");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent -z-10" />

      <div className="max-w-3xl mx-auto px-4 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Let’s Work{" "}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Together
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-muted-foreground mb-10"
        >
          Open to full-time roles, freelance, or collaboration.
        </motion.p>

        {/* Success Message */}
        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 mb-6 font-medium"
          >
            Message sent successfully!
          </motion.p>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 rounded-lg border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex justify-center items-center gap-2 px-7 py-3 rounded-lg font-medium
            bg-gradient-to-r from-orange-500 to-pink-500 text-white
            shadow-lg hover:shadow-orange-500/40 transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && (
              <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
            )}
          </motion.button>
        </motion.form>

        {/* Bottom */}
        <p className="mt-12 text-sm text-muted-foreground">
          Available for new opportunities 
        </p>

      </div>
    </section>
  );
}