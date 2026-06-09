"use client"
import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { api } from '../../utils/api'
import Input from '../ui/Input'
import Select from '../ui/Select'
import Textarea from '../ui/Textarea'
import Button from '../common/Button'
import { servicesTabs } from '../../data/servicesData'
import { CONTACT_INFO } from '../../utils/constants'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState(null)
  const [emailError, setEmailError] = useState('')

  // Validate email format: user@domain.com
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const initialValues = {
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    companyName: '',
    selectedService: 'Select a service',
    projectDetails: ''
  }

  const handleFormSubmit = async (values) => {
    // Check email format only
    if (!values.emailAddress) {
      setEmailError('Email is required')
      return
    }

    if (!isValidEmail(values.emailAddress)) {
      setEmailError('Please enter a valid email (e.g., user@domain.com)')
      return
    }

    setEmailError('')
    setIsSubmitting(true)
    setSubmitResult(null)
    try {
      await api.submitContactForm({
        ...values,
        userEmail: values.emailAddress,
        ownerEmail: CONTACT_INFO.email
      })

      setSubmitResult({
        success: true,
        fullName: values.fullName,
        email: values.emailAddress
      })
      resetForm()
    } catch (err) {
      setSubmitResult({ success: false, message: 'Failed to submit form. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const { values, handleChange, handleSubmit, resetForm } = useForm(initialValues, handleFormSubmit)

  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'accounting', label: 'Accounting & Bookkeeping' },
    { value: 'outsourcing', label: 'Operations Outsourcing' },
    { value: 'it_services', label: 'Enterprise IT Services' },
    { value: 'wifi_networking', label: 'WiFi & Enterprise Networking' }
  ]

  return (
    <div className="form-right-inputs-col animate-slide-up">
      <form onSubmit={handleSubmit} className="contact-overlap-form">

        {/* Full name */}
        <Input
          id="fullName"
          name="fullName"
          label="Full name"
          required
          value={values.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        {/* Mobile & Email horizontal */}
        <div className="form-row-half">
          <Input
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile number"
            required
            value={values.mobileNumber}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />
          <Input
            id="emailAddress"
            name="emailAddress"
            label="Email address"
            type="email"
            required
            value={values.emailAddress}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          {emailError && <p style={{ color: 'var(--primary-red)', fontSize: '12px', marginTop: '4px' }}>{emailError}</p>}
        </div>

        {/* Company Name */}
        <Input
          id="companyName"
          name="companyName"
          label="Company name"
          value={values.companyName}
          onChange={handleChange}
          placeholder="Enter your company name"
        />

        {/* Dropdown service select */}
        <Select
          id="selectedService"
          name="selectedService"
          label="Select the service you would like to explore"
          required
          value={values.selectedService}
          onChange={handleChange}
          options={servicesTabs.map(service => ({ value: service.toLowerCase().replace(/\s+/g, '_'), label: service }))}
        />

        {/* Project Details textarea */}
        <Textarea
          id="projectDetails"
          name="projectDetails"
          label="Project Details"
          value={values.projectDetails}
          onChange={handleChange}
          placeholder="Enter your project details here..."
        />

        {/* Submit button right aligned */}
        <div className="form-submit-row">
          <Button
            type="submit"
            variant="secondary"
            disabled={isSubmitting}
            style={{ minWidth: '150px' }}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </div>

        {submitResult && (
          <div style={{
            marginTop: '15px',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: submitResult.success ? '#f0fdf4' : '#fef2f2',
            border: `2px solid ${submitResult.success ? '#22c55e' : '#ef4444'}`,
            fontFamily: 'Inter, sans-serif'
          }}>
            {submitResult.success ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '12px', color: '#22c55e' }}>
                  ✓
                </div>
                <h3 style={{ color: '#15803d', margin: '0 0 12px 0', fontSize: '18px', fontWeight: '600' }}>
                  Thank You, {submitResult.fullName}!
                </h3>
                <p style={{ color: '#166534', margin: '8px 0', fontSize: '14px', lineHeight: '1.6' }}>
                  A confirmation email has been sent to:
                </p>
                <p style={{ color: '#15803d', margin: '8px 0', fontSize: '14px', fontWeight: '600', backgroundColor: 'rgba(34, 197, 94, 0.1)', padding: '8px 12px', borderRadius: '4px', wordBreak: 'break-all' }}>
                  {submitResult.email}
                </p>
                <p style={{ color: '#166534', margin: '12px 0 0 0', fontSize: '13px', lineHeight: '1.6' }}>
                  We'll review your request and contact you shortly.
                </p>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '12px', color: '#ef4444' }}>
                  ✕
                </div>
                <p style={{ color: '#b91c1c', margin: '0', fontSize: '14px', fontWeight: '600' }}>
                  {submitResult.message}
                </p>
              </div>
            )}
          </div>
        )}

      </form>
    </div>
  )
}

export default ContactForm
