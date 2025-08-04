document.getElementById('hero-search')?.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'events.html';
});

function renderEvents(eventsToRender) {
    const eventGrid = document.getElementById('eventGrid');
    eventGrid.innerHTML = '';

    if (eventsToRender.length === 0) {
        eventGrid.innerHTML = '<p>No events found.</p>';
        return;
    }

    eventsToRender.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${event.title}</h3> 
            <p>Date: ${event.date}</p> 
            <p>Location: ${event.location}</p> 
            <a href="booking.html" class="btn">Book Now</a> 
        `;
        eventGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');

    renderEvents(events);

    categoryFilter?.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        if (selectedCategory === 'all') {
            renderEvents(events);
        } else {
            const filteredEvents = events.filter(event => event.category === selectedCategory);
            renderEvents(filteredEvents);
        }
    });
});
