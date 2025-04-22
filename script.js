// script.js

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // Parçacık sayısı
            "density": {
                "enable": true,
                "value_area": 800 // Alan başına yoğunluk
            }
        },
        "color": {
            "value": "#ffffff" // Parçacık rengi (beyaz)
        },
        "shape": {
            "type": "circle", // Şekil (circle, edge, triangle, polygon, star, image)
        },
        "opacity": {
            "value": 0.6, // Şeffaflık
            "random": true // Rastgele şeffaflık
        },
        "size": {
            "value": 4, // Boyut
            "random": true // Rastgele boyut
        },
        "line_linked": {
            "enable": true,
            "distance": 150, // Bağlantı çizgisi mesafesi
            "color": "#ffffff", // Çizgi rengi
            "opacity": 0.4, // Çizgi şeffaflığı
            "width": 1 // Çizgi kalınlığı
        },
        "move": {
            "enable": true,
            "speed": 3, // Hareket hızı
            "direction": "none", // Hareket yönü (none, top, top-right, vs.)
            "random": true, // Rastgele yön
            "straight": false, // Düz gitmesin
            "out_mode": "out", // Ekran dışına çıkınca ne olacağı (out, bounce)
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas", // Etkileşim alanı (canvas, window)
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab" // Fare üzerine gelince ne olacağı (grab, bubble, repulse)
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Tıklayınca ne olacağı (push, remove, bubble)
            },
            "resize": true // Pencere boyutu değişince ayarla
        },
        "modes": {
            "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
            "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
            "repulse": { "distance": 100, "duration": 0.4 },
            "push": { "particles_nb": 4 }, // Tıklayınca 4 parçacık ekle/it
            "remove": { "particles_nb": 2 }
        }
    },
    "retina_detect": true // Yüksek çözünürlüklü ekranlar için
});