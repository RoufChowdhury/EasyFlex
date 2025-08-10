import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>EasyFlex Activewear</title>
        <meta name="description" content="Where flexibility meets sustainability." />
      </Head>

      <header style={{
        position: 'sticky', top: 0, background: '#fff', borderBottom: '1px solid #eee',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 24px'
      }}>
        <div style={{ fontWeight: 800, fontSize: 20 }}>EasyFlex</div>
        <nav style={{ display: 'flex', gap: 20 }}>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section style={{ marginTop: 40, marginBottom: 40 }}>
          <h1 style={{ fontSize: 48, marginBottom: 8 }}>Performance you can afford</h1>
          <p style={{ maxWidth: 640 }}>
            Sustainable, comfortable, and built for real life. EasyFlex is your cost-effective
            activewear—designed by experts in the RMG supply chain.
          </p>
          <a href="#products" style={{
            display: 'inline-block', marginTop: 16, padding: '12px 18px',
            borderRadius: 8, border: '1px solid #111', textDecoration: 'none'
          }}>
            Explore products
          </a>
        </section>

        <section id="products" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {[
            { title: 'Leggings', text: 'High-stretch, squat-proof, breathable.' },
            { title: 'Hoodies', text: 'Lightweight layers for every season.' },
            { title: 'Shorts & Joggers', text: 'Move freely, train smarter.' },
          ].map((item) => (
            <div key={item.title} style={{ padding: 16, border: '1px solid #eee', borderRadius: 12 }}>
              <h3 style={{ margin: '0 0 8px' }}>{item.title}</h3>
              <p style={{ margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </section>

        <section id="about" style={{ marginTop: 48 }}>
          <h2>About EasyFlex</h2>
          <p style={{ maxWidth: 720 }}>
            Backed by years in global RMG, we combine ethical sourcing with smart supply chains to deliver
            premium quality at an accessible price.
          </p>
        </section>

        <section id="contact" style={{ marginTop: 48, marginBottom: 56 }}>
          <h2>Contact</h2>
          <p>Want to collaborate or stock EasyFlex? Email: hello@easyflex.example</p>
        </section>

        <footer style={{ borderTop: '1px solid #eee', paddingTop: 16, marginTop: 32, fontSize: 14 }}>
          © {new Date().getFullYear()} EasyFlex
        </footer>
      </main>
    </>
  );
}
