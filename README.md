# Arcari Website

Responsive React + TypeScript + Vite company website based on the supplied Arcari Company Profile 2026 PDF.

## Included
- Company overview and service capabilities
- Modular kitchens, wardrobes, home décor, office furniture, door frames/flush doors, Hardware, SS handrail fabrication, and additional interior surface products
- Hardware category overview (no detailed SKU catalogue yet)
- Design-to-installation process section based on the company profile
- Project and organisation names listed in the profile
- OEM partnerships and ISO management-system certifications as described in the supplied profile
- Enquiry form routed through FormSubmit to `Arcari.india@gmail.com`
- Responsive desktop and mobile layouts
- Images extracted from the supplied company profile for use in the website

## Run locally
Install Node.js LTS, then in this folder run:

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The static build is generated in `dist/` and can be deployed to Cloudflare Pages.

## Cloudflare Pages settings
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## Enquiry form
The form uses FormSubmit (`https://formsubmit.co/Arcari.india@gmail.com`). On first use, FormSubmit may send an activation email to the receiving inbox. Complete that activation and then test delivery from the deployed website. A successful browser submission alone is not proof that the enquiry reached the inbox.

## Before launch
- Confirm that the company wants the project names, OEM relationships and certification details shown publicly, and that the details are current.
- Verify that the certification documents are current and the stated scope is correct.
- Verify the email inbox and activate FormSubmit.
- Test all links and the enquiry flow after deployment.
- Add a privacy notice if collecting customer contact details.
