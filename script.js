// Skript pre odoslanie formulára
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zabráni opätovnému načítaniu stránky

    // Zobrazenie správy po odoslaní
    document.getElementById('successMessage').style.display = 'block';
    
    // Vymazanie formulára
    document.getElementById('contactForm').reset();
});