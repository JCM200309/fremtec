# Fremtec - Solar Energy Platform

## Overview

Fremtec is a modern web platform for a solar energy company based in Argentina, offering photovoltaic solutions for both residential and industrial sectors. The application serves as a marketing website with an AI-powered chatbot assistant, quote request functionality, and project gallery. The platform is built with React and Vite, styled with Tailwind CSS, and integrates with Google's Gemini AI for solar energy consultation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6 for fast development and optimized production builds
- **Routing**: React Router DOM v6 for client-side navigation
- **Styling**: Tailwind CSS v4 with PostCSS, using custom design tokens for brand colors (primary teal #36aba1, secondary yellow #fbc02d)

### Component Structure
- **Pages**: Located in `/pages/` - HomePage, DomesticPage, IndustrialPage, FAQPage, PresupuestoPage (quote form), GalleryPage
- **Components**: Located in `/components/` - Reusable UI components including Navbar, Footer, ChatBot, Hero sections, and feature displays
- **Services**: Located in `/services/` - API integration layer (Gemini AI service)

### API Architecture
- **Serverless Functions**: Located in `/api/` - Vercel-compatible API routes
- **Quote Submission**: `/api/presupuesto.js` handles multipart form data with file uploads using formidable

### AI Integration
- **Chatbot**: Uses Google Gemini AI (`@google/genai`) for solar energy consultation
- **Model**: gemini-3-flash-preview with custom system instructions for Fremtec-specific responses

### Styling Approach
- Custom CSS layers in `src/index.css` for responsive typography classes
- Responsive hero sections with viewport-based sizing
- Material Symbols for iconography
- Barlow font family for consistent branding

## External Dependencies

### Third-Party Services
- **Google Gemini AI**: Powers the AI chatbot assistant for solar energy consultations
- **Resend**: Email service for sending quote request notifications (configured in API route)

### Environment Variables Required
- `GEMINI_API_KEY`: Google AI API key for chatbot functionality
- `RESEND_API_KEY`: Resend API key for email delivery
- `TO_EMAIL`: Destination email for quote submissions

### Key NPM Packages
- `@google/genai`: Google's Generative AI SDK
- `react-router-dom`: Client-side routing
- `resend`: Email API client
- `formidable`: Multipart form parsing for file uploads

### Deployment Target
- Configured for Vercel deployment (serverless API routes in `/api/`)
- Development server runs on port 5000