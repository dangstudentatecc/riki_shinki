// popup_Image.js (renamed classes)
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".menuCard .image img");

    // --- Create popup DOM ---
    const overlay = document.createElement("div");
    overlay.className = "popup-layer";
    overlay.style.display = "none";

    const box = document.createElement("div");
    box.className = "popup-box";

    const closeBtn = document.createElement("button");
    closeBtn.className = "popup-close-btn";
    closeBtn.setAttribute("aria-label", "Close image");
    closeBtn.innerHTML = "&times;";

    const popupImg = document.createElement("img");
    popupImg.className = "popup-img";
    popupImg.alt = "";

    const caption = document.createElement("div");
    caption.className = "popup-caption";

    // append DOM
    box.appendChild(closeBtn);
    box.appendChild(popupImg);
    box.appendChild(caption);
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    // --- Open popup ---
    function openPopup(src, altText) {
        popupImg.src = src;
        popupImg.alt = altText || "";
        overlay.style.display = "flex";
        document.body.classList.add("popup-open");
    }

    // --- Close popup ---
    function closePopup() {
        overlay.style.display = "none";
        popupImg.src = "";
        document.body.classList.remove("popup-open");
    }

    // --- Click image to open ---
    images.forEach(img => {
        img.addEventListener("click", () => {
            const card = img.closest(".menuCard");
            const nameEl = card ? card.querySelector(".menuName") : null;

            if (nameEl) {
                caption.dataset.i18nKey = nameEl.dataset.i18nKey || nameEl.innerText.trim();
                caption.innerText = nameEl.innerText;
            }

            openPopup(img.src, img.alt);
        });
    });

    // --- Close button ---
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closePopup();
    });

    // --- Click outside to close ---
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closePopup();
    });

    // prevent overlay closing
    box.addEventListener("click", (e) => e.stopPropagation());

    // escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && overlay.style.display === "flex") {
            closePopup();
        }
    });
});
