'use client';

import { useState, useMemo } from 'react';
import { useForm } from '@formspree/react';
import {
  faPaperPlane,
  faPlane,
  faCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectTypes, contactInfo } from './data';

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

const socialIcons = {
  linkedin: faLinkedin,
  github: faGithub,
} as const;

/* ------------------------------------------------------------------ */
/*  Shared flipboard primitives                                        */
/* ------------------------------------------------------------------ */

function BoardPanel({
  children,
  className = '',
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div
      className={`rounded-xl border-2 border-stone-300 bg-stone-50/95 dark:border-zinc-800 dark:bg-zinc-900/95
        shadow-[inset_0_1px_12px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08)]
        dark:shadow-[inset_0_1px_12px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.03),0_8px_24px_rgba(0,0,0,0.35)]
        ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTag({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <p className="text-[0.6rem] text-amber-700/80 dark:text-amber-600/80 font-mono uppercase tracking-[0.35em] mb-1">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ContactFlipboard() {
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

  const inputClasses = (field?: keyof FormErrors) =>
    `w-full font-mono text-sm px-3 py-2 rounded-md border bg-white dark:bg-zinc-900 text-amber-900 dark:text-amber-100 placeholder:text-amber-900/30 dark:placeholder:text-amber-300/30 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/20 transition-all ${
      field && touched[field] && errors[field]
        ? 'border-red-400 dark:border-red-500'
        : 'border-stone-300/60 dark:border-zinc-700/60'
    }`;

  /* ---- Success ---- */
  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative py-24 overflow-hidden bg-stone-100 dark:bg-zinc-950"
      >
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-md mx-auto">
            <BoardPanel className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="w-4 h-4 text-primary-500"
                />
                <SectionTag>Boarding Confirmed</SectionTag>
              </div>
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 dark:bg-amber-950/20 border border-amber-300/40 dark:border-amber-800/40 flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="w-5 h-5 text-amber-700 dark:text-amber-400"
                />
              </div>
              <h3 className="text-lg font-bold font-mono text-amber-900 dark:text-amber-100 uppercase mb-2">
                Message Sent
              </h3>
              <p className="text-xs font-mono text-amber-900/55 dark:text-amber-300/55">
                Thank you for reaching out. I&apos;ll be in touch soon.
              </p>
            </BoardPanel>
          </div>
        </div>
      </section>
    );
  }

  /* ---- Main ---- */
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-stone-100 dark:bg-zinc-950"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,130,40,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.06),transparent_55%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header board */}
          <BoardPanel className="p-6 sm:p-8">
            <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-4 mb-6">
              <SectionTag>Information Desk</SectionTag>
              <h2 className="text-2xl sm:text-3xl font-bold font-mono text-amber-900 dark:text-amber-100 uppercase tracking-wide">
                Get In Touch
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-amber-900/60 dark:text-amber-300/60 font-mono leading-relaxed">
              Interested in working with Curious Cat Consulting? Fill out your
              details below and I&apos;ll get back to you shortly.
            </p>
          </BoardPanel>

          {/* Two-panel layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Contact info panel */}
            <div className="lg:col-span-2">
              <BoardPanel className="p-6 h-full">
                <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-3 mb-5">
                  <SectionTag>Directory</SectionTag>
                </div>

                {/* Info rows styled as departure board entries */}
                <div className="space-y-5">
                  <div>
                    <p className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider mb-1">
                      Base
                    </p>
                    <p className="text-sm font-bold font-mono text-amber-900 dark:text-amber-100 uppercase tracking-wide">
                      {contactInfo.location}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider mb-1">
                      Frequency
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm font-mono text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>

                  <div className="pt-4 border-t border-stone-300/60 dark:border-zinc-800/60">
                    <p className="text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider mb-3">
                      Connections
                    </p>
                    <div className="space-y-2">
                      {contactInfo.socials.map((social) => (
                        <a
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 px-3 py-2 -mx-1 rounded-md hover:bg-amber-50/80 dark:hover:bg-amber-950/20 transition-colors group"
                        >
                          <FontAwesomeIcon
                            icon={socialIcons[social.icon]}
                            className="w-3.5 h-3.5 text-amber-700/50 dark:text-amber-500/50 group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors"
                          />
                          <span className="text-xs font-mono text-amber-900/70 dark:text-amber-300/70 group-hover:text-amber-900 dark:group-hover:text-amber-100 transition-colors">
                            {social.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </BoardPanel>
            </div>

            {/* Form panel */}
            <div className="lg:col-span-3">
              <BoardPanel className="p-6 sm:p-8">
                <div className="border-b border-stone-300/90 dark:border-zinc-800/90 pb-3 mb-6">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faPlane}
                      className="w-3.5 h-3.5 text-primary-500"
                    />
                    <SectionTag>Passenger Details</SectionTag>
                  </div>
                </div>

                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  {/* Row: Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider mb-1.5"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClasses('name')}
                      />
                      {touched.name && errors.name && (
                        <p className="text-[0.6rem] font-mono text-red-500 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider mb-1.5"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClasses('email')}
                      />
                      {touched.email && errors.email && (
                        <p className="text-[0.6rem] font-mono text-red-500 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row: Company + Project Type */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider mb-1.5"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClasses()}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider mb-1.5"
                      >
                        Destination
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={inputClasses()}
                      >
                        {projectTypes.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[0.55rem] font-mono text-amber-700/50 dark:text-amber-500/50 uppercase tracking-wider mb-1.5"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project..."
                      className={`${inputClasses('message')} resize-none`}
                    />
                    {touched.message && errors.message && (
                      <p className="text-[0.6rem] font-mono text-red-500 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Perforated divider */}
                  <div className="flex justify-between py-2">
                    {Array.from({ length: 30 }).map((_, j) => (
                      <div
                        key={j}
                        className="w-1.5 h-1.5 rounded-full bg-stone-200 dark:bg-zinc-800"
                      />
                    ))}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={`inline-flex items-center gap-2 px-6 py-3 font-mono text-sm font-medium rounded-lg transition-colors ${
                      state.submitting
                        ? 'bg-stone-300 dark:bg-zinc-700 text-stone-500 dark:text-zinc-500 cursor-not-allowed'
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="w-3.5 h-3.5"
                    />
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </BoardPanel>
            </div>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <BoardPanel className="p-6 max-w-sm mx-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-mono font-bold text-amber-900 dark:text-amber-100 uppercase tracking-wide">
                Transmission Error
              </p>
              <button
                onClick={() => setErrorModalDismissed(true)}
                className="text-amber-700/40 dark:text-amber-400/40 hover:text-amber-800 dark:hover:text-amber-200"
              >
                <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
              </button>
            </div>
            <ul className="space-y-1.5">
              {formspreeErrors.map((err) => (
                <li
                  key={err.code}
                  className="text-xs font-mono text-amber-900/55 dark:text-amber-300/55"
                >
                  {err.message}
                </li>
              ))}
            </ul>
          </BoardPanel>
        </div>
      )}
    </section>
  );
}
