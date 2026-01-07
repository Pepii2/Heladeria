/**
 * Heladería Artesanal - Main JavaScript
 * Handles navigation, forms, and interactive elements
 */

// ===================================
// Navbar Scroll Effect
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('is-scrolled');
            } else {
                navbar.classList.remove('is-scrolled');
            }
        });

        // Check initial scroll position
        if (window.scrollY > 50) {
            navbar.classList.add('is-scrolled');
        }
    }
});

// ===================================
// Scroll Fade-In Animations
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-on-scroll');

    if ('IntersectionObserver' in window) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(el => fadeObserver.observe(el));
    } else {
        // Fallback for older browsers
        fadeElements.forEach(el => el.classList.add('is-visible'));
    }
});

// ===================================
// Mobile Navigation Toggle (Bulma)
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    // Bulma navbar burger toggle
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const targetElement = document.getElementById(target);

            el.classList.toggle('is-active');
            targetElement.classList.toggle('is-active');
        });
    });

    // Legacy mobile menu toggle (for pages not yet updated to Bulma)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
});

// ===================================
// Category Navigation (Products/Sabores Page)
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.category-link');

    if (categoryLinks.length === 0) return;

    // Click handler for category links
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove is-active class from all links
            categoryLinks.forEach(l => l.classList.remove('is-active'));

            // Add is-active class to clicked link
            this.classList.add('is-active');

            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = 150; // Account for sticky headers
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll-based active category highlighting
    const sections = [];
    categoryLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        const section = document.querySelector(targetId);
        if (section) {
            sections.push({ id: targetId, element: section, link: link });
        }
    });

    if (sections.length > 0) {
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY + 200; // Offset for when section is considered "active"

            sections.forEach(section => {
                const sectionTop = section.element.offsetTop;
                const sectionBottom = sectionTop + section.element.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    categoryLinks.forEach(l => l.classList.remove('is-active'));
                    section.link.classList.add('is-active');
                }
            });
        });
    }
});

// ===================================
// Contact Form Handling
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                subject: contactForm.subject.value,
                message: contactForm.message.value
            };

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            try {
                // Using Formspree (FREE service)
                // Create account at https://formspree.io and replace YOUR_FORM_ID
                const response = await fetch('https://formspree.io/f/myzqggll', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    // Success
                    formStatus.textContent = '¡Mensaje enviado exitosamente! Te responderemos pronto.';
                    formStatus.className = 'form-status is-success';
                    contactForm.reset();
                } else {
                    throw new Error('Error al enviar el formulario');
                }
            } catch (error) {
                // Error
                formStatus.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contactanos por WhatsApp al 11 5160-6666.';
                formStatus.className = 'form-status is-error';
            } finally {
                // Reset button state
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;

                // Hide status message after 8 seconds
                setTimeout(() => {
                    formStatus.className = 'form-status';
                }, 8000);
            }
        });
    }
});

// ===================================
// Scroll to Top Button (Optional)
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.setAttribute('aria-label', 'Volver arriba');
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--color-primary, #8B7355);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(scrollButton);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top when clicked
    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    scrollButton.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
    });

    scrollButton.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// ===================================
// Image Lazy Loading Enhancement
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('fade-in');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
});

// ===================================
// Smooth Scroll for All Internal Links
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just "#"
            if (targetId === '#' || targetId === '#!') {
                e.preventDefault();
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
// ===================================
// Product Data Loading (CMS Integration)
// ===================================
document.addEventListener('DOMContentLoaded', async function () {
    // Only run on products page
    const heladosGrid = document.getElementById('helados-grid');
    const postresGrid = document.getElementById('postres-grid');

    if (!heladosGrid && !postresGrid) return;

    try {
        const response = await fetch('data/products.json');
        if (!response.ok) throw new Error('Failed to load products');

        const data = await response.json();

        if (heladosGrid && data.helados) {
            renderProducts(heladosGrid, data.helados);
        }

        if (postresGrid && data.postres) {
            renderProducts(postresGrid, data.postres);
        }

    } catch (error) {
        console.error('Error loading products:', error);
        if (heladosGrid) heladosGrid.innerHTML = '<div class="notification is-danger">Error al cargar los productos. Por favor recarga la página.</div>';
        if (postresGrid) postresGrid.innerHTML = '<div class="notification is-danger">Error al cargar los postres. Por favor recarga la página.</div>';
    }
});

function renderProducts(container, products) {
    if (!products || products.length === 0) {
        container.innerHTML = '<p class="has-text-centered">No hay productos disponibles.</p>';
        return;
    }

    container.innerHTML = products.map(product => `
        <div class="product-card fade-in">
            <div class="product-image">
                <img src="${product.image}"
                     alt="${product.name}"
                     loading="lazy"
                     style="${product.imageStyle || ''}">
            </div>
            <div class="product-info">
                <h3 class="title is-5">${product.name}</h3>
                ${product.description ? `<p class="subtitle is-6">${product.description}</p>` : ''}
            </div>
        </div>
    `).join('');

    // Trigger lazy loading observer for new images
    const newImages = container.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('fade-in');
                    observer.unobserve(img);
                }
            });
        });
        newImages.forEach(img => imageObserver.observe(img));
    } else {
        newImages.forEach(img => img.classList.add('fade-in'));
    }
}

// ===================================
// Analytics (Optional)
// ===================================
/**
 * Track button clicks for analytics
 * Can be integrated with Google Analytics or similar
 */
document.addEventListener('DOMContentLoaded', function () {
    const trackableButtons = document.querySelectorAll('.btn-pedidosya, .btn-rappi, .btn-whatsapp');

    trackableButtons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonType = this.classList.contains('btn-pedidosya') ? 'PedidosYa' :
                this.classList.contains('btn-rappi') ? 'Rappi' :
                    this.classList.contains('btn-whatsapp') ? 'WhatsApp' : 'Unknown';

            // Log to console (replace with actual analytics code)
            console.log(`Button clicked: ${buttonType}`);

            // Example: Google Analytics event tracking
            // if (typeof gtag !== 'undefined') {
            //     gtag('event', 'click', {
            //         'event_category': 'Delivery',
            //         'event_label': buttonType
            //     });
            // }
        });
    });
});

// ===================================
// Mobile Flavor Card Tap Toggle
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    // Only on mobile devices
    if (window.innerWidth <= 768) {
        const flavorCards = document.querySelectorAll('.flavor-card');

        flavorCards.forEach(card => {
            card.addEventListener('click', function () {
                // Toggle active class
                this.classList.toggle('active');

                // Close other cards
                flavorCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('active');
                    }
                });
            });
        });
    }
});


// ===================================
// Navbar Scroll Effect
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});


