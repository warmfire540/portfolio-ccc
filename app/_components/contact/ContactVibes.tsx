'use client';

import { useState, useMemo } from 'react';
import { useForm } from '@formspree/react';
import {
  faLocationDot,
  faEnvelope,
  faPaperPlane,
  faCircleCheck,
  faTriangleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '@/app/_components/ui/AnimatedSection';
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

export default function ContactVibes() {
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

  const fieldClasses = (field: keyof FormErrors) =>
    `w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500 ${
      touched[field] && errors[field]
        ? 'border-red-500 dark:border-red-400'
        : 'border-gray-300 dark:border-gray-600'
    }`;

  if (state.succeeded) {
    return (
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full mb-6">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-8 h-8 text-green-600 dark:text-green-400"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Message Sent!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Thank you for reaching out. I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Interested in working with Curious Cat Consulting? I&apos;d love to
            hear about your project and how I can help.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Connect Side */}
          <AnimatedSection animation="slide-right">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Let&apos;s Connect
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Whether you&apos;re looking for a technical consultation,
              interested in collaborating on a project, or simply want to
              discuss your software needs, I&apos;m always open to connecting
              with forward-thinking organizations.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="h-6 w-6 text-primary-600 dark:text-primary-400"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contactInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-6 w-6 text-primary-600 dark:text-primary-400"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Email
                  </h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary-600 hover:underline dark:text-primary-400"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Connect Online
              </h4>
              <div className="flex space-x-4">
                {contactInfo.socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-100 hover:bg-primary-200 dark:bg-primary-800 dark:hover:bg-primary-700 text-primary-800 dark:text-primary-200 p-3 rounded-full transition-colors duration-300"
                  >
                    <FontAwesomeIcon
                      icon={socialIcons[social.icon]}
                      className="h-6 w-6"
                    />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Form Side */}
          <AnimatedSection animation="slide-up" delay={200}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                  className={fieldClasses('name')}
                />
                {touched.name && errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                  className={fieldClasses('email')}
                />
                {touched.email && errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Interest Area
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"
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
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                  className={fieldClasses('message')}
                />
                {touched.message && errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-200 ${
                  state.submitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5" />
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="h-5 w-5"
                />
                <h3 className="text-lg font-semibold">Submission Error</h3>
              </div>
              <button
                onClick={() => setErrorModalDismissed(true)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
              </button>
            </div>
            <ul className="space-y-2">
              {formspreeErrors.map((err) => (
                <li
                  key={err.code}
                  className="text-sm text-gray-600 dark:text-gray-300"
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
