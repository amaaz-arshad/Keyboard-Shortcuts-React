function Vanilla() {
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key.toLocaleLowerCase() === "c" && e.ctrlKey && !e.shiftKey) {
      alert("you pressed ctrl+c");
    }
  });
}

export default Vanilla;
