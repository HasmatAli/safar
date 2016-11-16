require('./pages-style.scss');
require('../../routes/commons/materialize.min');

export default {
    template: require('./home-page.html'),
    controller: helloWorldController
};

function helloWorldController($http, $scope) {
    'ngInject';

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "December"];
    var storedId = 'uid.hasmat@gmail.com';
    var storedpass = 123;

    $scope.login = function (id, pas) {
        if (storedId == id && storedpass == pas) {
            alert('id and password match!!!');
        }
    }
    var title = ["Login Form", "Registraion Form", "Ticket Booking", "Foget Password"];
    $scope.msg = 'Password does not match please enter correct same password';
    $scope.dateValidate = 'Return Date should not be before Departure Date!!!';
    $scope.pageTitle = title[0];
    $scope.err = true;

    $scope.firstName;
    $scope.lastName;
    $scope.emailid;
    $scope.phone;
    $scope.address;
    $scope.departureDate;
    $scope.returnDate;

    $scope.firstForm = function (fname, lname, emailid, pass, rpass, phone) {
        $scope.firstName = fname;
        $scope.lastName = lname;
        $scope.emailid = emailid;
        $scope.pass = pass;
        $scope.rpass = rpass;
        $scope.phone = phone;
    }

    $scope.finalData = function (add, ddate, rdate) {
        $scope.address = add;
        var dDate = ddate.getDate();
        var dMonth = ddate.getMonth();
        var dYear = ddate.getFullYear();
        $scope.departureDate = dDate + ' ' + monthNames[dMonth] + ' ' + dYear;

        var rDate = rdate.getDate();
        var rMonth = rdate.getMonth();
        var rYear = rdate.getFullYear();
        $scope.returnDate = rDate + ' ' + monthNames[rMonth] + ' ' + rYear;
    }

    $scope.sendMail = function () {
        var body = '<h2 style="font-family: cursive; color: #0f9d58">* * * Ticket Booking Confirm * * *</h2>';
        body += '<hr>';
        body += '<br><h3>Name:  ' + $scope.firstName + " " + $scope.lastName + '</h3>';
        body += '<br><h3>email:  ' + $scope.emailid + '</h3>';
        body += '<br><h3>Mobile:  ' + $scope.phone + '</h3>';
        body += '<br><h3>Address:  ' + $scope.address + '</h3>';
        body += '<br><h3 style="color: #0f9d58;">Departure:  ' + $scope.departureDate + '</h3>';
        body += '<br><h3 style="color: #ff0000;">Return:  ' + $scope.returnDate + '</h3>';
        $scope.message = {
            subject: 'Booking confirm',
            body: body,
            sender: 'hasmat.ali@3plearning.com',
            reciepant: $scope.emailid
        }
        $http.post('http://192.168.10.85:3333/sendMail', $scope.message).success(function (data) {
            console.log("posted successfully", data);
            alert('Email Send Successfully!!!');
        }).error(function (data) {
            console.error("error in posting");
        })
    }
    $scope.options = {
        types: ['(cities)'],
        componentRestrictions: {country: 'IN'}
    }
    $scope.wrognPass = 'password did not match try again!!!';
    $scope.passwordMatch = function (p1, p2) {
        if (p1 != p2) {
            $scope.wrognPass = 'password did not match try again!!!';
        }
    }
    $scope.printFormDetails = function () {
        window.print();
    }

    $scope.visible = true;
    $scope.text = true;
    $scope.sendForgetPassword = function () {
        $scope.visible = false;
        $scope.text = false;
    }
    window.onload = function () {
        Materialize.updateTextFields();
    };
    $scope.flag = true;
    $scope.show = true;
    $scope.rform = false;
    $scope.showContainer = function () {
        $scope.pageTitle = title[0];
        $scope.flag = false;
    }
    $scope.registration = function () {
        $scope.flag = true;
        $scope.show = false;
        $scope.rform = true;
    }
    $scope.forget = function () {
        $scope.pageTitle = title[3];
        $scope.flag = true;
        $scope.show = false;
    }
    /********Calender**************/
    $scope.dateOptions = {
        maxDate: new Date(2020, 5, 22),
        minDate: new Date()
    };
    $scope.mindate = new Date();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };
    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };
    $scope.popup2 = {
        opened: false
    };

}