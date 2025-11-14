// popup_Image.js
// Namespaced classes to avoid conflicts: imgpop-*
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".menuCard .image img");

    // --- Tạo overlay popup ---
    const overlay = document.createElement("div");
    overlay.className = "imgpop-overlay";
    overlay.style.display = "none";

    const wrapper = document.createElement("div");
    wrapper.className = "imgpop-wrapper";

    const closeBtn = document.createElement("button");
    closeBtn.className = "imgpop-close";
    closeBtn.setAttribute("aria-label", "Close image");
    closeBtn.innerHTML = "&times;";

    const popupImg = document.createElement("img");
    popupImg.className = "imgpop-image";
    popupImg.alt = "";

    // 🔹 Ô nội dung sẽ được dịch theo language_switcher.js
    const popupContent = document.createElement("div");
    popupContent.className = "imgpop-content";

    // Gắn vào DOM
    wrapper.appendChild(closeBtn);
    wrapper.appendChild(popupImg);
    wrapper.appendChild(popupContent);
    overlay.appendChild(wrapper);
    document.body.appendChild(overlay);

    // --- Hàm mở popup ---
    function openPopup(src, altText) {
        popupImg.src = src;
        popupImg.alt = altText || "";
        overlay.style.display = "flex";
        document.body.classList.add("imgpop-active");
    }

    // --- Hàm đóng popup ---
    function closePopup() {
        overlay.style.display = "none";
        document.body.classList.remove("imgpop-active");
        popupImg.src = "";
    }

    // --- Sự kiện click trên từng ảnh ---
    images.forEach(img => {
        img.addEventListener("click", () => {
            const card = img.closest(".menuCard");
            const nameEl = card ? card.querySelector(".menuName") : null;

            if (nameEl) {
                // Gán key cho dịch ngôn ngữ
                popupContent.dataset.i18nKey = nameEl.dataset.i18nKey || nameEl.innerText.trim();

                // Hiện text đúng theo ngôn ngữ hiện tại
                popupContent.innerText = nameEl.innerText;
            }

            openPopup(img.src, img.alt);
        });
    });

    // --- Nút đóng ---
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closePopup();
    });

    // --- Click ra ngoài để đóng ---
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            closePopup();
        }
    });

    // --- Chặn đóng khi click trong wrapper ---
    wrapper.addEventListener("click", (e) => e.stopPropagation());

    // --- ESC để đóng ---
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && overlay.style.display === "flex") {
            closePopup();
        }
    });

    // --- Nếu người dùng đổi ngôn ngữ khi popup đang mở ---
    // language_switcher.js sẽ tự động update popupContent
});
