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

    $.ajax({
        type: "GET",
        url: '/user/' + $('#userId').val(),
        dataType: "json",
        success: function (data) {
            $('#firstName2').val(data[0].first_name);
            $('#lastName2').val(data[0].last_name);

        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });
}