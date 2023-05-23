document.addEventListener("DOMContentLoaded", () => {
  const options = {
    actions: {
      clickDay(event, dates) {
        console.log(dates, event);
      },
    },
  };
  const calendar = new VanillaCalendar("#calendar", options);
  calendar.init();
});
