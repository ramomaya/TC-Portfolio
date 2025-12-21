<script>
  document.querySelectorAll(".role-header").forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector(".arrow");

      const isOpen = content.style.display === "block";

      content.style.display = isOpen ? "none" : "block";
      arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
    });
  });
</script>
