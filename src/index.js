import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js'
import './css/style.css'
import '../node_modules/jquery/dist/jquery'
import $ from 'jquery'

$(window).scroll(function () {
    if ($(this).scrollTop() >= 700) {
        $("#navBar").addClass("noTransparrent");
    }
    else {
        $("#navBar").removeClass("noTransparrent");
    }

});
