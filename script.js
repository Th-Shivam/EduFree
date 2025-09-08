// Custom cursor disabled: keep minimal no-op bindings for safety
const cursor = document.querySelector('.custom-cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let isMoving = false;

document.addEventListener('mousemove', (e) => {
    // no-op when custom cursor is hidden
});

function animateCursor() { /* disabled */ }

// Enhanced cursor hover effects
document.addEventListener('mouseover', (e) => { /* disabled */ });

// Disable custom cursor on touch devices
window.addEventListener('touchstart', () => { /* disabled */ }, { once: true });

// Navigation with smooth transitions
function showSection(sectionName) {
    const sections = document.querySelectorAll('.section');
    const targetSection = document.getElementById(sectionName);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        setTimeout(() => section.classList.add('hidden'), 300);
    });
    
    setTimeout(() => {
        targetSection.classList.remove('hidden');
        setTimeout(() => {
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';
        }, 50);
    }, 300);
}

// Enhanced contact form with better feedback
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn');
    const originalText = btn.textContent;
    
    btn.textContent = 'Sending...';
    btn.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
    
    setTimeout(() => {
        btn.textContent = 'Message Sent! ✓';
        btn.style.background = 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            e.target.reset();
        }, 2000);
    }, 1500);
});

// Skill modal content
const skillContent = {
    dsa: {
        title: "Data Structures & Algorithms",
        concepts: [
            {
                name: "Arrays & Strings",
                description: "Fundamental data structures for storing and manipulating data",
                topics: ["Array operations", "String manipulation", "Two-pointer technique", "Sliding window"]
            },
            {
                name: "Linked Lists",
                description: "Dynamic data structure with nodes containing data and references",
                topics: ["Singly linked list", "Doubly linked list", "Circular linked list", "List operations"]
            },
            {
                name: "Stacks & Queues",
                description: "LIFO and FIFO data structures for various applications",
                topics: ["Stack operations", "Queue operations", "Priority queues", "Applications"]
            },
            {
                name: "Trees & Graphs",
                description: "Hierarchical and network data structures",
                topics: ["Binary trees", "BST", "Graph traversal", "Shortest paths"]
            },
            {
                name: "Sorting & Searching",
                description: "Algorithms for organizing and finding data",
                topics: ["Bubble sort", "Quick sort", "Merge sort", "Binary search"]
            }
        ]
    },
    uiux: {
        title: "UI/UX Design",
        concepts: [
            {
                name: "Design Principles",
                description: "Fundamental principles that guide effective design",
                topics: ["Balance", "Contrast", "Emphasis", "Proportion", "Unity"]
            },
            {
                name: "User Research",
                description: "Understanding user needs and behaviors",
                topics: ["User interviews", "Surveys", "Persona creation", "User journey mapping"]
            },
            {
                name: "Wireframing & Prototyping",
                description: "Creating blueprints and interactive models",
                topics: ["Low-fidelity wireframes", "High-fidelity prototypes", "Interactive prototypes"]
            },
            {
                name: "Visual Design",
                description: "Creating aesthetically pleasing and functional interfaces",
                topics: ["Typography", "Color theory", "Layout design", "Icon design"]
            },
            {
                name: "Usability Testing",
                description: "Testing designs with real users",
                topics: ["Test planning", "User testing sessions", "Data analysis", "Iteration"]
            }
        ]
    },
    webdev: {
        title: "Web Development",
        concepts: [
            {
                name: "HTML & CSS",
                description: "Foundation of web development - structure and styling",
                topics: ["Semantic HTML", "CSS Grid & Flexbox", "Responsive design", "CSS animations"]
            },
            {
                name: "JavaScript",
                description: "Programming language for interactive web applications",
                topics: ["ES6+ features", "DOM manipulation", "Async programming", "APIs"]
            },
            {
                name: "Frontend Frameworks",
                description: "Modern frameworks for building user interfaces",
                topics: ["React", "Vue.js", "Angular", "State management"]
            },
            {
                name: "Backend Development",
                description: "Server-side programming and databases",
                topics: ["Node.js", "Express.js", "Databases", "Authentication"]
            },
            {
                name: "DevOps & Deployment",
                description: "Deploying and maintaining web applications",
                topics: ["Version control", "CI/CD", "Hosting platforms", "Performance optimization"]
            }
        ]
    },
    cybersec: {
        title: "Cyber Security",
        concepts: [
            {
                name: "Security Fundamentals",
                description: "Basic concepts and principles of cybersecurity",
                topics: ["CIA triad", "Risk management", "Threat landscape", "Security policies"]
            },
            {
                name: "Network Security",
                description: "Protecting network infrastructure and communications",
                topics: ["Firewalls", "VPNs", "Intrusion detection", "Network monitoring"]
            },
            {
                name: "Web Application Security",
                description: "Securing web applications from common vulnerabilities",
                topics: ["OWASP Top 10", "XSS", "SQL injection", "CSRF"]
            },
            {
                name: "Cryptography",
                description: "Protecting data through encryption and secure communications",
                topics: ["Symmetric encryption", "Asymmetric encryption", "Hashing", "Digital signatures"]
            },
            {
                name: "Ethical Hacking",
                description: "Penetration testing and vulnerability assessment",
                topics: ["Reconnaissance", "Exploitation", "Post-exploitation", "Reporting"]
            }
        ]
    },
    cloud: {
        title: "Cloud Computing",
        concepts: [
            {
                name: "Cloud Fundamentals",
                description: "Understanding cloud computing concepts and service models",
                topics: ["IaaS, PaaS, SaaS", "Public, Private, Hybrid", "Cloud benefits", "Service providers"]
            },
            {
                name: "AWS Services",
                description: "Amazon Web Services core services and architecture",
                topics: ["EC2", "S3", "RDS", "Lambda", "VPC"]
            },
            {
                name: "Azure & Google Cloud",
                description: "Microsoft Azure and Google Cloud Platform services",
                topics: ["Virtual machines", "Storage services", "Database services", "Networking"]
            },
            {
                name: "DevOps in Cloud",
                description: "Implementing DevOps practices in cloud environments",
                topics: ["CI/CD pipelines", "Infrastructure as Code", "Monitoring", "Automation"]
            },
            {
                name: "Cloud Security",
                description: "Security considerations and best practices in cloud",
                topics: ["Identity management", "Data protection", "Compliance", "Security monitoring"]
            }
        ]
    },
    devops: {
        title: "DevOps",
        concepts: [
            { name: "CI/CD", description: "Automate build, test, deploy pipelines", topics: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD"] },
            { name: "Containers", description: "Package and ship apps consistently", topics: ["Docker", "Images", "Volumes", "Registries"] },
            { name: "Orchestration", description: "Run containers at scale", topics: ["Kubernetes", "Deployments", "Services", "Ingress"] },
            { name: "IaC", description: "Manage infra with code", topics: ["Terraform", "CloudFormation", "Pulumi"] }
        ]
    },
    dsml: {
        title: "Data Science & ML",
        concepts: [
            { name: "Foundations", description: "Math and stats for ML", topics: ["Probability", "Linear algebra", "Optimization"] },
            { name: "Supervised", description: "Classical ML algorithms", topics: ["Regression", "Trees", "SVM", "Ensembles"] },
            { name: "Unsupervised", description: "Find structure in data", topics: ["Clustering", "Dimensionality reduction"] },
            { name: "Pipelines", description: "Data prep and evaluation", topics: ["EDA", "Feature engineering", "Validation"] }
        ]
    },
    mobile: {
        title: "Mobile Development",
        concepts: [
            { name: "Cross‑platform", description: "Build once, run anywhere", topics: ["Flutter", "React Native", "State mgmt"] },
            { name: "Android", description: "Native Android essentials", topics: ["Kotlin", "Jetpack", "Navigation", "Lifecycle"] },
            { name: "iOS", description: "Native iOS essentials", topics: ["Swift", "SwiftUI", "Combine"] }
        ]
    },
    sysdesign: {
        title: "System Design",
        concepts: [
            { name: "Foundations", description: "Core principles and tradeoffs", topics: ["CAP", "Scalability", "Reliability", "Latency"] },
            { name: "Storage", description: "Data systems", topics: ["SQL vs NoSQL", "Caching", "Sharding", "Indexing"] },
            { name: "Messaging", description: "Async communication", topics: ["Queues", "Streams", "Pub/Sub"] },
            { name: "Observability", description: "Know what's happening", topics: ["Logs", "Metrics", "Tracing"] }
        ]
    }
};

function openSkillModal(skill) {
    const modal = document.getElementById('skillModal');
    const content = document.getElementById('modalContent');
    const skillData = skillContent[skill];
    
    let html = `<h2>${skillData.title}</h2>`;
    skillData.concepts.forEach(concept => {
        html += `
            <div class="concept-item">
                <h3>${concept.name}</h3>
                <p>${concept.description}</p>
                <div style="margin-top: 1rem;">
                    <strong>Key Topics:</strong>
                    <ul style="margin-left: 2rem; margin-top: 0.5rem;">
                        ${concept.topics.map(topic => `<li>${topic}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    
    content.innerHTML = html;
    modal.style.display = 'block';
}

function closeSkillModal() {
    document.getElementById('skillModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('skillModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Enhanced particle system (lighter)
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 6 + 3;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 7;
    
    particle.style.left = startX + 'px';
    particle.style.bottom = '-10px';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animationDuration = duration + 's';
    particle.style.opacity = Math.random() * 0.4 + 0.2;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, duration * 1000);
}

// Generate particles (throttled)
let particleTimer = setInterval(createParticle, 2200);

// Respect reduced motion
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReduced.matches) {
    clearInterval(particleTimer);
}

// Mobile menu functionality
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    navLinks.classList.remove('active');
    mobileMenu.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Prevent mobile menu close when clicking inside nav
document.querySelector('nav').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Ensure mobile menu is closed on load and on resize > 768px
window.addEventListener('load', () => {
    closeMobileMenu();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});
