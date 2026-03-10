 function switchYear(year, element) {
           
            document.querySelectorAll('#yearTabs li').forEach(li => li.classList.remove('active'));
            element.classList.add('active');

            // document.querySelectorAll('inner-manu-card').forEach(div => div.classList.remove('active'));
            // element.classList.add('active');

            
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

            // Update Panes
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            const target = document.getElementById('pane-' + year);
            if(target) {
                target.classList.add('active');
            } else {
                
                document.getElementById('pane-1920').classList.add('active');
            }

          }


          // faq

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