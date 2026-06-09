import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const data = await req.json();
        const { fullName, emailAddress, mobileNumber, companyName, selectedService, projectDetails } = data;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Enhanced Professional Email Template for User
        const userMailOptions = {
            from: `"ApTaxLedger Solution" <${process.env.SMTP_USER}>`,
            to: emailAddress,
            subject: 'Thank you for contacting ApTaxLedger Solution',
            html: `
                <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f9; padding: 40px 0; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        <div style="background: linear-gradient(135deg, #ef4444 0%, #991b1b 100%); padding: 35px 40px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 26px; letter-spacing: 1px; font-weight: 700;">WELCOME ABOARD</h1>
                        </div>
                        <div style="padding: 40px;">
                            <p style="font-size: 18px; color: #1f2937; margin-bottom: 24px;">Dear <strong>${fullName}</strong>,</p>
                            <p style="font-size: 16px; line-height: 1.7; color: #4b5563; margin-bottom: 25px;">
                                Thank you for reaching out to <strong>ApTaxLedger Solution</strong>. We've received your inquiry regarding <strong>${selectedService.replace('_', ' ')}</strong> services and we're excited to help your business grow.
                            </p>
                            <div style="background-color: #fdf2f2; border-left: 4px solid #ef4444; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
                                <p style="margin: 0; font-style: italic; color: #7f1d1d; font-size: 15px;">
                                    "Our team is already reviewing your requirements. You can expect a response from one of our solution leads within 1 business day."
                                </p>
                            </div>
                            <p style="font-size: 16px; color: #4b5563; margin-bottom: 10px;">What happens next?</p>
                            <ul style="padding-left: 20px; color: #4b5563; font-size: 15px; margin-bottom: 30px;">
                                <li style="margin-bottom: 8px;">Analysis of your project details</li>
                                <li style="margin-bottom: 8px;">Initial consultation call preparation</li>
                                <li style="margin-bottom: 8px;">Tailored solution proposal delivery</li>
                            </ul>
                            <div style="text-align: center;">
                                <a href="https://aptaxledger.com" style="display: inline-block; background-color: #ef4444; color: #ffffff; padding: 14px 30px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 15px;">Visit Our Website</a>
                            </div>
                        </div>
                        <div style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #edf2f7;">
                            <p style="margin: 0 0 10px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">ApTaxLedger Solution</p>
                            <p style="margin: 0; color: #d1d5db; font-size: 11px;">© 2026 Indore, India | New York, USA</p>
                        </div>
                    </div>
                </div>
            `,
        };

        // Enhanced Professional Email Template for Owner
        const ownerMailOptions = {
            from: `"Inquiry Hub" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            subject: `🔥 New Lead: ${fullName}`,
            html: `
                <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #0f172a; padding: 40px 0; color: #f8fafc;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 12px; overflow: hidden; border: 1px solid #334155;">
                        <div style="background-color: #ef4444; padding: 25px 40px;">
                            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">NEW INQUIRY RECEIVED</h2>
                        </div>
                        <div style="padding: 40px;">
                            <div style="margin-bottom: 35px;">
                                <h3 style="border-bottom: 1px solid #334155; padding-bottom: 10px; color: #94a3b8; font-size: 14px; text-transform: uppercase;">Sender Information</h3>
                                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; width: 120px;">Name:</td>
                                        <td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${fullName}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b;">Email:</td>
                                        <td style="padding: 8px 0; color: #3b82f6;">${emailAddress}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b;">Mobile:</td>
                                        <td style="padding: 8px 0; color: #f1f5f9;">${mobileNumber}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b;">Company:</td>
                                        <td style="padding: 8px 0; color: #f1f5f9;">${companyName}</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="margin-bottom: 35px;">
                                <h3 style="border-bottom: 1px solid #334155; padding-bottom: 10px; color: #94a3b8; font-size: 14px; text-transform: uppercase;">Service Interested</h3>
                                <p style="background-color: #0f172a; padding: 15px; border-radius: 8px; color: #ef4444; font-weight: 700; font-size: 18px; margin-top: 15px; border: 1px solid #334155;">
                                    ${selectedService.toUpperCase().replace('_', ' ')}
                                </p>
                            </div>
                            <div>
                                <h3 style="border-bottom: 1px solid #334155; padding-bottom: 10px; color: #94a3b8; font-size: 14px; text-transform: uppercase;">Project Details</h3>
                                <p style="color: #cbd5e1; line-height: 1.6; margin-top: 15px; white-space: pre-line;">${projectDetails || 'No additional details provided.'}</p>
                            </div>
                        </div>
                        <div style="background-color: #0f172a; padding: 20px; text-align: center;">
                            <p style="margin: 0; color: #475569; font-size: 11px;">System generated Inquiry Hub notification.</p>
                        </div>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(userMailOptions);
        await transporter.sendMail(ownerMailOptions);

        return new Response(JSON.stringify({ success: true, message: 'Emails sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        let errorMessage = 'Failed to send emails';
        if (error.code === 'EAUTH') {
            errorMessage = 'Authentication failed: Please check your SMTP_USER and SMTP_PASS (remember to use an App Password for Gmail).';
        }
        return new Response(JSON.stringify({ success: false, message: errorMessage, error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
