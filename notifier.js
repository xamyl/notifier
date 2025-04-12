function() {
  let defaultTitle = "Notification";

  const notify = (message, title = defaultTitle) => {
    if (!("Notification" in window)) {
      alert(message); // fallback
      return;
    }

    if (Notification.permission === "granted") {
      new Notification(title, { body: message });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, { body: message });
        }
      });
    }
  };

  const setTitle = (newTitle) => {
    defaultTitle = newTitle;
  };

  // request permission on page loading
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }

  window.notify = notify;
  window.setTitle = setTitle;
})();f
