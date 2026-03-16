const header = document.getElementById('header');
    const burger = document.getElementById('burger');
    const panel = document.getElementById('mobile-panel');
    const toggles = document.querySelectorAll('.mobile-toggle');

    // Sticky Effect

window.addEventListener("scroll", () => {
     if(panel.classList.contains("active")) return;

if(window.scrollY > 50){
header.classList.add("sticky","scrolled");
}else{
header.classList.remove("sticky","scrolled");
}

});

    // Mobile Toggle
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        burger.classList.toggle('active');
        panel.classList.toggle('active');
        // document.body.style.overflow = panel.classList.contains('active') ? 'hidden' : '';
    });

    // Mobile Dropdown Accordion
   toggles.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const parent = btn.parentElement;

    // Close all other dropdowns
    document.querySelectorAll(".has-mobile-dropdown").forEach(item => {
      if (item !== parent) {
        item.classList.remove("open");
        const icon = item.querySelector("span");
        if (icon) icon.innerText = "+";
      }
    });

    // Toggle current dropdown
    parent.classList.toggle("open");

    const icon = btn.querySelector("span");
    icon.innerText = parent.classList.contains("open") ? "-" : "+";
  });
});

    // Close on Outside Click
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) {
            panel.classList.remove('active');
            burger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });


