

anime({
  targets: ".dir-reverse",
  translateX: 250,
  direction: "reverse",
  easing: "easeInOutSine",
});

anime({
  targets: ".dir-alternate",
  translateX: 250,
  direction: "alternate",
  easing: "easeInOutSine",
});

ScrollReveal().reveal(".container");
ScrollReveal().reveal(".row", { delay: 1000 });
ScrollReveal().reveal(".form-control", { delay: 100 });

var updates = 0;

var insertedNode = parentNode.insertBefore(newNode, referenceNode);
