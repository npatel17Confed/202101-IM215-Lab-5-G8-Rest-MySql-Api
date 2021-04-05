function createUser(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: '/user',
        data: `first_name=${$('#firstName').val()}&last_name=${$('#lastName').val()}&age=${$('#age').val()}`,
        success: function (data) {
            requestUsers();
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });
}

function requestUsers(e) {
    $.ajax({
        type: "GET",
        url: '/user',
        dataType: "json",
        success: function (data) {
            var row = "";
            $(data).each(function () {
                row += '<tr><td>' + this.first_name + '</td>';
                row += '<td>' + this.last_name + '</td>';
                row += '<td>' + this.age + '</td></tr>';
            });
            $('#table-body').html(row)
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });
}

function retrieveUser(e) {
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: '/user/' + $('#userId').val(),
        dataType: "json",
        success: function (data) {
            $('#firstName2').val(data.first_name);
            $('#lastName2').val(data.last_name);
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });
}