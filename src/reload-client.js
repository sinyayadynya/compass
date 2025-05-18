const eventSource = new EventSource("http://localhost:3000/events");

eventSource.onmessage = function (event) {
  console.log(event.data);
  location.reload();
};
