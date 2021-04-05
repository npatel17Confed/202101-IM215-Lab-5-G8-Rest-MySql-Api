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