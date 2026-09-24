# Technomantra Local Code Knowledge Graph (V4.8.14)

> Structural local index. Read current source before editing. Secrets are intentionally excluded.

- Indexed source files: 22
- Structural edges: 7
- Matched end-to-end flows: 0
- Updated: 2026-09-22T09:36:38.880Z

## Routes
- ROUTE POST /api/contact -> handler @ server.js
- NODE server.js: POST /api/contact -> handler

## Dependency edges
- IMPORT api/ccavenue-response.js -> api/ccavenue-crypto.js
- IMPORT api/create-payment.js -> api/ccavenue-crypto.js
- NODE api/ccavenue-response.js -> api/ccavenue-crypto.js
- NODE api/create-payment.js -> api/ccavenue-crypto.js

## Database references
- DB server.js -> Google

## Symbols
- SYMBOL api/ccavenue-crypto.js: getAlgorithmKey, getIv, encrypt, decrypt
- SYMBOL api/ccavenue-response.js: getSiteUrl, handler
- SYMBOL api/create-payment.js: getSiteUrl, createOrderId, handler
- SYMBOL functions.php: current_year

## Safe configuration variable names
- CONFIG server.js: PORT

## UI/style selectors
- UI donation-pending.html: #valOrderId, #valTrackingId, #valStatus, .topbar, .container, .topbar-inner, .topbar-info, .topbar-item, .lang-switch, .active, .header, .header-inner, .logo, .nav
- UI index.html: #preloader, #pageProgress, #header, #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #home, #heroProgressLine, #heroSlider, #heroCopy, #heroTagText, #heroLine1, #heroLine2
- UI gallery-page.html: #header, #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #filterTabs, #searchInput, #photo-grid, #visibleCount, #galleryGrid, #contact, #lightboxModal, #lightboxClose, #lightboxPrev
- UI trustee-page.html: #preloader, #header, #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #contact, #donateModal, #closeModal, #modalTitle, .pre-bar, .pre-word, .topbar, .container
- UI about-us.html: #preloader, #header, #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #story, #momentsTrack, #momentsNext, #contact, #donateModal, #modalClose, .pre-bar, .pre-word
- UI contact-us.html: #header, #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #contactForm, #userName, #userEmail, #userPhone, #userSubject, #userMessage, #submitBtn, #formAlert, #contact
- UI contact.html: #header, #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #contactForm, #userName, #userEmail, #userPhone, #userSubject, #userMessage, #submitBtn, #formAlert, #contact
- UI donate.html: #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #alertBox, #donationForm, #amountPresets, #customAmount, #fullName, #mobileNumber, #emailAddress, #donationPurpose, #panNumber, #receiptCheckbox
- UI donation-failed.html: #valOrderId, #valReason, #valStatus, .topbar, .container, .topbar-inner, .topbar-info, .topbar-item, .lang-switch, .active, .header, .header-inner, .logo, .nav
- UI donation-success.html: #valOrderId, #valTrackingId, #valAmount, #valPurpose, #valDate, #valStatus, .topbar, .container, .topbar-inner, .topbar-info, .topbar-item, .lang-switch, .active, .header
- UI gallery.html: #header, #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #filterTabs, #searchInput, #photo-grid, #visibleCount, #galleryGrid, #contact, #lightboxModal, #lightboxClose, #lightboxPrev
- UI index.backup-before-hero.html: #header, #hamburger, #menuBackdrop, #mobileMenu, #home, #swooshGrad, #services, #svc-oldage, #svc-gauseva, #svc-hospital, #svc-street, #svc-education, #about, #news
- UI trustee.html: #preloader, #header, #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #contact, #donateModal, #closeModal, #modalTitle, .pre-bar, .pre-word, .topbar, .container
- UI vatsalya-group.html: #header, #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #how-it-works, #join, #contact, #joinModal, #closeJoinModal, .topbar, .container, .topbar-info, .topbar-right
- UI vatsalya.html: #header, #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #how-it-works, #join, #contact, #joinModal, #closeJoinModal, .topbar, .container, .topbar-info, .topbar-right
- UI vatsalyagroup.html: #header, #hamburger, #menuBackdrop, #mobileMenu, #mobileMenuCloseBtn, #how-it-works, #join, #contact, #joinModal, #closeJoinModal, .topbar, .container, .topbar-info, .topbar-right
