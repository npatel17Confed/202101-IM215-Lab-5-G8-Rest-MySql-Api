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
            var rowGet = "";
            var rowDel = "";
            $(data).each(function () {
                rowGet += '<tr><td>' + this.first_name + '</td>';
                rowGet += '<td>' + this.last_name + '</td>';
                rowGet += '<td>' + this.age + '</td></tr>';
                rowDel += '<tr><td><a href="#" onclick="deleteUser(' + this.id + ')">' + this.first_name + ' ' + this.last_name + ' (' + this.id + ')</a></td></tr>';
            });
            $('#table-body-get').html(rowGet)
            $('#table-body-delete').html(rowDel);
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

function deleteUser(id) {
    $.ajax({
        type: "DELETE",
        url: '/user/' + id,
        success: function () {
            requestUsers();
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });
}