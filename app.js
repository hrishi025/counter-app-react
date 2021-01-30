"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            counters: []
        };
        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "title" },
                React.createElement(
                    "h1",
                    null,
                    "COUNTER APP"
                ),
                React.createElement(
                    "p",
                    null,
                    "start counting now"
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var AcceptItemCounterNames = function (_React$Component3) {
    _inherits(AcceptItemCounterNames, _React$Component3);

    function AcceptItemCounterNames() {
        _classCallCheck(this, AcceptItemCounterNames);

        return _possibleConstructorReturn(this, (AcceptItemCounterNames.__proto__ || Object.getPrototypeOf(AcceptItemCounterNames)).apply(this, arguments));
    }

    _createClass(AcceptItemCounterNames, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "acceptCounter" },
                React.createElement(
                    "div",
                    { "class": "input-group mb-3" },
                    React.createElement(
                        "button",
                        { "class": "btn btn-success", type: "button", id: "button-addon1" },
                        "Add Counter"
                    ),
                    React.createElement("input", { type: "text", "class": "form-control", placeholder: "Counter Name" })
                )
            );
        }
    }]);

    return AcceptItemCounterNames;
}(React.Component);

var Body = function (_React$Component4) {
    _inherits(Body, _React$Component4);

    function Body(props) {
        _classCallCheck(this, Body);

        //binding methods to the class
        var _this4 = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

        _this4.increaseCount = _this4.increaseCount.bind(_this4);
        _this4.decreaseCount = _this4.decreaseCount.bind(_this4);
        _this4.resetCount = _this4.resetCount.bind(_this4);

        //create state for this component
        _this4.state = {
            count: 0
        };
        return _this4;
    }

    _createClass(Body, [{
        key: "increaseCount",
        value: function increaseCount() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: "decreaseCount",
        value: function decreaseCount() {
            if (this.state.count == 0) {
                return { count: 0 };
            }

            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: "resetCount",
        value: function resetCount() {
            this.setState(function (prevState) {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "body" },
                React.createElement(
                    "div",
                    { className: "input-group" },
                    React.createElement(
                        "div",
                        { "class": "col-md-5" },
                        React.createElement("input", { readOnly: true, type: "text", "class": "form-control col-md-6", placeholder: "{Counter Name}" })
                    ),
                    React.createElement(
                        "button",
                        {
                            type: "button",
                            className: "btn btn-primary",
                            onClick: this.decreaseCount },
                        React.createElement(
                            "strong",
                            null,
                            "-"
                        )
                    ),
                    React.createElement("input", { disabled: true, className: "countDisplay", value: this.state.count }),
                    React.createElement(
                        "button",
                        {
                            className: "btn btn-primary",
                            type: "button",
                            onClick: this.increaseCount },
                        React.createElement(
                            "strong",
                            null,
                            "+"
                        )
                    ),
                    React.createElement("span", { className: "span" }),
                    React.createElement(
                        "div",
                        { className: "col-md-1" },
                        React.createElement(
                            "button",
                            {
                                className: "btn btn-danger",
                                type: "button",
                                onClick: this.resetCount },
                            React.createElement(
                                "strong",
                                null,
                                "RESET"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Body;
}(React.Component);

var Footer = function (_React$Component5) {
    _inherits(Footer, _React$Component5);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "footer" },
                React.createElement(
                    "h6",
                    null,
                    "Developed By Hrishi025 \uD83D\uDE0D \uD83D\uDC68\u200D\uD83D\uDCBB"
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
