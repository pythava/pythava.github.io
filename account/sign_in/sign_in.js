document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    // 테스트용 계정 데이터 (JS 변수)
    const users = [
        { username: "user1", password: "1234" },
        { username: "user2", password: "abcd" },
        { username: "test", password: "test123" }
    ];

    // 이미 로그인 되어 있으면 index.html로 이동
    const currentUser = localStorage.getItem("username");
    if(currentUser){
        window.location.href = "/index.html";
        return; // 아래 코드 실행 방지
    }

    loginForm.addEventListener("submit", function(e){
        e.preventDefault(); // 폼 기본 제출 막기

        const inputUsername = document.getElementById("username").value.trim();
        const inputPassword = document.getElementById("password").value.trim();

        // 입력한 계정 확인
        const user = users.find(u => u.username === inputUsername && u.password === inputPassword);

        if(user){
            localStorage.setItem("username", inputUsername); // 로그인 상태 저장
            alert("로그인 성공!");
            window.location.href = "/index.html"; // 로그인 성공 시 이동
        } else {
            errorMessage.textContent = "아이디 또는 비밀번호가 틀렸습니다.";
        }
    });
});
