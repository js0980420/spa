document.addEventListener('DOMContentLoaded', function() {
    // 初始化頁面
    initApp();
});

function initApp() {
    // 初始化導航欄滾動效果
    initHeaderScroll();
    
    // 初始化返回頂部按鈕
    initBackToTop();
    
    // 初始化評價輪播
    initTestimonialSlider();
    
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

// 評價輪播
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    
    // 隱藏所有評價，只顯示當前評價
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    // 初始顯示第一個評價
    showTestimonial(currentIndex);
    
    // 點擊圓點切換評價
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            showTestimonial(currentIndex);
        });
    });
    
    // 自動輪播
    setInterval(function() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
}

// 表單驗證
function initFormValidation() {
    const form = document.getElementById('appointment-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 獲取表單數據
            const formData = new FormData(form);
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
            } else if (!formValues.date) {
                isValid = false;
                errorMessage = '請選擇預約日期';
            } else if (!formValues.time) {
                isValid = false;
                errorMessage = '請選擇預約時間';
            }
            
            if (isValid) {
                // 模擬表單提交成功
                alert('預約成功！我們會盡快與您聯繫確認預約細節。');
                form.reset();
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

// 日期限制 (只能選擇今天之後的日期)
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        
        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;
        
        const formattedToday = yyyy + '-' + mm + '-' + dd;
        dateInput.setAttribute('min', formattedToday);
    }
});

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
