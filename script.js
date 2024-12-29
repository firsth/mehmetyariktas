// Form gönderme işlemi
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Form verilerini konsola yazdır (gerçek uygulamada bir API'ye gönderilecek)
    console.log('Form Verileri:', {
        name: name,
        email: email,
        message: message
    });
    
    // Formu temizle
    this.reset();
    alert('Mesajınız başarıyla gönderildi!');
});

// Sayfa yüklendiğinde profil resmi yoksa varsayılan bir avatar göster
window.addEventListener('load', function() {
    const profileImg = document.getElementById('profile-img');
    profileImg.onerror = function() {
        this.src = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
    };
});

// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 