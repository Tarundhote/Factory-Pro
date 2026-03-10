
        const buttons = document.querySelectorAll('.nav-btn');
        const cards = document.querySelectorAll('.project-card');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
               
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

           
                const filterValue = button.getAttribute('data-filter');

                // 3. Loop through cards and show/hide
                cards.forEach(card => {
                    const cardCategory = card.getAttribute('data-cat');

                    if (filterValue === 'all' || filterValue === cardCategory) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });