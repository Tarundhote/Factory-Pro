function showTab(tabId, element) {
            // Remove active class from all tabs
            document.querySelectorAll('.app-top-cards li').forEach(li => {
                li.classList.remove('active');
            });
            // Add active class to clicked tab
            element.classList.add('active');

            // Hide all content sections
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            // Show the target content
            document.getElementById(tabId).classList.add('active');
        }




        function switchYear(year, element) {
            // Update Navigation
            document.querySelectorAll('#yearTabs li').forEach(li => li.classList.remove('active'));
            element.classList.add('active');

            // Scroll the active tab into view on mobile
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

            // Update Panes
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            const target = document.getElementById('pane-' + year);
            if(target) {
                target.classList.add('active');
            } else {
                // Fallback for missing content in demo
                document.getElementById('pane-1920').classList.add('active');
            }

          }


          const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 50);
});


// FSQ______________________
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {

    accordionItems.forEach(i => {
      if(i !== item){
        i.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });

});