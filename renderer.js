const fs = require('fs');

function merge(values, data) {
    for (var key in values) {
        data = data.replace('{{' + key + '}}', values[key]);
    }

    return data;
}

function view(templateName, values, response) {
    // procitala template file
    var data = fs.readFileSync('./views/' + templateName + '.html').toString();

    // zamjeniti params
    if (Object.keys(values).length > 0) {
        data = merge(values, data);
    }

    // ispisati response
    response.write(data);
}

module.exports.view = view;