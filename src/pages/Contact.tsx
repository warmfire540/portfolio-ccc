import React, { useState } from 'react';

import { GithubIcon, LinkedinIcon, Mail, MapPin, Send } from 'lucide-react';

import AnimatedSection from '../components/common/AnimatedSection';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  projectType: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const CCCContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'architecture', label: 'Software Architecture' },
    { value: 'fullstack', label: 'Full-Stack Development' },
    { value: 'cloud', label: 'Cloud Solutions' },
    { value: 'devops', label: 'DevOps & Automation' },
    { value: 'data', label: 'Data Integration' },
    { value: 'consultation', label: 'General Consultation' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is being edited
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          projectType: '',
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-indigo-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-700 opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-24 right-24 w-64 h-64 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Interested in working with Curious Cat Consulting? I'd love to hear
            about your project and how I can help.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <AnimatedSection animation="slide-right">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Let's Connect
              </h2>

              <p className="text-gray-600 mb-8">
                Whether you're looking for a technical consultation, interested
                in collaborating on a project, or simply want to discuss your
                software needs, I'm always open to connecting with
                forward-thinking organizations.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">Brandon, FL, United States</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@curiouscat.consulting"
                      className="text-indigo-600 hover:underline"
                    >
                      info@curiouscat.consulting
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Connect Online
                </h3>

                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/106965272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 p-3 rounded-full transition-colors duration-300"
                  >
                    <LinkedinIcon className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/homeassistant-extras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 p-3 rounded-full transition-colors duration-300"
                  >
                    <GithubIcon className="h-6 w-6" />
                    <span className="sr-only">GitHub (Home Assistant)</span>
                  </a>

                  <a
                    href="https://github.com/warmfire540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 p-3 rounded-full transition-colors duration-300"
                  >
                    <GithubIcon className="h-6 w-6" />
                    <span className="sr-only">GitHub (Personal)</span>
                  </a>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-700 mb-2">
                    Availability
                  </h4>
                  <p className="text-gray-600">
                    I'm currently available for select consulting engagements,
                    architecture reviews, and development projects. Let's
                    discuss how I can help your business succeed.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slide-up" delay={200}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Me a Message
              </h2>

              {submitSuccess && (
                <div
                  className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6"
                  data-testid="success-message"
                >
                  <p>
                    Thank you for your message! I'll get back to you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    data-testid="name-input"
                  />
                  {errors.name && (
                    <p
                      className="mt-1 text-sm text-red-600"
                      data-testid="name-error"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    data-testid="email-input"
                  />
                  {errors.email && (
                    <p
                      className="mt-1 text-sm text-red-600"
                      data-testid="email-error"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    data-testid="company-input"
                  />
                </div>

                {/* Project Type Field */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Interest Area
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    data-testid="project-type-input"
                  >
                    {projectTypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    data-testid="message-input"
                  ></textarea>
                  {errors.message && (
                    <p
                      className="mt-1 text-sm text-red-600"
                      data-testid="message-error"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors duration-200 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    <Send className="h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <AnimatedSection animation="fade-in" threshold={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    What types of projects does Curious Cat Consulting work on?
                  </h3>
                  <p className="text-gray-600">
                    I specialize in enterprise software architecture, full-stack
                    development, cloud migrations, and DevOps automation. I
                    particularly enjoy complex projects that involve modernizing
                    legacy systems, implementing cloud-native architectures, or
                    building scalable data integration solutions.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" threshold={0.2} delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    What is your availability?
                  </h3>
                  <p className="text-gray-600">
                    I'm currently available for select consulting engagements
                    and development projects. My availability varies depending
                    on current commitments, so please reach out with your
                    timeline and I'll let you know if I can accommodate your
                    project.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" threshold={0.2} delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Do you work remotely?
                  </h3>
                  <p className="text-gray-600">
                    Yes, I work primarily remotely with clients around the
                    United States. I use collaborative tools to ensure effective
                    communication and seamless workflow, regardless of
                    geographic location.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" threshold={0.2} delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    What is your approach to new projects?
                  </h3>
                  <p className="text-gray-600">
                    I start by thoroughly understanding the business problem and
                    objectives before diving into technical solutions. I believe
                    in transparent communication, iterative development, and
                    building solutions that are not only technically sound but
                    also aligned with business goals.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" threshold={0.2} delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Do you provide ongoing support after project completion?
                  </h3>
                  <p className="text-gray-600">
                    Yes, I can provide ongoing maintenance and support as
                    needed. I also focus on knowledge transfer and documentation
                    throughout the project to ensure your team can confidently
                    manage the solution moving forward.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CCCContactPage;
