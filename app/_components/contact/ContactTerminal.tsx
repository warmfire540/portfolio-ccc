'use client';

import { useState, useMemo } from 'react';
import { useForm } from '@formspree/react';
import {
  faCircleCheck,
  faTriangleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TerminalChrome from '../hero/TerminalChrome';
import { projectTypes, contactInfo } from './data';

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function Prompt({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="font-mono text-sm leading-relaxed">
      <span className="text-emerald-500 dark:text-emerald-400">
        curious-cat
      </span>
      <span className="text-zinc-400">:</span>
      <span className="text-primary-500 dark:text-primary-400">~</span>
      <span className="text-zinc-400">$ </span>
      <span className="text-zinc-700 dark:text-zinc-300">{children}</span>
    </div>
  );
}

function Output({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="pl-4 font-mono text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
      {children}
    </div>
  );
}

const socialIcons = {
  linkedin: faLinkedin,
  github: faGithub,
} as const;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ContactTerminal() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? '',
  );

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errorModalDismissed, setErrorModalDismissed] = useState(false);

  const formspreeErrors = useMemo(() => {
    const formErrors = state.errors?.getFormErrors();
    const fieldErrors = state.errors?.getAllFieldErrors();
    const allErrors: { code?: string; message: string }[] = [];

    if (formErrors && formErrors.length > 0) {
      allErrors.push(...formErrors);
    }

    if (fieldErrors && fieldErrors.length > 0) {
      fieldErrors.forEach(([, errs]) => {
        errs.forEach((error) => {
          allErrors.push({ code: error.code, message: error.message });
        });
      });
    }

    return allErrors;
  }, [state.errors]);

  const showErrorModal = formspreeErrors.length > 0 && !errorModalDismissed;

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = 'Name is required';
    if (!data.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!data.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    const next = { ...formData, [name]: value };
    setFormData(next);
    if (touched[name]) {
      const v = validate(next);
      setErrors((prev) => ({ ...prev, [name]: v[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const v = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: v[name as keyof FormErrors] }));
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched((prev) => ({ ...prev, ...allTouched }));
    const v = validate(formData);
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setErrorModalDismissed(false);
    handleSubmit(e);
  };

  const inputClasses = (field: keyof FormErrors) =>
    `w-full font-mono text-sm bg-transparent border-b px-0 py-1.5 text-zinc-700 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors ${
      touched[field] && errors[field]
        ? 'border-red-500 dark:border-red-400'
        : 'border-zinc-300 dark:border-zinc-700'
    }`;

  /* ---- Success State ---- */
  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <TerminalChrome title="~/curious-cat/contact" className="w-full">
              <div className="space-y-4">
                <Prompt>ccc send --message</Prompt>
                <Output>
                  <div className="flex items-center gap-3 py-8 justify-center">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-6 h-6 text-emerald-500"
                    />
                    <div>
                      <div className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        Message sent successfully!
                      </div>
                      <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        Thank you for reaching out. I&apos;ll get back to you as
                        soon as possible.
                      </div>
                    </div>
                  </div>
                </Output>
              </div>
            </TerminalChrome>
          </div>
        </div>
      </section>
    );
  }

  /* ---- Main Render ---- */
  return (
    <section
      id="contact"
      className="relative py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* CRT scanlines */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 3px)',
        }}
      />

      {/* Terminal glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-400/[0.04] dark:bg-emerald-500/[0.06] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <TerminalChrome title="~/curious-cat/contact" className="w-full">
            <div className="space-y-4">
              {/* Header */}
              <Prompt>cat contact.md</Prompt>
              <div className="pl-4 space-y-4">
                <h2 className="font-mono text-2xl md:text-3xl font-bold text-zinc-800 dark:text-white">
                  # Get In Touch
                </h2>
                <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Interested in working with Curious Cat Consulting? I&apos;d
                  love to hear about your project and how I can help.
                </p>
              </div>

              {/* Separator */}
              <div className="pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50" />

              {/* Contact info as YAML output */}
              <Prompt>cat ~/.config/curious-cat/contact.yml</Prompt>
              <div className="pl-4 font-mono text-sm space-y-1">
                <div>
                  <span className="text-emerald-600 dark:text-emerald-400">
                    location
                  </span>
                  <span className="text-zinc-400">: </span>
                  <span className="text-zinc-600 dark:text-zinc-300">
                    {contactInfo.location}
                  </span>
                </div>
                <div>
                  <span className="text-emerald-600 dark:text-emerald-400">
                    email
                  </span>
                  <span className="text-zinc-400">: </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <span className="text-emerald-600 dark:text-emerald-400">
                    socials
                  </span>
                  <span className="text-zinc-400">:</span>
                </div>
                {contactInfo.socials.map((social) => (
                  <div
                    key={social.href}
                    className="pl-4 flex items-center gap-2"
                  >
                    <span className="text-zinc-400">- </span>
                    <FontAwesomeIcon
                      icon={socialIcons[social.icon]}
                      className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400"
                    />
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:underline text-xs"
                    >
                      {social.label}
                    </a>
                  </div>
                ))}
              </div>

              {/* Separator */}
              <div className="pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50" />

              {/* Form as interactive command */}
              <Prompt>ccc send --interactive</Prompt>
              <Output>
                <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-4">
                  Compose Message
                </div>
                <div className="font-mono text-zinc-300 dark:text-zinc-700 text-xs select-none mb-4">
                  {'─'.repeat(48)}
                </div>
              </Output>

              <form onSubmit={onSubmit} noValidate className="pl-4 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-1"
                  >
                    name<span className="text-red-500">*</span>
                    <span className="text-zinc-400">:</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="your name"
                    className={inputClasses('name')}
                  />
                  {touched.name && errors.name && (
                    <p className="font-mono text-xs text-red-500 mt-1">
                      <span className="text-red-400">ERR!</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-1"
                  >
                    email<span className="text-red-500">*</span>
                    <span className="text-zinc-400">:</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    className={inputClasses('email')}
                  />
                  {touched.email && errors.email && (
                    <p className="font-mono text-xs text-red-500 mt-1">
                      <span className="text-red-400">ERR!</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-1"
                  >
                    company<span className="text-zinc-400">:</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="optional"
                    className="w-full font-mono text-sm bg-transparent border-b border-zinc-300 dark:border-zinc-700 px-0 py-1.5 text-zinc-700 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-1"
                  >
                    project_type<span className="text-zinc-400">:</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full font-mono text-sm bg-transparent border-b border-zinc-300 dark:border-zinc-700 px-0 py-1.5 text-zinc-700 dark:text-zinc-200 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                  >
                    {projectTypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-1"
                  >
                    message<span className="text-red-500">*</span>
                    <span className="text-zinc-400">:</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="tell me about your project..."
                    className={`${inputClasses('message')} resize-none`}
                  />
                  {touched.message && errors.message && (
                    <p className="font-mono text-xs text-red-500 mt-1">
                      <span className="text-red-400">ERR!</span>{' '}
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`font-mono text-sm px-6 py-2.5 rounded-md border transition-all duration-200 ${
                    state.submitting
                      ? 'border-zinc-300 dark:border-zinc-700 text-zinc-400 cursor-not-allowed'
                      : 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20'
                  }`}
                >
                  {state.submitting ? '> sending...' : '> send --message'}
                </button>
              </form>

              {/* Separator */}
              <div className="pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50" />

              {/* Blinking cursor */}
              <div className="font-mono text-sm leading-relaxed">
                <span className="text-emerald-500 dark:text-emerald-400">
                  curious-cat
                </span>
                <span className="text-zinc-400">:</span>
                <span className="text-primary-500 dark:text-primary-400">
                  ~
                </span>
                <span className="text-zinc-400">$ </span>
                <span className="animate-[blink_1s_step-end_infinite] text-zinc-500">
                  ▊
                </span>
              </div>
            </div>
          </TerminalChrome>
        </div>
      </div>

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 max-w-md mx-4 shadow-xl font-mono">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-red-400">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="h-5 w-5"
                />
                <span className="text-sm font-semibold">
                  ERR! submission_failed
                </span>
              </div>
              <button
                onClick={() => setErrorModalDismissed(true)}
                className="text-zinc-500 hover:text-zinc-300"
              >
                <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
              </button>
            </div>
            <ul className="space-y-2">
              {formspreeErrors.map((err) => (
                <li key={err.code} className="text-xs text-zinc-400">
                  <span className="text-red-400">{'>'}</span> {err.message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
