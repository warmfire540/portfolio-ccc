'use client';

import { useState, useMemo } from 'react';
import { useForm } from '@formspree/react';
import {
  faArrowRight,
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

export default function ContactMinimal() {
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
    `w-full bg-transparent border-b text-base text-zinc-900 dark:text-white pb-3 pt-2 placeholder:text-zinc-300 dark:placeholder:text-zinc-600 focus:outline-none transition-colors duration-300 ${
      field && touched[field] && errors[field]
        ? 'border-red-400 dark:border-red-500 focus:border-red-500'
        : 'border-zinc-200 dark:border-zinc-800 focus:border-primary-500 dark:focus:border-primary-400'
    }`;

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative py-32 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-zinc-950 dark:via-primary-950/20 dark:to-zinc-950"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 mb-8">
            <FontAwesomeIcon
              icon={faCheck}
              className="w-5 h-5 text-primary-600 dark:text-primary-400"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Message sent.
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            Thank you for reaching out. I&apos;ll be in touch soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-zinc-950 dark:via-primary-950/20 dark:to-zinc-950"
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
          <span className="bg-[length:200%_auto] bg-gradient-to-r from-zinc-900 via-primary-600 to-zinc-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent animate-[shimmer_8s_ease-in-out_infinite]">
            Say hello.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-20">
          Have a project in mind or just want to chat? I&apos;d love to hear
          from you.
        </p>

        {/* Two-column: form left, info right */}
        <div className="grid lg:grid-cols-5 gap-20">
          {/* Form — takes 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-10">
              Send a message
            </h3>

            <form onSubmit={onSubmit} noValidate className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Name */}
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Name *"
                    className={inputClasses('name')}
                  />
                  {touched.name && errors.name && (
                    <p className="text-xs text-red-500 mt-2">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email *"
                    className={inputClasses('email')}
                  />
                  {touched.email && errors.email && (
                    <p className="text-xs text-red-500 mt-2">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Company */}
                <div>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className={inputClasses()}
                  />
                </div>

                {/* Project Type */}
                <div>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`${inputClasses()} appearance-none`}
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
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project *"
                  className={`${inputClasses('message')} resize-none`}
                />
                {touched.message && errors.message && (
                  <p className="text-xs text-red-500 mt-2">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className={`group inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                  state.submitting
                    ? 'text-zinc-300 dark:text-zinc-600 cursor-not-allowed'
                    : 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300'
                }`}
              >
                {state.submitting ? 'Sending...' : 'Send message'}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  aria-hidden
                />
              </button>
            </form>
          </div>

          {/* Info — takes 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-10">
              Contact
            </h3>

            <div className="space-y-8">
              <div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-1">
                  Location
                </p>
                <p className="text-sm text-zinc-900 dark:text-white">
                  {contactInfo.location}
                </p>
              </div>

              <div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3">
                  Online
                </p>
                <div className="flex gap-3">
                  {contactInfo.socials.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
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
          </div>
        </div>
      </div>

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 max-w-sm mx-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                Something went wrong
              </p>
              <button
                onClick={() => setErrorModalDismissed(true)}
                className="text-zinc-300 dark:text-zinc-600 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
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
