document.addEventListener("DOMContentLoaded", () => {
    // Dodanie klasy 'active' do obrazka kota po 2 sekundach
    setTimeout(() => {
        const catImage = document.querySelector('.cat-image');
        if (catImage) {
            catImage.classList.add('active');
        } else {
            console.error("Element '.cat-image' nie został znaleziony.");
        }
    }, 1000);

    // Obsługa kliknięcia w ikonkę zamknięcia
    const closeIcon = document.getElementById('close-icon');
    if (closeIcon) {
        closeIcon.addEventListener('click', () => {
            window.location.href = indexUrl;
        });
    } else {
        console.error("Element '#close-icon' nie został znaleziony.");
    }

    // Obsługa kliknięcia w ikonkę zamknięcia
    const logOutBtn = document.getElementById('log-out-btn');
    if (logOutBtn) {
        logOutBtn.addEventListener('click', () => {
            window.location.href = indexUrl;
        });
    } else {
         console.error("Element '#log-out-btn' nie został znaleziony.");
    }

    // Formularz logowania
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const emailError = document.getElementById("email-error");
    const loginBtn = document.getElementById("login-btn");
    const lastInput = document.getElementById("last-input");
    const secPasswordInput = document.getElementById("sec-password-input");
    const registerBtn = document.getElementById("register-btn");

    if (emailInput && lastInput && passwordInput && secPasswordInput && registerBtn) {
        registerBtn.disabled = true;
    }

    const checkForm = () => {
        const isEmailValid = emailInput.value.trim() !== '';
        const isLastValid = lastInput.value.trim() !== '';
        const isPasswordValid = passwordInput.value.trim() !== '';
        const isSecPasswordValid = secPasswordInput.value.trim() !== '';
        registerBtn.disabled = !(isEmailValid && isPasswordValid && isLastValid && isSecPasswordValid ); // Przyciski są aktywowane, jeśli wszystkie pola są poprawne
    };

    // Nasłuchiwanie na zmiany w polach formularza
    emailInput.addEventListener("input", checkForm);
    lastInput.addEventListener("input", checkForm);
    passwordInput.addEventListener("input", checkForm);
    secPasswordInput.addEventListener("input", checkForm);



    // Sprawdzenie, czy elementy formularza istnieją
    if (emailInput && passwordInput && loginBtn) {
        // Wyłącz przycisk logowania na początku
        loginBtn.disabled = true;

        // Funkcja sprawdzająca poprawność formularza
        const checkForm = () => {
            const isEmailValid = emailInput.value.trim() !== '';
            const isPasswordValid = passwordInput.value.trim() !== '';
            loginBtn.disabled = !(isEmailValid && isPasswordValid); // Przyciski są aktywowane, jeśli oba pola są poprawne
        };

        // Nasłuchiwanie na zmiany w polach formularza
        emailInput.addEventListener("input", checkForm);
        passwordInput.addEventListener("input", checkForm);

        // Funkcja walidująca adres e-mail
        const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        // Walidacja pola e-mail na zdarzeniu blur
        emailInput.addEventListener("blur", () => {
            const emailValue = emailInput.value.trim();
            if (!validateEmail(emailValue) && emailValue !== "") {
                emailError.textContent = "Niepoprawny adres e-mail";
                emailError.style.display = "block";
            } else {
                emailError.textContent = "";
                emailError.style.display = "none";
            }
        });

        // Usuwanie błędu przy focus
        emailInput.addEventListener("focus", () => {
            emailError.textContent = "";
            emailError.style.display = "none";
        });

    } else {
        console.error("Elementy formularza logowania nie zostały znalezione.");
    }
});