self.addEventListener('message', (event) => {
    const options = {
        body: event.data.body,
        icon: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=100',
        vibrate: [200, 100, 200],
        requireInteraction: true
    };
    event.waitUntil(self.registration.showNotification(event.data.title, options));
});
