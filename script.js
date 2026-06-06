// ==========================================
// BIO SITE - BORRACHARIA CLAUDNEY
// Edite os links abaixo:
// ==========================================

const LINKS = {
    whatsapp: "http://wa.me/5519994572559",    // Coloque o link do WhatsApp aqui
    instagram: "https://www.instagram.com/borracharia_claudney/",   // Coloque o link do Instagram aqui
    google: "https://search.google.com/local/writereview?placeid=ChIJoaS0tKpMz5QREHUNwZLe2AQ"       // Coloque o link do Google Reviews aqui
};

// ==========================================
// Não edite abaixo
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (button.classList.contains('whatsapp')) {
                window.open(LINKS.whatsapp, '_blank');
            } else if (button.classList.contains('instagram')) {
                window.open(LINKS.instagram, '_blank');
            } else if (button.classList.contains('google')) {
                window.open(LINKS.google, '_blank');
            }
        });
    });
});