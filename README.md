# MYOS Salon Website

A modern, premium salon website for **MYOS - #Make Your Own Style** located in Payyoli, Calicut. Built with React, Tailwind CSS, and Framer Motion for smooth animations and a premium user experience.

## 🎨 Features

### ✨ Design & UI

- **Modern & Premium Design**: Clean, elegant design with glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for page transitions and interactions
- **Glassmorphism Cards**: Premium glass-like card designs with backdrop blur
- **Gradient Accents**: Beautiful gradient backgrounds and text effects

### 🏠 Pages

1. **Home Page**

   - Hero section with animated background
   - Animated counters (customers, services, experience, staff)
   - Services preview with hover effects
   - "Why Choose Us" section
   - Call-to-action sections

2. **Services Page**

   - Service cards with pricing and features
   - Category filtering
   - Featured services highlighting
   - Service highlights and pricing information

3. **Testimonials Page**

   - Customer reviews with star ratings
   - Auto-advancing carousel
   - Rating breakdown statistics
   - All testimonials grid

4. **Team Page**

   - Staff cards with hover bio effects
   - Team statistics
   - Company values
   - Career opportunities section

5. **Gallery Page**

   - Image grid with category filtering
   - Lightbox popup for image viewing
   - Gallery statistics
   - Smooth image transitions

6. **Contact Page**
   - Contact form with validation
   - Contact information cards
   - Map placeholder (Google Maps integration ready)
   - Quick contact methods

### 🛠 Components

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with contact info and social links
- **Book Now Button**: Sticky floating action button
- **Service Card**: Reusable service component with hover effects
- **Testimonial Card**: Customer review component with ratings
- **Staff Card**: Team member card with hover bio overlay
- **Gallery Card**: Image card with lightbox functionality

### 📱 Mobile Features

- Mobile-first responsive design
- Touch-friendly interactions
- Optimized mobile navigation
- Floating action buttons for mobile

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd myos-salon-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🎯 Customization Guide

### Colors & Theme

The website uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#fefce8',
    100: '#fef9c3',
    // ... more shades
    900: '#713f12',
  },
  dark: {
    // Dark theme colors
  },
  accent: {
    // Accent colors
  }
}
```

### Content Updates

#### Services

Edit `src/data/services.js` to update:

- Service names and descriptions
- Pricing information
- Service features
- Icons and categories

#### Team Members

Edit `src/data/team.js` to update:

- Staff information
- Experience and specialties
- Social media links
- Bio descriptions

#### Testimonials

Edit `src/data/testimonials.js` to update:

- Customer reviews
- Ratings and comments
- Customer names and roles

#### Gallery Images

Edit `src/data/gallery.js` to update:

- Image URLs
- Image categories
- Image titles and descriptions

### Contact Information

Update contact details in:

- `src/components/Footer.js`
- `src/components/BookNowButton.js`
- `src/pages/Contact.js`

### Social Media Links

Update social media URLs in:

- `src/components/Footer.js`
- `src/data/team.js`

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js
│   ├── Footer.js
│   ├── BookNowButton.js
│   ├── ServiceCard.js
│   ├── TestimonialCard.js
│   ├── StaffCard.js
│   └── GalleryCard.js
├── pages/              # Page components
│   ├── Home.js
│   ├── Services.js
│   ├── Testimonials.js
│   ├── Team.js
│   ├── Gallery.js
│   └── Contact.js
├── data/               # Data files
│   ├── services.js
│   ├── testimonials.js
│   ├── team.js
│   └── gallery.js
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎨 Styling

The project uses Tailwind CSS with custom utilities:

- **Glass Cards**: `.glass-card` class for glassmorphism effects
- **Gradient Backgrounds**: `.gradient-bg` for gradient backgrounds
- **Text Gradients**: `.text-gradient` for gradient text
- **Custom Buttons**: `.btn-primary` and `.btn-secondary` for consistent button styling
- **Hover Effects**: `.card-hover` for card hover animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Technologies Used

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Intersection Observer**: Scroll-based animations

## 📞 Contact Integration

The website includes several contact methods:

- **WhatsApp**: Direct WhatsApp chat links
- **Phone**: Click-to-call functionality
- **Email**: Mailto links
- **Contact Form**: Form with validation

## 🗺 Map Integration

To add Google Maps:

1. Get a Google Maps API key
2. Replace the placeholder in `src/pages/Contact.js`
3. Add the Google Maps JavaScript API

## 🚀 Deployment

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel

1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy with default settings

### GitHub Pages

1. Add `homepage` field to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`
4. Run `npm run deploy`

## 📝 License

This project is created for MYOS Salon. All rights reserved.

## 🤝 Support

For support or customization requests, please contact the development team.

---

**MYOS - #Make Your Own Style**  
_Premium Salon in Payyoli, Calicut_
