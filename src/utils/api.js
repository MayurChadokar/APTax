import { servicesDetailed } from '../data/servicesData'
import { testimonials } from '../data/testimonialsData'
import { teamMembers } from '../data/teamData'
import { CONTACT_INFO } from './constants'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_example'
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_example'
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_example'

// Custom HTML Email Templates
const emailTemplates = {
  userThankYou: (data) => `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; border-radius: 8px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; }
          .button { background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 20px; }
          .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; }
          h1 { margin: 0; font-size: 28px; }
          .checkmark { font-size: 48px; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="checkmark">✓</div>
            <h1>Thank You!</h1>
          </div>
          <div class="content">
            <p>Hi <strong>${data.fullName}</strong>,</p>
            <p>Thank you for reaching out to us! We have received your inquiry and appreciate your interest.</p>
            <p><strong>Details received:</strong></p>
            <ul>
              <li>Email: ${data.emailAddress}</li>
              <li>Phone: ${data.mobileNumber}</li>
              <li>Company: ${data.companyName}</li>
              <li>Service: ${data.selectedService}</li>
            </ul>
            <p>Our team will review your request and get back to you within 1-2 business days.</p>
            <p>Best regards,<br><strong>ApTaxLedger Team</strong></p>
            <div class="footer">
              <p>© 2026 ApTaxLedger Solution. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `,

  ownerNotification: (data) => `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; border-radius: 8px; }
          .header { background: #ef4444; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; padding: 12px; background: #f3f4f6; border-left: 4px solid #ef4444; border-radius: 4px; }
          .label { font-weight: 600; color: #374151; }
          .value { color: #666; margin-top: 4px; }
          .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; }
          h1 { margin: 0; font-size: 24px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📬 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p>A new inquiry has been received:</p>
            
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${data.fullName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value">${data.emailAddress}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">${data.mobileNumber}</div>
            </div>
            
            <div class="field">
              <div class="label">Company Name</div>
              <div class="value">${data.companyName}</div>
            </div>
            
            <div class="field">
              <div class="label">Selected Service</div>
              <div class="value">${data.selectedService}</div>
            </div>
            
            <div class="field">
              <div class="label">Project Details</div>
              <div class="value">${data.projectDetails || 'No details provided'}</div>
            </div>
            
            <p style="margin-top: 20px; color: #666;">Please follow up with this inquiry at your earliest convenience.</p>
            
            <div class="footer">
              <p>© 2026 ApTaxLedger Solution. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

/**
 * Mock API service to encapsulate remote data fetching
 */
export const api = {
  // Fetch services details
  getServices: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(servicesDetailed), 400)
    })
  },

  // Fetch testimonials
  getTestimonials: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(testimonials), 300)
    })
  },

  // Fetch team members
  getTeam: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(teamMembers), 300)
    })
  },

  // Submit contact forms using EmailJS (client-side)
  submitContactForm: async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to send email');
      }

      return result;
    } catch (error) {
      console.error('[Nodemailer API] Error submitting form:', error);
      throw error;
    }
  }
}
