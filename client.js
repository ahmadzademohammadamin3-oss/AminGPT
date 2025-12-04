async function sendMsg() {
  const message = document.getElementById("msg").value;
  if (!message) return;

  // پیام کاربر
  add("شما", message);
  document.getElementById("msg").value = "";

  try {
    // ارسال پیام به سرور
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    // پاسخ واقعی هوش مصنوعی (امین)
    add("امین", data.reply);

  } catch (err) {
    add("امین", "مشکلی در اتصال به هوش مصنوعی رخ داد.");
  }
}

function add(user, text) {
  const box = document.getElementById("chat");
  const div = document.createElement("div");
  div.className = "bubble";
  div.innerHTML = `<b>${user}:</b> ${text}`;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}
