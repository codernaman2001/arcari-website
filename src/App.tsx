import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, Menu, X, Layers3, Ruler, ShieldCheck,
  Mail, CheckCircle2, Wrench, PanelsTopLeft, Building2, Hammer,
  ChevronRight, Send, Sparkles, Factory, ClipboardCheck, PackageCheck,
} from 'lucide-react'

const EMAIL = 'Arcari.india@gmail.com'

type Service = {
  number: string
  title: string
  short: string
  description: string
  image: string
  tag: string
  details: string[]
}

const services: Service[] = [
  {
    number: '01', title: 'Modular Kitchens', tag: 'Design · Manufacturing',
    short: 'Made-to-fit kitchens balancing workflow, storage and finish.',
    description: 'Arcari’s modular kitchen solutions are planned around the space, everyday workflow and preferred finish. The company profile covers a range of layouts and storage options for different kitchen sizes.',
    image: '/images/modular-kitchen.jpg',
    details: ['Straight, parallel, L-shaped, C-shaped, G-shaped and island layouts', 'Soft-close shutters, pull-out systems and tall units', 'Acrylic, laminate, membrane and PU finishes', 'Planning for storage, work zones and practical movement'],
  },
  {
    number: '02', title: 'Wardrobes & Storage', tag: 'Storage · Organization',
    short: 'Storage designed to make better use of available space.',
    description: 'From sliding and hinged wardrobes to walk-in closets, Arcari offers configurable storage solutions designed around room dimensions, organization needs and interior style.',
    image: '/images/walk-in-wardrobe.jpg',
    details: ['Sliding and hinged wardrobes', 'Walk-in closets and loft storage', 'Modular interiors with drawers, hangers and organizers', 'Glass, mirror, wood and lacquered-panel finishes'],
  },
  {
    number: '03', title: 'Furniture & Home Décor', tag: 'Residential · Custom',
    short: 'Furniture and storage pieces for connected, considered interiors.',
    description: 'Arcari’s profile includes home décor, storage and custom furniture for residential and working environments, with options tailored to the space and intended use.',
    image: '/images/tv-unit.jpg',
    details: ['TV units, bookshelves and crockery units', 'Shoe racks, side tables, wall panels and partitions', 'Vanities, bar units and custom display units', 'Compact storage and bespoke furniture solutions'],
  },
  {
    number: '04', title: 'Office Furniture', tag: 'Workspaces · Commercial',
    short: 'Furniture and storage for functional working environments.',
    description: 'Office furniture solutions for workspaces, meeting rooms and shared environments, with layouts and configurations planned around use and available space.',
    image: '/images/office-furniture.jpg',
    details: ['Workstations, desks, cubicles and workbenches', 'Conference tables and seating', 'Filing cabinets, drawer units and modular shelves', 'Custom configurations to suit the office layout'],
  },
  {
    number: '05', title: 'Door Frames & Flush Doors', tag: 'Doors · Frames',
    short: 'Door and frame solutions for residential and commercial spaces.',
    description: 'Arcari lists door frames and flush doors among its manufacturing capabilities, supporting interior requirements across residential and commercial projects.',
    image: '/images/wood-detail.jpg',
    details: ['Door frames and flush doors', 'Options and specifications discussed against project needs', 'Coordination with the wider interior scope', 'Enquire to discuss dimensions, finish and quantity'],
  },
  {
    number: '06', title: 'Hardware', tag: 'Cabinet · Interior Hardware',
    short: 'Functional fittings and accessories for cabinetry and interiors.',
    description: 'The company profile illustrates a broad selection of furniture and kitchen hardware. The detailed item-wise catalogue can be added as a next phase; enquiries can be sent now for availability and requirements.',
    image: '/images/hardware-hinge.jpg',
    details: ['Telescopic channels and undermount drawer systems', 'Cabinet hinges, tandem systems and door closers', 'Wire baskets, wicker baskets, cutlery trays and dustbins', 'Magnet catchers, locks, sliding wheels, skirting and profiles', 'PVC legs, screws, sinks, chimneys and related fittings'],
  },
  {
    number: '07', title: 'SS Handrail Fabrication', tag: 'Stainless Steel · Fabrication',
    short: 'Fabricated stainless-steel handrail solutions for built spaces.',
    description: 'Stainless-steel handrail fabrication is part of Arcari’s stated area of work. Share the project type, approximate dimensions and finish requirements to begin a discussion.',
    image: '/images/aluminium-profiles.jpg',
    details: ['Stainless-steel handrail fabrication', 'Project-specific dimensions and requirements', 'Coordination with interior and architectural scope', 'Enquire to discuss the intended application'],
  },
  {
    number: '08', title: 'Interior Décor & Surface Solutions', tag: 'Finishes · Interior Elements',
    short: 'Additional interior elements to complete the overall space.',
    description: 'Arcari’s company profile also showcases complementary interior products that can be considered alongside its core manufacturing and hardware offerings.',
    image: '/images/living-room.jpg',
    details: ['WPC and charcoal louvers', 'Wallpaper and wooden flooring', 'Vanity and bar units', 'Wall panels and decorative storage elements'],
  },
]

const hardwareItems = [
  'Telescopic channel', 'Undermount drawer / Quadro', 'Cabinet hinge', 'Tandem (Innotech)',
  'PVC cutlery tray', 'Dustbin', 'Skirting', 'PVC leg', 'Sink', 'Chimney', 'Wire basket',
  'Wicker basket', 'Magnet catcher', 'Acrylic button', 'Cylindrical lock', 'Door closer',
  'Sliding wheel', 'Aluminium profile', 'Screw', 'L-button', 'Butt hinge', 'Aldrop',
]

const projectNames = [
  'Radisson Blu Hotel — Paschim Vihar, New Delhi',
  'Radisson Hotel — MG Road, New Delhi',
  'SAG Realtech Pvt. Ltd. — Noida',
  'Valencia Homes Pvt. Ltd. — Noida',
  'Gaursons Hi-Tech Infrastructure Pvt. Ltd. — Noida',
  'Capacite Infraprojects Ltd. — Andheri West, Maharashtra',
  'BG Shirke Construction Tech Pvt. Ltd. — New Delhi',
  'Varindera Constructions Limited — Gurugram',
  'Jaypee Infratech — Noida',
]

const processSteps = [
  { icon: Ruler, title: 'Design & planning', text: 'The profile describes in-house design support, CAD drawings, 3D visualisation, layout planning and material selection.' },
  { icon: Factory, title: 'Manufacturing', text: 'Modular production, component preparation and finish options are planned around the project brief.' },
  { icon: ClipboardCheck, title: 'Quality checks', text: 'The company profile outlines inspections for component accuracy, surface finish and structural strength before dispatch.' },
  { icon: PackageCheck, title: 'Installation & handover', text: 'On-site assembly, alignment adjustments and final finishing are described as part of the installation process.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [serviceDetail, setServiceDetail] = useState<Service | null>(null)

  const closeMenu = () => setMenuOpen(false)
  const enquireAbout = (service: string) => {
    setSelectedService(service)
    closeMenu()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Arcari home" onClick={closeMenu}>
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">ARCARI<small>INTERIORS · MANUFACTURING</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Capabilities</a>
          <a href="#products" onClick={closeMenu}>Hardware</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Enquire now <ArrowRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="Kitchen interior from the Arcari company profile" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow light"><span /> WHERE ELEGANCE LIVES</p>
            <h1>Spaces shaped by<br /><em>craft and purpose.</em></h1>
            <p className="hero-copy">Arcari brings together modular kitchens, wardrobes, furniture, doors, Hardware and stainless-steel handrail fabrication for residential and commercial projects.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#services">Explore our capabilities <ArrowDownRight size={17} /></a>
              <a className="text-link light-link" href="#about">Discover Arcari <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="hero-note"><span>ARCARI INDUSTRIES INDIA PRIVATE LIMITED</span><span>Interiors · Manufacturing · Supply</span></div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="intro-label">
            <p className="eyebrow"><span /> ABOUT ARCARI</p>
            <p className="side-note">A connected approach to interiors and manufacturing.</p>
          </div>
          <div className="intro-main">
            <h2>From the first drawing to the <em>finishing detail.</em></h2>
            <p className="body-large">Arcari’s company profile presents a portfolio of interior manufacturing and décor solutions designed to bring together function, finish and individual project needs. The work spans modular kitchens, wardrobe systems, furniture, door frames and flush doors, Hardware and SS handrail fabrication.</p>
            <p className="body-large body-small">Design planning, material selection, manufacturing, quality checks and installation coordination are described as connected parts of the project journey.</p>
            <a className="text-link" href="#process">Explore our process <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> WHAT WE DO</p><h2>Capabilities for the <em>whole space.</em></h2></div>
            <p className="section-description">Explore Arcari’s manufacturing, supply and fabrication areas. Select a capability to see its scope or start an enquiry.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.number}>
              <div className="service-image-wrap"><img src={service.image} alt={service.title} loading="lazy" /><span className="service-number">{service.number}</span></div>
              <div className="service-info">
                <p className="service-tag">{service.tag}</p><h3>{service.title}</h3><p>{service.short}</p>
                <button type="button" className="service-more" onClick={() => setServiceDetail(service)} aria-label={`Explore ${service.title}`}>Explore this capability <ArrowRight size={15} /></button>
              </div>
            </article>)}
          </div>
        </section>

        <section className="product-section section-pad" id="products">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> HARDWARE RANGE</p><h2>Small details. <em>Everyday function.</em></h2></div>
            <p className="section-description">The company profile illustrates the following hardware categories. For exact models, specifications, brands and quantities, send us an enquiry.</p>
          </div>
          <div className="hardware-layout">
            <div className="hardware-image"><img src="/images/hardware-hinge.jpg" alt="Cabinet hardware fitting shown in Arcari company profile" loading="lazy" /><div className="hardware-image-note"><Wrench size={18}/><span>Kitchen & furniture hardware</span></div></div>
            <div className="hardware-content">
              <p className="hardware-intro">Hardware categories shown in our company profile</p>
              <div className="hardware-tags">{hardwareItems.map((item) => <span key={item}>{item}</span>)}</div>
              <button className="button button-dark" onClick={() => enquireAbout('Hardware')}>Enquire about hardware <ArrowRight size={16}/></button>
            </div>
          </div>
          <div className="other-products">
            <p className="eyebrow"><span /> MORE INTERIOR PRODUCTS</p>
            <div className="other-product-list"><span>WPC / charcoal louvers</span><span>Wallpaper</span><span>Wooden flooring</span><span>TV units</span><span>Vanities</span><span>Bar units</span><span>Wall panels</span><span>Storage solutions</span></div>
          </div>
        </section>

        <section className="statement">
          <div className="statement-image" />
          <div className="statement-content"><p className="eyebrow light"><span /> OUR APPROACH</p><h2>Good work lives in the <em>details.</em></h2><p>The company profile outlines a considered workflow—from understanding the brief and planning layouts to material selection, manufacturing, inspection, installation and final adjustments.</p><a className="button button-outline" href="#process">How we work <ArrowRight size={16} /></a></div>
        </section>

        <section className="process section-pad" id="process">
          <div className="section-heading"><div><p className="eyebrow"><span /> FROM PLAN TO HANDOVER</p><h2>A connected <em>project process.</em></h2></div><p className="section-description">The stages below reflect the workflow described in Arcari’s company profile.</p></div>
          <div className="process-grid">{processSteps.map((step, index) => {
            const Icon = step.icon
            return <article className="process-card" key={step.title}><div className="process-top"><span>0{index + 1}</span><Icon size={23}/></div><h3>{step.title}</h3><p>{step.text}</p></article>
          })}</div>
          <div className="finishes-strip"><Sparkles size={20}/><div><strong>Finish options noted in the company profile</strong><p>Laminate · Veneer · PU paint · Acrylic · Membrane · Matte and glossy textures</p></div></div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-heading"><div><p className="eyebrow"><span /> PROJECT EXPERIENCE</p><h2>Work across spaces <em>and sectors.</em></h2></div><p className="section-description">The following organisations and projects are named in Arcari’s supplied company profile. This list is reproduced as profile information, not as a claim of current endorsement.</p></div>
          <div className="project-feature-grid">
            <article className="project-feature project-feature-large"><img src="/images/arcari-kitchen-hero.jpg" alt="Kitchen imagery from Arcari company profile" loading="lazy"/><div><p>INTERIOR SOLUTIONS</p><h3>Residential & commercial environments</h3></div></article>
            <article className="project-feature"><img src="/images/wardrobe.jpg" alt="Wardrobe imagery from Arcari company profile" loading="lazy"/><div><p>MADE-TO-FIT STORAGE</p><h3>Wardrobes & furniture</h3></div></article>
            <article className="project-feature"><img src="/images/office-furniture.jpg" alt="Office furniture imagery from Arcari company profile" loading="lazy"/><div><p>WORKSPACES</p><h3>Furniture & fit-outs</h3></div></article>
          </div>
          <div className="project-list-wrap"><div><p className="eyebrow"><span /> PROJECTS LISTED IN PROFILE</p><p className="project-list-note">Selected names from the company profile</p></div><ul className="project-list">{projectNames.map((name) => <li key={name}><CheckCircle2 size={15}/><span>{name}</span></li>)}</ul></div>
          <div className="upcoming-note"><Building2 size={20}/><p><strong>Upcoming project noted in the profile</strong><span>Larsen & Toubro Construction Limited</span></p></div>
        </section>

        <section className="credentials section-pad">
          <div className="credentials-heading"><p className="eyebrow"><span /> PARTNERSHIPS & SYSTEMS</p><h2>Built around quality, <em>coordination and care.</em></h2><p>The company profile lists the following OEM relationships and management-system certifications. Please contact Arcari for current certificate copies and scope details.</p></div>
          <div className="credentials-grid">
            <article className="credential-card"><div className="credential-icon"><PanelsTopLeft/></div><p className="service-tag">AUTHORIZED OEM PARTNERSHIPS LISTED</p><h3>Godrej & Boyce Mfg. Co. Ltd.</h3><p>Listed in the company profile under authorized OEM partnerships.</p></article>
            <article className="credential-card"><div className="credential-icon"><Wrench/></div><p className="service-tag">AUTHORIZED OEM PARTNERSHIPS LISTED</p><h3>Hettich India Pvt. Ltd.</h3><p>Listed in the company profile under authorized OEM partnerships.</p></article>
            <article className="credential-card"><div className="credential-icon"><ShieldCheck/></div><p className="service-tag">QUALITY MANAGEMENT</p><h3>ISO 9001:2015</h3><p>Quality Management System certification is shown in the supplied company profile.</p></article>
            <article className="credential-card"><div className="credential-icon"><Layers3/></div><p className="service-tag">ENVIRONMENTAL MANAGEMENT</p><h3>ISO 14001:2015</h3><p>Environmental Management System certification is shown in the supplied company profile.</p></article>
          </div>
        </section>

        <section className="why section-pad">
          <div><p className="eyebrow"><span /> THE ARCARI APPROACH</p><h2>Multiple capabilities.<br/><em>One conversation.</em></h2><p className="why-lead">Discuss your scope with Arcari—whether it is a kitchen, storage, furniture, doors, hardware or fabrication requirement.</p></div>
          <div className="why-points">
            <article><Layers3/><div><h3>Connected capabilities</h3><p>Interior manufacturing, Hardware and stainless-steel handrail fabrication under one company profile.</p></div></article>
            <article><Ruler/><div><h3>Design and customisation</h3><p>CAD planning, 3D visualisation and material selection are included in the workflow described in the profile.</p></div></article>
            <article><ShieldCheck/><div><h3>Quality checks</h3><p>Inspection and finishing checks are described as part of the production and dispatch process.</p></div></article>
            <article><Hammer/><div><h3>Installation coordination</h3><p>The profile includes on-site assembly, adjustments and final finishing within its delivery workflow.</p></div></article>
          </div>
        </section>

        <section className="purpose section-pad" id="purpose">
          <div className="purpose-head"><p className="eyebrow"><span /> OUR MISSION & VISION</p><h2>Useful spaces.<br/><em>Thoughtfully made.</em></h2></div>
          <div className="purpose-grid">
            <article><span>01</span><h3>Mission</h3><p>To transform living and working environments through innovative, high-quality modular solutions that enrich everyday life.</p></article>
            <article><span>02</span><h3>Vision</h3><p>To become a trusted and admired name in home interiors through considered design, responsible practices and customer-focused service.</p></article>
            <article><span>03</span><h3>Responsible practices</h3><p>The company profile describes a focus on responsible sourcing, efficient resource use, reducing environmental impact and responsible supply-chain management.</p></article>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-copy"><p className="eyebrow light"><span /> GET IN TOUCH</p><h2>Tell us what<br/>you have <em>in mind.</em></h2><p>Share the type of work, project requirements and quantities. The Arcari team can use your enquiry to understand the next steps.</p><a className="contact-detail" href={`mailto:${EMAIL}`}><Mail size={17}/><span>{EMAIL}</span></a><p className="contact-note">Email is the current contact channel. Address and phone details have been left off the website.</p></div>
          <form className="contact-form" action={`https://formsubmit.co/${EMAIL}`} method="POST">
            <input type="hidden" name="_subject" value="New Enquiry — Arcari Website"/>
            <input type="hidden" name="_captcha" value="true"/>
            <input type="hidden" name="_template" value="table"/>
            <p className="form-heading">Project enquiry <span>LET’S BEGIN</span></p>
            <label>Your name<input name="name" required placeholder="Full name" autoComplete="name"/></label>
            <div className="form-row"><label>Phone number<input name="phone" type="tel" required placeholder="Your phone number" autoComplete="tel"/></label><label>Email address<input name="email" type="email" placeholder="you@company.com" autoComplete="email"/></label></div>
            <label>What can we help with?<select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.number} value={service.title}>{service.title}</option>)}<option value="Multiple services / Other">Multiple services / Other</option></select></label>
            <label>Tell us about your requirement<textarea name="message" rows={4} placeholder="Product or service, approximate quantity, dimensions and project timeline..." required/></label>
            <button className="button button-dark" type="submit">Send enquiry <Send size={15}/></button>
            <p className="form-footnote">Your information will be sent to Arcari by email to respond to your enquiry. FormSubmit email activation may be required the first time.</p>
          </form>
        </section>
      </main>

      {serviceDetail && <div className="service-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setServiceDetail(null) }}>
        <section className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
          <button className="service-modal-close" type="button" aria-label="Close service details" onClick={() => setServiceDetail(null)}><X size={20}/></button>
          <img className="service-modal-image" src={serviceDetail.image} alt={serviceDetail.title}/>
          <div className="service-modal-content"><p className="eyebrow"><span/> {serviceDetail.tag}</p><h2 id="service-modal-title">{serviceDetail.title}</h2><p className="service-modal-description">{serviceDetail.description}</p><h3>What this can include</h3><ul>{serviceDetail.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="service-modal-actions"><button className="button button-dark" type="button" onClick={() => { const title = serviceDetail.title; setServiceDetail(null); enquireAbout(title) }}>Enquire about this service <ArrowRight size={16}/></button><button className="service-modal-secondary" type="button" onClick={() => setServiceDetail(null)}>Close details</button></div></div>
        </section>
      </div>}

      <footer className="footer">
        <a href="#home" className="brand footer-brand"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ARCARI<small>INTERIORS · MANUFACTURING</small></span></a>
        <div className="footer-main"><p>Where elegance lives.</p><a href={`mailto:${EMAIL}`}><Mail size={15}/>{EMAIL}</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Arcari Industries India Private Limited.</span><span>Interiors · Manufacturing · Supply</span><a href="#home">Back to top ↑</a></div>
      </footer>
      <a className="email-float" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Enquiry — Arcari Website')}`} aria-label="Email Arcari"><Mail size={20}/></a>
    </>
  )
}

export default App
