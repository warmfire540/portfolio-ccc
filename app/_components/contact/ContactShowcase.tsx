'use client';

import { useState, useMemo } from 'react';
import { useForm } from '@formspree/react';
import {
  faLocationDot,
  faEnvelope,
  faPaperPlane,
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

export default function ContactShowcase() {
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
    `w-full px-4 py-2.5 text-sm rounded-lg border bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all ${
      field && touched[field] && errors[field]
        ? 'border-red-400 dark:border-red-500'
        : 'border-primary-200/40 dark:border-primary-800/30'
    }`;

  /* ---- Success ---- */
  if (state.succeeded) {
    return (
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#e8f0fa] dark:bg-[#0c1929]" />
        <div
          className="absolute inset-0 opacity-[0.5] dark:opacity-[0.32]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(2,132,199,0.42) 1px, transparent 1px),
              linear-gradient(90deg, rgba(2,132,199,0.42) 1px, transparent 1px),
              linear-gradient(rgba(2,132,199,0.24) 1px, transparent 1px),
              linear-gradient(90deg, rgba(2,132,199,0.24) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(232,240,250,0.72)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(12,25,41,0.82)_100%)]" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-md mx-auto text-center rounded-xl border border-primary-200/40 dark:border-primary-800/30 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-sm p-10 shadow-lg">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800/50 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-6 h-6 text-primary-600 dark:text-primary-400"
              />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Message Sent
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Thank you for reaching out. I&apos;ll be in touch soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ---- Main ---- */
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Blueprint background */}
      <div className="absolute inset-0 bg-[#e8f0fa] dark:bg-[#0c1929]" />
      <div
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(2,132,199,0.42) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,132,199,0.42) 1px, transparent 1px),
            linear-gradient(rgba(2,132,199,0.24) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,132,199,0.24) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(232,240,250,0.72)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(12,25,41,0.82)_100%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
              Get In Touch
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Interested in working together? Fill out the project brief below
              and I&apos;ll get back to you shortly.
            </p>
          </div>

          {/* Main card */}
          <div className="rounded-xl border border-primary-200/40 dark:border-primary-800/30 bg-white/85 dark:bg-zinc-900/85 shadow-lg backdrop-blur-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left sidebar — contact details */}
              <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30 p-6 lg:p-8">
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium mb-8">
                  Contact Details
                </h3>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800/50 flex items-center justify-center shrink-0">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="w-4 h-4 text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-0.5">
                        Location
                      </p>
                      <p className="text-sm font-medium text-zinc-800 dark:text-white">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800/50 flex items-center justify-center shrink-0">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="w-4 h-4 text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-10 pt-6 border-t border-zinc-200/60 dark:border-zinc-700/40">
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-4">
                    Connect Online
                  </p>
                  <div className="flex gap-2">
                    {contactInfo.socials.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-800 border border-primary-200/40 dark:border-primary-800/30 flex items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 transition-all"
                      >
                        <FontAwesomeIcon
                          icon={socialIcons[social.icon]}
                          className="w-4 h-4"
                        />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <div className="lg:col-span-2 p-6 lg:p-8">
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium mb-8">
                  Project Brief
                </h3>

                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5"
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
                        <p className="text-xs text-red-500 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5"
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
                        <p className="text-xs text-red-500 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5"
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

                    {/* Project Type */}
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5"
                      >
                        Interest Area
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
                      className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5"
                    >
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className={`${inputClasses('message')} resize-none`}
                    />
                    {touched.message && errors.message && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-colors shadow-sm ${
                        state.submitting
                          ? 'bg-zinc-300 dark:bg-zinc-700 text-zinc-500 cursor-not-allowed'
                          : 'bg-primary-600 hover:bg-primary-700 text-white'
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="w-3.5 h-3.5"
                      />
                      {state.submitting ? 'Sending...' : 'Submit Brief'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 border border-primary-200/40 dark:border-primary-800/30 rounded-xl p-6 max-w-sm mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                Submission Error
              </p>
              <button
                onClick={() => setErrorModalDismissed(true)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
              </button>
            </div>
            <ul className="space-y-1.5">
              {formspreeErrors.map((err) => (
                <li
                  key={err.code}
                  className="text-sm text-zinc-500 dark:text-zinc-400"
                >
                  {err.message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
