const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const response = await fetch("users.json");
        const users = await response.json();

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert("로그인 성공!");
            window.location.href = "index.html"; // 로그인 성공 시 이동
        } else {
            errorMessage.textContent = "아이디 또는 비밀번호가 틀렸습니다.";
        }
    } catch (err) {
        console.error("로그인 데이터 불러오기 실패:", err);
        errorMessage.textContent = "로그인 데이터를 불러올 수 없습니다.";
    }
});
