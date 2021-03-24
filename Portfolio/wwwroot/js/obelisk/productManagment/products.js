$("#JumpToPage").click(function () {

    JumpToPage()
});

document.getElementById("goToPageNumber").onkeypress = function (e) {
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter') {
        JumpToPage()
        return false;
    }
}

function JumpToPage() {
    let page = document.getElementById("goToPageNumber").value;
    page = page != 0 ? page : 1;
    window.location.href = `ObeliskManagment?Skip=${(page - 1) * 5}`;
}