let self;

function isValdEscapeCharacter(input_string) {
    return input_string.match(/^[0-9a-z]+$/) != null && input_string !== '.' && input_string !== '='
}

function getEscapeCharacter(fix) {
    let escp_guess = fix.substring(9, 10)
    if (isValdEscapeCharacter(escp_guess)) {
        if (fix.indexOf('^')) {
            escp_guess = '^'
        } else if (fix.indexOf('|')) {
            escp_guess = '|'
        } else if (fix.indexOf('~')) {
            escp_guess = '~'
        } else {
            alert('Unble to determine field separator. Results Try using : \u0001,^,|,~,')
            return null;
        }
    }
    console.log('Using separator : ' + escp_guess)
    return escp_guess;
}

function generateTable(rows_to_add) {
    let $table = $('<table>');
    $table.append('<thead>').children('thead')
        .append('<tr />').children('tr').append('<th>Tag</th><th>Name</th><th>Value</th>');
    let $tbody = $table.append('<tbody />').children('tbody');

    rows_to_add.forEach(function (row) {
        $tbody.append('<tr title=\"' + row.data.desc + '\"/>').children('tr:last')
            .append("<td>" + row.key + "</td>")
            .append("<td>" + row.data.name + "</td>")
            .append("<td>" + row.val + "</td>");

    })

    $('#results_table').empty()
    $table.appendTo('#results_table');
    $table.tablesort();
}

$(function () {
    self = this;
    self.fix_fields = {};
    $.getJSON('https://cdn.jsdelivr.net/gh/noahkeen/fixit@main/js/fixFields_42.json', function (data) {
        console.log(data)
        self.fix_fields = data;
    });

    $("#parseFixButton").on("click", function (a, b, c) {
        let results_rows = []
        let raw_fix = $("#rawFix").val()
        let escape_char = getEscapeCharacter(raw_fix)
        let fields = raw_fix.split(escape_char)
        fields.forEach(function (field) {
            let field_val = field.split("=")
            let found_field = {
                key: field_val[0],
                val: field_val[1],
                data: self.fix_fields[field_val[0]]
            }
            results_rows.push(found_field);
            console.log(found_field)
        })
        generateTable(results_rows)
        console.log(escape_char)
    });

    $("#clearButton").on('click', function () {
        $('#rawFix').val('')
    });

});