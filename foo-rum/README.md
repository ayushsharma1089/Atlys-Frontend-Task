# FooRum - Social Feed Application

A modern social media feed application built with Angular 16 and TypeScript, featuring authentication flow and interactive post management.

## Features

### Core Functionality
- **Feed Page**: Landing page with post editor and social feed
- **Authentication**: Sign In/Sign Up with dedicated routes and modal overlays
- **Post Management**: Create, view, and interact with posts
- **Responsive Design**: Modern UI with smooth animations

### Authentication Flow
- **Dual Access**: Sign in via navbar button (routes to `/auth`) or modal (on feed interaction)
- **Route-based Auth**: Dedicated `/auth` page with clean background
- **Modal Auth**: Overlay modals for quick access from feed
- **Session Management**: Persistent login state with localStorage

### Feed Interactions
- **Post Creation**: Rich text editor with publish functionality
- **Like System**: Interactive heart animation with shake effect
- **User Experience**: Hover effects and smooth transitions
- **Auth Protection**: Unauthenticated users trigger sign-in flow

## Technology Stack

- **Framework**: Angular 16
- **Language**: TypeScript
- **Styling**: SCSS with custom animations
- **State Management**: Angular Services
- **Routing**: Angular Router
- **Build Tool**: Angular CLI

## Live Demo
Try the live application: https://atlys-frontend-task-ruddy.vercel.app/
The application is deployed on Vercel and ready to use with all features fully functional.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayushsharma1089/Atlys-Frontend-Task
   cd foo-rum
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## Test Accounts

Use these credentials to test the application:

| Email | Password |
|-------|----------|
| `demo@example.com` | `password123` |
| `test@user.com` | `testpass` |

## Key Features Implementation

### Authentication
- Sign In/Sign Up functionality
- Route-based authentication (`/auth`)
- Modal-based authentication (feed interactions)
- Session persistence
- Navigation state management

### Feed Page
- Post editor with publish functionality
- Real-time post display
- Like system with animations
- User authentication checks
- Responsive design

### UI/UX Enhancements
- Heart animation on like (scale + shake)
- Smooth hover effects
- Modal transitions
- Clean, modern design
- Responsive layout

##  Animation & Interactive Effects

FooRum features a comprehensive suite of smooth animations and interactive effects that enhance user experience and provide visual feedback throughout the application.

### **Feed Loading Animations**
- **Staggered Entry Animation**: Posts slide in from left to right with a delay (150ms between each post)
- **Smooth Opacity Transitions**: Posts fade in with a subtle translateX animation (800ms ease-out)
- **Individual Post Animation**: Each post has its own entrance animation with 500ms ease-out timing

### **Interactive Post Hover Effects**
- **Elevation Animation**: Posts lift up with `translateY(-5px)` and scale up to `1.01` on hover
- **Dynamic Shadow Enhancement**: Box shadow intensifies from `0 2px 8px` to `0 8px 16px`
- **Smooth Transitions**: All hover effects use 0.2s transition timing for fluid interactions

### **Like Button Animations**
- **Heart Pop-Shake Effect**: Custom keyframe animation with 6-stage sequence:
  - Scale up to 1.1x with horizontal shake movement
  - Multi-directional shake with decreasing intensity
  - Smooth return to original size and position
- **600ms Animation Duration**: Optimized timing for satisfying user feedback
- **Visual State Changes**: Heart icon transforms from 🤍 to ❤️ with animation

### **Post Action Button Interactions**
- **Scale Transform**: All action buttons (like, comment, share) scale to 1.1x on hover
- **Smooth Transitions**: 0.2s transition timing for responsive feel
- **Visual Feedback**: Immediate response to user interactions

### **Post Editor Toolbar Animations**
- **Button Hover Effects**: All formatting buttons (B, I, U, alignment, special) have background color transitions
- **Smooth Color Changes**: Background transitions from white to `#f0f0f0` on hover
- **Interactive Feedback**: 0.2s transition timing for professional feel

### **Navigation & Authentication Animations**
- **Login Button Hover**: Background color transitions from transparent to `#f5f5f5`
- **Sign Out Button**: Multi-property transitions including background, color, and border effects
- **Modal Transitions**: Smooth overlay animations with backdrop blur effects
- **Form Input Focus**: Border color transitions and background changes on focus

### **Modal & Overlay Effects**
- **Backdrop Blur**: Semi-transparent overlay with `rgba(0, 0, 0, 0.5)` background
- **Elevated Shadows**: Modal content with `0 10px 25px` shadow for depth
- **Smooth Transitions**: All modal interactions use 0.2s timing for consistency

### **Send Button Interactions**
- **Color Transitions**: Background changes from `#111` to `#000` on hover
- **Disabled State**: Opacity reduction to 0.4 with cursor changes
- **Professional Feel**: Consistent 0.2s transition timing


## Project Structure

```
src/app/
├── components/
│   ├── auth/
│   │   ├── auth.component.ts          # Auth route component
│   │   ├── signin/                    # Sign in modal
│   │   └── signup/                    # Sign up modal
│   ├── feed/
│   │   ├── feed.component.ts          # Main feed component
│   │   └── new-post/                  # Post editor
│   ├── home/
│   │   └── home.component.ts          # Landing page
│   └── navigation/
│       └── navigation.component.ts    # Navbar
├── models/
│   ├── post.interface.ts              # Post data structure
│   ├── posts.json                     # Sample posts
│   └── test-accounts.json             # Test user accounts
├── services/
│   ├── auth.service.ts                # Authentication logic
│   └── posts.service.ts               # Post management
└── app-routing.module.ts              # Route configuration
```

## Deployment
The application is deployed on Vercel with automatic deployments from the main branch.
Live URL: https://atlys-frontend-task-ruddy.vercel.app/

### Build for Production
```bash
ng build --configuration production
```

## Design Highlights

- **Modern UI**: Clean, minimalist design with subtle shadows
- **Smooth Animations**: Heart pop-shake animation on likes
- **Responsive**: Works seamlessly on desktop and mobile
- **Accessible**: Proper focus states and keyboard navigation
- **Performance**: Optimized bundle size and lazy loading

## Development

### Available Scripts
- `ng serve` - Start development server
- `ng build` - Build for production

### Code Quality
- TypeScript for type safety
- Angular best practices
- Modular component architecture
- Clean, maintainable code structure

## Assessment Requirements Met

**Framework**: Angular with TypeScript  
 **Authentication Flow**: Complete sign in/sign up implementation  
 **Feed Interactions**: Post creation and like system  
 **UI Quality**: Modern design with animations  
 **Modularity**: Well-structured component architecture  
 **Test Accounts**: Provided demo credentials  
 **No UI Libraries**: Pure Angular/SCSS implementation  
 **Responsive Design**: Mobile-friendly layout  

