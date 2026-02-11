document.addEventListener("DOMContentLoaded", () => {
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
  
    box.appendChild(closeBtn);
    box.appendChild(popupImg);
    box.appendChild(caption);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  
    function openPopup(src, altText) {
      popupImg.src = src;
      popupImg.alt = altText || "";
      overlay.style.display = "flex";
      document.body.classList.add("popup-open");
    }
  
    function closePopup() {
      overlay.style.display = "none";
      popupImg.src = "";
      document.body.classList.remove("popup-open");
    }
  
    // ✅ Event delegation: click vào ảnh trong menuCard
    document.addEventListener("click", (e) => {
      const img = e.target.closest(".menuCard .image img");
      if (!img) return;
  
      const card = img.closest(".menuCard");
      const nameEl = card ? card.querySelector(".menuName") : null;
  
      if (nameEl) {
        // giữ i18nKey để language_switcher dịch được caption
        caption.dataset.i18nKey = nameEl.dataset.i18nKey || nameEl.innerText.trim();
        caption.innerText = nameEl.innerText;
      } else {
        caption.innerText = "";
      }
  
      openPopup(img.src, img.alt);
    });
  
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closePopup();
    });
  
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closePopup();
    });
  
    box.addEventListener("click", (e) => e.stopPropagation());
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.style.display === "flex") {
        closePopup();
      }
    });
  });
  