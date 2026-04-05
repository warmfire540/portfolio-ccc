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
import BentoCell from '../hero/BentoCell';
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

export default function ContactBento() {
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
    `w-full px-3 py-2 text-sm rounded-lg border bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all ${
      field && touched[field] && errors[field]
        ? 'border-red-400 dark:border-red-500'
        : 'border-zinc-200 dark:border-zinc-700'
    }`;

  /* ---- Success ---- */
  if (state.succeeded) {
    return (
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#faf9f7] dark:bg-[#121110]" />
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #d4d0c8 0.8px, transparent 0.8px)',
            backgroundSize: '16px 16px',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-md mx-auto">
            <BentoCell
              className="flex flex-col items-center justify-center text-center !p-10"
              delay={0}
            >
              <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="w-5 h-5 text-primary-600 dark:text-primary-400"
                />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Thank you for reaching out. I&apos;ll be in touch soon.
              </p>
            </BentoCell>
          </div>
        </div>
      </section>
    );
  }

  /* ---- Main ---- */
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Warm editorial background */}
      <div className="absolute inset-0 bg-[#faf9f7] dark:bg-[#121110]" />
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #d4d0c8 0.8px, transparent 0.8px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(234,179,8,0.04),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(234,179,8,0.05),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading cell */}
          <BentoCell
            className="flex flex-col items-center justify-center text-center !bg-primary-600 !border-primary-700 !p-10 mb-4"
            delay={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Get In Touch
            </h2>
            <p className="text-primary-100 text-base sm:text-lg max-w-2xl">
              Have a project in mind? Let&apos;s talk about how we can help
              bring it to life.
            </p>
          </BentoCell>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Contact info cell */}
            <BentoCell className="sm:col-span-1 lg:col-span-1" delay={100}>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-4">
                Reach Out
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-3.5 h-3.5 text-primary-500 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-[10px] text-zinc-400 dark:text-zinc-500">
                      Location
                    </p>
                    <p className="text-sm text-zinc-800 dark:text-white font-medium">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-3.5 h-3.5 text-primary-500 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-[10px] text-zinc-400 dark:text-zinc-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline font-medium"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </BentoCell>

            {/* Socials cell */}
            <BentoCell className="sm:col-span-1 lg:col-span-1" delay={150}>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-4">
                Connect
              </p>
              <div className="space-y-2.5">
                {contactInfo.socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 -mx-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors group"
                  >
                    <FontAwesomeIcon
                      icon={socialIcons[social.icon]}
                      className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                    />
                    <span className="text-sm text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </BentoCell>

            {/* Form cell — spans 2 cols on lg */}
            <BentoCell
              className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
              delay={200}
            >
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-5">
                Send a Message
              </p>

              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1"
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
                      <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1"
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

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1"
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
                      className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1"
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

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1"
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
                    <p className="text-xs text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    state.submitting
                      ? 'bg-zinc-300 dark:bg-zinc-700 text-zinc-500 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="w-3.5 h-3.5"
                  />
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </BentoCell>

            {/* Quick stats cell */}
            <BentoCell className="sm:col-span-2 lg:col-span-2" delay={250}>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-medium mb-4">
                Why Work With Us
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                    24h
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Response Time
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                    100%
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Project Delivery
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                    10+
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Years Experience
                  </div>
                </div>
              </div>
            </BentoCell>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 max-w-sm mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                Something went wrong
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
