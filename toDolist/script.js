const push_button = document.querySelector(".push");
push_button.addEventListener("click", () => {
  const input = document.querySelector("#newtask input"); 

  if (input.value.length === 0) {
    alert("Please enter a task");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${input.value}
                </span>
              <button class="delete">
    <img src="bxs-trash.svg" alt="Delete" style="width:24px; height:24px;">
</button>
            </div>
        `;

    input.value = "";
  document.querySelector("#tasks").addEventListener("click", function (e) {
    if (e.target.id === "taskname") {
        e.target.style.textDecoration = 
            e.target.style.textDecoration === "line-through" ? "none" : "line-through";
    }
});
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
      button.onclick = function () {
        this.parentElement.remove();
      };
    });
  }
});
