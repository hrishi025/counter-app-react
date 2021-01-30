'use strict';

var items = [];

//let count = 0

var increment = function increment(countToChange) {
    for (var index = 0; index < items.length; index++) {
        var item = items[index];
        if (item.id == countToChange.id) {
            // found the item to be deleted
            countToChange.count = countToChange.count + 1;
            break;
        }
    }

    render();
};

var decrement = function decrement(countToChange) {
    for (var index = 0; index < items.length; index++) {
        var item = items[index];
        if (item.id == countToChange.id) {
            // found the item to be deleted
            if (countToChange.count > 0) {
                countToChange.count = countToChange.count - 1;
                break;
            }
            break;
        }
    }
    render();
};

var reset = function reset(countToChange) {

    for (var index = 0; index < items.length; index++) {
        var item = items[index];
        if (item.id == countToChange.id) {
            // found the item to be deleted
            countToChange.count = 0;
            break;
        }
    }

    render();
};

var markItemComplete = function markItemComplete(itemToRemove) {
    // remove the item from items array
    // for (let index = 0; index < items.length; index++) {
    //   const item = items[index]
    //   if (item.id == itemToRemove.id) {
    //     // found the item to be deleted
    //     items.splice(index, 1)
    //     break
    //   }
    // }

    items = items.filter(function (item) {
        return item.id != itemToRemove.id;
    });
    render();
};

var addItem = function addItem(e) {
    var title = e.target.elements.itemtext.value;
    if (title != '') {
        items.push({
            id: items.length + 1,
            status: 'open',
            count: 0,
            title: title
        });
    }

    // clear the input
    e.target.elements.itemtext.value = '';
    e.preventDefault();
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: 'add-todo' },
            React.createElement(
                'form',
                { onSubmit: addItem },
                React.createElement(
                    'div',
                    { className: 'input-group mb-3' },
                    React.createElement(
                        'div',
                        { 'class': 'input-group mb-3' },
                        React.createElement(
                            'button',
                            { 'class': 'btn btn-success', type: 'submit', id: 'button-addon1' },
                            'Add Counter'
                        ),
                        React.createElement('input', { name: 'itemtext', type: 'text', 'class': 'form-control', placeholder: 'Counter Name' })
                    )
                )
            )
        ),
        items.length > 0 && React.createElement(
            'div',
            { className: 'items-list' },
            React.createElement(
                'div',
                null,
                'Counters:'
            ),
            items.map(function (item) {
                return React.createElement(
                    'div',
                    { className: 'item' },
                    React.createElement(
                        'div',
                        { className: 'input-group mb-3' },
                        React.createElement('input', {
                            readOnly: true,
                            value: item.title,
                            type: 'text',
                            className: 'form-control' }),
                        React.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'btn btn-primary',
                                onClick: function onClick() {
                                    decrement(item);
                                } },
                            React.createElement(
                                'strong',
                                null,
                                '-'
                            )
                        ),
                        React.createElement('input', {
                            disabled: true,
                            className: 'countDisplay',
                            value: item.count }),
                        React.createElement(
                            'button',
                            {
                                className: 'btn btn-primary',
                                type: 'button',
                                onClick: function onClick() {
                                    increment(item);
                                } },
                            React.createElement(
                                'strong',
                                null,
                                '+'
                            )
                        ),
                        React.createElement('span', { className: 'span' }),
                        React.createElement(
                            'button',
                            {
                                className: 'btn btn-danger',
                                type: 'button',
                                onClick: function onClick() {
                                    reset(item);
                                } },
                            'RESET'
                        ),
                        React.createElement('span', { className: 'span' }),
                        React.createElement(
                            'button',
                            {
                                onClick: function onClick() {
                                    markItemComplete(item);
                                },
                                className: 'btn btn-danger',
                                type: 'button',
                                id: 'button-addon2' },
                            'Delete'
                        )
                    )
                );
            })
        )
    );

    ReactDOM.render(template, document.getElementById('app1'));
};

render();
