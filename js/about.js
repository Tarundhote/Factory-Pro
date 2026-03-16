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
// header
const header = document.getElementById('header');
    const burger = document.getElementById('burger');
    const panel = document.getElementById('mobile-panel');
    const toggles = document.querySelectorAll('.mobile-toggle');

    // Sticky Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Mobile Toggle
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        burger.classList.toggle('active');
        panel.classList.toggle('active');
        document.body.style.overflow = panel.classList.contains('active') ? 'hidden' : '';
    });

    // Mobile Dropdown Accordion
    toggles.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = btn.parentElement;
            parent.classList.toggle('open');
            const icon = btn.querySelector('span');
            icon.innerText = parent.classList.contains('open') ? "-" : "+";
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