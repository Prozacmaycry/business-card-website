document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
  
  document.getElementById("year").textContent = new Date().getFullYear();
  