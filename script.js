document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");
    const filterButtons = document.querySelectorAll(".filter-btn");

    openMenu.addEventListener("click", () => {
        sidebar.classList.add("open");
    });

    closeMenu.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });

    // Optional: Add event listeners for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filterValue = button.dataset.filter;

            // Example logic for filtering items
            const items = document.querySelectorAll(".filter-item");
            items.forEach(item => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            // Highlight active filter
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});
