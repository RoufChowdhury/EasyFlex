import Head from 'next/head';
import Link from 'next/link';

const items = [
  { title: 'High-Performance Leggings', blurb: 'Squat-proof • 4-way stretch • Breathable' },
  { title: 'Lightweight Hoodie', blurb: 'All-season layer • Soft touch • Quick dry' },
  { title: 'Athletic Shorts', blurb: 'Featherweight • Lined • Movement ready' },
  { title: 'Tapered Joggers', blurb: 'Comfy fit • Travel friendly • Easy care' },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Products — EasyFlex</title>
        <meta name="description" content="EasyFlex activewear lineup" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <header style={{
        position: 'sticky', top: 0, background: '#fff', borderBottom: '1px solid #eee',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 24px'
      }}>
        <div style={{ fontWeight: 800, fontSize: 20 }}>EasyFlex</div>
        <nav style={{ display: 'flex', gap: 20 }}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section style={{ marginTop: 40, marginBottom: 24 }}>
          <h1 style={{ fontSize: 40, marginBottom: 8 }}>Products</h1>
          <p style={{ maxWidth: 700 }}>
            Early lineup preview — optimized for affordability, comfort, and sustainable sourcing.
          </p>
        </section>

        <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {items.map((it) => (
            <article key={it.title} style={{ padding: 16, border: '1px solid #eee', borderRadius: 12 }}>
              <div style={{
                height: 140, borderRadius: 10,
                background: 'linear-gradient(135deg, var(--brand), var(--brand-dark))',
                marginBottom: 12, opacity: 0.9
              }} />
              <h3 style={{ margin: '0 0 6px' }}>{it.title}</h3>
              <p style={{ margin: 0 }}>{it.blurb}</p>
            </article>
          ))}
        </section>

        <section style={{ marginTop: 40 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>← Back to Home</Link>
        </section>

        <footer style={{ borderTop: '1px solid #eee', paddingTop: 16, marginTop: 32, fontSize: 14 }}>
          © {new Date().getFullYear()} EasyFlex
        </footer>
      </main>
    </>
  );
}
