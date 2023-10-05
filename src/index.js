import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/scss/bootstrap.scss';
import '@fortawesome/fontawesome-free/js/all.min.js'
import './css/style.css';
import '../node_modules/jquery/dist/jquery';
import $ from 'jquery';
import './sass/style.scss';

$(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
        $("#navBar").addClass("noTransparrent");
    }
    else {
        $("#navBar").removeClass("noTransparrent");
    }

});

document.querySelectorAll('.custom-btn').forEach(item => {
    item.addEventListener("click", () => {
    alert('! تريد الاشتراك بالجولة الاولي');
    })
});
document.querySelectorAll('.custom-btn').forEach(item => {
    item.addEventListener("click", () => {
    alert('! تريد الاشتراك بالجولة الثانية');
    })
});

