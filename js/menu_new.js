document.addEventListener("DOMContentLoaded", () => {
  const menuCards = document.querySelectorAll("#menuSection .menuCard");
  const filterButtons = document.querySelectorAll(".button-group .btn-wrapper"); // Nên đặt class chung cho các nút

  // Định nghĩa logic lọc bằng Object Mapping để tránh if/else rườm rà
  const filterLogic = {
    wagyu: (flag) => false, // Không cái nào bị xám
    premium: (flag) => flag === "wagyu", // Xám nếu là wagyu
    standard: (flag) => flag !== "standard", // Xám nếu không phải standard
  };

  function applyFilter(group) {
    menuCards.forEach((card) => {
      const flag = card.dataset.flag;
      // Nếu có group (đang lọc), dùng logic mapping. Nếu không (reset), mặc định bỏ gray.
      const shouldBeGray = group ? filterLogic[group](flag) : false;
      card.classList.toggle("gray", shouldBeGray);
    });
  }

  function handleButtonClick(e) {
    const clickedBtn = e.currentTarget;
    const group = clickedBtn.dataset.group; // Dùng data-group ở HTML
    const isActive = clickedBtn.classList.contains("active");

    // 1. Reset trạng thái tất cả các nút
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // 2. Nếu nút vừa bấm đã active rồi -> Tắt lọc (Reset)
    if (isActive) {
      applyFilter(null);
    } else {
      // 3. Nếu chưa active -> Bật lọc
      clickedBtn.classList.add("active");
      applyFilter(group);
    }
  }

  // Gán sự kiện tập trung
  filterButtons.forEach((btn) => btn.addEventListener("click", handleButtonClick));
});