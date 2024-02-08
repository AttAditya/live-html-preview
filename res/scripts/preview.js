function preview_main(refresh_rate = 5000) {
    let frame = document.getElementById("preview-iframe");
    let editor = document.getElementById("code-editor");

    setInterval(() => {
        localStorage.setItem("preview", editor.value);
        frame.src = `preview.html?last_refreshed=${Date.now()}`;
        console.log(frame.src);
    }, refresh_rate);
}