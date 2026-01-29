const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

// 테스트용 계정 데이터 (JS 변수)
const users = [
    { username: "user1", password: "1234" },
    { username: "user2", password: "abcd" },
    { username: "test", password: "test123" }
];

loginForm.addEventListener("submit", function(e){
    e.preventDefault(); // 폼 기본 제출 막기

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // 입력한 계정 확인
    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        alert("로그인 성공!");
        window.location.href = "/index.html"; // 로그인 성공 시 이동
        localStorage.setItem("username", username);
    } else {
        errorMessage.textContent = "아이디 또는 비밀번호가 틀렸습니다.";
    }
});
