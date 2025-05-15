(() => {
  const checkoutCount = 3;
  
  const saved = localStorage.getItem("checkoutState");
  const checkouts = saved ? JSON.parse(saved) : Array.from({ length: checkoutCount }, () => []);

  function getTotalItems(queue) {
    return queue.reduce((sum, items) => sum + items, 0);
  }

  function addCustomer() {
    const input = document.getElementById("itemInput");
    const items = parseInt(input.value);
    if (!items || items < 1)
      return alert("Please enter a valid number of items");

    let minTotal = Infinity;
    let index = 0;
    checkouts.forEach((queue, i) => {
      const total = getTotalItems(queue);
      if (total < minTotal) {
        minTotal = total;
        index = i;
      }
    });

    checkouts[index].push(items);
    input.value = "";

   
    localStorage.setItem("checkoutState", JSON.stringify(checkouts));

    render(index);
  }

  function render(activeIndex = -1) {
    const container = document.getElementById("checkoutContainer");
    container.innerHTML = "";

    checkouts.forEach((queue, i) => {
      const total = getTotalItems(queue);
      const div = document.createElement("div");
      div.className = "checkout" + (i === activeIndex ? " active" : "");
      div.innerHTML = `
        <div class="counter">
          <div class="counter__name"><h2>Counter ${i + 1}</h2></div>
          <div class="stats"><i class="hgi hgi-stroke hgi-user-multiple-02"></i> ${queue.length} customers</div>
        </div>
      `;

      const ul = document.createElement("ul");
      ul.className = "queue";
      queue.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item} items`;
        ul.appendChild(li);
      });

      const totalEl = document.createElement("div");
      totalEl.className = "total";
      totalEl.textContent = `Total Items: ${total}`;

      div.appendChild(ul);
      div.appendChild(totalEl);
      container.appendChild(div);
    });
  }
  
  render();

  document.getElementById("itemInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addCustomer();
    }
  });

  window.addCustomer = addCustomer;
})();
