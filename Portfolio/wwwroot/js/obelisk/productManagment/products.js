function toggleDarkMode() {

    if (document.getElementById('darkmode').checked == true) {
        document.getElementById('stylesheet').setAttribute('href', '/css/darkmode.css')
        document.getElementById('product_tabel').className = "table table-striped table-bordered table-dark"
        document.getElementById('dark_mode_txt').innerHTML = 'Light Mode'
    } else {
        document.getElementById('stylesheet').setAttribute('href', ' ')
        document.getElementById('product_tabel').className = "table table-striped table-bordered"
        document.getElementById('dark_mode_txt').innerHTML = 'Dark Mode'
    }
}
