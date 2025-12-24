function startCountdown() {
  timer = setInterval(() => {
    remain--;

    if (remain <= 0) {
      remain = 0;
      clearInterval(timer);

      // ⭐ TỰ ĐỘNG NỘP BÀI
      funcOpenModal(true);
    }

    elmTimerValue.textContent = formatTime(remain);
  }, 1000);
}


startCountdown(); // chạy ngay khi load trang