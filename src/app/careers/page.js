"use client"
import React from 'react'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Button from '../../components/common/Button'
import SectionHeading from '../../components/common/SectionHeading'

export default function Careers() {
    const jobs = [
        {
            id: 1,
            title: 'Offshore Accounting Specialist',
            department: 'Finance & Accounts',
            type: 'Full Time',
            location: 'Indore Office / Hybrid',
            desc: 'Seeking a detail-oriented accountant with 3+ years experience in US GAAP compliance, bookkeeping software, and payroll operations.'
        },
        {
            id: 2,
            title: 'Senior Enterprise IT Engineer',
            department: 'Infrastructure',
            type: 'Full Time',
            location: 'New York / Remote',
            desc: 'Looking for a network administrator with experience scaling enterprise WiFi, firewalls, server architecture, and active directories.'
        },
        {
            id: 3,
            title: 'React Frontend Developer',
            department: 'Technology',
            type: 'Full Time',
            location: 'Indore Office',
            desc: 'Join our product team to build high-fidelity user dashboards, premium designs, and smooth animated transitions in React.'
        }
    ]

    const handleApply = (title) => {
        alert(`Thank you for your interest! Applications for the "${title}" position are currently being accepted at: hr@example.com`)
    }

    return (
        <div className="careers-page">
            {/* Banner Section */}
            <section className="about-banner-sec animate-fade-in" style={{ height: '300px', position: 'relative' }}>
                <div className="about-banner-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <img
                        src="/assets/accounting-vacancy.jpg"
                        alt="Careers and Vacancies"
                        className="about-banner-img"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                    />
                    <div className="about-banner-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.6 }}></div>
                </div>
                <div className="container about-banner-content" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '20%' }}>
                    <h1 className="about-banner-title" style={{ color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Join Our Global Team</h1>
                    <p className="about-banner-subtitle" style={{ color: 'white', fontSize: '1.2rem' }}>
                        Explore exciting career opportunities and grow with us.
                    </p>
                </div>
            </section>

            <div style={{ padding: '60px 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <SectionHeading
                        title="Current Openings"
                        subtitle="Work With Us"
                    />

                    <div className="services-vertical-list">
                        {jobs.map((job) => (
                            <Card key={job.id} className="hover-lift animate-slide-up" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                                    <h3 style={{ fontSize: '22px', margin: '0', color: 'var(--black)' }}>{job.title}</h3>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <Badge variant="primary">{job.type}</Badge>
                                        <Badge variant="secondary">{job.location}</Badge>
                                    </div>
                                </div>

                                <span style={{ fontSize: '13px', color: 'var(--primary-red)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {job.department}
                                </span>

                                <p style={{ color: 'var(--text-grey)', fontSize: '15px', lineHeight: '1.7', margin: '0' }}>
                                    {job.desc}
                                </p>

                                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
                                    <Button variant="secondary" onClick={() => handleApply(job.title)}>
                                        APPLY NOW
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
