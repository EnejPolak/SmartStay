import Link from 'next/link';

export default function CategoryNotFound() {
  return (
    <main>
      <div className="fixed-background">
        <div className="circle circle-purple"></div>
        <div className="circle circle-blue"></div>
      </div>

      <div className="page-content">
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '120px 24px 80px 24px',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(25px) saturate(180%)',
              WebkitBackdropFilter: 'blur(25px) saturate(180%)',
              borderRadius: '20px',
              padding: '64px 48px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 900,
                lineHeight: 1.2,
                margin: '0 0 24px 0',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Category Not Found
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: '#737373',
                marginBottom: '32px',
                lineHeight: 1.6,
              }}
            >
              The category you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/blog"
              className="btn-primary"
              style={{
                textDecoration: 'none',
              }}
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

