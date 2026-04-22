const stack = [];
let capacity = 0;
let demoRunning = false;

const valueInput = document.getElementById("valueInput");
const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");
const clearBtn = document.getElementById("clearBtn");
const demoO1Btn = document.getElementById("demoO1Btn");
const demoONBtn = document.getElementById("demoONBtn");

const stackContainer = document.getElementById("stackContainer");
const sizeValue = document.getElementById("sizeValue");
const capacityValue = document.getElementById("capacityValue");
const topValue = document.getElementById("topValue");
const nValue = document.getElementById("nValue");
const usageText = document.getElementById("usageText");
const capacityBar = document.getElementById("capacityBar");

const currentOperation = document.getElementById("currentOperation");
const timeComplexity = document.getElementById("timeComplexity");
const spaceComplexity = document.getElementById("spaceComplexity");
const complexityExplanation = document.getElementById("complexityExplanation");

const logBox = document.getElementById("logBox");

function renderStack() {
  stackContainer.innerHTML = "";

  stack.forEach((value, index) => {
    const div = document.createElement("div");
    div.className = "stack-item";

    if (index === stack.length - 1) {
      div.classList.add("top");
      div.textContent = `${value} ← TOP`;
    } else {
      div.textContent = value;
    }

    stackContainer.appendChild(div);
  });

  sizeValue.textContent = stack.length;
  capacityValue.textContent = capacity;
  topValue.textContent = stack.length > 0 ? stack[stack.length - 1] : "—";
  nValue.textContent = stack.length;
  usageText.textContent = `${stack.length} / ${capacity}`;

  renderCapacityBar();
}

function renderCapacityBar() {
  capacityBar.innerHTML = "";

  if (capacity === 0) return;

  for (let i = 0; i < capacity; i++) {
    const slot = document.createElement("div");
    slot.className = "capacity-slot";

    if (i < stack.length) {
      slot.classList.add("filled");
    }

    capacityBar.appendChild(slot);
  }
}

function log(message) {
  const entry = document.createElement("div");
  entry.className = "log-entry";
  entry.textContent = message;
  logBox.prepend(entry);
}

function setComplexity(operation, time, explanation) {
  currentOperation.textContent = operation;
  timeComplexity.textContent = time;
  spaceComplexity.textContent = "O(n)";
  complexityExplanation.textContent = explanation;
}

function ensureCapacityForPush() {
  if (stack.length < capacity) {
    return false;
  }

  capacity = capacity === 0 ? 2 : capacity * 2;
  return true;
}

function pushValue() {
  const value = valueInput.value.trim();

  if (value === "") {
    log("Push ignored: no value entered.");
    setComplexity(
      "push",
      "O(1)",
      "No insertion happened because the input was empty."
    );
    return;
  }

  const resized = ensureCapacityForPush();
  stack.push(value);

  if (resized) {
    log(`push("${value}") -> inserted on top after resize`);
    setComplexity(
      "push",
      "O(n) this step, amortized O(1)",
      "Capacity was full, so the internal array had to grow before inserting the new value."
    );
  } else {
    log(`push("${value}") -> inserted on top`);
    setComplexity(
      "push",
      "O(1) amortized",
      "The new value was inserted directly into already available space."
    );
  }

  valueInput.value = "";
  renderStack();
}

function popValue() {
  if (stack.length === 0) {
    log("pop() failed: stack is empty");
    setComplexity(
      "pop",
      "O(1)",
      "Pop on an empty stack is rejected. A normal pop only removes the top logical element."
    );
    return;
  }

  const removed = stack.pop();
  log(`pop() -> removed "${removed}"`);

  setComplexity(
    "pop",
    "O(1)",
    "Pop removes the top logical element only. No shifting is required."
  );

  renderStack();
}

function clearStack() {
  stack.length = 0;
  log("clear() -> stack cleared");

  setComplexity(
    "clear",
    "O(1)",
    "This simple model clears the logical content without shrinking capacity."
  );

  renderStack();
}

function resetDemoButtons() {
  demoO1Btn.classList.remove("running");
  demoONBtn.classList.remove("running");
  demoO1Btn.textContent = "Run Demo O(1)";
  demoONBtn.textContent = "Run Demo O(n)";
}

function runDemoO1() {
  if (demoRunning) return;
  demoRunning = true;

  resetDemoButtons();
  demoO1Btn.classList.add("running");
  demoO1Btn.textContent = "Running O(1)...";

  stack.length = 0;
  capacity = 0;
  renderStack();

  log("Demo O(1) started");
  log("Goal: show a push when free capacity already exists.");

  setTimeout(() => {
    capacity = 2;
    stack.push("10");
    renderStack();

    log('Preparation: stack now contains ["10"] with capacity = 2');
    setComplexity(
      "prepare",
      "—",
      "We prepared a stack with one element and one free slot. The next push will not require resizing."
    );
  }, 700);

  setTimeout(() => {
    stack.push("20");
    renderStack();

    log('Demo O(1): push("20") used existing free space');
    setComplexity(
      "push",
      "O(1) amortized",
      "The stack still had free capacity, so the new value was inserted directly at the end."
    );
  }, 1500);

  setTimeout(() => {
    log("Demo O(1) finished");
    demoRunning = false;
    resetDemoButtons();
  }, 2300);
}

function runDemoON() {
  if (demoRunning) return;
  demoRunning = true;

  resetDemoButtons();
  demoONBtn.classList.add("running");
  demoONBtn.textContent = "Running O(n)...";

  stack.length = 0;
  capacity = 0;
  renderStack();

  log("Demo O(n) started");
  log("Goal: show a push when capacity is already full.");

  setTimeout(() => {
    capacity = 2;
    stack.push("10");
    stack.push("20");
    renderStack();

    log('Preparation: stack now contains ["10", "20"] with capacity = 2');
    setComplexity(
      "prepare",
      "—",
      "The stack is full. The next push will require resizing before insertion."
    );
  }, 700);

  setTimeout(() => {
    capacity = 4;
    stack.push("30");
    renderStack();

    log('Demo O(n): push("30") triggered resize before insertion');
    setComplexity(
      "push",
      "O(n) this step, amortized O(1)",
      "Because the stack was full, a larger array had to be created and existing elements had to be copied/moved."
    );
  }, 1500);

  setTimeout(() => {
    log("Demo O(n) finished");
    demoRunning = false;
    resetDemoButtons();
  }, 2300);
}

pushBtn.addEventListener("click", pushValue);
popBtn.addEventListener("click", popValue);
clearBtn.addEventListener("click", clearStack);
demoO1Btn.addEventListener("click", runDemoO1);
demoONBtn.addEventListener("click", runDemoON);

valueInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    pushValue();
  }
});

renderStack();
setComplexity(
  "idle",
  "—",
  "The stack is waiting for input. In this module, n means the current number of stored elements."
);
log("Visualization ready");