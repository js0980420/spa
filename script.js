document.addEventListener('DOMContentLoaded', function() {
    // 初始化頁面
    initApp();
});

function initApp() {
    // 初始化導航欄滾動效果
    initHeaderScroll();
    
    // 初始化返回頂部按鈕
    initBackToTop();
    
    // 初始化表單驗證
    initFormValidation();
    
    // 初始化平滑滾動
    initSmoothScroll();
    
    // 初始化動畫效果
    initAnimations();
}

// 導航欄滾動效果
function initHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
}

// 返回頂部按鈕
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 表單驗證
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 獲取表單數據
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // 簡單驗證
            let isValid = true;
            let errorMessage = '';
            
            if (!formValues.name.trim()) {
                isValid = false;
                errorMessage = '請輸入您的姓名';
            } else if (!formValues.phone.trim()) {
                isValid = false;
                errorMessage = '請輸入您的電話號碼';
            } else if (!formValues.service) {
                isValid = false;
                errorMessage = '請選擇服務項目';
            }
            
            if (isValid) {
                // 模擬表單提交成功
                alert('感謝您的諮詢！我會盡快與您聯繫。');
                contactForm.reset();
            } else {
                alert(errorMessage);
            }
        });
    }
}

// 平滑滾動
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果是返回頂部按鈕，已經有處理了
            if (this.id === 'backToTop') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 動畫效果
function initAnimations() {
    // 監聽滾動事件，為進入視窗的元素添加動畫
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 初始化所有區塊的樣式
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.classList.contains('hero')) return; // 不對 hero 區塊應用此效果
        
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s ease';
    });
    
    // 頁面載入時執行一次
    animateOnScroll();
    
    // 滾動時執行
    window.addEventListener('scroll', animateOnScroll);
}

// 服務項目懸停效果
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
    });
});

// 關於我區塊動畫效果
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const aboutImage = aboutSection.querySelector('.about-image');
        const aboutText = aboutSection.querySelector('.about-text');
        
        // 初始設置
        aboutImage.style.opacity = '0';
        aboutImage.style.transform = 'translateX(-20px)';
        aboutImage.style.transition = 'all 0.8s ease';
        
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateX(20px)';
        aboutText.style.transition = 'all 0.8s ease 0.3s';
        
        // 監聽滾動事件
        window.addEventListener('scroll', function() {
            const sectionTop = aboutSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                aboutImage.style.opacity = '1';
                aboutImage.style.transform = 'translateX(0)';
                
                aboutText.style.opacity = '1';
                aboutText.style.transform = 'translateX(0)';
            }
        });
        
        // 頁面載入時檢查一次
        if (aboutSection.getBoundingClientRect().top < window.innerHeight * 0.75) {
            aboutImage.style.opacity = '1';
            aboutImage.style.transform = 'translateX(0)';
            
            aboutText.style.opacity = '1';
            aboutText.style.transform = 'translateX(0)';
        }
    }
});

// 預約流程動畫效果
document.addEventListener('DOMContentLoaded', function() {
    const bookingSteps = document.querySelectorAll('.booking-step');
    
    bookingSteps.forEach((step, index) => {
        // 初始設置
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = `all 0.6s ease ${index * 0.2}s`;
        
        // 監聽滾動事件
        window.addEventListener('scroll', function() {
            const stepTop = step.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (stepTop < windowHeight * 0.8) {
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
            }
        });
        
        // 頁面載入時檢查一次
        if (step.getBoundingClientRect().top < window.innerHeight * 0.8) {
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
        }
    });
});
