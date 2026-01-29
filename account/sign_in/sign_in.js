const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "" || password === "") {
        errorMessage.textContent = "아이디와 비밀번호를 모두 입력해주세요.";
    } else {
        errorMessage.textContent = "";
        alert(`로그인 시도:\n아이디: ${username}\n비밀번호: ${password}`);
        // 서버가 없으므로 여기서 알림만 보여줌
    }
});
