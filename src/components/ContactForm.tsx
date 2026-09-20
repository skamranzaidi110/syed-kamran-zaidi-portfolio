import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Let me know who's reaching out.";
  if (!values.email.trim()) {
    errors.email = "An email address is needed to reply.";
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = "That doesn't look like a valid email.";
  }
  if (!values.message.trim()) {
    errors.message = "Add a note on what you'd like to discuss.";
  } else if (values.message.trim().length < 12) {
    errors.message = "A few more details will help me respond well.";
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (touched[field]) {
      setErrors(validate(next));
    }
  };

  const handleBlur = (field: keyof FormState) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // Replace with a real endpoint (Formspree, a serverless function, etc.) when deploying.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setValues({ name: "", email: "", message: "" });
    setTouched({});
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-3 rounded-xl border border-teal/40 bg-teal/10 p-8"
      >
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-9 w-9 text-teal-bright"
          viewBox="0 0 24 24"
          fill="none"
        >
          <motion.path
            d="M4 12.5L9.5 18L20 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
        <h3 className="font-display text-lg font-semibold text-paper">Message sent.</h3>
        <p className="text-sm text-paper-muted">
          Thanks for reaching out — I read every message and reply within a couple of days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 font-body text-sm font-medium text-amber hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field
        label="Name"
        name="name"
        value={values.name}
        error={touched.name ? errors.name : undefined}
        onChange={handleChange("name")}
        onBlur={handleBlur("name")}
        placeholder="Your name"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        value={values.email}
        error={touched.email ? errors.email : undefined}
        onChange={handleChange("email")}
        onBlur={handleBlur("email")}
        placeholder="you@company.com"
      />
      <div>
        <label htmlFor="message" className="mb-1.5 block font-body text-sm font-medium text-paper">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          onBlur={handleBlur("message")}
          placeholder="What are you working on?"
          className={cn(
            "w-full resize-none rounded-lg border bg-ink-raised px-3.5 py-3 font-body text-sm text-paper placeholder:text-paper-faint focus:outline-none",
            touched.message && errors.message
              ? "border-amber/70"
              : "border-ink-line focus:border-teal/60"
          )}
        />
        <AnimatePresence>
          {touched.message && errors.message && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1.5 font-body text-xs text-amber"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-lg bg-amber px-5 py-3 font-body text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-body text-sm font-medium text-paper">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-lg border bg-ink-raised px-3.5 py-3 font-body text-sm text-paper placeholder:text-paper-faint focus:outline-none",
          error ? "border-amber/70" : "border-ink-line focus:border-teal/60"
        )}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 font-body text-xs text-amber"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
