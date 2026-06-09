import React from 'react'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import SectionHeading from '../../components/common/SectionHeading'

export default function Resources() {
    const articles = [
        {
            id: 1,
            category: 'taxation',
            title: 'Strategic Tax Savings for Growing Startups',
            desc: 'Learn about standard corporate structures, R&D tax credits, and common compliance pitfalls to avoid during your early growth phases.',
            date: 'May 15, 2026',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop'
        },
        {
            id: 2,
            category: 'outsourcing',
            title: 'Offshore Accounting: The Ultimate Optimization Guide',
            desc: 'How scaling organizations leverage offshore bookkeepers and CPAs to reduce costs by 60% while maintaining compliance standards.',
            date: 'May 12, 2026',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop'
        },
        {
            id: 3,
            category: 'compliance',
            title: 'Demystifying the New IRS Compliance Regulations',
            desc: 'A breakdown of key tax reporting guidelines and how updated tax brackets will impact mid-sized businesses this fiscal year.',
            date: 'May 08, 2026',
            readTime: '10 min read',
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop'
        }
    ]

    return (
        <div className="resources-page" style={{ padding: '60px 0', backgroundColor: 'var(--bg-light)' }}>
            <div className="container">
                <SectionHeading
                    title="Articles & Knowledge Base"
                    subtitle="Latest Insights"
                />

                <div className="services-provide-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                    {articles.map((art) => (
                        <Card key={art.id} className="hover-lift animate-slide-up" style={{ padding: '0', overflow: 'hidden' }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={art.image}
                                    alt={art.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                    className="hover-scale"
                                />
                            </div>
                            <div style={{ padding: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                    <Badge variant="primary">{art.category}</Badge>
                                    <span style={{ fontSize: '12px', color: 'var(--text-grey)' }}>{art.date}</span>
                                </div>
                                <h3 style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>
                                    {art.title}
                                </h3>
                                <p style={{ color: 'var(--text-grey)', fontSize: '14px', lineHeight: '1.6', marginBottom: '18px' }}>
                                    {art.desc}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-grey)', paddingTop: '15px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary-red)' }}>Read Article</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-grey)' }}>{art.readTime}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
